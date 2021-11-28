import { Button, Header, Slider } from 'components';
import { ReactComponent as IconCart } from 'assets/icons/icon-cart.svg';

function App() {
	return (
		<div>
			<Header />
			<Slider />
			<Button full={true} startIcon={<IconCart />}>
				Add to cart
			</Button>
		</div>
	);
}

export default App;
