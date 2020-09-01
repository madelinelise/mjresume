import React from "react";
import "./timeline.scss";

export const Timeline = (props) => {
  const { jobs } = props;
  const listItems = jobs.map((job) => (
    <li class="timeline-item">
      <div class="timeline-info">
        <span>{job.dates}</span>
      </div>
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3 class="timeline-title">{job.title}</h3>
        <h3 class="timeline-company">{job.company}</h3>
        <p>{job.description}</p>
      </div>
    </li>
  ));
  return (
    <ul class="timeline">
      <span> {listItems} </span>
    </ul>
  );
};
