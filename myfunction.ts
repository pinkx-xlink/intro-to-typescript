function addTwo(num: number) {
    return num + 2
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);

getUpper('abcd');

signUpUser('Shy', 'shy@email.com', false);
loginUser('w', 'a@email.com');

export {}