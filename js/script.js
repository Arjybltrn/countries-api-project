let countryData, userInput;


const $country = $('#country')
const $capital = $('#capital')
// const $lang  = $('#lang')
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
    countryData = data;
    console.log(data)
   
   render()
  },
  (error) => {
   console.log('bad request: ', error);
  }
 )
}
function render () {
    // Name of the country
    $country.text(`${countryData[0].name.common} ${countryData[0].flag}`)
    // Capital of the country
    $capital.text("The capital of " +  countryData[0].name.common + " is " + countryData[0].capital + ".")
    // Language
    // $lang.text(`Languages: ${countryData[0].languages.eng}`)

    // Check Population 
    
    $population.text(`Population: ${countryData[0].population}`)

    
    
  
   
    
    function displayImage(countryData, width, height) {
      const img = document.createElement("img")
      img.src = src
      img.width = width
      img.height = height
      document.body.appendChild(img)
      displayImage(countryData[0].flags.png, 150, 75)
    }
    
  }





// 'https://restcountries.com/v3.1/name/'
