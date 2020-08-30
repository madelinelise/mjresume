import React from "react";
import { CTAlist } from "./cta-list";
import data from "./data.json";

export default {
  title: "Components/CTAlist",
  component: CTAlist,
};

const Template = (args) => <CTAlist items={data.items} />;

export const CTAlistStory = Template.bind({});
