import React from "react";
import PropTypes from "prop-types";
import "./list.scss";

export const List = (props) => {
  const { items } = props;
  const listItems = items.map((item) => (
    <li>
      {item.url ? (
        <a href="{item.url}">{item.title}</a>
      ) : (
        <span> Not a link </span>
      )}
    </li>
  ));
  return <ul className="list">{listItems}</ul>;
};

// TODO: fix prop types.
List.propTypes = {};

List.defaultProps = {
  user: null,
};
