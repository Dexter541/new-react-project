// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// //keep any code that makes changes outside the phase
// //effect hook : tells react to modify a piece of code after it has been rendered

// //clean up undos what the the useeffect does
// interface User {
// 	id: number;
// 	name: string;
// }
// function App() {
// 	const [users, setUsers] = useState<User[]>([]);

// 	useEffect(() => {
// 		axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data));
// 	}, []);
// 	return (
// 		<ul>
// 			{users.map((user) => (
// 				<li key={user.id}>{user.name}</li>
// 			))}
// 		</ul>
// 	);
// }

// export default App;
