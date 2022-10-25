document.querySelector('#glahh').addEventListener('click', makeReq)

async function makeReq(){

  const zodiacsName = document.querySelector("#lopp").value.toLowerCase();
  try{
    const res = await fetch(`https://horoscopev2-5-demo.herokuapp.com/api/${zodiacsName}`)
    const data = await res.json()
    console.log(data);
    document.querySelector("#glee").textContent = data.date_range
    document.querySelector("#gleeb").textContent = data.planet
    document.querySelector("#gleec").textContent = data.day
    document.querySelector("#gleed").textContent = data.color
    document.querySelector("#gleee").textContent = data.number
    document.querySelector("#gleef").textContent = data.gemstones
    document.querySelector("#gleeg").textContent = data.herbs
  }catch(error){
    console.log(error)
}

//   document.querySelector("#gleeh").textContent = data.todays_date
}