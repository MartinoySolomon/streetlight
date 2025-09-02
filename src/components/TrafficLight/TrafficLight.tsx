import { useEffect, useState } from "react";
import "./TrafficLight.css";

export default function TrafficLight() {
	const [activeLight, setActiveLight] = useState("red");

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveLight((prev) => {
				if (prev === "red") return "yellow";
				if (prev === "yellow") return "green";
				return "red";
			});
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="trafficLightBox">
				<div
					className={`trafficLight red ${
						activeLight == "red" && "active"
					}`}></div>
				<div
					className={`trafficLight yellow ${
						activeLight == "yellow" && "active"
					}`}></div>
				<div
					className={`trafficLight green ${
						activeLight == "green" && "active"
					}`}></div>
			</div>
			<div className="trafficLightBoxPole"></div>
		</>
	);
}
