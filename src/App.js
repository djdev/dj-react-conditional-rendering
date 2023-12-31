import React from 'react';
import './style.css';

import { getIsLactoseIntolerant } from './utils';

function LactoseIntolerant() {
  return (
    <h1>
      <span role="img" aria-label="brocolli and strawberry">
        🥦🍓
      </span>
    </h1>
  );
}

function LactoseTolerant() {
  return (
    <h1>
      <span role="img" aria-label="milk and cheese">
        🥛🧀
      </span>
    </h1>
  );
}

export default function App() {
  const isLactoseIntolerant = getIsLactoseIntolerant();

  if (isLactoseIntolerant) {
    return <LactoseIntolerant />;
  }

  return <LactoseTolerant />;
}
