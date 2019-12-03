import React from 'react';
import './search-filter.styles.css';

const SearchFilter = ({ filterLogic }) => (
  <div>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
        Sushi
      </li>
      <li className="filter" onClick={filterLogic}>
        Bread
      </li>
      <li className="filter" onClick={filterLogic}>
        Risotto
      </li>
      <li className="filter" onClick={filterLogic}>
        Pasta
      </li>
      <li className="filter" onClick={filterLogic}>
        Soup
      </li>
      <li className="filter" onClick={filterLogic}>
        Dessert
      </li>
      <li className="filter" onClick={filterLogic}>
        Salad
      </li>
      <li className="filter" onClick={filterLogic}>
        Eggs
      </li>
      <li className="filter" onClick={filterLogic}>
        Pizza
      </li>
      <li className="filter" onClick={filterLogic}>
        Fish
      </li>
      <li className="filter" onClick={filterLogic}>
        Grill
      </li>
    </ul>
  </div>
);

export default SearchFilter;