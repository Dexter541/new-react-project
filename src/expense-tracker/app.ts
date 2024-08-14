// import { useState } from "react";
// import { Alert } from "./components/Alert";
// import { Button } from "./components/Button";
// import Dismiss from "./components/Dismiss";
// import ListGroup from "./components/ListGroup";
// import { Like } from "./components/Like";
// import produce from "immer";
// import Expand from "./components/Expand";
// import Form from "./components/Form";
// import ExpenseForm from "./expense-tracker/ExpenseForm";
// import ExpenseList from "./expense-tracker/ExpenseList";
// import ExpenseFilter from "./expense-tracker/ExpenseFilter";

// import categories from "./expense-tracker/categories";

// //keep any code that makes changes outside the phase
// //effect hook : tells react to modify a piece of code after it has been rendered
// function App() {
// 	const [filter, setFilter] = useState("");
// 	const [expenses, setExpenses] = useState([
// 		{
// 			id: 1,
// 			description: "aaa",
// 			amount: 4,
// 			category: "groceries",
// 		},
// 		{
// 			id: 2,
// 			description: "aaa",
// 			amount: 4,
// 			category: "utility",
// 		},
// 		{
// 			id: 3,
// 			description: "aaa",
// 			amount: 4,
// 			category: "utility",
// 		},
// 		{
// 			id: 4,
// 			description: "aaa",
// 			amount: 4,
// 			category: "utility",
// 		},
// 	]);
// 	//explantion check if the user has selected a filter if the have which is what ? is for then we filter the category based on the filter else we just return the normal expense object (the else stands for the : in this case)
// 	let visibleCategory;
// 	if (filter) {
// 		visibleCategory = expenses.filter((e) => e.category === filter);
// 	} else {
// 		visibleCategory = expenses;
// 	}
// 	return (
// 		<div>
// 			<ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])}></ExpenseForm>
// 			<ExpenseFilter onSelectCategory={(category) => setFilter(category)}></ExpenseFilter>
// 			<ExpenseList expenses={visibleCategory} onDelete={(id) => console.log(id)}></ExpenseList>
// 		</div>
// 	);
// }

// export default App;
