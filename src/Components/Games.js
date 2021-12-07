import Carousel from 'react-bootstrap/Carousel'
import React from "react";
import "./Styles/Games.css"
import { Container} from "react-bootstrap"


const Games = () => {
    return(
      <div id="games" className="games-news">
      <h1 className='game-head'>List of banned video Games</h1>
      
           <div className="game-1">
               <h2 className='game-name'>Fallout 3</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/fallout-3.jpg").default } />
                Not officially banned, but Microsoft India refused to release it for Xbox 360 
                due to cultural sensitivities as the game depicts two headed cows named after a community.
                For the same reason, the game is not available on Steam. 
              </p>
              <p> Platform's: Microsoft Windows, Xbox One, PlayStation 3, Xbox 360</p>
              <p>Release date: 28 October 2008</p>
           </div>
           <div className="game-1">
               <h2 className='game-name'>Mortal Kombat 11 </h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/mortal-kombat-11.jpg").default } />
                 Banned in Indonesia because of excessive violence and gore.  
              </p>
              <p> Platform's: PlayStation 4, Xbox One, PlayStation 5, Nintendo Switch, Xbox Series X and Series S, Microsoft Windows, Google Stadia </p>
              <p>Release date: 22 April 2019</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Manhunt 2</h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Manhunt 2.jpg").default } />
                It was “refused classification” in the UK, basically meaning it was too screwed up to even get a rating.
                The company (Rockstar) went back in and added some graphical filters to obscure the gore, 
                and the edited version was originally released there. But It was banned from sale in Germany, Ireland,
                New Zealand, Kuwait and Saudi Arabia, as well as South Korea (which also banned the original). 
              </p>
              <p> Platform's: PlayStation Portable, Microsoft Windows, PlayStation 2, Wii </p>
              <p>Release date: 29 October 2007</p>
           </div>   
           <div className="game-1">
               <h2 className='game-name'>The Pokemon card trading game</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/The Pokemon card trading.jpg").default } />
                What kind of country would see fit to ban something as innocuous as The Pokemon Trading Card Game? Welcome to Saudi Arabia, folks.
                The nation issued an edict in 2001 banning both the electronic and physical versions of the game from import.
                Pikachu, the beloved electric Pokemon, and his fellow pocket monsters were considered a threat to national security.
                Why? Because the symbols used for energy in the game resemble “the star of David, 
                which everyone knows is connected to international Zionism and is Israel’s national emblem.”
                Promoting Zionism is a big no-no in many Middle Eastern states, for obvious geopolitical reasons.
                It didn’t matter to the Saudi clerics that the resemblance was unintentional.
              </p>
              <p> Platform's: macOS, Web browser, Android, iOS, Microsoft Windows, Macintosh operating systems </p>
              <p>Release date: 24 March 2011</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>Dragon Ball fighterz </h2>
              <p className="game-des">
                <img alt='game' className="game-img" src={ require("../Images/Games/Dragon Ball fighterz.jpg").default } />
                Kids grew up watching this show and when it got level up to a game, it got banned in India.
                Bandai Namco Entertainment Asia created this game and it got banned due to Distribution Rights Issue. However ,
                true fans can find one on multiple third party key selling sites with a VPN to activate the game.
              </p>
              <p> Platform's: PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows </p>
              <p>Release date: 16 September 2017</p>
           </div> 
           <div className="game-1">
               <h2 className='game-name'>GTA 5</h2>
              <p className="game-des">
                <img alt='game' className="game-image" src={ require("../Images/Games/GTA-5.jpg").default } />
                It is quite surprising to see this game being banned in countries like Argentina, Greece and most of the Middle East.
                Reason being it depicts people being killed by motor vehicle.
              </p>
              <p> Platform's: PlayStation 4, Xbox Series X and Series S, Xbox One, Xbox 360, PlayStation 3, PlayStation 5, Microsoft Windows </p>
              <p>Release date: 17 September 2013</p>
              
           </div>           
  </div>
    )
}

export default Games;

// const Games = () => {
//   return(

// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/DOTA.jpg"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO 2.jpg"
//       alt="Second slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="../Images/Video/CS GO.jpg"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// )
// }

// export default Games;
