import React from "react";

import "./menu.scss";

const DropMenu = () => {
  const ref = React.createRef();

  const onTogleMenu = () => {
    ref.current.classList.toggle("active");
  };

  return (
    <>
      <div className="menu">
        <p onClick={onTogleMenu}>This Month</p>
        <ul className="menu__list active" ref={ref}>
          <li className="menu__item">This Month</li>
          <li className="menu__item">Last 3 Monaths</li>
          <li className="menu__item">Last 6 Monaths</li>
          <li className="menu__item">Last 12 Monaths</li>
        </ul>
      </div>
    </>
  );
};

export default DropMenu;
