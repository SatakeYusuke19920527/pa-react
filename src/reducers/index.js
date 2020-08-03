import { ADD_EVENT } from '../actions/index';

const reducer = (state = [], action) => {
	switch (action.type) {
		case ADD_EVENT:
			const event = { title: action.title, body: action.body };
			const id = state.length + 1;
			return [ ...state, { id, ...event } ];
		default:
			return state;
	}
};

export default reducer;
