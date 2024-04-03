import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowDownShortWide, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./page_Events.css";
import PageEventsSearch from './page_Events_filter'; // Import the component containing search content

export default function Page_Events() {
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [showEventsWrapper, setShowEventsWrapper] = useState(true); // Initially set to true
  const [eventsWrapperMaxHeight, setEventsWrapperMaxHeight] = useState('525px'); // Default max-height
  const [eventsWrapperOverflow, setEventsWrapperOverflow] = useState('auto'); // Default overflow
  const [locationFilter, setLocationFilter] = useState(null); // State to store the selected location filter
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { date: '13', month: 'Apr', title: 'CPSC481 Demonstration', time: '7:00pm - 9:30pm', location: 'University of Calgary', quadrant: 'NW', city: 'Calgary'},
    { date: '14', month: 'Apr', title: 'Free Public Skating', time: '9:00am - 3:00pm', location: 'Bowness Community Association', quadrant: 'NW', city: 'Calgary'},
    { date: '25', month: 'Apr', title: 'I-See-Food: the Musical', time: '2:00pm - 3:00pm', location: '3320 Sunridge Way NE', quadrant: 'NE', city: 'Calgary'},
    { date: '16', month: 'Apr', title: 'Guest Speaker: Ted Lasso', time: '2:00pm - 4:00pm', location: 'Marlborough Mall', quadrant: 'NE', city: 'Calgary'},
    { date: '17', month: 'Apr', title: 'Calgary Tower Tour', time: '2:00pm - 3:00pm', location: 'Calgary Tower', quadrant: 'Downtown', city: 'Calgary'},
    { date: '18', month: 'Apr', title: 'Open Mic Event', time: '8:00pm - 9:00pm', location: 'Koi Bar', quadrant: 'Downtown', city: 'Calgary'},
    { date: '19', month: 'Apr', title: 'Pre-Pre-Pre-Pre-Calgary Stampede', time: 'All Day', location: 'Big Four, Stampede Grounds', quadrant: 'SW', city: 'Calgary'},
    { date: '20', month: 'Apr', title: 'Free Food Giveaway (NOT A SCAM)', time: '2:00pm - 3:00pm', location: 'Sue Higgins Park', quadrant: 'SE', city: 'Calgary'},
    { date: '21', month: 'Apr', title: 'Shawnessy Festival', time: '10:00pm - 7:00pm', location: '22 Midlake Blvd SE', quadrant: 'SW', city: 'Calgary'},
    { date: '22', month: 'Apr', title: 'Hoods Up: Vintage Cars', time: 'April 22 - May 16', location: 'Heritage Park', quadrant: 'SW', city: 'Calgary'},   
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

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleAddEventClick = (event) => {
    // Show popup when add button is clicked
    setShowPopup(true);
    setSelectedEvent(event);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
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
        {events
          .filter(event => {
            // Filter by location if location filter is set
            if (locationFilter && !event.location.includes(locationFilter)) {
              return false;
            }
            // Filter by search query
            return event.title.toLowerCase().includes(searchQuery.toLowerCase());
          })
          .map((event, index) => (
            <div className="event-container" key={index}>
              <div className="event-date">
                <div className="date-number">
                  <h1>{event.date}</h1>
                </div>
                <div className="month">
                  <h2>{event.month}</h2>
                </div>
                <div className="add-event">
                  <button className="add-button" onClick={() => handleAddEventClick(event)}>
                    <FontAwesomeIcon icon={faPlus} className="plusIcon" />
                  </button>
                </div>
              </div>
              <div className="event-title">
                <h1>{event.title}</h1>
                <p>{event.time}</p>
                <p>{event.location} | {event.quadrant}</p>
              </div>
              <button className="details-button">View</button>
            </div>
          ))}
      </div>
      {/* Popup component */}
      {showPopup && (
        <div className="overlay">
          <div className="confirmation-message">
            <div className="confirmation-box">
                <p>Are you sure you want to add "{selectedEvent.title}" to your calendar?</p>
                <button class="confirm-button">Confirm</button>
                <button onClick={() => setShowPopup(false)} class="cancel-button">Cancel</button>
            </div>
        </div>
    </div>
      )}
    </div>
  );
}
