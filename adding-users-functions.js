//Read existing users from localstorage
const getSavedUsers = function () {
    const usersJSON = localStorage.getItem('users')

    if(usersJSON !== null) {
        return JSON.parse(usersJSON)
    } else {
        return []
    }
}

//Save users to localstorage
const saveUsers = function (users) {
    localStorage.setItem('users', JSON.stringify(users))
}

//Remove user by id
const removeUser = function (id) {
    const userIndex = users.findIndex(function(user) {
        return user.id === id
    })
    if(userIndex > -1) {
        users.splice(userIndex, 1)
    }
}

//Render application users
const renderUsers = function (users) {
    document.querySelector('#users').innerHTML = ''

    users.forEach(function(user) {
        document.querySelector('#users').appendChild(generateUserDOM(user))
    })
}

//Generate the DOM structure for a user
const generateUserDOM = function (user) {
    const userEl = document.createElement('div')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup the user text
    textEl.textContent = user.text
    userEl.appendChild(textEl)

    //Setup the remove button
    removeButton.textContent = 'x'
    userEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        document.querySelector('.modal').style.display = "flex";
    })
    document.getElementById('close').addEventListener('click', function() {
        document.querySelector('.modal').style.display = "none";
    })
    document.getElementById('confirmRemoval').addEventListener('click', function () {
        removeUser(user.id)
        saveUsers(users)
        renderUsers(users)
    })

}
