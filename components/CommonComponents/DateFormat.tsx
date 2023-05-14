import React from 'react';
import { basicProps } from '../../types/common';

const DateFormat: React.FC<basicProps> = ({ date = '' }) => {
  return date ? (
    <time dateTime={new Date(date).toISOString()}>
      {Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
      }).format(new Date(date))}
    </time>
  ) : (
    <span>Soon</span>
  );
};

export default DateFormat;
