//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.meals[0].strYoutube)
        document.querySelector('iframe').src = data.meals[0].strYoutube.replace('watch?v=', 'embed/'
        )
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

