import React from "react";

import "./Column.css";

const Column = (props) => {
  let columns = "col-1-of-2";

  if (props.columns === "col-1-of-3") columns = props.columns;

  return <div className={columns}>{props.children}</div>;
};

export default Column;
