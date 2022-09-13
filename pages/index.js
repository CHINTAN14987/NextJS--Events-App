import React from "react";
import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/events/event-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return <EventList items={featuredEvents} />;
};

export default HomePage;
