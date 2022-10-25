document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const zodiac = document.querySelector('input').value
    try{
        const response = await fetch(`https://horoscopev2-5-demo.herokuapp.com/api/${zodiac}`)
        const data = await response.json()

        console.log(data)
        document.querySelector("#glee").textContent = data.date_range
        document.querySelector("#gleeb").textContent = data.planet
        document.querySelector("#gleec").textContent = data.day
        document.querySelector("#gleed").textContent = data.color
        document.querySelector("#gleee").textContent = data.number
        document.querySelector("#gleef").textContent = data.gemstones
        document.querySelector("#gleeg").textContent = data.herbs
        document.querySelector("#gleeh").textContent = data.todays_date
    }catch(error){
        console.log(error)
    }
}