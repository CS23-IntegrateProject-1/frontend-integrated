export interface IOpeningDay {
	isSelected: number;
	startTime?: string;
	endTime?: string;
}

export interface IOpeningDayState {
	Sun: IOpeningDay;
	Mon: IOpeningDay;
	Tue: IOpeningDay;
	Wed: IOpeningDay;
	Thu: IOpeningDay;
	Fri: IOpeningDay;
	Sat: IOpeningDay;
}

export const OpeningDayInitialState: IOpeningDayState = {
	Sun: {
		isSelected: 0,
	},
	Mon: {
		isSelected: 0,
	},
	Tue: {
		isSelected: 0,
	},
	Wed: {
		isSelected: 0,
	},
	Thu: {
		isSelected: 0,
	},
	Fri: {
		isSelected: 0,
	},
	Sat: {
		isSelected: 0,
	},
};
