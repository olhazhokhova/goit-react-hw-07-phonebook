import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
