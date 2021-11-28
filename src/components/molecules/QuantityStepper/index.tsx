import * as React from 'react';
import { ReactComponent as IconMinus } from 'assets/icons/icon-minus.svg';
import { ReactComponent as IconPlus } from 'assets/icons/icon-plus.svg';
import styles from './index.module.css';

export const QuantityStepper = () => {
	return (
		<div className={styles.stepper}>
			<button aria-label="-">
				<IconMinus fill="var(--c-orange)" />
			</button>
			<span className={styles.quantity}>1</span>
			<button aria-label="+">
				<IconPlus />
			</button>
		</div>
	);
};
