
// (?=(?:.*\d)+) -> match at least one number following any character
// (?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){2,}) -> match special characters at least twice
// ([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{8,}) -> match at least 8 legal characters
const regexpForValidPasswordLessThanFifteenCharacters = /^(?=(?:.*\d)+)(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){2,})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{8,})$/;

export default function validatePassword(password: string): boolean {
    return regexpForValidPasswordLessThanFifteenCharacters.test(password) || password.length > 15;
}
