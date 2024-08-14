import { useState } from "react";
interface Props {
	Heading: string;
	City: string[];
	OnSelectItem: (item: string) => void;
}
function ListGroup({ City, Heading, OnSelectItem }: Props) {
	// City = [];

	let [selectedIndex, setSelectedIndex] = useState(-1);
	//arr[0]  variable
	//arr[1]  updater function
	return (
		<>
			<h1>{Heading}</h1>
			{City.length == 0 && <p>No item found</p>}
			<ul className="list-group">
				{City.map((City, index) => (
					<li
						className={selectedIndex == index ? "list-group-item active" : "list-group-item "}
						key={City}
						onClick={() => OnSelectItem(City)}
					>
						{City}
					</li>
				))}
				;
			</ul>
		</>
	);
}

export default ListGroup;
