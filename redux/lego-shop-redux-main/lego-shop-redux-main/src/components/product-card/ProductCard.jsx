import {useDispatch, useSelector} from 'react-redux'
import {addToFavourite, removeFromFavourite, addToCart, removeFromCart} from '../../storage/actions'
import css from './ProductCard.module.css'
import addToFavouriteIcon from '../../assets/add-to-favourite.svg'
import favouritedIcon from '../../assets/favourite.svg'

const ProductCard = (props) => {
	const {id, name, price, image} = props
	const favouritedIds = useSelector(state => state.favouritedIds)
	const cart = useSelector(state => state.cart)
	const isInCart = cart.items.indexOf(id) !== -1
	const isFavourited = favouritedIds.indexOf(id) !== -1
	const dispatch = useDispatch()

	const handleFavouriteClick = () => {
		if (isFavourited) {
			dispatch(removeFromFavourite(id))
		} else {
			dispatch(addToFavourite(id))
		}
	}

	const handleCartClick = () => {
		if (isInCart) {
			dispatch(removeFromCart(id, price))
		} else {
			dispatch(addToCart(id, price))
		}
	}

	return (
		<div className={css.cardWrapper}>
			<div className={css.imageWrapper}>
				<div className={css.favourite} onClick={handleFavouriteClick}>
					<img src={isFavourited ? favouritedIcon : addToFavouriteIcon} alt='' />
				</div>
				<img className={css.image} src={image} alt={name} />
			</div>
			<p className={css.name}>{name}</p>
			<p className={css.price}>{price},00 руб.</p>
			<button className={css.button} onClick={handleCartClick}>
				{isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
			</button>
		</div>
	)
}

export default ProductCard