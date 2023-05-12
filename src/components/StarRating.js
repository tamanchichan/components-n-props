import { useState } from 'react';
import Star from './Star';

function StarRating() {
  const [rate, setRate] = useState(0);
  
  const handleRate = (i) => {
    setRate(i + 1);
  }
  
  return (
    <>
      <div className='stars'>
        {[...new Array(5)].map((v, i) => (
          <div className={i < rate ? 'star filled' : 'star'} key={i}>
            <Star
              handleRate={() => handleRate(i)}
              i={i}
            />
          </div>
        ))}
      </div>
      <div className='rating'>  
        {rate === 1 && <h2>Very Bad</h2>}
        {rate === 2 && <h2>Bad</h2>}
        {rate === 3 && <h2>Ok</h2>}
        {rate === 4 && <h2>Good</h2>}
        {rate === 5 && <h2>Very Good</h2>}
      </div>
    </>
  );
};

export default StarRating;