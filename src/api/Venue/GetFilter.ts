// import axios from "axios";
import { Axios } from "../../AxiosInstance";

export const GetFilter = async (searchFilter:string, priceMin:number, priceMax:number, capacity: string, categorys:string) => {
	try {
        const {data} = await Axios.get(`/feature3/VenuesPage?search=${searchFilter.trim()}&priceMin=${priceMin}&priceMax=${priceMax}&capacity=${capacity}&categorys=${categorys}`);
		return  data;
	} catch (e) {
		return {
			status:500,
		};
	}
};
