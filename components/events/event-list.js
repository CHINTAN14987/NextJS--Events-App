import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
