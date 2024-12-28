export class Ui {
    constructor() {
    }

    displayGame(gamesList) {
        let cartoona = '';
        for (let i = 0; i < gamesList.length; i++) {
            cartoona += `
            <div class="col-md-3">
                    <div class="game-card" data-id="${gamesList[i].id}">
                        <div class="game-body">
                            <figure><img src="${gamesList[i].thumbnail}" alt="thumbnail" class="img-fluid"></figure>
                            <figcaption>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>${gamesList[i].title}</h3>
                                    <span>Free</span>
                                </div>
                                <p>${gamesList[i].short_description.split(' ', 8)}</p>
                        </div>
                        <div class="game-footer d-flex justify-content-between">
                            <span class="Badge">${gamesList[i].genre}</span>
                            <span class="Badge">${gamesList[i].platform}</span>
                        </div>
                    </div>
                </div>`

        }
        document.querySelector('.games-list .row').innerHTML = cartoona;

    }

    displayDetails(gameDetails) {
        const game = `
        <div class="col-md-4">
                    <img src="${gameDetails.thumbnail}" alt="thumbnail">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${gameDetails.title}</h3>
                    <p>Category: <span class="Badge text-bg-info"> ${gameDetails.genre}</span> </p>
                    <p>Platform: <span class="Badge text-bg-info"> ${gameDetails.platform}</span> </p>
                    <p>Status: <span class="Badge text-bg-info"> ${gameDetails.status}</span> </p>
                    <p class="small">${gameDetails.description}</p>
                    <a href='${gameDetails.game_url}' target='_blank'><button class="btn btn-outline-warning text-white">Show Game</button></a>

                </div>`
        document.querySelector('.details .row').innerHTML= game;

}
}