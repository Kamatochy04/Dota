import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";

const ItemsImpact = () => {
  const tableTitle = [
    { name: "Item" },
    { name: "KDA Ration" },
    { name: "Kills" },
    { name: "Deaths" },
    { name: "Assists" },
  ];

  const tableItems = [
    { value: "100%", class: "orange" },
    { value: "100%", class: "red" },
    { value: "100%", class: "white" },
    { value: "100%", class: "green" },
  ];

  const gridClass = "grid-5";
  return (
    <>
      <Title title="Items" subTitle="Highest Win Rate" />
      <StatisticList
        tableTitle={tableTitle}
        tableItems={tableItems}
        gridClass={gridClass}
      />
    </>
  );
};

export default ItemsImpact;
