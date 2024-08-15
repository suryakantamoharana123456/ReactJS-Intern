import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const userInput = e.target.value;
    setNumber(userInput);

    if (userInput < 0) {
      setMessage('Enter a positive value');
    } else if (userInput % 2 === 0) {
      const nextEvenNumbers = [
        parseInt(userInput) + 2,
        parseInt(userInput) + 4,
        parseInt(userInput) + 6,
      ];
      setMessage(`Next 3 even numbers: ${nextEvenNumbers.join(', ')}`);
    } else {
      const nextOddNumbers = [
        parseInt(userInput) + 2,
        parseInt(userInput) + 4,
        parseInt(userInput) + 6,
      ];
setMessage(`Next 3 odd numbers: ${nextOddNumbers.join(', ')}`);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <p>{message}</p>
    </div>
  );
}

export default App;
