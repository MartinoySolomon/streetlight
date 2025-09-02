import { useEffect, useState } from "react";
import "./TrafficLight.css";

export default function TrafficLight() {
	const [activeLight, setActiveLight] = useState(["red"]);
	const timer = activeLight.find((light) => light === "red")
		? 4000
		: activeLight.find((light) => light === "yellow")
		? 1500
		: 5000;
	useEffect(() => {
		const timeout = setTimeout(() => {
			setActiveLight((prev) =>
				prev[0] === "red"
					? ["yellow"]
					: prev[0] === "yellow"
					? ["green"]
					: ["red"]
			);
		}, timer);

		return () => clearTimeout(timeout);
	}, [activeLight]);

	return (
		<>
			<div className="trafficLightBox">
				<div
					className={`trafficLight red ${
						activeLight.find((light) => light === "red") && "active"
					}`}></div>
				<div
					className={`trafficLight yellow ${
						activeLight.find((light) => light === "yellow") && "active"
					}`}></div>
				<div
					className={`trafficLight green ${
						activeLight.find((light) => light === "green") && "active"
					}`}></div>
			</div>
			<div className="trafficLightBoxPole"></div>
		</>
	);
}
