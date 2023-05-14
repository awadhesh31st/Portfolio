import React from 'react';
import { StyleHtmlProps } from '../../types/common';

const StyleHtml: React.FC<StyleHtmlProps> = ({ content = '' }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default StyleHtml;
