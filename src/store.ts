import { create } from "zustand";

//example of a state
interface BearState {
	bears: number;
	increase: (by: number) => void;
}

//*****************DATA FILTERS**************/
//EventId state : Which entity is considered as an event
interface EventIdState {
	eventId: string;
	setEventId: (id: string) => void;
}

//NumDatasets state : How many datasets are displayed
interface NumDatasetsState {
	numDatasets: number;
	setNumDatasets: (num: number) => void;
}

//LinearizeBy state : The linear ordering of the events
interface LinearizeByState {
	linearizeBy: string;
	setLinearizeBy: (linearizeBy: string) => void;
}

//DiffMeasure state : The measure of difference between events
interface DiffMeasureState {
	diffMeasure: string;
	setDiffMeasure: (diffMeasure: string) => void;
}

//GroupBy state : The grouping of the events
interface GroupByState {
	groupBy: string;
	setGroupBy: (groupBy: string) => void;
}

//*****************VIS CONTROLS**************/
//ColorEnc state : The attribute to encode with color
interface ColorEncState {
	colorEnc: string;
	setColorEnc: (colorEnc: string) => void;
}

//PlotType state : The type of plot to display
interface PlotTypeState {
	plotType: string;
	setPlotType: (plotType: string) => void;
}

//*****************SMALL MULTIPLES**************/
//SelectedMultiple state : The selected multiple, if any. stores the groupBy value
interface SelectedMultipleState {
	selectedMultiple: string;
	setSelectedMultiple: (selectedMultiple: string) => void;
}

//HumanReadableName state : The human readable name of the selected multiple
interface HumanReadableNameState {
    humanReadableName: string;
    setHumanReadableName: (humanReadableName: string) => void;
}

export const useBearStore = create<BearState>()((set) => ({
	bears: 0,
	increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export const useEventIdStore = create<EventIdState>((set) => ({
	eventId: "id",
	setEventId: (id) => set({ eventId: id }),
}));

export const useNumDatasetsStore = create<NumDatasetsState>((set) => ({
	numDatasets: 1,
	setNumDatasets: (num) => set({ numDatasets: num }),
}));

export const useLinearizeByStore = create<LinearizeByState>((set) => ({
	linearizeBy: "id",
	setLinearizeBy: (linearizeBy) => set({ linearizeBy: linearizeBy }),
}));

export const useDiffMeasureStore = create<DiffMeasureState>((set) => ({
	diffMeasure: "euclidean",
	setDiffMeasure: (diffMeasure) => set({ diffMeasure: diffMeasure }),
}));

export const useGroupByStore = create<GroupByState>((set) => ({
	groupBy: "id",
	setGroupBy: (groupBy) => set({ groupBy: groupBy }),
}));

export const useColorEncStore = create<ColorEncState>((set) => ({
	colorEnc: "id",
	setColorEnc: (colorEnc) => set({ colorEnc: colorEnc }),
}));

export const usePlotTypeStore = create<PlotTypeState>((set) => ({
	plotType: "scatter",
	setPlotType: (plotType) => set({ plotType: plotType }),
}));

export const useSelectedMultipleStore = create<SelectedMultipleState>(
	(set) => ({
		selectedMultiple: "id",
		setSelectedMultiple: (selectedMultiple) =>
			set({ selectedMultiple: selectedMultiple }),
	})
);

export const useHumanReadableNameStore = create<HumanReadableNameState>(
    (set) => ({
        humanReadableName: "id",
        setHumanReadableName: (humanReadableName) =>
            set({ humanReadableName: humanReadableName }),
    })
);