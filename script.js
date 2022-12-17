let url = 'https://rickandmortyapi.com/api/character/'
let episodes = document.querySelector('.episodes')
let loading = document.querySelector('#loading')

async function getEpisodes() {

    const response = await fetch(url)

    const data = await response.json()
    loading.remove(loading)

    data.results.forEach(element => {
        console.log(element)
        episodes.innerHTML += `
            <div class="col-3 mt-5">
                <div class="card" style="width: 18rem;">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${element.name}</li>
                        <li class="list-group-item">Species: ${element.species}</li>
                        <li class="list-group-item">Gender: ${element.gender}</li>
                    </ul>
                </div>
            </div>
                
        `;
        console.log(episodes)
    });
}

getEpisodes()


