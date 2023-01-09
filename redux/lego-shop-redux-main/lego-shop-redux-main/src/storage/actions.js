export const ACTIONS = {
	ADD_TO_FAVOURITE: 'ADD_TO_FAVOURITE',
	REMOVE_FROM_FAVOURITE: 'REMOVE_FROM_FAVOURITE',
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

export const addToFavourite = (id) => {
	return {
		type: ACTIONS.ADD_TO_FAVOURITE,
		id,
	}
}

export const removeFromFavourite = (id) => {
	return {
		type: ACTIONS.REMOVE_FROM_FAVOURITE,
		id,
	}
}

export const addToCart = (id, price) => {
	return {
		type: ACTIONS.ADD_TO_CART,
		id,
		price,
	}
}

export const removeFromCart = (id, price) => {
	return {
		type: ACTIONS.REMOVE_FROM_CART,
		id,
		price,
	}
}