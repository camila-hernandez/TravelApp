import "./eventPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function eventPage() {
  return (
    <div>
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Search..." />
        <button type="submit" class="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
      <div class="event-container">
        <div class="event-date">
            <div class="date-number">
                <h1>13</h1>
            </div>
            <div class="month">
                <h2>April</h2>
            </div>
        </div>
        <div class="event-title">
            <h1>Open Mic Event</h1>
            <p>8:00pm - 8:30pm</p>
            <p>Koi Bar | Calgary, AB</p>
        </div>
        <button class="details-button">View</button>
    </div>
    </div>
  );
}
