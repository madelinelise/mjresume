import React from "react";
import "./cta-list.scss";
import { CircleCTA } from "../circle-cta/circle-cta";

export const CTAlist = (props) => {
  const { items } = props;
  const CTAlistItems = items.map((item) => (
    <CircleCTA stat={item.stat} description={item.description} />
  ));
  return <ul className="cta-list">{CTAlistItems}</ul>;
};
