import Title from "../../../component/title/Title";
import StatisticList from "../../../component/statisticList/StatisticList";
import DropMenu from "../../../component/dropMenu/DropMenu";

const HeroesFarm = () => {
  const tableTitle = [
    { name: "Hero" },
    { name: "Last Hits/ 10 Minutes" },
    { name: "Denies / 10 Minutes" },
  ];

  const tableItems = [
    { value: "100%", class: "green" },
    { value: "100%", class: "red" },
  ];

  const gridClass = "grid-2";

  return (
    <>
      <Title title="Heroes" subTitle="Best Farm" />
      <DropMenu />
      <StatisticList
        tableTitle={tableTitle}
        tableItems={tableItems}
        gridClass={gridClass}
      />
    </>
  );
};

export default HeroesFarm;
