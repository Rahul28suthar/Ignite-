import React,{useEffect} from "react";
import GameDetail from "../components/GameDetail";
import Game from "../components/Game";
import { useDispatch , useSelector  } from "react-redux";
import { loadGames } from "../actions/actionGames";
import {motion,AnimatePresence,LayoutGroup} from "framer-motion";

import { useLocation } from "react-router-dom";
//animations
import { fadeIn } from "../animation";


const Home=()=>{
  //location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
    //fetch games
    const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadGames());
  },[dispatch])
  const {popular,newGames,upcoming,searched}=useSelector((state)=>state.games);
 
  return (
    <LayoutGroup>
      <motion.div className="GameList" key={location.pathname} variants={fadeIn} initial="hidden" animate="show">
        
      
        <AnimatePresence mode="wait">
          {pathId && <GameDetail pathId={pathId} key={pathId} />}
        </AnimatePresence>

        
        <AnimatePresence>
          <motion.div key="gameList">
            {searched.length ? (
            <div className="searched">
              <h2>Searched Games</h2>
                <motion.div className="Games" layout>
                  {searched.map((game) => (
                    <Game
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
                </motion.div>
            </div>
            ):""}    
            <h2>Upcoming Games</h2>
            <motion.div className="Games" layout>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </motion.div>

            <h2>Popular Games</h2>
            <motion.div className="Games" layout>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </motion.div>

            <h2>New Games</h2>
            <motion.div className="Games" layout>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </LayoutGroup>
  )
}
export default Home;