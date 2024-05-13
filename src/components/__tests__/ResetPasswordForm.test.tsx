import {describe, it, expect, jest} from "@jest/globals";
import ResetPasswordForm from "../ResetPasswordForm";
import {userEvent} from '@testing-library/user-event';
import {render, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import {useRouter} from "next/navigation";

// Mock useRouter:
jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));


describe('<ResetPasswordForm />', () => {
    it('Can render form initially.', () => {
        const {getByTestId} = render(<ResetPasswordForm/>);

        expect(getByTestId('error-message')).toBeVisible();
        expect(getByTestId('new-password-input')).toBeVisible();
        expect(getByTestId('repeat-password-input')).toBeVisible();
        expect(getByTestId('reset-password-button')).not.toBeEnabled();


        expect(getByTestId('error-message')).toBeVisible();
        expect(getByTestId('error-message')).toHaveTextContent("Password must contain at least 8 characters, including at least one number and at least two special characters or be longer than 15 characters with no restriction.");
    });

    it('Can render passwords dont match error.', async () => {
        const {getByTestId} = render(<ResetPasswordForm/>);

        expect(getByTestId('error-message')).toBeVisible();
        expect(getByTestId('new-password-input')).toBeVisible();
        expect(getByTestId('repeat-password-input')).toBeVisible();
        expect(getByTestId('reset-password-button')).not.toBeEnabled();

        await userEvent.type(getByTestId('new-password-input'), "some123@#RandomPassword");
        await userEvent.type(getByTestId('repeat-password-input'), "some123@#Random");

        expect(getByTestId('error-message')).toBeVisible();
        expect(getByTestId('error-message')).toHaveTextContent("The two passwords need to match.");
    });

    it('Can reset password.', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({}),
            })
        );

        // new mocking function for push method
        const pushMock = jest.fn()

        useRouter.mockReturnValue({
            push: pushMock,
        })

        const {getByTestId} = render(<ResetPasswordForm/>);

        await userEvent.type(getByTestId('new-password-input'), "some123@#RandomPassword");
        await userEvent.type(getByTestId('repeat-password-input'), "some123@#RandomPassword");

        await waitFor(async () => {
            expect(getByTestId('reset-password-button')).toBeEnabled();

            await userEvent.click(getByTestId('reset-password-button'));

            expect(pushMock).toBeCalledWith("/success");
        });

    });
});