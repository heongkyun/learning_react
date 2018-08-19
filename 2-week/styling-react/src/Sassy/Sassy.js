// file: src/Sassy/Sassy.js
import React from 'react';
import './Sassy.scss';

const Sassy = () => {
  return (
    <div className="Sassy">
      <div className="nested">
        <div className="very-nested">
          뿅
        </div>
      </div>
    </div>
  );
};

export default Sassy;