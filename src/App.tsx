import { useEffect, useRef, useState } from "react";

import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

//keep any code that makes changes outside the phase
//effect hook : tells react to modify a piece of code after it has been rendered

//clean up undos what the the useeffect does

//optimistic update - update the ui and then do the server
//pessimistic update - all the server then wait for the result

function App() {
	const { users, error, isLoading, setUsers, setError } = useUsers();
	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		userService.delete(user.id).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};
	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: 0, name: "ade" };

		setUsers([newUser, ...users]);
		userService
			.create(newUser)
			.then((res) => setUsers([res.data, ...users]))
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};
	const updataUser = (user: User) => {
		const originalUsers = [...users];
		const updatedUser = { ...user, name: user.name + "!" };
		//optimistic update
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

		//server update
		userService.update(updatedUser).catch((err) => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};
	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<button
				className="btn btn-primary mb-3"
				onClick={() => {
					addUser();
				}}
			>
				Add users
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li key={user.id} className="list-group-item d-flex justify-content-between">
						{user.name}
						<div>
							<button className="btn btn-outline-dark mx-1" onClick={() => updataUser(user)}>
								update
							</button>
							<button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>
								delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
