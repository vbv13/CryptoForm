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

//Sort users
const sortUsers = function (users, sortBy) {
    if(sortBy === 'byNickname') {
        return users.sort(function (a, b) {
            if(a.nickname > b.nickname) {
                return -1
            } else if (a.nickname < b.nickname) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byEmail') {
        return users.sort(function (a, b) {
            if(a.email > b.email) {
                return -1
            } else if (a.email < b.email) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byDate') {
        return users.sort(function (a, b) {
            if(a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return users
    }
}

//Render application users
const renderUsers = function (users) {
    sortUsers(users, filters.sortBy)

    document.querySelector('#users').innerHTML = ''

    users.forEach(function(user) {
        document.querySelector('#users').appendChild(generateUserDOM(user))
    })

    removeAllUsers()
}

//Generate the DOM structure for a user
const generateUserDOM = function (user) {
    const userEl = document.createElement('tr')
    const nicknameEl = document.createElement('td')
    const emailEl = document.createElement('td')
    const ipaddressEl = document.createElement('td')
    const removeButton = document.createElement('button')

    //Setup the user nickname, email, ipaddress
    nicknameEl.textContent = user.nickname
    userEl.appendChild(nicknameEl)
    emailEl.textContent = user.email
    userEl.appendChild(emailEl)   
    ipaddressEl.textContent = user.ipaddress
    userEl.appendChild(ipaddressEl)

    //Setup the remove button for corresponding item
    removeButton.textContent = 'X'
    userEl.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        document.querySelector('.modalSingleUser').style.display = 'flex';
        $('#confirmRemoval').on('click' , function(){
              removeUser(user.id)
              saveUsers(users)
             renderUsers(users)
             document.querySelector('.modalSingleUser').style.display = 'none';
        })
    })
    
    document.getElementById('closeSingleUser').addEventListener('click', function() {
        document.querySelector('.modalSingleUser').style.display = 'none';
    })
    /*
    document.getElementById('confirmRemoval').addEventListener('click', function() {
        removeUser(user.id)
        saveUsers(users)
        renderUsers(users)
    })
    */
    return userEl
}

    //Setup remove button for all currently existing users
    const removeAllUsers  = function() {
    
    $(document).ready(function(){
    if(users == 0) {
        $('#removeAll').hide()
    } else {
        $('#removeAll').show()
    }
    });

    document.getElementById('removeAll').addEventListener('click', function() {
        document.querySelector('.modalAllUsers').style.display = 'flex';
    })
    document.getElementById('closeAllUsers').addEventListener('click', function() {
        document.querySelector('.modalAllUsers').style.display = 'none';
    })
    document.getElementById('confirmRemovalAll').addEventListener('click', function() {
        users = [];
        saveUsers(users)
        renderUsers(users)
    })
}




