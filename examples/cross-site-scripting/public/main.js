/* global fetch */

fetch('./users')
  .then(res => res.json())
  .then(function ({ users }) {
    const $userList = document.querySelector('#user-list')

    for (const user of users) {
      const $user = document.createElement('div')
      $user.innerHTML = user.name + ' ' + user.age

      $userList.appendChild($user)
    }
  })
