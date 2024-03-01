import "./App.css";
import DataFilters from "./components/DataFilters/DataFilters";
import LineChart from "./components/LineChart/LineChart";
import Scatterplot from "./components/Scatterplot/Scatterplot";
import SmallMultiple from "./components/SmallMultiple/SmallMultiple";
import VisControls from "./components/VisControls/VisControls";

function App() {
	return (
		<>
			<div className="user-controls">
				<DataFilters />
				<VisControls />
			</div>
			<div className="visualizations">
				<div className="small-multiples">
					{/* Small multiples for each dataset go here */}
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={i}>
							<SmallMultiple></SmallMultiple>
						</div>
					))}
				</div>
				<div className="detail-view">
					{/* Detail view for selected dataset goes here */}
					<Scatterplot />
					<LineChart />
				</div>
			</div>
		</>
	);
}

export default App;
