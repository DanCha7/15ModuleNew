import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../Slice/todo/todoSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className='content__filter'>
      <button className='btn__fli one' onClick={() => dispatch(setFilter('all'))}>All</button>
      <button className='btn__fli two' onClick={() => dispatch(setFilter('completed'))}>completed</button>
      <button className='btn__fli three' onClick={() => dispatch(setFilter('incomplete'))}>In process</button>
    </div>
  );
};

export default Filter;