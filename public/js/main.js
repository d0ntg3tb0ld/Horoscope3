document.querySelector('button').addEventListener('click', makeReq)

async function makeReq(){

    const zodiac = document.querySelector("#lopp").value.toLowerCase();
    const res = await fetch(`https://horoscopev2-5-demo.herokuapp.com/api/${zodiac}`)
    const data = await res.json()
  
    console.log(data);
    document.querySelector("#glee").textContent = data.date_range
    document.querySelector("#gleeb").textContent = data.planet
    document.querySelector("#gleec").textContent = data.day
    document.querySelector("#gleed").textContent = data.color
    document.querySelector("#gleee").textContent = data.number
    document.querySelector("#gleef").textContent = data.gemstones
    document.querySelector("#gleeg").textContent = data.herbs
  }