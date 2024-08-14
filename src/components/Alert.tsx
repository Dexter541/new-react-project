import React, { ReactNode } from "react";

interface Props {
	children: ReactNode;
	onClose: () => void;
}
//extension shortcut rafc to automatically create a component
export const Alert = ({ children, onClose }: Props) => {
	return (
		<div className="alert alert-warning alert-dismissible">
			{children}
			<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
		</div>
	);
};
