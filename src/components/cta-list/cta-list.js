import React from "react";
import PropTypes from "prop-types";
import "./cta-list.scss";
import { CircleCTA } from "../circle-cta/circle-cta";

export const CTAlist = (props) => {
  const { items } = props;
  const CTAlistItems = items.map((item) => (
    <CircleCTA stat={item.stat} description={item.description} />
  ));
  return <ul className="list">{CTAlistItems}</ul>;
};

// TODO: fix prop types.
CTAlist.propTypes = {};
