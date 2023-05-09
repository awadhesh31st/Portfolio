export type ColorType =
  | 'yellow'
  | 'pink'
  | 'lightGreen'
  | 'blue'
  | 'purple'
  | 'carrot'
  | 'red';
export const ColorList = [
  'yellow',
  'pink',
  'lightGreen',
  'blue',
  'purple',
  'carrot',
  'red',
];

export const getRandomElement = <T>(arr: T[]): T => {
  const randomIndex: number = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
