import Title from "../../../component/title/Title";

import "./heroesTrends.scss";

const HeroesTrends = () => {
  return (
    <>
      <Title title="Heroes" subTitle="Trends" />
      <h3 className="trends__title">Biggest Winners and losers</h3>
      <div className="trends__header">
        <div className="trends__header-1">
          <div className="trends__header-top">
            <p className="trends__header-title">Win Rate</p>
          </div>
          <div className="trends__header-down">
            <div className="trends__header-hero">Hero</div>
            <div className="trends__header-start">Start</div>
            <div className="trends__header-current">Current</div>
            <div className="trends__header-change">Change</div>
          </div>
        </div>
        <div className="trends__header-2">
          <div className="trends__header-top">
            <p className="trends__header-title">Pick Rate</p>
          </div>
          <div className="trends__header-down">
            <div className="trends__header-start">Start</div>
            <div className="trends__header-current">Current</div>
            <div className="trends__header-change">Change</div>
          </div>
        </div>
      </div>
      <ul className="trends__list">
        <li className="trends__item">
          <div className="trends__item-thymbnail">
            <img src="" alt="" />
            <p className="trends__item-name">Name</p>
          </div>
          <div className="trends__item-stats">
            <div className="trends__item-start">50%</div>
            <div className="trends__item-current">50%</div>
            <div className="trends__item-change">+2%</div>
          </div>
          <div className="trends__item-trends">Trends</div>
        </li>
      </ul>
    </>
  );
};

export default HeroesTrends;
