import * as React from 'react';
import styles from './index.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	endIcon?: React.ReactNode;
	full?: boolean;
	startIcon?: React.ReactNode;
}

export const Button = ({
	children,
	endIcon,
	startIcon,
	full = false,
	...props
}: ButtonProps) => (
	<button className={`${styles.button} ${full ? styles.full : ''}`} {...props}>
		{startIcon}
		{children}
		{endIcon}
	</button>
);
