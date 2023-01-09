import {useSelector} from 'react-redux'
import css from './Header.module.css'
import logo from '../../assets/lego.svg'
import cartImg from '../../assets/shopping-cart.svg'

const Header = () => {
	const cart = useSelector(state => state.cart)
	return (
		<header className={css.header}>
			<img className={css.logo} src={logo} alt='Logo' />
			<nav className={css.nav}>
				<a className={css.navLink} href='/#'>Продукты</a>
				<a className={css.navLink} href='/#'>Скидки</a>
				<a className={css.navLink} href='/#'>Служба поддержки</a>
			</nav>
			<div className={css.cart}>
				<img className={css.cartImg} src={cartImg} alt='' />
				{cart.count > 0 && (
					<>
						<div className={css.cartCount}>{cart.count}</div>
						<p className={css.cartSum}>{cart.price} руб.</p>
					</>
				)}
			</div>
		</header>
	)
}

export default Header