import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CloseIcon from "../../assets/svg/close.svg?react";
import { ProductPrice } from '../';
import {
	addProductToCart,
	decrementProductInCart,
	removeProductFromCartById,
} from '../../store/cartSlice';
import { base_url } from '../../api/url';
import styles from './CartItem.module.css';

export const CartItem = (props) => {
	const { id, image, title, price, discont_price, amount } = props;
	const dispatch = useDispatch();
	return (
		<li className={styles.cart_item}>

			<NavLink to={`/products/${id}`} className={styles.item_wrapper}>
				<img src={`${base_url}${image}`} alt={title} />
			</NavLink>

			<div className={styles.item_content}>
				<h2 className={styles.title}>{title}</h2>

				<div className={styles.item_bottom}>
					<div className={styles.counter}>
						<button type="button" className={styles.count_btn} onClick={() => dispatch(decrementProductInCart(id))}>
							-
						</button>

						<p>{amount}</p>
						<button type="button" className={styles.count_btn} onClick={() => dispatch(addProductToCart(props))}>
							+
						</button>

					</div>
					<ProductPrice
						price={price}
						discont_price={discont_price}
						content="cart"
					/>
				</div>
			</div>

			<CloseIcon
				className={styles.del_btn}
				onClick={() => dispatch(removeProductFromCartById(id))}
			/>
		</li>
	);
};
