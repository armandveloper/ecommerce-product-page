import * as React from 'react';
import { ReactComponent as IconMinus } from 'assets/icons/icon-minus.svg';
import { ReactComponent as IconPlus } from 'assets/icons/icon-plus.svg';
import styles from './index.module.css';

export const QuantityStepper = () => {
	const [quantity, setQuantity] = React.useState(1);

	const handleMinus = () => setQuantity(quantity > 1 ? quantity - 1 : quantity);

	const handlePlus = () => setQuantity(quantity + 1);

	return (
		<div className={styles.stepper}>
			<button aria-label="-" onClick={handleMinus} disabled={quantity === 1}>
				<IconMinus fill="var(--c-orange)" />
			</button>
			<span className={styles.quantity}>{quantity}</span>
			<button aria-label="+" onClick={handlePlus}>
				<IconPlus />
			</button>
		</div>
	);
};
