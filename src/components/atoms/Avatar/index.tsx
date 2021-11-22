import styles from './index.module.css';

interface AvatarProps {
	name: string;
	src: string;
	size?: number | string;
}

export const Avatar = ({ name, src, size = 100 }: AvatarProps) => (
	<img
		className={styles.avatar}
		src={src}
		alt={name}
		width={size}
		height={size}
	/>
);
