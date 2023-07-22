// import quotes from './quotes.js'
const btn = document.querySelector('#add-task')
const taskInput = document.querySelector('#text-input')
const taskList = document.querySelector('#tasks')
const finishedTasks = document.querySelector('#finished-tasks')
const completedHeading = document.querySelector('#completed-heading')
const quote = document.querySelector('#quote')
const author = document.querySelector('#author')


// const corsProxy = 'https://cors-proxy-share-eight.vercel.app'
const corsProxy = 'https://cors-anywhere.herokuapp.com'
// const getQuote = async () => {
//     const res = await fetch(corsProxy, { headers: { 'my-url': 'https://zenquotes.io/api/random' }})
//     // const res = await fetch(corsProxy, { headers: { 'my-url': 'http://sunnyquotes.net/q.php?random' }})
//      const quoteRes = await res.json()
//     quote.innerHTML = `"${quoteRes[0].q}"`
//     author.innerHTML = '- ' + quoteRes[0].a
//     }








const getStoredTasks = () => JSON.parse(localStorage.tasks ? localStorage.tasks : '[]')
const getFinishedTasks = () => JSON.parse(localStorage.finishedTasks ? localStorage.finishedTasks : '[]')

const populateList = () => {    
    const storedTasks = getStoredTasks()
    const htmlTasks = storedTasks.map((task, i) => `<li id='${i}'> ${task} <div class="buttons"> <button id="finished-task">&#x2713;</button><button id="delete-task">-</button></div> </li>`).join('')
    taskList.innerHTML = htmlTasks
    
    const finishedTasksArr = getFinishedTasks()
    const completedHeadingMsg = finishedTasksArr.length ? 'Completed Tasks:' : ''
    completedHeading.innerHTML = completedHeadingMsg
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







const quotes = 
    [{"q":"Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.","a":"Bhagavad Gita","c":"144","h":"<blockquote>&ldquo;Whatever happened, happened for the good. Whatever is happening, is happening for the good. Whatever will happen, will also happen for the good.&rdquo; &mdash; <footer>Bhagavad Gita</footer></blockquote>"},{"q":"Worry is a waste of emotional reserve.","a":"Ayn Rand","c":"38","h":"<blockquote>&ldquo;Worry is a waste of emotional reserve.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"},{"q":"Don't learn to do, but learn in doing.","a":"Samuel Butler","c":"38","h":"<blockquote>&ldquo;Don't learn to do, but learn in doing.&rdquo; &mdash; <footer>Samuel Butler</footer></blockquote>"},{"q":"To travel is to be alive, but to get somewhere is to be dead.","a":"Alan Watts","c":"61","h":"<blockquote>&ldquo;To travel is to be alive, but to get somewhere is to be dead.&rdquo; &mdash; <footer>Alan Watts</footer></blockquote>"},{"q":"Dreams are the royal road to the unconscious. ","a":"Sigmund Freud","c":"46","h":"<blockquote>&ldquo;Dreams are the royal road to the unconscious. &rdquo; &mdash; <footer>Sigmund Freud</footer></blockquote>"},{"q":"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.","a":"Abraham Lincoln","c":"89","h":"<blockquote>&ldquo;Give me six hours to chop down a tree and I will spend the first four sharpening the axe.&rdquo; &mdash; <footer>Abraham Lincoln</footer></blockquote>"},{"q":"Many answers to what you seek don't lie 'out there'. If you look inwards, you'll find the answer has been in you all along.","a":"Celestine Chua","c":"123","h":"<blockquote>&ldquo;Many answers to what you seek don't lie 'out there'. If you look inwards, you'll find the answer has been in you all along.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"},{"q":"There is no path to Love. Love is the path.","a":"Dan Millman","c":"43","h":"<blockquote>&ldquo;There is no path to Love. Love is the path.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"},{"q":"I'd rather welcome change than cling to the past.","a":"Robert Kiyosaki","c":"49","h":"<blockquote>&ldquo;I'd rather welcome change than cling to the past.&rdquo; &mdash; <footer>Robert Kiyosaki</footer></blockquote>"},{"q":"Happiness is the meaning and the purpose of life, the whole aim and end of human existence.","a":"Aristotle","c":"91","h":"<blockquote>&ldquo;Happiness is the meaning and the purpose of life, the whole aim and end of human existence.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"},{"q":"Life is a question and how we live it is our answer.","a":"Gary Keller","c":"52","h":"<blockquote>&ldquo;Life is a question and how we live it is our answer.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>"},{"q":"Wise people, even though all laws were abolished, would still lead the same life.","a":"Aristophanes","c":"81","h":"<blockquote>&ldquo;Wise people, even though all laws were abolished, would still lead the same life.&rdquo; &mdash; <footer>Aristophanes</footer></blockquote>"},{"q":"It's the possibility of having a dream come true that makes life interesting.","a":"Paulo Coelho","c":"77","h":"<blockquote>&ldquo;It's the possibility of having a dream come true that makes life interesting.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>"},{"q":"The chief cause of failure and unhappiness is trading what you want most for what you want right now.","a":"Zig Ziglar","c":"101","h":"<blockquote>&ldquo;The chief cause of failure and unhappiness is trading what you want most for what you want right now.&rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"},{"q":"Those who know, do. Those that understand, teach.","a":"Aristotle","c":"49","h":"<blockquote>&ldquo;Those who know, do. Those that understand, teach.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>"},{"q":"Men do not attract which they want but that which they are.","a":"James Allen","c":"59","h":"<blockquote>&ldquo;Men do not attract which they want but that which they are.&rdquo; &mdash; <footer>James Allen</footer></blockquote>"},{"q":"Confidence comes not from always being right but not fearing to be wrong.","a":"Unknown","c":"73","h":"<blockquote>&ldquo;Confidence comes not from always being right but not fearing to be wrong.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"},{"q":"Courage Is a Love Affair with the Unknown","a":"Osho","c":"41","h":"<blockquote>&ldquo;Courage Is a Love Affair with the Unknown&rdquo; &mdash; <footer>Osho</footer></blockquote>"},{"q":"Darkness is the absence of light.","a":"Kamal Ravikant","c":"33","h":"<blockquote>&ldquo;Darkness is the absence of light.&rdquo; &mdash; <footer>Kamal Ravikant</footer></blockquote>"},{"q":"You have to keep breaking your heart until it opens.","a":"Rumi","c":"52","h":"<blockquote>&ldquo;You have to keep breaking your heart until it opens.&rdquo; &mdash; <footer>Rumi</footer></blockquote>"},{"q":"We win by helping each other win.","a":"Jack Butcher","c":"33","h":"<blockquote>&ldquo;We win by helping each other win.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"},{"q":"Blessed is he who expects nothing, for he shall be disappointed.","a":"Jonathan Swift","c":"64","h":"<blockquote>&ldquo;Blessed is he who expects nothing, for he shall be disappointed.&rdquo; &mdash; <footer>Jonathan Swift</footer></blockquote>"},{"q":"A mistake is only an error, it becomes a mistake when you fail to correct it.","a":"John Lennon","c":"77","h":"<blockquote>&ldquo;A mistake is only an error, it becomes a mistake when you fail to correct it.&rdquo; &mdash; <footer>John Lennon</footer></blockquote>"},{"q":"It doesn't matter how much you want. What really matters is how much you want it.","a":"Ralph Marston","c":"81","h":"<blockquote>&ldquo;It doesn't matter how much you want. What really matters is how much you want it.&rdquo; &mdash; <footer>Ralph Marston</footer></blockquote>"},{"q":"Evil is whatever distracts. ","a":"Franz Kafka","c":"28","h":"<blockquote>&ldquo;Evil is whatever distracts. &rdquo; &mdash; <footer>Franz Kafka</footer></blockquote>"},{"q":"None are more hopelessly enslaved than those who falsely believe they are free.","a":"Johann Wolfgang von Goethe","c":"79","h":"<blockquote>&ldquo;None are more hopelessly enslaved than those who falsely believe they are free.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"},{"q":"Confidence is contagious. So is lack of confidence.","a":"Vince Lombardi","c":"51","h":"<blockquote>&ldquo;Confidence is contagious. So is lack of confidence.&rdquo; &mdash; <footer>Vince Lombardi</footer></blockquote>"},{"q":"Management is doing things right; leadership is doing the right things.","a":"Peter Drucker","c":"71","h":"<blockquote>&ldquo;Management is doing things right; leadership is doing the right things.&rdquo; &mdash; <footer>Peter Drucker</footer></blockquote>"},{"q":"The best dreams happen when you're awake.","a":"Cherie Gilderbloom","c":"41","h":"<blockquote>&ldquo;The best dreams happen when you're awake.&rdquo; &mdash; <footer>Cherie Gilderbloom</footer></blockquote>"},{"q":"All power is from within and therefore under our control.","a":"Robert Collier","c":"57","h":"<blockquote>&ldquo;All power is from within and therefore under our control.&rdquo; &mdash; <footer>Robert Collier</footer></blockquote>"},{"q":"Unless a man is master of his soul, all other kinds of mastery amount to little.","a":"Theodore Roosevelt","c":"80","h":"<blockquote>&ldquo;Unless a man is master of his soul, all other kinds of mastery amount to little.&rdquo; &mdash; <footer>Theodore Roosevelt</footer></blockquote>"},{"q":"Re-examine all that you have been told... dismiss that which insults your soul.","a":"Walt Whitman","c":"79","h":"<blockquote>&ldquo;Re-examine all that you have been told... dismiss that which insults your soul.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>"},{"q":"Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more.","a":"Tony Robbins","c":"120","h":"<blockquote>&ldquo;Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"},{"q":"Optimism is the one quality more associated with success and happiness than any other.","a":"Brian Tracy","c":"86","h":"<blockquote>&ldquo;Optimism is the one quality more associated with success and happiness than any other.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"},{"q":"It is easier to fight for one's principles than to live up to them. ","a":"Alfred Adler","c":"68","h":"<blockquote>&ldquo;It is easier to fight for one's principles than to live up to them. &rdquo; &mdash; <footer>Alfred Adler</footer></blockquote>"},{"q":"No problem can be solved from the same level of consciousness that created it.","a":"Albert Einstein","c":"78","h":"<blockquote>&ldquo;No problem can be solved from the same level of consciousness that created it.&rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>"},{"q":"To seek greatness is the only righteous vengeance.","a":"Criss Jami","c":"50","h":"<blockquote>&ldquo;To seek greatness is the only righteous vengeance.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"},{"q":"Failure is a prerequisite for great success. If you want success faster, double your rate of failure.","a":"Brian Tracy","c":"101","h":"<blockquote>&ldquo;Failure is a prerequisite for great success. If you want success faster, double your rate of failure.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"},{"q":"The world is a puzzle; no need to make sense out of it.","a":"Socrates","c":"55","h":"<blockquote>&ldquo;The world is a puzzle; no need to make sense out of it.&rdquo; &mdash; <footer>Socrates</footer></blockquote>"},{"q":"One mistake does not have to rule a person's entire life.","a":"Joyce Meyer","c":"57","h":"<blockquote>&ldquo;One mistake does not have to rule a person's entire life.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>"},{"q":"Chop your own wood and it will warm you twice. ","a":"Henry Ford","c":"47","h":"<blockquote>&ldquo;Chop your own wood and it will warm you twice. &rdquo; &mdash; <footer>Henry Ford</footer></blockquote>"},{"q":"A woman unsatisfied must have luxuries. But a woman who loves a man would sleep on a board.","a":"D. H. Lawrence","c":"91","h":"<blockquote>&ldquo;A woman unsatisfied must have luxuries. But a woman who loves a man would sleep on a board.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>"},{"q":"The best thing to hold onto in life is each other.","a":"Audrey Hepburn","c":"50","h":"<blockquote>&ldquo;The best thing to hold onto in life is each other.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>"},{"q":"You can't let your failures define you. You have to let your failures teach you.","a":"Barack Obama","c":"80","h":"<blockquote>&ldquo;You can't let your failures define you. You have to let your failures teach you.&rdquo; &mdash; <footer>Barack Obama</footer></blockquote>"},{"q":"It's not what you've got; it's what you do that makes the difference.","a":"Celestine Chua","c":"69","h":"<blockquote>&ldquo;It's not what you've got; it's what you do that makes the difference.&rdquo; &mdash; <footer>Celestine Chua</footer></blockquote>"},{"q":"We have a duty to maintain the light of consciousness to make sure it continues into the future.","a":"Elon Musk","c":"96","h":"<blockquote>&ldquo;We have a duty to maintain the light of consciousness to make sure it continues into the future.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>"},{"q":"Every hour of every day is an unspeakably perfect miracle.","a":"Walt Whitman","c":"58","h":"<blockquote>&ldquo;Every hour of every day is an unspeakably perfect miracle.&rdquo; &mdash; <footer>Walt Whitman</footer></blockquote>"},{"q":"Numbing the pain for a while will only make it worse when you finally feel it.","a":"Albus Dumbledore","c":"78","h":"<blockquote>&ldquo;Numbing the pain for a while will only make it worse when you finally feel it.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>"},{"q":"Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.","a":"Robert Greene","c":"133","h":"<blockquote>&ldquo;Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.&rdquo; &mdash; <footer>Robert Greene</footer></blockquote>"},{"q":"Nothing endures but change.","a":"Heraclitus","c":"27","h":"<blockquote>&ldquo;Nothing endures but change.&rdquo; &mdash; <footer>Heraclitus</footer></blockquote>"}]

    const getQuote = () => {
        const rand = Math.floor(Math.random() * quotes.length)
            const randomQuote = quotes[rand]
            quote.innerHTML = `"${randomQuote.q}"`
            author.innerHTML = '- ' + randomQuote.a
        
        }
        getQuote()