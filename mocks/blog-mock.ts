import { BlogProps } from '../types/common';

export const BlogMock: BlogProps = {
  useDebounce: {
    hookTitle: 'useDebounce',
    hookDescription: `Exploring the useDebounce Hook in React: Efficiently Handling Input Delays`,
    descriptionTitle: 'Description',
    description: `The useDebounce hook is designed to delay the execution of a function until after a specified interval of inactivity. This is incredibly useful for scenarios where you want to reduce the frequency of function calls triggered by user input. The hook takes in a value and a delay time as parameters and returns a debounced value that reflects the input after the delay.`,
    returnTitle: 'Return Value',
    returnDescription:
      'The hook returns the debounced function that you can use in your component.',
  },
  useThrottle: {
    hookTitle: 'useThrottle',
    hookDescription: `Exploring the useThrottle Hook in React: Efficiently Handling Input Delays`,
    descriptionTitle: 'Description',
    description: `The useThrottle hook is similar to useDebounce but works slightly differently. It limits the rate at which a function is executed by ensuring that it is called at most once within a specified time interval. This is helpful when you want to restrict the frequency of function calls, such as for smooth animations or tracking scroll events.`,
    returnTitle: 'Return Value',
    returnDescription:
      'The hook returns the throttled function that you can use in your component.',
  },
  reduce: {
    hookTitle: 'reduce()',
    hookDescription: `Crafting a JavaScript Reduce Polyfill: Simplifying Array Manipulation`,
    descriptionTitle: 'Description',
    description: `The reduce() method in JavaScript is a powerful tool for performing iterative operations on arrays, allowing you to condense an array of values into a single output. While it's a standard feature of modern JavaScript, it's essential to understand how it works under the hood. In this article, we'll delve into the mechanics of the reduce() function and create a polyfill from scratch to gain a deeper appreciation of its functionality. By building our own polyfill, we'll not only enhance our understanding of the language but also learn how to address compatibility issues in older browsers.`,
    returnTitle: 'Return Value',
    returnDescription: `The reduce() function returns a single value that accumulates the results of the callback function's operations on each element of the array`,
  },
  map: {
    hookTitle: 'map()',
    hookDescription: `Unveiling the Magic of JavaScript Map Polyfill: Transforming Arrays Like a Pro`,
    descriptionTitle: 'Description',
    description: `n the realm of JavaScript, the map() method stands as a formidable tool for transforming arrays with grace and efficiency. Although a staple of modern programming, comprehending its inner mechanics fuels a deeper appreciation for its capabilities. This article dives into the enchanting world of the map() function, constructing a polyfill from scratch. By constructing our polyfill, we journey through the heart of array manipulation and cultivate a knack for circumventing compatibility snags in older browsers.`,
    returnTitle: 'Return Value',
    returnDescription: `The map() function returns a new array containing the results of applying a given callback function to each element of the original array.`,
  },
};
