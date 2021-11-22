import { ReactComponent as IconNext } from 'assets/icons/icon-next.svg';
import { ReactComponent as IconPrevious } from 'assets/icons/icon-previous.svg';
import styles from './index.module.css';
import imageProduct from 'assets/image-product-1.jpg';

export const Slider = () => {
	return (
		<div className={styles.slider}>
			<button className={`${styles.btn} ${styles.previous}`} title="Previous">
				<IconPrevious />
			</button>
			<img
				className={styles.slide}
				src={imageProduct}
				alt="Full Limited Edition Sneakers"
			/>
			<button className={`${styles.btn} ${styles.next}`} title="Next">
				<IconNext />
			</button>
		</div>
	);
};
