import React from "react";
import PropTypes from "prop-types";
import { Header } from "../header/header";
import { Heading } from '../heading/heading';
import { BodyText } from "../body-text/body-text";
import { List } from "../list/list";
import data from "./data.json";
import "./page.scss";

//TODO: replace with heading component.
export const Page = () => (
  <>
    <Header />
    <div class="page-layout">
      <BodyText />
      <Heading
        title = {data.heading.title}
        headingLevel = {data.heading.headingLevel}
      />
      <List items={data.list_items}/>
    </div>
  </>
);
