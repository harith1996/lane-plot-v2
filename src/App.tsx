import Visualizations from "./components/Visualizations";
import "./App.css";
import DataFilters from "./components/DataFilters";
import VisControls from "./components/VisControls";

function App() {
	return (
		<>
			<div className="user-controls">
				<DataFilters />
				<VisControls />
			</div>
			<div className="visualizations">
				<Visualizations />
			</div>
		</>
	);
}

export default App;
