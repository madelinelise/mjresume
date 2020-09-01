import React from "react";
import { Contact } from "./contact";
import data from "./data.json";

export default {
  title: "Components/Contact",
  component: Contact,
};

const Template = (args) => <Contact image={data.image} items={data.items} />;

export const ContactStory = Template.bind({});
