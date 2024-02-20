import { useSelector } from 'react-redux';
import { Form } from '../Form/Form';
import styles from './Order.module.css';

export const Order = ({ totalSumm }) => {
	const cartList = useSelector((store) => store.cart.cartList);
	return (
		<div className={styles.order}>
			<h3 className={styles.order_title}>Order details</h3>
			<div className={styles.order_summ}>
				<p>{cartList.length} Items</p>
			</div>
			<div className={styles.order_summ}>
				<p>Total</p>
				<div>
					&#x24;{totalSumm}
				</div>
			</div>
			<Form
				contentInput="order"
				placeholderInput="+49"
				contentButton="order"
				textButton="Order"
				message="Finish order and clean cart"
				content="order"
				alertText="Finish"
			/>
		</div>
	);
};
