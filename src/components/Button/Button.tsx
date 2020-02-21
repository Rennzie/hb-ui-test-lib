import React from 'react';
import clsx from 'clsx';
import { styled, makeStyles } from '@material-ui/styles';

const ButtonBase = styled('button')({
  position: 'relative',
  padding: '8px 16px',
  width: 'auto',
  minWidth: 88,
  fontSize: 16,
  border: '0',
  outline: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
  minHeight: '32px',
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
    '&:hover': { backgroundColor: '#02b2d4' },
  },

  secondary: {
    color: '#02b2d4',
    background: 'white',
    fontWeight: 'bold',
    border: '1px solid #02b2d4',
  },

  negative: {
    background: '#db435f',
    color: 'white',
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

  loading: {
    opacity: '0.5',
    pointerEvents: 'none',
    '&:after': {
      // content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      pointerEvents: 'auto',
      cursor: 'not-allowed',
    },
  },

  loadingContents: { opacity: '0' },

  loader: {
    position: 'absolute',
    top: 'calc(50% - 8px)',
    right: 'calc(50% - 8px)',
    borderTop: '4px solid rgba(255, 255, 255, 0.2)',
    borderRight: '4px solid rgba(255, 255, 255, 0.2)',
    borderBottom: '4px solid rgba(255, 255, 255, 0.2)',
    borderLeft: '4px solid #ffffff',
    transform: 'translateZ(0)',
    opacity: '1',
    animation: 'loaderFade 100ms ease-in, loaderSpin 1s infinite linear',
    animationFillMode: 'forwards',
    '&:after': { borderRadius: '50%', width: '20px', height: '20px' },
  },

  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  fullWidth: {
    width: '100%',
  },

  '@keyframes loaderFade': {
    from: '{ opacity: 0 }',
    to: '{ opacity: 1 }',
  },
  '@keyframes loaderSpin': {
    from: '{ transform: rotate(0) }',
    to: '{ transform: rotate(360deg) }',
  },
});

export interface ButtonProps {
  children: React.ReactChild;
  theme: 'primary' | 'secondary' | 'negative' | 'link';
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
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <ButtonContents className={clsx({ [classes.loading]: loading })}>
        {title || children}
      </ButtonContents>
      {loading && <div className={classes.loader} />}
    </ButtonBase>
  );
}

export default Button;
