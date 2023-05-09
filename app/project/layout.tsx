import React from 'react';
import { ReactJSXProps } from '../../types/reactJSX';

export const metadata = {
  title: 'Project',
  description: 'Learn about awadhesh projects',
};

const ProjectLayout: React.FC<ReactJSXProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
      {children}
    </div>
  );
};

export default ProjectLayout;
