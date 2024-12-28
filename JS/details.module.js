import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
    document.querySelector('.btn-close').addEventListener('click', ()=>{
        document.querySelector('.details').classList.add('d-none');
        document.querySelector('.games').classList.remove('d-none');
    })
    this.getDetails(id)

    }

    async getDetails(id){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'cc26539c7cmsh72a34dbc689f9dep119363jsn27a689923c54',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(url, options)
        const response = await api.json();
        new Ui().displayDetails(response)
    }
}