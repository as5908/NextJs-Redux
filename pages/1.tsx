import React, { useState } from 'react';
import { RootState } from '../store/reducers';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../store/actions';
import { Dispatch } from 'redux';
import axios from 'axios';

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <button
        onClick={() => {
          props.onInc();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.onDec();
        }}
      >
        -
      </button>
      {props.count}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onInc: () => dispatch<any>(incrementAction()),
    onDec: () => dispatch<any>(decrementAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
