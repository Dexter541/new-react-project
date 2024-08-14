import React, { ReactNode } from "react";
import { Alert } from "./Alert";

interface Props {
	children: ReactNode;
	color?: "primary" | "danger" | "success" | "secondary";
	onClick: () => void;
}
export const Button = ({ children, color = "primary", onClick }: Props) => {
	return (
		<div>
			<a className={"btn btn-" + color} onClick={onClick}>
				{children}
			</a>
		</div>
	);
};
