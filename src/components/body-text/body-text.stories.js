import React from "react";
import { BodyText } from "./body-text";
import data from './data.json';

// This default export determines where you story goes in the story list
export default {
  title: "Components/BodyText",
  component: BodyText,
};

const Template = (args) => <BodyText description={data.description} />;

export const BodyTextStory = Template.bind({});
