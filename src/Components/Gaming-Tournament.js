import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
        <div id="games" className="games-news">
            <h1 className='game-head'>BABEL GAMING TOURNAMENT</h1>
            
                 <div className='tournament'>
                     <h2 className='game-name'>Counter Strike Semi-Final Match Details</h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/csgo_final.jpg').default } />
                    </p>
                 </div>
                 <div className='tournament'>
                     <h2 className='game-name'>Dota 2: Final Match Details</h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/Dota2_final.jpg').default } />
                    </p>
                 </div> 
                 <div className='tournament'>
                     <h2 className='game-name'>Valorent Final Match Details</h2>
                    <p className="game-des">
                      <img alt='game' className="tournament-img" src={ require('../Images/Games/valoent_final.jpg').default } />
                    </p>
                 </div>                   
        </div>
    )
}

export default Games;