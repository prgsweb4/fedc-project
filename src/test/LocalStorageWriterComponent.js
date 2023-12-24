
import React from 'react';
const LocalStorageWriterComponent = () => {
    const writeToLocalStorage = (key, value) => {
      localStorage.setItem(key, value);
    };
  
    return (
      <div>
        <button id="writeButton" onClick={() => writeToLocalStorage('exampleKey', 'exampleValue')}>
          Write to Local Storage
        </button>
      </div>
    );
  };
  
  export default LocalStorageWriterComponent;