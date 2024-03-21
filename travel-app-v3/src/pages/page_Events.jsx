import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowDownShortWide} from "@fortawesome/free-solid-svg-icons";
import "./page_Events.css";
import PageEventsSearch from './page_Events_filter'; // Import the component containing search content

export default function Page_Events() {
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [showEventsWrapper, setShowEventsWrapper] = useState(true); // Initially set to true
  const [eventsWrapperMaxHeight, setEventsWrapperMaxHeight] = useState('525px'); // Default max-height
  const [eventsWrapperOverflow, setEventsWrapperOverflow] = useState('auto'); // Default overflow
  const [locationFilter, setLocationFilter] = useState(null); // State to store the selected location filter

  const events = [
    { date: '13', month: 'April', title: 'Open Mic Event', time: '8:00pm - 8:30pm', location: 'Koi Bar | Calgary, AB' },
    { date: '14', month: 'April', title: 'Calgary Tower Tour', time: '2:00pm - 3:00pm', location: 'Calgary Tower | Calgary, AB' },
    // Add more events here...
  ];

  const toggleSearchContainer = () => {
    setShowSearchContainer(prevState => !prevState);
  };

  const toggleEventsWrapper = () => {
    setShowEventsWrapper(prevState => !prevState);
    // Update max-height and overflow based on showEventsWrapper state
    setEventsWrapperMaxHeight(prevState => (prevState === '525px' ? '150px' : '525px'));
    setEventsWrapperOverflow(prevState => (prevState === 'auto' ? 'hidden' : 'auto'));
  };

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  return (
    <div>
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Search..." />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
      <div className="filter-button-container">
        <button type="submit" className="filter-button" onClick={toggleSearchContainer}>
            Filter&nbsp;
            <FontAwesomeIcon icon={faArrowDownShortWide} />
        </button>
      </div>
      {/* Conditionally render the search container based on state */}
      {showSearchContainer && <PageEventsSearch handleLocationFilter={handleLocationFilter} />}
      <div className="events-wrapper" style={{ maxHeight: eventsWrapperMaxHeight, overflow: eventsWrapperOverflow }}>
        {events.map((event, index) => {
          // Apply location filter if set
          if (locationFilter && !event.location.includes(locationFilter)) {
            return null; // Skip rendering this event if it doesn't match the location filter
          }
          return (
            <div className="event-container" key={index}>
              <div className="event-date">
                <div className="date-number">
                  <h1>{event.date}</h1>
                </div>
                <div className="month">
                  <h2>{event.month}</h2>
                </div>
              </div>
              <div className="event-title">
                <h1>{event.title}</h1>
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>
              <button className="details-button">View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
