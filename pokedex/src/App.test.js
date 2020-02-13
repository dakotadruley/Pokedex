import React from 'react';
import App from './App';
import Header from './Header.js';
// import PokeItem from './PokeItem';
// import PokeList from './PokeList';
import renderer from 'react-test-renderer';

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Header.js correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// test('renders PokeItem.js correctly', () => {
//   const tree = renderer
//     .create(<PokeItem array={[]}/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });
// Learn how to pass props into tests