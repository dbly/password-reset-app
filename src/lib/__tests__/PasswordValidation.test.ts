import validatePassword from "../PasswordValidation";
import {describe, expect, test} from "@jest/globals";

describe('Password validation tests.', () => {

    test('_12345678) to be valid.', () => {
        expect(validatePassword("_12345678)")).toBe(true);
    });

    test('=-)(*&^%$#@!9 to be valid.', () => {
        expect(validatePassword("=-)(*&^%$#@!9")).toBe(true);
    });

    test('1password!! to be valid', () => {
        expect(validatePassword("1password!!")).toBe(true);
    });

    test('Password without any special characters to be invalid.', () => {
        expect(validatePassword("abc123456")).toBe(false);
    });

    test('Password with single special character to be invalid.', () => {
        expect(validatePassword("abc123$456")).toBe(false);
    });

    test('Password without numbers to be invalid.', () => {
        expect(validatePassword("@abc#kYeFA")).toBe(false);
    });

    test('Password consisting of 15 letters is invalid.', () => {
        expect(validatePassword("abcdefghijklmno")).toBe(false);
    })

    test('Password consisting of 16 letters is valid.', () => {
        expect(validatePassword("abcdefghijklmnop")).toBe(true);
    })

    test('Password consisting of 15 numbers is invalid.', () => {
        expect(validatePassword("012345678901234")).toBe(false);
    })

    test('Password consisting of 16 numbers is valid.', () => {
        expect(validatePassword("0123456789012345")).toBe(true);
    })

});