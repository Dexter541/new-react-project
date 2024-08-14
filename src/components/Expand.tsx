import React from "react";

interface Props {
	children: string;
	// text: string;
	maxChars?: number;
	onClick: () => void;
}
//{ text, maxChars, onClick }: Props
const Expand = ({ children, maxChars = 100, onClick }: Props) => {
	if (children.length <= maxChars) return <div>{children}</div>;
	const text = children.substring(0, maxChars);
	return <div>{text}...</div>;
};

export default Expand;
