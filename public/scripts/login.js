let userData = [
    {
        "id": "admin",
        "password": "12@34Bomboniere",
    },
    {
        "id": "user",
        "password": "12@34Bomboniere",
    },
]

const userInput = document.querySelector('.user');
const passwordInput = document.querySelector('.password');
const loginButton = document.querySelector('#btnlogin')

function setRedirect() {
    location.assign('/redirect')
}

function handleIncorrectInput() {
    alert("Dados Incorretos, tente novamente")
}

function getUserInfo(value) {
    return value.id == userInput.value && value.password == passwordInput.value;
}


loginButton.onclick = (check) => {
    let userInfo = userData.filter(getUserInfo)
    check = userInfo.length == 1 ? setRedirect() : handleIncorrectInput();
}