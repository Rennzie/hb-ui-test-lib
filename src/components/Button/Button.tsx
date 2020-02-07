import React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

export interface ButtonProps {
  children: React.ReactChild;
  theme: 'primary' | 'secondary' | 'negative' | 'back' | 'link';
  size: 'large' | 'small';
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  wide: boolean;
  loading: boolean;
}
export function Button({
  children,
  disabled = false,
  size = 'large',
  theme = 'primary',
  className,
  onClick,
  wide = false,
  type = 'button',
  loading = false,
}: ButtonProps) {
  const composedClassName = classNames(
    className,
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.loading]: loading,
      [styles.disabled]: disabled,
      [styles.wide]: wide,
    },
  );
  return (
    <button
      className={composedClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <div className={styles.contents}>{children}</div>
      {loading && <div className={styles.loader} />}
    </button>
  );
}
