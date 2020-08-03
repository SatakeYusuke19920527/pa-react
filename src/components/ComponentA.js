import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table } from 'react-bootstrap';
const ComponentA = () => {
	const [ data, setData ] = useState([]);
	useEffect(() => {
		console.log('useEffectが呼び出されました。');
		axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
			setData(res.data);
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
