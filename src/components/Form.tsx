import React, { FormEvent, useRef } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
	name: z.string().min(3, { message: "name must be at least 3 characters" }),
	age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});
//library called react hook form

//use an interface to define the shape of the form for better type safety and also a better development experience

//its better to use a technique called schema based validation
//some libraries include joi ,zod,yup we are using zod
// interface FormData {
// 	name: string;
// 	age: number;
// }

//this is a way to get the interface from the zod
type FormData = z.infer<typeof schema>;
function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	// the interface is impemented above
	const onSubmit = (data: FieldValues) => console.log(data);
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input {...register("name")} id="name" type="text" className="form-control" />
					{/* optional chaining : this is used like this ?.and its used just incase there is no value for what is being defined*/}
					{errors.name && <p className="text-danger">{errors.name.message}</p>}
				</div>
				<div className="mb-3">
					<label htmlFor="age" className="form-label">
						Age
					</label>
					<input {...register("age", { valueAsNumber: true })} id="age" type="number" className="form-control" />
					{errors.age && <p className="text-danger">{errors.age.message}</p>}
				</div>
				<button disabled={!isValid} className="btn btn-primary">
					submit
				</button>
			</form>
		</div>
	);
}

export default Form;
