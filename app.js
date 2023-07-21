const btn = document.querySelector('#add-task')
const taskInput = document.querySelector('#text-input')
const taskList = document.querySelector('#tasks')
const finishedTasks = document.querySelector('#finished-tasks')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')



const corsProxy = 'https://cors-proxy-share-4m4pr0wm5-bccbass.vercel.app'
const getQuote = async () => {
    const res = await fetch(corsProxy, { headers: { 'my-url': 'https://zenquotes.io/api/random' }})
     const quoteRes = await res.json()
    quote.innerHTML = `"${quoteRes[0].q}"`
    author.innerHTML = '- ' + quoteRes[0].a
    }

const quotes = getQuote()



    const getStoredTasks = () => JSON.parse(localStorage.tasks ? localStorage.tasks : '[]')
const getFinishedTasks = () => JSON.parse(localStorage.finishedTasks ? localStorage.finishedTasks : '[]')

const populateList = () => {
    const storedTasks = getStoredTasks()
    const htmlTasks = storedTasks.map((task, i) => `<li id='${i}'> ${task} <div class="buttons"> <button id="finished-task">&#x2713;</button><button id="delete-task">-</button></div> </li>`).join('')
    taskList.innerHTML = htmlTasks
    
    const finishedTasksArr = getFinishedTasks()
    const htmlFinishedTasks = finishedTasksArr.map((task, i) => `<li id='${i}'><div class='done'><span class="check"> &#x2713; </span>${task} </div><div class="buttons"><button id="delete-finished-task">-</button></div> </li>`).join('')
    finishedTasks.innerHTML = htmlFinishedTasks
    
    const deleteBtns = document.querySelectorAll('#delete-task')
    addDeleteBtn(deleteBtns, getStoredTasks, 'tasks')
    const completedBtns = document.querySelectorAll('#finished-task')

    addCompletedBtn(completedBtns)
    const deleteFinishedTasks = document.querySelectorAll('#delete-finished-task')
    addDeleteBtn(deleteFinishedTasks, getFinishedTasks, 'finishedTasks')

}
const addDeleteBtn = (btns, getStoredArray, storedKey) => {
    for (let btn of btns){btn.addEventListener('click', () => {
        const arr = getStoredArray()
        const target = btn.parentNode.parentNode.id
        btn.parentNode.parentNode.classList.add('fall')
        setTimeout(() => {
            arr.splice(target, 1)
            localStorage[storedKey] = JSON.stringify(arr)
            populateList()
        }, 300)

    })}}

    const addCompletedBtn = (completedBtns) => {
        for (let completedBtn of completedBtns){completedBtn.addEventListener('click', () => {
            const tasksArr = getStoredTasks()
            const finishedTasksArr = getFinishedTasks()
            const target = completedBtn.parentNode.id
            completedBtn.parentNode.parentNode.classList.add('fall')
            task = setTimeout(() => {
                task =  tasksArr.splice(target, 1)
                finishedTasksArr.push(task[0])
                localStorage.tasks = JSON.stringify(tasksArr)
                localStorage.finishedTasks = JSON.stringify(finishedTasksArr) 
                populateList()
            }, 300);
        })}}


const addTask = () => {
    const tasksArr = getStoredTasks()
    if (taskInput.value){tasksArr.push(taskInput.value)}
    localStorage.tasks  = JSON.stringify(tasksArr);
    populateList(tasksArr)
    taskInput.value = ''
    }

populateList()

btn.addEventListener('click', addTask )
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){addTask()}
})
taskInput.addEventListener('click', (e)=>taskInput.value = '')