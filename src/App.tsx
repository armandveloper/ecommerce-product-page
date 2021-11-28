import { Button, Header, Slider, Wrapper } from 'components';
import { ReactComponent as IconCart } from 'assets/icons/icon-cart.svg';
import { Price } from 'components/molecules';

function App() {
	return (
		<div>
			<Header />
			<Slider />
			<div className="product-info-wrapper">
				<Wrapper>
					<span className="store-name">Sneaker Company</span>
					<h1 className="product-name">Fall Limited Edition Sneakers</h1>
					<p className="product-description">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they’ll withstand everything
						the weather can offer.
					</p>
					<Price discount={50} price={250} />
					<Button full={true} startIcon={<IconCart />}>
						Add to cart
					</Button>
				</Wrapper>
			</div>
		</div>
	);
}

export default App;
