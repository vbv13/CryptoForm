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

    removeAllUsers()
}

//Generate the DOM structure for a user
const generateUserDOM = function (user) {
    const userEl = document.createElement('div')
    const textEl = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup the user text
    textEl.textContent = user.text
    userEl.appendChild(textEl)

    //Setup the remove button for corresponding item
    removeButton.textContent = 'X'
    userEl.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        document.querySelector('.modalSingleUser').style.display = 'flex';
    })
    document.getElementById('closeSingleUser').addEventListener('click', function() {
        document.querySelector('.modalSingleUser').style.display = 'none';
    })
    document.getElementById('confirmRemoval').addEventListener('click', function() {
        removeUser(user.id)
        saveUsers(users)
        renderUsers(users)
    })
}

    //Setup remove button for all currently existing users
    const removeAllUsers  = function() {
    $(document).ready(function(){
    if(users != null) {
        $('#removeAll').show()
    } else {
        $('#removeAll').hide()
    }
    });

    document.getElementById('removeAll').addEventListener('click', function() {
        document.querySelector('.modalAllUsers').style.display = 'flex';
    })
    document.getElementById('closeAllUsers').addEventListener('click', function() {
        document.querySelector('.modalAllUsers').style.display = 'none';
    })
    document.getElementById('confirmRemovalAll').addEventListener('click', function() {
        return users = [];
        saveUsers(users)
        renderUsers(users)
    })
}