import React from "react";
import PropTypes from "prop-types";
import { Header } from "../header/header";
import { BodyText } from "../body-text/body-text";
import { List } from "../list/list";
import "./page.scss";

//TODO: replace with heading component.
export const Page = () => (
  <>
    <Header />
    <div class="page-layout">
      <BodyText />
      <h2> Lorem Ipsum Fake Title for Now</h2>
      <List/>
    </div>
  </>
);
