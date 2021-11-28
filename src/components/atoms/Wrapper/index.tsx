import * as React from 'react';
import styles from './index.module.css';

interface WrapperProps {
	children?: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => (
	<div className={styles.wrapper}>{children}</div>
);
