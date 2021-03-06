import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_EVENT, DELETE_ALL_EVENT } from '../actions/index';
import reducer from '../reducers/index';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
	const [ state, dispatch ] = useReducer(reducer, []);
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');
	// const [ comment, setComment ] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		dispatch({
			type: ADD_EVENT,
			title,
			body
		});
		setTitle('');
		setBody('');
	};

	const deleteAllEvent = (e) => {
		e.preventDefault();
		dispatch({
			type: DELETE_ALL_EVENT
		});
	};

	return (
		<div>
			<div>ComponentB</div>
			<Link to="componentc">ComponentCへ移動</Link>

			<Form>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Form.Label>Body</Form.Label>
					<Form.Control
						type="text"
						placeholder="body"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" onClick={handleClick}>
					イベント作成
				</Button>
				<Button variant="danger" onClick={deleteAllEvent}>
					イベント全削除
				</Button>
			</Form>
			<h1>Table</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>id</th>
						<th>title</th>
						<th>body</th>
						<th>#</th>
					</tr>
				</thead>
				<tbody>
					{state.map((data, index) => {
						const kdjfkdkd = () => {};
						return (
							<tr key={index}>
								<td>{data.id}</td>
								<td>{data.title}</td>
								<td>{data.body}</td>
								<td>
									<Button variant="danger" onClick={kdjfkdkd}>
										削除
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ComponentB;
