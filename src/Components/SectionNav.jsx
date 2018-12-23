import React from "react";
import { Link } from "react-router-dom";

const SectionNav = function(props) {
  const { section } = props;
  const tabs = [
    ["tech", "TECH", "/tech"],
    ["casual", "CASUAL", "/casual"],
    ["major", "MAJOR", "/major"]
  ];
  const tabComponents = tabs.map(ele => {
    let type = "btn-outline-dark";
    if (section === ele[0]) {
      type = "btn-dark";
    }
    return (
      <Link className={"btn btn-sm mr-4 " + type} to={ele[2]} key={ele[0]} style={{textDecoration: "none"}}>
        {ele[1]}
      </Link>
    );
  });
  return <div className="my-4">{tabComponents}</div>;
};

export default SectionNav;
