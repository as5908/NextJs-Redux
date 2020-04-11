import React, { useState } from 'react';
import { RootState } from '../store/reducers';
import { connect, useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from '../store/actions';
import { Dispatch } from 'redux';
import axios from 'axios';

const Home = (props) => {
  console.log(props);
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrementAction());
        }}
      >
        -
      </button>
      {counter}
    </div>
  );
};

export default Home;
