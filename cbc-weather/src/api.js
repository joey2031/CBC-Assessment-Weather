let queryString = `query {
    getCityByName(name: "Toronto") {
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
  }`;

// Function call to the api
export default class Api {
    static getWeather() {
        return fetch('http://localhost:4000', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query: queryString}),
        });
    }
}