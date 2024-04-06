import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
	// State to keep track of clicked boxes
	const [clickBox, setClickBox] = useState([]);

	// Array to generate boxes
	const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	// Effect for visual changes when all boxes are clicked
	useEffect(() => {
		if (clickBox.length === 9) {
			for (let index = 0; index < clickBox.length; index++) {
				// Change background color of each box with a delay
				setTimeout(() => {
					document.getElementById(
						"box" + clickBox[index]
					).style.backgroundColor = "orange";
				}, boxes[index] * 200 + 500); // Delay proportional to box value
			}
			// Reset the state of clicked boxes after a delay with reload page
			setTimeout(() => {
				setClickBox([]);
				document.location.reload();
			}, 4000);
		}
	}, [clickBox, setClickBox]); // Depend on clickBox state

	return (
		<div id="main">
			<h1>First Assignment of MeetUniversity </h1>
			<div id="boxes-area">
				{/* Render boxes */}
				{boxes.map((val) => (
					<div
						onClick={(e) => {
							e.preventDefault();
							// Update clicked boxes
							setClickBox([...clickBox, val]);
							const element = e.target;
							if (clickBox.length === 9) {
								return; // Prevent further clicks after all boxes are clicked
							}
							// Toggle background color
							if (element.style.backgroundColor === "green") {
								element.style.backgroundColor = "white";
							} else {
								element.style.backgroundColor = "green";
							}
						}}
						id={"box" + val}
						key={val}
						className="box"></div>
				))}
			</div>
		</div>
	);
}
export default App;
