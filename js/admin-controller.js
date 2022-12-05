'use strict'

function onAdminInit() {
    const isNotAnAdmin = isNotAdmin()
    if(isNotAnAdmin){
       window.location.replace("index.html")
    }
   }

renderTable()
function renderTable() {
    const users = getUsersToShow()

    const strHTMLs = users.map(user =>
        `<tr><td>${user.username}</td><td>${user.password}</td><td>${getDate(user.lastLoginTime)}</td><td>${user.isAdmin}</td></tr>`
    )
    document.querySelector('tbody').innerHTML = strHTMLs.join('')

}

function onSetSort(SortBy) {
    setSort(SortBy)
    renderTable()
}