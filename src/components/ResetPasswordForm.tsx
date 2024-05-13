'use client'

import {ChangeEvent, FormEvent, useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import validatePassword from "../lib/PasswordValidation"

export default function ResetPasswordForm() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const isPasswordValid = useMemo(() => {
        const isValid = validatePassword(newPassword);

        if (!isValid) {
            setErrorMessage("Password must contain at least 8 characters, including at least one number and at least two special characters or be longer than 15 characters with no restriction.");
        } else if (newPassword !== repeatPassword) {
            setErrorMessage("The two passwords need to match.");
        } else {
            setErrorMessage("");
            return true;
        }
        return false;
    }, [repeatPassword, newPassword]);

    const submitPassword = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postPasswordChangeRequest().then(((jsonData: JSON) => {
            router.push("/success");
        }));
    };

    const postPasswordChangeRequest = async function (): Promise<JSON> {
        const request = fetch('/api/password-change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password: newPassword}),
        });

        return request.then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                setErrorMessage(`${response.statusText}`);
            }
        }).catch((error) => { setErrorMessage(`Server error: ${error.statusText}`); }
        ).then();
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setNewPassword(target.value);
    }

    const handleRepeatPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setRepeatPassword(target.value);
    }

    return (
        <>
            <form onSubmit={submitPassword}>
                <div id={"section-header-div"}>
                    <h1 className={"text-4xl font-bold"}>Reset your Password</h1>
                </div>
                <div className="flex flex-col mt-10">
                    <h2 className={"font-semibold text-neutral-700"}>Your new password</h2>
                    <div id={"content-div flex-row"}>
                        <div id={"new-password-input-section"} className={"mt-2"}>
                            <input id={"new-password-input"} className={"sm:min-w-72 p-1 rounded border-solid border-2 border-neutral-400"} type={"password"} name={"password"}
                                   data-testid={"new-password-input"}
                                   alt={"enter your new password"}
                                   value={newPassword}
                                   onChange={handlePasswordChange}
                            />
                        </div>
                        <h2 className={"mt-6 font-semibold text-neutral-700"}>Repeat your new password</h2>
                        <div id={"repeat-password-input-section"} className={"mt-2"}>
                            <input id={"repeat-password-input"} className={"sm:min-w-72 p-1 rounded border-solid border-2 border-neutral-400"} type={"password"} name={"password"}
                                   data-testid={"repeat-password-input"}
                                   alt={"repeat your password"}
                                   value={repeatPassword}
                                   onChange={handleRepeatPasswordChange}
                            />
                        </div>
                        <div id={"reset-button-section"} className={"mt-6 max-w-72"}>
                            <button
                                id={"reset-password-button"}
                                data-testid={"reset-password-button"}
                                className={"text-white font-bold py-2 px-4 rounded " + (isPasswordValid ? "bg-red-500 hover:bg-red-700" : "text-slate-500 bg-slate-300")}
                                type={"submit"}
                                disabled={!isPasswordValid}
                            >
                                Reset password
                            </button>
                            {errorMessage && (<p className={"mt-8 text-red-warning max-w-prose"} data-testid={"error-message"}>{errorMessage}</p>)}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
