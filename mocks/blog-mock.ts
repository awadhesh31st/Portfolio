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
};
