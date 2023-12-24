export interface ITheaterDetail {
	name: string;
	address?: string;
	latitude?: number;
	longitude?: number;
	phone_num?: string;
	promptpay_num?: string;
	theaterId?: number;
}

export const initialStateTheaterDetail: ITheaterDetail = {
	name: "",
	address: "",
	latitude: 0,
	longitude: 0,
	phone_num: "",
	promptpay_num: "",
	theaterId: 0,
};
