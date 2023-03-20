let countries, countryData, userInput;


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
    $capital.text(`Capital: ${countryData.capital}`)

    
    // Check Population then converts to a string(commas added)
    let num = countryData.population
    // console.log(num) 
    let out = num.toLocaleString()
    // console.log(out)
    $population.text(`Population: ${out} people`)


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

    // Replace title with the country name

    const titleEl = document.getElementById('title')
    const newTitle = document.createElement('title')
    newTitle.textContent = countryData.name.common
    console.log(countryData.name.common)


    titleEl.append(newTitle)
    
   
    // Displays a map of the userInput (roadblock - cannot append map on website - needs iframe link api unable to provide proper one)

    const maps = countryData.maps
    // console.log(maps.googleMaps)

    let mapDiv = document.getElementById('map')
    const gMap = document.createElement('a')
    // console.log(mapDiv)
    gMap.href = maps.googleMaps
    // console.log(gMap)
    //  gMap.setAttribute('src', maps.googleMaps) // if I wanna use  setAttribute()
    mapDiv.append(gMap)

}
  


   
  


  //  const map = document.getElementById('map')
  //  const gMap = document.createElement('a')
  //  console.log(gMap)
  //  a.href = maps.googleMaps
  //  console.log(gMap.href)

  //  let map = document.querySelector("#map")
  //  console.log(map)
   

   

    



   
   
    






// 'https://restcountries.com/v3.1/name/'
