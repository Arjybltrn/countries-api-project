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
    $country.text(`${countryData.name.common} ${countryData.flag}`)
    // Capital of the country
    $capital.text("The capital of " +  countryData.name.common + " is " + countryData.capital + ".")

    // Language
    let langArray = countryData.languages
    // console.log(langArray)

    $lang.text(`Languages spoken: ${langArray}`)
    
    

    // Check Population then converts to a string(commas added)
    let num = countryData.population
    // console.log(num) 
    let out = num.toLocaleString()
    // console.log(out)
    $population.text(`Population: ${out}`)


    // Check currencies

    // $currency.text(`Currencies: JSON.stringify(${countryData.currencies})`)

    // console.log(countryData.currencies)
    
    
    const curr = countryData.currencies
    console.log(curr)

    const propNames = Object.keys(curr)
    console.log(propNames)
    $currency.text(`Currency: ${propNames}`)
    
    
  
   
    
    // function displayImage(data, width, height) {
    //   const img = document.createElement("img")
    //   img.src = src
    //   img.width = width
    //   img.height = height
    //   document.body.appendChild(img)
    //   displayImage(countryData[0].flags.png, 150, 75)
    // }
    
  }





// 'https://restcountries.com/v3.1/name/'
