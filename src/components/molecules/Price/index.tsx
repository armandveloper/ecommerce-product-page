import styles from './index.module.css';

interface PriceProps {
	discount?: number;
	price: number;
}

export const Price = ({ discount, price }: PriceProps) => {
	const discountPrice = (price: number, discount: number) =>
		(price - (price * discount) / 100).toFixed(2);

	return (
		<div className={styles.wrapper}>
			{discount && (
				<div className={styles.discountWrapper}>
					<span className={styles.price}>
						${discountPrice(price, discount)}
					</span>
					<span className={styles.discountChip}>{discount}%</span>
				</div>
			)}
			<span className={discount ? styles.normalPrice : styles.price}>
				${price.toFixed(2)}
			</span>
		</div>
	);
};
