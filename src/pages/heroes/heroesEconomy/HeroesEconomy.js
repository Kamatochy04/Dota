import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";
import DropMenu from "../../../component/dropMenu/DropMenu";

const HeroesEconomy = () => {
  const tableTitle = [
    { name: "Hero" },
    { name: "Gold/ Minute" },
    { name: "Experience/ Minute" },
  ];

  const tableItems = [
    { value: "100%", class: "orange" },
    { value: "100%", class: "blue" },
  ];

  const gridClass = "grid-2";
  return (
    <>
      <Title title="Heroes" subTitle="Best Economy" />
      <DropMenu />
      <StatisticList
        tableTitle={tableTitle}
        tableItems={tableItems}
        gridClass={gridClass}
      />
    </>
  );
};

export default HeroesEconomy;
