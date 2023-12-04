import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";

const ItemsUsed = () => {
  const tableTitle = [
    { name: "Item" },
    { name: "Times Used" },
    { name: "Use Rate" },
    { name: "Win Rate" },
  ];

  const tableItems = [
    { value: "12,236,194", class: "red" },
    { value: "53%", class: "red" },
    { value: "73%", class: "green" },
  ];

  const gridClass = "grid-4";
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

export default ItemsUsed;
