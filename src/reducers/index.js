import { RESET, DECREMENT, ADD_EVENT, DELETE_ALL_EVENT, INCREMENT, ADD_DATA } from '../actions/index';

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_EVENT:
			const event = { title: action.title, body: action.body, comment: action.comment };
			const id = state.length + 1;
			return [ ...state, { id, ...event } ];
		case DELETE_ALL_EVENT:
			return [];
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case ADD_DATA:
			state.data.push(...action.data);
			return state;
		case RESET:
			return { ...state, count: 0 };
		default:
			return state;
	}
};

export default reducer;
