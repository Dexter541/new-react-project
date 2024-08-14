import React, { useState } from "react";
import { FcLike } from "react-icons/fc";

interface Props {
	onClick: () => void;
}
export const Like = ({ onClick }: Props) => {
	const [status, setStatus] = useState(true);
	if (status) return <FcLike color="#ff6b81" size={"100px"} />;
	return <FcLike color="#172B4D" size={"100px"} />;
};
