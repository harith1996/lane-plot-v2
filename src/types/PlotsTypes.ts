export interface PlotLabels {
	xLabel: string;
	yLabel: string;
}

export interface PlotOptions {
	xDomain: [number, number] | undefined;
	yDomain: [number, number] | undefined;
}

export interface ScatterplotInterface {
	labels: PlotLabels;
	options: PlotOptions;
	data: ScatterplotDataPoint[];
	isBinned: boolean;
	maxWidth: number;
	showLegend: boolean;
}

export interface ScatterplotDataPoint {
	x: number;
	y: number;
	id: string;
	colorField: string;
	isSelected: boolean;
}

export interface LineChartInterface {
	labels: PlotLabels;
	options: PlotOptions;
	data: LineChartDataPoint[];
}

export interface LineChartDataPoint {
	date: string;
	value: number;
	id: string;
}

export interface PlotsProps {
	activePlots: {
		scatterplot: ScatterplotInterface;
		linechart: LineChartInterface;
	}[];
}
