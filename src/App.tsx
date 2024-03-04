import Visualizations from "./components/Visualizations";
import "./App.css";
import DataFilters from "./components/DataFilters";
import LineChart from "./components/LineChart";
import VisControls from "./components/VisControls";

function App() {
	return (
		<>
			<div className="user-controls">
				<DataFilters />
				<VisControls />
			</div>
			<div className="visualizations">
				<Visualizations
					
				/>
				<div className="detail-view">
					{/* Detail view for selected dataset goes here */}

					<LineChart />
				</div>
			</div>
		</>
	);
}

export default App;
