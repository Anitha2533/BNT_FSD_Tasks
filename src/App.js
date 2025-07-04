import React from 'react';
import TrafficLight from './components/TrafficLight';
import MultiTabForm from './components/MultiTabForm';
import TextTools from './components/TextTools';
import StarRating from './components/StarRating';
import PhoneFormatter from './components/PhoneFormatter';

function App() {
  return (
    <div className="App">
      <h1>React Beginner Components</h1>
      <TrafficLight />
      <hr />
      <MultiTabForm />
      <hr />
      <TextTools />
      <hr />
      <StarRating />
      <hr />
      <PhoneFormatter />
    </div>
  );
}

export default App;
