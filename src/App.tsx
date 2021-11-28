import { Button, Header, Slider, Wrapper } from 'components';
import { ReactComponent as IconCart } from 'assets/icons/icon-cart.svg';

function App() {
	return (
		<div>
			<Header />
			<Slider />
			<Wrapper>
				<Button full={true} startIcon={<IconCart />}>
					Add to cart
				</Button>
			</Wrapper>
		</div>
	);
}

export default App;
