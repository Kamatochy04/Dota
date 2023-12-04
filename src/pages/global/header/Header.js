import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import "./header.scss";
import steam from "./steam.png";

const Header = () => {
  const [heroes, setHeroes] = useState(false);
  const [items, setItems] = useState(false);
  const [plauers, setPlauers] = useState(false);

  const getHeaderHeroes = () => {
    setHeroes(true);
    setItems(false);
    setPlauers(false);
  };

  const getHeaderItems = () => {
    setHeroes(false);
    setItems(true);
    setPlauers(false);
  };

  const getHeaderPlauers = () => {
    setHeroes(false);
    setItems(false);
    setPlauers(true);
  };

  const links = [
    { name: "Heroes  ", link: "/heroes/meta", onclick: getHeaderHeroes },
    { name: "Items  ", link: "/items", onclick: getHeaderItems },
    { name: "Players", link: "/players", onclick: getHeaderPlauers },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <a href="#">DOTABUFF</a>
          </div>
          <ul className="header__list">
            {links.map((item, i) => {
              return (
                <li className="header__item" key={i} onClick={item.onclick}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="header__sign-in">
            <img src={steam} alt="steam" />
            <Link to="/entrance">Sign in</Link>
          </div>
        </div>
      </div>
      {heroes ? <HeroesHeader /> : null}
      {items ? <ItemsHeader /> : null}
      {plauers ? <PlayersHeader /> : null}
    </header>
  );
};

const HeroesHeader = () => {
  const herous = [
    { name: "Meta ", link: "/heroes/meta" },
    { name: "Trends ", link: "/heroes/trends" },
    { name: "Most Played ", link: "/heroes/played" },
    { name: "Win Rate  ", link: "/heroes/winning" },
    { name: "Economy  ", link: "/heroes/economy" },
    { name: "Farm  ", link: "/heroes/farm" },
    { name: "Damage and Healing ", link: "/heroes/damage" },
  ];

  return (
    <header className="header bg">
      <div className="container">
        <div className="header__container">
          <ul className="header__list">
            {herous.map((item, i) => {
              return (
                <li className="header__item" key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

const ItemsHeader = () => {
  const [isHeader, setHeader] = useState(false);

  useEffect(() => {
    if (isHeader) return;
  }, [isHeader]);

  const items = [
    { name: "Most Used ", link: "/items/used" },
    { name: "Win Rate ", link: "/items/winning" },
    { name: "Game Impact ", link: "/items/impact" },
    { name: "Economy ", link: "/items/ecconomy" },
    { name: "Cosmetics", link: "#" },
  ];
  return (
    <header className="header bg">
      <div className="container">
        <div className="header__container">
          <ul className="header__list">
            {items.map((item, i) => {
              return (
                <li className="header__item" key={i}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

const PlayersHeader = () => {
  const players = [
    { name: "Verified ", link: "#" },
    { name: "Achievements ", link: "#" },
    { name: "Verified ", link: "#" },
    { name: "Most Matches Played  ", link: "#" },
    { name: "Time Spent Playing ", link: "#" },
  ];
  return (
    <header className="header bg">
      <div className="container">
        <div className="header__container">
          <ul className="header__list">
            {players.map((item, i) => {
              return (
                <li className="header__item" key={i}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
