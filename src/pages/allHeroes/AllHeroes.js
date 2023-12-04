import HeroesList from "../../component/heroesList/HeroesList";
import Title from "../../component/title/Title";

import "./allHeroes.scss";

const AllHeroes = () => {
  return (
    <>
      <Title title="Heroes" subTitle="All Heroes" />
      <h2 className="heroes__title">ALL HEROES</h2>
      <HeroesList />
    </>
  );
};

export default AllHeroes;
