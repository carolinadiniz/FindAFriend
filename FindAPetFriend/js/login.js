const min_password = 8
const min_email = 4
const data_db = [{'kaworii':'123123123'},{'carolina':'111222333'}]

document.getElementById('button-submit').addEventListener('click', submit_login)

function submit_login() {
    email = String((document.querySelector('input.email')).value).toLowerCase()
    password = String((document.querySelector('input[type="password"]')).value)

    if (email.length <= 4) {
        window.alert('Email / Usuário deve conter ao menos 4 caracteres.')
    }
    if (password.length < 8) {
        window.alert('Senha deve conter ao menos 8 caracteres.')
    }

    data_db.forEach(account => {
        if (Object.keys(account).includes(email) == true) {
            if (account[`${email}`].includes(password) == true) {
                window.location.href = 'index.html'
            }
        }
    });


}

