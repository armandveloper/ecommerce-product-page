import { ReactComponent as IconMenu } from 'assets/icons/icon-menu.svg';
import { ReactComponent as IconCart } from 'assets/icons/icon-cart.svg';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Avatar } from 'components';
import avatar from 'assets/image-avatar.png';
import styles from './index.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<button title="Open Menu">
					<IconMenu />
				</button>
				<Logo className={styles.toRight} />
				<button title="View Cart">
					<IconCart />
				</button>
				<Avatar name="John Doe" src={avatar} size="50" />
			</nav>
		</header>
	);
};
