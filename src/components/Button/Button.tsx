import React from 'react';
import clsx from 'clsx';
import { styled, makeStyles } from '@material-ui/styles';

const ButtonBase = styled('button')({
  position: 'relative',
  padding: '8px 16px',
  width: 'auto',
  minWidth: 88,
  fontSize: 16,
  fontFamily: 'Helvetica',
  border: '0',
  outline: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  transition: 'opacity 100ms ease-in',
  fontWeight: 'bold',
});

const ButtonContents = styled('span')({
  transition: 'opacity 100ms ease-in',
});

const useStyles = makeStyles({
  primary: {
    backgroundColor: '#00c8ed',
    color: 'white',
    border: '1px solid #00c8ed',
    '&:hover': { backgroundColor: '#02b2d4' },
    '&:active': {
      color: '#02b2d4',
      background: 'white',
      border: '1px solid #02b2d4',
    },
  },

  secondary: {
    color: '#00c8ed',
    backgroundColor: 'white',
    border: '1px solid #00c8ed',
    '&:hover': { borderColor: '#02b2d4', color: '#02b2d4' },
    '&:active': {
      color: 'white',
      background: '#00c8ed',
      border: '1px solid #00c8ed',
    },
  },

  link: {
    background: 'transparent',
    color: '#02b2d4',
    cursor: 'pointer',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '0',
    padding: '0',
    '&:hover': { textDecoration: 'underline' },
  },

  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  fullWidth: {
    width: '100%',
  },

  loading: {
    opacity: '0.5',
    pointerEvents: 'none',
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  },

  loadingContents: { opacity: '0' },

  // TODO: fix the loader symbol

  loader: {
    position: 'absolute',
    top: 'calc(50% - 8px)',
    right: 'calc(50% - 8px)',
    borderTop: '3px solid rgba(255, 255, 255, 0.2)',
    borderRight: '3px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '3px solid rgba(255, 255, 255, 0.2)',
    borderLeft: '3px solid #ffffff',
    transform: 'translateZ(0)',
    opacity: '0',
    animation: '$loaderFade 100ms ease-in, $loaderSpin 1s infinite linear',
    animationFillMode: 'forwards',
    // '&:after': { borderRadius: '50%', width: '20px', height: '20px' },
  },

  '@keyframes loaderFade': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes loaderSpin': {
    from: { transform: 'rotate(0)' },
    to: { transform: 'rotate(360deg)' },
  },
});

export interface ButtonProps {
  children: React.ReactChild;
  theme: 'primary' | 'secondary' | 'link';
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  fullWidth: boolean;
  loading: boolean;
  title: string;
}
export function Button({
  children,
  disabled = false,
  theme = 'primary',
  className,
  onClick,
  fullWidth = false,
  type = 'button',
  loading = false,
  title,
}: ButtonProps) {
  const classes = useStyles();

  return (
    <ButtonBase
      className={clsx(className, classes[theme], {
        [classes.loading]: loading,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
      })}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      data-testid="button"
    >
      <ButtonContents className={clsx({ [classes.loadingContents]: loading })}>
        {title || children}
      </ButtonContents>
      {loading && (
        <div data-testid="circular-loader" className={classes.loader} />
      )}
    </ButtonBase>
  );
}

export default Button;
