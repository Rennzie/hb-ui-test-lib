import React from 'react';

export interface ButtonProps {
  children: React.ReactChild;
  /** The button size */
  size?: 'small' | 'large';
  /** margin around the button */
  margin?: number;
  /** What is dispalyed inside the button */
  title: string;
}

function Button({
  size = 'small',
  margin = 12,
  title = 'button',
}: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        margin,
        border: 'none',
        padding: size === 'small' ? '8px 12px' : '12px 16px',
        background: 'hotpink',
        borderRadius: '4px',
        color: 'white',
      }}
    >
      {title}
    </button>
  );
}

export default Button;
