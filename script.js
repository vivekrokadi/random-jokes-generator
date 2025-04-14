const joke = document.querySelector(".content")
const btn = document.getElementById('btn')
const setup = document.querySelector(".setup")
const punchLine = document.querySelector(".punch-line")

const url = 'https://official-joke-api.appspot.com/jokes/random'

btn.addEventListener("click",()=>{
    generateJoke();
})

async function generateJoke(){
    let response = await fetch(url)
    let data =  await response.json()
    console.log(data)
    setup.innerHTML = data.setup
    punchLine.innerHTML = data.punchline
}