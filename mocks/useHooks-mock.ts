import { LayoutProps } from '../types/common';

export const UseHooksMock: LayoutProps[] = [
  {
    title: 'useDebounce',
    shortDescription:
      'useDebounce is a technique that delays the execution of a function ...',
    description:
      'Debouncing is a technique that delays the execution of a function until a specified time has passed since the last invocation of the function. If the function is called again within that time frame, the timer is reset, and the function execution is delayed again. This is useful when you want to ensure that a function is only executed after a certain "quiet period."',
  },
  {
    title: 'useThrottle',
    shortDescription:
      'useThrottle is a technique that limits the rate at which a function ...',
    description:
      'Throttling, as I mentioned in the previous response, is a technique that limits the rate at which a function is executed. It ensures that the function is executed at most once within a specified time interval.',
  },
];
