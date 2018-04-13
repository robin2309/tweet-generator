import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-virtualized-select';

const SelectRetailer = ({ selected, onSelect, retailersList }) => {
  const value = selected && selected.id;
  return (
    <div className='select-retailer'>
      <Select
        placeholder='Select a retailer'
        name='select-retailer-field'
        valueKey='id'
        labelKey='name'
        value={value}
        onChange={onSelect}
        options={retailersList}
      />
    </div>
  );
};

SelectRetailer.propTypes = {
  selected: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  retailersList: PropTypes.array.isRequired
};

export default SelectRetailer;
