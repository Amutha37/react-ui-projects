import React, { useState } from "react";

// data
import menudata from "../menudata.json";

// router
import { withRouter } from "react-router-dom";

// styling
import "./Menu.css";

const Menu = (props) => {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false);

  // takes route string as parameter
  const pushToRoute = (route) => {
    props.history.push(route);
    setOpenMenu(false);
  };

  // render each menu item after initial Menu button
  const renderMenuItems = (menudata) => {
    const colorArr = ["#9b5de5", "#f15bb5", "#00BBF9"];

    // let colorCounter = -1;
    return menudata.menu.map((item, index) => {
      // if counter is over 2, resets to 0
      // for colorArr bracket notation to get sequence of colors
      // colorCounter < 2 ? colorCounter++ : (colorCounter = 0);

      // dynamic styles for each menu item
      const itemStyle = {
        top: `${index * 1.8}em`,
        backgroundColor: colorArr[index % colorArr.length],
      };

      return (
        <div
          className="m-item"
          key={item.id}
          style={openMenu ? itemStyle : null}
          onClick={() => pushToRoute(item.route)}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <div className="Menu">
      <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
        Menu
      </div>

      {renderMenuItems(menudata)}
    </div>
  );
};

export default withRouter(Menu);
