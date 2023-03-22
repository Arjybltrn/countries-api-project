let countryData, userInput;


const $country = $('#country')
const $capital = $('#capital')
const $lang  = $('#lang')
const $population = $('#population')
const $currency = $('#currency')








const $input = $('input[type="text"]')


$('form').on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault()
    // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val()
    // getting the user input

 $.ajax({
    url: 'https://restcountries.com/v3.1/name/' + userInput + '?fullText=true'
}).then(
  (data) => {
    countryData = data[0];
    console.log(countryData)
   
   render()
  },
  (error) => {
   console.log('bad request: ', error);
  }
 )
}


function render () {
    // Name of the country
    $country.text(`${countryData.name.common}`)

    // Capital of the country
    
    $capital.text(`Capital: ${countryData.capital}`)

    
    // Check Population then converts to a string(commas added)
    let num = countryData.population
    // console.log(num) 
    let peeps = num.toLocaleString()
    // console.log(peeps)
    $population.text(`Population: ${peeps} people`)


    // Language
    const langArray = countryData.languages
    const langVal = Object.values(langArray)
    console.log(langVal)
    $lang.text(`Languages: ${langVal}`)


    // Check currencies

    const curr = countryData.currencies
    const countryCurr = Object.values(curr)
    // console.log(countryCurr[0].name)
    $currency.text(`Currency: ${countryCurr[0].symbol} ${countryCurr[0].name} `)

    // Displays flag image / then uses replaceChild() to replace appended img
    
    const flagValues = countryData.flags
    const countryFlag = Object.values(flagValues)
   
    // console.log(countryFlag[0])
    
    const flagDiv = document.getElementById('flag-img')

    const img = document.createElement('img')
    img.src = countryFlag[0]

    flagDiv.appendChild(img)

    const flagDiv1 = document.getElementById('flag-img')
    const newFlag = document.createElement('img')
    // console.log(newFlag)
    newFlag.src = countryFlag[0]
    flagDiv1.replaceChild(img, flagDiv1.firstElementChild)
    

    // Creates a favicon for the country searched using if statement
    let link = document.querySelector("link[rel='icon']")
    // console.log(link) 
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
   }
      link.href = countryFlag[1]
}


   
  




   

    



   
   
    






// 'https://restcountries.com/v3.1/name/'
