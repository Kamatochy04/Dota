import pudge from "./Pudge.jpg";
import "./statistic.scss";

const StatisticList = ({ tableTitle, tableItems, gridClass }) => {
  return (
    <>
      <div className="statistic__block">
        <div className={`statistic__header ${gridClass}`}>
          {tableTitle.map((item, i) => {
            return (
              <div className="" key={i}>
                {item.name}
              </div>
            );
          })}
        </div>
        <ul className="statistic__list">
          <li className={`statistic__list-item  bold ${gridClass} `}>
            <div className="statistic__list-descr">
              <img src={pudge} alt="" />
              <p>name</p>
            </div>
            {tableItems.map((item, i) => {
              return <div className={item.class}>{item.value}</div>;
            })}
          </li>
          <li className={`statistic__list-item   ${gridClass} `}>
            <div className="statistic__list-descr">
              <img src={pudge} alt="" />
              <p>name</p>
            </div>
            {tableItems.map((item, i) => {
              return <div className={item.class}>{item.value}</div>;
            })}
          </li>
          <li className={`statistic__list-item  bold ${gridClass} `}>
            <div className="statistic__list-descr">
              <img src={pudge} alt="" />
              <p>name</p>
            </div>
            {tableItems.map((item, i) => {
              return <div className={item.class}>{item.value}</div>;
            })}
          </li>
        </ul>
      </div>
    </>
  );
};

export default StatisticList;
