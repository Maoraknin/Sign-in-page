'use strict'

const STORAGE_KEY = 'UsersDB'

var gUsers
_createUsers()


function doLogIn(userName, password) {
    return gUsers.find(user => (user.username === userName && user.password === password))
}

function isUserAdmin(username) {
    const userIdx = gUsers.findIndex(user => (user.username === username))
    return (gUsers[userIdx].isAdmin)
}


function updateSignInAndTime(username) {
    const userIdx = gUsers.findIndex(user => (user.username === username))
    gUsers[userIdx].isSignIn = true
    gUsers[userIdx].lastLoginTime = Date.now()
    saveToStorage(STORAGE_KEY, gUsers)
}

function updateSignOutAndTime() {
    const userIdx = gUsers.findIndex(user => (user.isSignIn))
    gUsers[userIdx].isSignIn = false
    gUsers[userIdx].lastLoginTime = Date.now()
    saveToStorage(STORAGE_KEY, gUsers)
}



function _createUsers() {
    gUsers = loadFromStorage(STORAGE_KEY)
    if (!gUsers || !gUsers.length) {
        gUsers = [
            _createUser('Maor', 'Maor', true),
            _createUser('Adi', 'Adi'),
            _createUser('Noa', 'Noa')
        ]
        saveToStorage(STORAGE_KEY, gUsers)
    }
}

function _createUser(username, password, isAdmin = false) {
    return {
        id: _makeId(),
        username,
        password,
        lastLoginTime: Date.now(),
        isAdmin,
        isSignIn: false
    }
}



function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}