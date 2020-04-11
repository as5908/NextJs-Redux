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
          props.incrementAction();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.decrementAction();
        }}
      >
        -
      </button>
      {props.count}
    </div>
  );
};

Home.getInitialProps = async (context) => {
  console.log('HOME');
  // const { data } = await axios.get(
  //   `https://jsonplaceholder.typicode.com/comments?postId=1`
  // );
  // //console.log(data);
  // return { comments: data };
  return { a: 1 };
};

const mapStateToProps = (state: RootState) => {
  return {
    count: state.counter.value,
  };
};

export default connect(mapStateToProps, { incrementAction, decrementAction })(
  Home
);
