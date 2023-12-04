import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";

const ItemsWining = () => {
  const tableTitle = [
    { name: "Item" },
    { name: "Win Rate" },
    { name: "Use Rate" },
  ];

  const tableItems = [
    { value: "100%", class: "green" },
    { value: "100%", class: "red" },
  ];

  const gridClass = "grid-2-items";
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

export default ItemsWining;
