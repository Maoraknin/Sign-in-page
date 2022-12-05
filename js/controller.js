'use strict'





function onLogIn(ev) {
    ev.preventDefault()
    const elUserName = document.querySelector('input[name="user-name"]')
    const elPassword = document.querySelector('input[name="password"]')
    const userName = elUserName.value
    const password = elPassword.value
    if (!userName || !password) return
    const user = doLogIn(userName, password)
    elUserName.value = ''
    elPassword.value = ''
    if (!user) return
    renderSite(userName)
    const elH1 = document.querySelector('h1')
    elH1.innerText = 'Hello ' + userName
    updateSignInAndTime(userName)
    if (isUserAdmin(userName)) {
        const elA = document.querySelector('a')
        elA.classList.remove('hidden')
    }


}



function onLogOut() {
    updateSignOutAndTime()
    const elA = document.querySelector('a')
    elA.classList.add('hidden')
    const elH1 = document.querySelector('h1')
    elH1.innerText = 'Sign In!'
    renderSite()
}

function renderSite(userName) {
    const elForm = document.querySelector('form')
    elForm.classList.toggle('hidden')
    const elLogOutBtn = document.querySelector('.log-out')
    elLogOutBtn.classList.toggle('hidden')
    const elImg = document.querySelector('img')
    elImg.classList.toggle('hidden')

}