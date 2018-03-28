import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../actions/counter'

import { Button } from 'antd';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home! Below is a sample of increment and decrement actions in Redux.</p>
    <p>Count: {props.count}</p>
    <p>
      <Button type="primary" onClick={props.increment} disabled={props.isIncrementing}>Increment</Button>
      <Button type="secondary" onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</Button>
    </p>

    <p>
      <Button type="primary" onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</Button>
      <Button type="secondary" onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</Button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)