import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummyData";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/events/error-alert";
const FilteredEventsPage = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">...Loading</p>;
  }
  const FilteredYear = filteredData[0];
  const FilteredMonth = filteredData[1];

  const FilYear = +FilteredYear;
  const FilMonth = +FilteredMonth;
  if (
    isNaN(FilYear) ||
    isNaN(FilMonth) ||
    FilYear > 2030 ||
    FilYear < 2021 ||
    FilMonth < 1 ||
    FilMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter, Please Ajdust Your Values</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: FilYear,
    month: FilMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events Found...!</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(FilYear, FilMonth - 0);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
