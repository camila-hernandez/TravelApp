import "./page_Events.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function page_Events_filter() {
  const [inclusiveFilters, setInclusiveFilters] = useState({
    when: [],
    what: [],
    where: [],
    ages: [],
    admission: []
  });

  const toggleFilter = (type, value) => {
    setInclusiveFilters(prevState => {
      // Check if the value is already selected
      const isSelected = prevState[type].includes(value);

      if (isSelected) {
        // If already selected, remove the value
        return {
          ...prevState,
          [type]: prevState[type].filter(item => item !== value)
        };
      } else {
        // If not selected, add the value
        return {
          ...prevState,
          [type]: [...prevState[type], value]
        };
      }
    });
  };

  const [exclusiveFilters, setExclusiveFilters] = useState({
    when: "Today",
    // what: "All",
    where: "All",
    ages: "All Ages",
    admission: "All"
  });

  const handleFilterClick = (type, value) => {
    setExclusiveFilters(prevState => ({
      ...prevState,
      [type]: value
    }));
  };
  
  const [activeItems, setActiveItems] = useState([]);

  const handleItemClick = (item) => {
    if (activeItems.includes(item)) {
      // If the item is already active, remove it from the activeItems array
      setActiveItems(activeItems.filter(activeItem => activeItem !== item));
    } else {
      // If the item is not active, add it to the activeItems array
      setActiveItems([...activeItems, item]);
    }
  };
  
  
  return (
    <div>
      <div className="filter-container">
        <div className="filter-type">
            <h1>WHEN</h1>
            <div className="filter-list">


            <u className={exclusiveFilters.when === "Today" ? "active" : ""}        onClick={() => handleFilterClick("when", "Today")}>Today</u>
            <u className={exclusiveFilters.when === "Tomorrow" ? "active" : ""}        onClick={() => handleFilterClick("when", "Tomorrow")}>Tomorrow</u>
            <u className={exclusiveFilters.when === "This Week" ? "active" : ""}        onClick={() => handleFilterClick("when", "This Week")}>This Week</u>
            <u className={exclusiveFilters.when === "Next Week" ? "active" : ""}        onClick={() => handleFilterClick("when", "Next Week")}>Next Week</u>
            <u className={exclusiveFilters.when === "Past" ? "active" : ""}        onClick={() => handleFilterClick("when", "Past")}>Past Events</u>
            <u className={exclusiveFilters.when === "Custom Dates" ? "active" : ""}        onClick={() => handleFilterClick("when", "Custom Dates")}>Custom Dates</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>WHAT</h1>
            <div className="filter-list">
              <u  className={inclusiveFilters.what.includes("Music") ? "active" : ""}   onClick={() => toggleFilter("what", "Music")}> Music </u>
              <u  className={inclusiveFilters.what.includes("Sports") ? "active" : ""}   onClick={() => toggleFilter("what", "Sports")}> Sports </u>
              <u  className={inclusiveFilters.what.includes("Theatre") ? "active" : ""}   onClick={() => toggleFilter("what", "Theatre")}> Theatre </u>
              <u  className={inclusiveFilters.what.includes("Culinary") ? "active" : ""}   onClick={() => toggleFilter("what", "Culinary")}> Culinary </u>
              <u  className={inclusiveFilters.what.includes("Markets") ? "active" : ""}   onClick={() => toggleFilter("what", "Markets")}> Markets </u>
              <u  className={inclusiveFilters.what.includes("Others") ? "active" : ""}   onClick={() => toggleFilter("what", "Others")}> Others </u>
            </div>
        </div>

        <div className="filter-type">
            <h1>WHERE</h1>
            <div className="filter-list">
                <u className={exclusiveFilters.where === "All" ? "active" : ""}       onClick={() => handleFilterClick("where", "All")}>All</u>
                <u className={exclusiveFilters.where === "Downtown" ? "active" : ""}  onClick={() => handleFilterClick("where", "Downtown")}>Downtown</u>
                <u className={exclusiveFilters.where === "NW" ? "active" : ""}        onClick={() => handleFilterClick("where", "NW")}>NW</u>
                <u className={exclusiveFilters.where === "NE" ? "active" : ""}        onClick={() => handleFilterClick("where", "NE")}>NE</u>
                <u className={exclusiveFilters.where === "SW" ? "active" : ""}        onClick={() => handleFilterClick("where", "SW")}>SW</u>
                <u className={exclusiveFilters.where === "SE" ? "active" : ""}        onClick={() => handleFilterClick("where", "SE")}>SE</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>AGES</h1>
            <div className="filter-list">
                <u className={exclusiveFilters.ages === "All Ages" ? "active" : ""} onClick={() => handleFilterClick("ages", "All Ages")}>All Ages</u>
                <u className={exclusiveFilters.ages === "Family Friendly" ? "active" : ""} onClick={() => handleFilterClick("ages", "Family Friendly")}>Family Friendly</u>
                <u className={exclusiveFilters.ages === "18+" ? "active" : ""} onClick={() => handleFilterClick("ages", "18+")}>18+</u>
            </div>
        </div>

        <div className="filter-type">
            <h1>ADMISSION</h1>
            <div className="filter-list">
                <u className={exclusiveFilters.admission === "All" ? "active" : ""} onClick={() => handleFilterClick("admission", "All")}>All</u>
                <u className={exclusiveFilters.admission === "Ticketed" ? "active" : ""} onClick={() => handleFilterClick("admission", "Ticketed")}>Ticketed</u>
                <u className={exclusiveFilters.admission === "Free" ? "active" : ""} onClick={() => handleFilterClick("admission", "Free")}>Free</u>
            </div>
        </div>
      </div>


    </div>
  );
}
