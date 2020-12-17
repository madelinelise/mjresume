import React from "react";
import PropTypes from "prop-types";
import "./contact.scss";
import { Heading } from "../heading/heading";

export const Contact = (props) => {
  const { image, items } = props;
  const ContactItems = items.map((item) => (
    <li>
      {item.url ? (
        <a href={`${item.url}`}>{item.title}</a>
      ) : (
        <span>{item.title}</span>
      )}
    </li>
  ));
  return (
    <div class="contact">
      <div class="contact--left">
        <img src={`${image}`} alt="Madeline Jensen"/>
      </div>
      <div class="contact--right">
        <Heading title={"Reach Out"} headingLevel={"h2"} />
        <ul>{ContactItems}</ul>
      </div>
    </div>
  );
};

Contact.propTypes = {
  image: PropTypes.string.isRequired
};
