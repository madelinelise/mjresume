import React from "react";
import data from "./data.json";
import "./page.scss";
import { Header } from "../header/header";
import { Heading } from "../heading/heading";
import { BodyText } from "../body-text/body-text";
import { List } from "../list/list";
import { CTAlist } from "../cta-list/cta-list";
import { Timeline } from "../timeline/timeline";
import { Contact } from "../contact/contact";

export const Page = () => (
  <>
    <Header />
    <div class="page-layout">
      <BodyText description={data.bodyText.description} />
      <Heading
        title={data.heading.title}
        headingLevel={data.heading.headingLevel}
      />
      <List items={data.project_items} />
      <Heading
        title={data.heading_exp.title}
        headingLevel={data.heading_exp.headingLevel}
      />
      <Timeline jobs={data.jobs} />
      <CTAlist items={data.cta_items} />
      <Heading
        title={data.heading_skills.title}
        headingLevel={data.heading_skills.headingLevel}
      />
      <List items={data.skill_items} />
      <Contact image={data.contact.image} items={data.contact.items} />
    </div>
  </>
);
