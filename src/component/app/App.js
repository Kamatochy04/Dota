import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../../pages/global/header/Header";
import Footer from "../../pages/global/footer/footer";

import Entrance from "../../pages/entrance/Entrance";

import AllHeroes from "../../pages/allHeroes/AllHeroes";
import HeroesTrends from "../../pages/heroes/heroesTrends/HeroesTrends";
import HeroesPlayed from "../../pages/heroes/heroesPlayed/HeroesPlayed";
import HeroesFarm from "../../pages/heroes/heroesFarm/HeroesFarm";
import HeroesEconomy from "../../pages/heroes/heroesEconomy/HeroesEconomy";
import HeroesWinning from "../../pages/heroes/heroesWinning/HeroesWinning";
import HeroesDamage from "../../pages/heroes/heroesDamage/HeroesDamage";

import ItemsWining from "../../pages/items/itemsWinning/ItemsWinning";
import ItemsImpact from "../../pages/items/itemsImpact/ItemsImpact";
import ItemsEconomy from "../../pages/items/itemsEcconomy/ItemsEconomy";
import ItemsUsed from "../../pages/items/itemsUsed/ItemsUsed";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/heroes/meta" element={<AllHeroes />} />
            {/* <Route path="/heroes/trends" element={<HeroesTrends />} /> */}
            <Route path="/heroes/played" element={<HeroesPlayed />} />
            <Route path="/heroes/farm" element={<HeroesFarm />} />
            <Route path="/heroes/economy" element={<HeroesEconomy />} />
            <Route path="/heroes/winning" element={<HeroesWinning />} />
            <Route path="/heroes/damage" element={<HeroesDamage />} />
            <Route path="/items/winning" element={<ItemsWining />} />
            <Route path="/items/impact" element={<ItemsImpact />} />
            <Route path="/items/ecconomy" element={<ItemsEconomy />} />
            <Route path="/items/used" element={<ItemsUsed />} />
            <Route path="/entrance" element={<Entrance />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
