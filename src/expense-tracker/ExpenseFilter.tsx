import React from "react";
import categories from "./categories";
import { optional } from "zod";
interface Props {
	onSelectCategory: (category: string) => void;
}
function ExpenseFilter({ onSelectCategory }: Props) {
	return (
		<select className="form-select mt-5 mb-1" onChange={(event) => onSelectCategory(event.target.value)}>
			<option value="">All Categories</option>
			{categories.map((category) => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	);
}

export default ExpenseFilter;
