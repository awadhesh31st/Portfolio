import { BasicProps } from '../types/common';

export const UseHooksMock: BasicProps[] = [
  {
    title: 'useDebounce',
    shortDescription:
      'useDebounce is a technique that delays the execution of a function ...',
    description:
      'Debouncing is a technique that delays the execution of a function until a specified time has passed since the last invocation of the function. If the function is called again within that time frame, the timer is reset, and the function execution is delayed again. This is useful when you want to ensure that a function is only executed after a certain "quiet period."',
    code: `
      import React, { useState, useEffect } from 'react';

      function useDebouncedValue(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
      
        useEffect(() => {
          const debounceTimer = setTimeout(() => {
            setDebouncedValue(value);
          }, delay);
      
          return () => {
            clearTimeout(debounceTimer);
          };
        }, [value, delay]);
      
        return debouncedValue;
      }
      
      function App() {
        const [inputValue, setInputValue] = useState('');
        const debouncedInputValue = useDebouncedValue(inputValue, 300);
      
        const handleChange = (event) => {
          setInputValue(event.target.value);
        };
      
        return (
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type something..."
            />
            <p>Debounced Value: {debouncedInputValue}</p>
          </div>
        );
      }
      
      export default App;
      `,
  },
  {
    title: 'useThrottle',
    shortDescription:
      'useThrottle is a technique that limits the rate at which a function ...',
    description:
      'Throttling, as I mentioned in the previous response, is a technique that limits the rate at which a function is executed. It ensures that the function is executed at most once within a specified time interval.',
  },
];
