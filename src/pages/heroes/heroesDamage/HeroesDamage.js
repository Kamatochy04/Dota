import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";
import DropMenu from "../../../component/dropMenu/DropMenu";

const HeroesDamage = () => {
  const tableTitle = [
    { name: "Hero" },
    { name: "Hero Damage/ Minute" },
    { name: "Tower Damage/ Minute" },
    { name: "Hero Healing/ Minute" },
  ];

  const tableItems = [
    { value: "100%", class: "red" },
    { value: "100%", class: "white" },
    { value: "100%", class: "green" },
  ];

  const gridClass = "grid-4-damage";

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

export default HeroesDamage;
