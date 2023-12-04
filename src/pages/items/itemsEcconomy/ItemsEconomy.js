import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";

const ItemsEconomy = () => {
  const tableTitle = [
    { name: "Item" },
    { name: "Gold /Minute" },
    { name: "Experience/ Minute" },
  ];

  const tableItems = [
    { value: "254.23", class: "orange" },
    { value: "920.11", class: "blue" },
  ];

  const gridClass = "grid-2";
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

export default ItemsEconomy;
