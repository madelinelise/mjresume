import React from "react";
import { BodyText } from "./body-text";
import data from "./data.json";

export default {
  title: "Components/BodyText",
  component: BodyText,
};

const Template = (args) => <BodyText description={data.description} />;

export const BodyTextStory = Template.bind({});
