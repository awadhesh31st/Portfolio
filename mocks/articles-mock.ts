import { BasicProps } from '../types/common';

export const ArticlesMock: BasicProps[] = [
  {
    title: `useDebounce`,
    shortDescription: `useDebounce is a technique that delays the execution of a function ...`,
    description: `Debouncing is a technique that delays the execution of a function until a specified time has passed since the last invocation of the function. If the function is called again within that time frame, the timer is reset, and the function execution is delayed again. This is useful when you want to ensure that a function is only executed after a certain "quiet period."`,
    uri: `useDebounce`,
  },
  {
    title: `useThrottle`,
    shortDescription: `useThrottle is a technique that limits the rate at which a function ...`,
    description: `Throttling, as I mentioned in the previous response, is a technique that limits the rate at which a function is executed. It ensures that the function is executed at most once within a specified time interval.`,
    uri: `useThrottle`,
  },
  {
    title: `reduce polyfill`,
    shortDescription: `The reduce() method in JavaScript is a powerful tool for performing ...`,
    description: `The reduce() method in JavaScript is a powerful tool for performing iterative operations on arrays, allowing you to condense an array of values into a single output. While it's a standard feature of modern JavaScript, it's essential to understand how it works under the hood. In this article, we'll delve into the mechanics of the reduce() function and create a polyfill from scratch to gain a deeper appreciation of its functionality. By building our own polyfill, we'll not only enhance our understanding of the language but also learn how to address compatibility issues in older browsers.`,
    uri: `reduce`,
  },
  {
    title: `map polyfill`,
    shortDescription: `In the realm of JavaScript, the map() method stands as a formidable ...`,
    description: `In the realm of JavaScript, the map() method stands as a formidable tool for transforming arrays with grace and efficiency. Although a staple of modern programming, comprehending its inner mechanics fuels a deeper appreciation for its capabilities. This article dives into the enchanting world of the map() function, constructing a polyfill from scratch. By constructing our polyfill, we journey through the heart of array manipulation and cultivate a knack for circumventing compatibility snags in older browsers.`,
    uri: `map`,
  },
];
