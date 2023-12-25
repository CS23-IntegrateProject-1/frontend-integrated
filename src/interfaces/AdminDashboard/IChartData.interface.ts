export interface IChartData {
	userTiers: IUserTiers;
	venueTypes: IVenueTypes;
	businessCount: number;
	numberOfReciept: number;
	revenue: IRevenue;
}

export interface IUserTiers {
	normalCustomer: number;
	loyalCustomer: number;
}

export interface IVenueTypes {
	clubVenue: number;
	barVenue: number;
	restaurantVenue: number;
}

export interface IRevenue {
	Revenue: number;
	Partner: number;
	NetProfit: number;
}

export const InitialStateChartData: IChartData = {
	userTiers: {
		normalCustomer: 0,
		loyalCustomer: 0,
	},
	venueTypes: {
		clubVenue: 0,
		barVenue: 0,
		restaurantVenue: 0,
	},
	businessCount: 0,
	numberOfReciept: 0,
	revenue: {
		Revenue: 0,
		Partner: 0,
		NetProfit: 0,
	},
};
