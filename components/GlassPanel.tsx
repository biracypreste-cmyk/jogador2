
import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass rounded-[40px] spatial-shadow p-8 ${className}`}>
      {children}
    </div>
  );
};

export default GlassPanel;
