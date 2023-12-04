import Title from "../../../component/title/Title";
import DropMenu from "../../../component/dropMenu/DropMenu";

import "./winning.scss";
import StatisticList from "../../../component/statisticList/StatisticList";

const HeroesWinning = () => {
  const tableTitle = [
    { name: "Hero" },
    { name: "Win Rate" },
    { name: "Pick Rate" },
    { name: "KDA Ration" },
  ];

  const tableItems = [
    { value: "100%", class: "green" },
    { value: "100%", class: "red" },
    { value: "100%", class: "orange" },
  ];

  const gridClass = "grid-4";

  return (
    <>
      <Title title="Heroes" subTitle="Highest Win Rate" />
      <h3 className="playd__title">Most playd</h3>
      <DropMenu />
      <StatisticList
        tableTitle={tableTitle}
        tableItems={tableItems}
        gridClass={gridClass}
      />
    </>
  );
};

export default HeroesWinning;
