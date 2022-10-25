document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const zodiac = document.querySelector('input').value
    try{
        const response = await fetch(`https://horoscopev2-5-demo.herokuapp.com//api/${zodiac}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h4').innerText = data.date_range
    }catch(error){
        console.log(error)
    }
}