import { ACTIONS } from './actions'

const initialState = {
	favouritedIds: [],
	cart: {
		count: 0,
		price: 0,
		items: []
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TO_FAVOURITE:
			return {...state, favouritedIds: [...state.favouritedIds, action.id]}
		case ACTIONS.REMOVE_FROM_FAVOURITE:
			return {...state,
				favouritedIds: state.favouritedIds.filter(id => id !== action.id)
			}
		case ACTIONS.ADD_TO_CART:
			return {...state, cart: {
				...state.cart,
				count: state.cart.count + 1,
				price: state.cart.price + action.price,
				items: [...state.cart.items, action.id]
			}}
		case ACTIONS.REMOVE_FROM_CART:
			return {...state, cart: {
				...state.cart,
				count: state.cart.count - 1,
				price: state.cart.price - action.price,
				items: state.cart.items.filter(id => id !== action.id)
			}}
		default:
			return state
	}
}

export default reducer