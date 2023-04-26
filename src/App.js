import data from './data';
import React from 'react';
import { useState } from 'react';
import List from './List';
import './App.css';

export default function App() {
  const [people, setPeople] = useState(data);
 
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          Clear All
          </button>
      </section>
    </main>
  );
};
