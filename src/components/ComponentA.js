import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Store } from '../store/index';
import { ADD_DATA } from '../actions/index';
const ComponentA = () => {
	const [ data, setData ] = useState([]);
	const { globalState, setGlobalState } = useContext(Store);
	useEffect(() => {
		console.log('useEffectが呼び出されました。');
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data);
			setGlobalState({
				type: ADD_DATA,
				data: res.data
			});
		});
	}, []);
	console.log(data, 'data の確認');
	return (
		<div>
			<div>ComponentA</div>
			<Link to="componentb">ComponentBへ移動</Link>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>UserID</th>
						<th>id</th>
						<th>title</th>
					</tr>
				</thead>
				<tbody>
					{data.map((element, index) => {
						return (
							<tr key={index}>
								<td>{element.userId}</td>
								<td>{element.id}</td>
								<td>{element.title}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ComponentA;
