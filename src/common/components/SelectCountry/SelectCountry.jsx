import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectCountry = ({ selected, onSelect, countriesList }) => {
  const value = selected && selected.value;
  return (
    <div className='select-country'>
      <Select
        placeholder='Select a country'
        name='select-country-field'
        value={value}
        onChange={onSelect}
        options={countriesList}
      />
    </div>
  );
};

SelectCountry.propTypes = {
  selected: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  countriesList: PropTypes.array.isRequired
};

export default SelectCountry;
