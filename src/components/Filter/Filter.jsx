import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { changeFilter } from 'redux/slice';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilteredContacts);

  const inputChange = event => {
    const changeValue = event.target.value;
    dispatch(changeFilter(changeValue));
  };

  return (
    <div className={style.filter}>
      <label>
        <p>Find contacts by name</p>
        <input
          className={style.input}
          type="text"
          name="number"
          value={value}
          onChange={inputChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  inputChange: PropTypes.func,
};

export default Filter;
