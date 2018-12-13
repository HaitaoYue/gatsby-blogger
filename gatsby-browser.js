import React from "react";
import "typeface-roboto";
import withRoot from "./src/withRoot";

const WithRoot = withRoot(props => props.children);

export const wrapRootElement = ({ element }) => {
  return <WithRoot key={Math.random()}>{element}</WithRoot>;
};
