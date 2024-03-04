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
							<SmallMultiple>
                <Scatterplot plot={{
              labels: {
                xLabel: "",
                yLabel: ""
              },
              options: {
                xDomain: [0, 10],
                yDomain: [0, 10]
              },
              data: [
                {x: 1, y: 2, id: "1", colorField: "red", isSelected: false},
                {x: 2, y: 3, id: "2", colorField: "blue", isSelected: false},
                {x: 3, y: 4, id: "3", colorField: "green", isSelected: false},
                {x: 4, y: 5, id: "4", colorField: "red", isSelected: false},
                {x: 5, y: 6, id: "5", colorField: "blue", isSelected: false},
                {x: 6, y: 7, id: "6", colorField: "green", isSelected: false},
                {x: 7, y: 8, id: "7", colorField: "red", isSelected: false},
                {x: 8, y: 9, id: "8", colorField: "blue", isSelected: false},
                {x: 9, y: 10, id: "9", colorField: "green", isSelected: false}
              ],
              isBinned: true,
              maxWidth: 200,
              showLegend: false
            }} selectionCallback={console.log} selectedIds={[]}>
            </Scatterplot>
              </SmallMultiple>
						</div>
					))}
				</div>
				<div className="detail-view">
					{/* Detail view for selected dataset goes here */}
					
					<LineChart />
				</div>
			</div>
		</>
	);
}

export default App;
