import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
	description: z.string().max(20, { message: "Description cant be more than 20 chars" }).min(3, { message: "minimum of 3 characters" }),
	amount: z.number({ invalid_type_error: "Amount must be provided" }).max(1000, { message: "Maximum of 10 items is allowed" }),
	category: z.enum(categories, {
		errorMap: () => ({ message: "category is required" }),
	}),
});

interface Props {
	onSubmit: (data: FormData) => void;
}
type FormData = z.infer<typeof schema>;
function ExpenseForm({ onSubmit }: Props) {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	return (
		<div>
			<form
				onSubmit={handleSubmit((data) => {
					onSubmit(data);
					reset();
				})}
			>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<input {...register("description")} id="description" type="text" className="form-control" />
					{errors.description && <p className="text-danger">{errors.description.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="amount" className="form-label">
						Amount
					</label>
					<input id="amount" {...register("amount", { valueAsNumber: true })} type="number" className="form-control" />
					{errors.amount && <p className="text-danger">{errors.amount.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="category" className="form-label">
						Category
					</label>
					<select className="form-select" {...register("category")} id="category" aria-label="Default select example">
						<option value="">Open this select menu</option>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
					{errors.category && <p className="text-danger">{errors.category.message}</p>}
				</div>
				<button className="btn btn-danger">Submit</button>
			</form>
		</div>
	);
}

export default ExpenseForm;
