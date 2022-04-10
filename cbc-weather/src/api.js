// Function call to the api
export default class Api {
  static getWeather(city) {
    return fetch('http://localhost:4000', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 
        `query {
          getCityByName(name: "${city}") {
            id
            name
            country
            weather {
              summary {
                title
                description
                icon
              }
              temperature {
                actual
                feelsLike
                min
                max
              }
              wind {
                speed
                deg
              }
              clouds {
                all
                visibility
                humidity
              }
            }
          }
        }`  
      }),
    });
  }
}


