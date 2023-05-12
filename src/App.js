import React, { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header></header>
      <main>
        <StarRating />
        <Dialog isOpen={isOpen} handleDialog={handleDialog} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
