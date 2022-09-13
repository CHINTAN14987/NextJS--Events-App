import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummyData";
import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";

const EventDetailpage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>;
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailpage;
