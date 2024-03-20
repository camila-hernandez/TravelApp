import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowDownShortWide} from "@fortawesome/free-solid-svg-icons";
import "./page_Events.css";

export default function Page_Events() {
  return (
    <div>
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Search..." />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
      <div className="filter-button-container">
        <button type="submit" className="filter-button">
            Filter&nbsp;
            <FontAwesomeIcon icon={faArrowDownShortWide} />
        </button>
      </div>
      <div className="events-wrapper">
        <div className="event-container">
            <div className="event-date">
                <div className="date-number">
                    <h1>13</h1>
                </div>
                <div className="month">
                    <h2>April</h2>
                </div>
            </div>
            <div className="event-title">
                <h1>Open Mic Event</h1>
                <p>8:00pm - 8:30pm</p>
                <p>Koi Bar | Calgary, AB</p>
            </div>
            <button className="details-button">View</button>
        </div>
        <div className="event-container">
            <div className="event-date">
                <div className="date-number">
                    <h1>14</h1>
                </div>
                <div className="month">
                    <h2>April</h2>
                </div>
            </div>
            <div className="event-title">
                <h1>Calgary Tower Tour</h1>
                <p>2:00pm - 3:00pm</p>
                <p>Calgary Tower | Calgary, AB</p>
            </div>
            <button className="details-button">View</button>
        </div>
        <div className="event-container">
            <div className="event-date">
                <div className="date-number">
                    <h1>16</h1>
                </div>
                <div className="month">
                    <h2>April</h2>
                </div>
            </div>
            <div className="event-title">
                <h1>Calgary Flames Game</h1>
                <p>7:00pm - 10:00pm</p>
                <p>Scotiabank Saddledome | Calgary, AB</p>
            </div>
            <button className="details-button">View</button>
        </div>
        {/* Repeat the event-container for each event */}
      </div>
    </div>
  );
}
