import StatisticList from "../../../component/statisticList/StatisticList";
import Title from "../../../component/title/Title";
import DropMenu from "../../../component/dropMenu/DropMenu";

const HeroesPlayed = () => {
  const tableTitle = [
    { name: "Hero" },
    { name: "Matches Playe" },
    { name: "Pick Rate" },
    { name: "Win Rate" },
    { name: "KDA Ration" },
  ];

  const tableItems = [
    { value: "100%", class: "red" },
    { value: "100%", class: "red" },
    { value: "100%", class: "green" },
    { value: "100%", class: "orange" },
  ];

  const gridClass = "grid-5";

  return (
    <>
      <Title title="Heroes" subTitle="Most Damage and Healing" />
      <DropMenu />
      <StatisticList
        tableTitle={tableTitle}
        tableItems={tableItems}
        gridClass={gridClass}
      />
    </>
  );
};

export default HeroesPlayed;
