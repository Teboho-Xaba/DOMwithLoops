const userList = document.querySelector('.name-list')
const listInput = document.querySelector('input')
const addList = document.querySelector(".addList")

addList.addEventListener("click", () => {
    //1. create a list out of thin air
    const newLi = document.createElement("LI")
    const liContent = document.createTextNode(listInput.value)

    //2. add input on the created list
    newLi.appendChild(liContent)

    //3. attach new list to userList
    userList.appendChild(newLi)
})