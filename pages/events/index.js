import React from "react";
import { getAllEvents } from "../../dummyData";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";

const Events = () => {
  const router = useRouter();
  const events = getAllEvents();
  function findEventshandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }
  return (
    <>
      <EventSearch onSearch={findEventshandler} />
      <EventList items={events} />
    </>
  );
};

export default Events;
