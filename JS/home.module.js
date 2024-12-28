import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";



export class Home{
    constructor(){

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.navbar .active').classList.remove('active')
                link.classList.add('active');
                const category = link.dataset.category;
                this.getGames(category);


            })
        })

        this.ui = new Ui();
        this.getGames('mmorpg');
        this.details= document.querySelector('.details');
        this.games= document.querySelector('.games');
        

    }
    

    async getGames(category){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'cc26539c7cmsh72a34dbc689f9dep119363jsn27a689923c54',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(url, options);
        const response = await api.json();
        this.ui.displayGame(response);

        document.querySelectorAll('.game-card').forEach(item=>{
            item.addEventListener('click', ()=>{
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none');
                new Details(item.dataset.id);
                
            })
        })  
        
    }

    }


