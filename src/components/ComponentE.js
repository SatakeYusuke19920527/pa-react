import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET } from '../actions/index';
const ComponentE = () => {
	const { globalState, setGlobalState } = useContext(Store);
	console.log(globalState);

	// 1づつあげる関数です。
	const handleClick = () => {
		setGlobalState({
			type: INCREMENT
		});
	};
	const handleClickDecrement = () => {
		setGlobalState({
			type: DECREMENT
		});
	};
	const reset = () => {
		setGlobalState({
			type: RESET
		});
	};
	console.log(globalState);
	return (
		<div>
			<h1>ComponentE.js</h1>
			<button onClick={handleClick}>+1+</button>
			<button onClick={handleClickDecrement}>-1-</button>
			<button onClick={reset}>reset</button>
		</div>
	);
};

export default ComponentE;
