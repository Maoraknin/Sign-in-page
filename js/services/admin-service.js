'use strict'
var gUsersSortBy = 'last-login'


function getUsersToShow() {
    getUsersSortedForDisplay(gUsers)
    return gUsers
}

function setSort(SortBy) {
    gUsersSortBy = SortBy
}

function getUsersSortedForDisplay(users) {
    if (gUsersSortBy === 'name') {
        users.sort((a, b) => {
            const usernameA = a.username.toUpperCase()
            const usernameB = b.username.toUpperCase()
            if (usernameA < usernameB) return -1;
            if (usernameA > usernameB) return 1;

        })
    } else if (gUsersSortBy === 'last-login') {
        users.sort((a, b) => b.lastLoginTime - a.lastLoginTime)
    }

}

function isNotAdmin() {
    if(gUsers.some(user => user.isAdmin === false && user.isSignIn === true)) return true
    return false
    
}


function getDate(date) {
    date = new Date(date)
    var dd = String(date.getDate()).padStart(2, '0')
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var yyyy = date.getFullYear()

    var hour = String(date.getHours())
    var minute = String(date.getMinutes())
    var second = String(date.getSeconds())

    return dd + '/' + mm + '/' + yyyy + ' At: ' + hour + ':' + minute + ':' + second

}