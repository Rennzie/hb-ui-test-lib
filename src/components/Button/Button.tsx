import React from 'react';

export interface IProps {
  children: React.ReactChild;
  /** The button size */
  size: 'small' | 'large';
  margin: any;
}

function Button({ children, size, margin = 12 }: IProps) {
  return (
    <button
      style={{
        margin,
        border: 'none',
        padding: size === 'small' ? '8px 12px' : '12px 16px',
        background: 'hotpink',
        borderRadius: '4px',
        color: 'white',
      }}
    >
      {children}
    </button>
  );
}

export default Button;
