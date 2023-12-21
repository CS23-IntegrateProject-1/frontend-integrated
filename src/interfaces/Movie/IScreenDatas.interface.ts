export interface IScreenDatas {
	Films: IFilms;
	Screens: IScreen;
	date: string;
	start_time: string;
	end_time: string;
	filmId: number;
	price: number;
	screenId: number;
	showId: number;
}

interface IFilms {
	filmId: number;
	name: string;
	duration: number;
	genre: string;
	language: string;
	poster_img: string;
	rate: number;
	release_date: string;
	synopsis: string;
}

interface IScreen {
	screenId: number;
	theaterId: number;
	capacity: number;
	price: number;
	screen_no: number;
	screen_type: string;
	Seats: ISeat[];
}

export interface ISeat {
	seatId: number;
	screenId: number;
	seatTypeId: number;
	Seat_types: ISeatType;
	seat_no: number;
	seat_row: number;
}

export interface ISeatType {
	seatTypeId: number;
	type_name: string;
	price_modifier: number;
	description: string;
}

export const initialStateScreenDatas: IScreenDatas = {
	Films: {
		filmId: 0,
		name: "",
		duration: 0,
		genre: "",
		language: "",
		poster_img: "",
		rate: 0,
		release_date: "",
		synopsis: "",
	},
	Screens: {
		screenId: 0,
		theaterId: 0,
		capacity: 0,
		price: 0,
		screen_no: 0,
		screen_type: "",
		Seats: [
			{
				seatId: 0,
				screenId: 0,
				seatTypeId: 0,
				Seat_types: {
					seatTypeId: 0,
					type_name: "",
					price_modifier: 0,
					description: "",
				},
				seat_no: 0,
				seat_row: 0,
			},
		],
	},
	date: "",
	start_time: "",
	end_time: "",
	filmId: 0,
	price: 0,
	screenId: 0,
	showId: 0,
};
