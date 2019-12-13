import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'

// match suggestions for input value.
const getSuggestions = (value, truckList) => {
  const trimValue = value.trim()
  const escapedValue = trimValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  if (escapedValue === '') return []

  const regex = new RegExp('\\b' + escapedValue, 'i');
  return truckList.filter(truck => regex.test(getSuggestionValue(truck)));
};

// When suggestion is clicked, populate the input based on the clicked suggestion
const getSuggestionValue = (suggestion) => suggestion.name

// highlight match search input
const renderSuggestion = (suggestion, { query }) => {
  const suggestionText = suggestion.name;
  const matches = AutosuggestHighlightMatch(suggestionText, query);
  const parts = AutosuggestHighlightParse(suggestionText, matches);
  return (
    <span className="suggestion__content">
      <span className="suggestion__content-name">
        { parts.map((part, idx) => {
            const className = part.highlight ? 'highlight' : null;
            return (
              <span className={className} key={idx}>{part.text}</span>
            );
          })
        }
        <div className="suggestion__content-address">{suggestion.address}</div>
      </span>
    </span>
  );
}


const SearchTruck = ({ trucks, searchTruck, radius, truckList }) => {

  const [ value, setValue ] = useState('')
  const [suggestions, setSuggestion] = useState([])

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestion(getSuggestions(value, truckList))
  };

  const onSuggestionsClearRequested = () => {
      setSuggestion([])
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    searchTruck(trucks, value.toLowerCase(), radius)
  }

  const handleClearInput = () => {
    setValue('')
  }

  const inputProps = {
    placeholder: 'Enter food or truck name',
    value,
    onChange: onChange,
    onSubmit: handleSubmit
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button className="form-search--btn" type="submit">Search</button>
      <button className="input-btn-clear food-clear" onClick={handleClearInput}>&#10006;</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  const { trucks, radius, truckList } = state.map
  return { trucks, radius, truckList }
};

export default connect( mapStateToProps, actions )(SearchTruck);