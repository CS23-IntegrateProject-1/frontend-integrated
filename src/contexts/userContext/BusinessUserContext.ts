import { createContext } from "react";

export const BusinessUserContext = createContext({
	businessId: -1,
	username: "",
	email: "",
	phone_num: "",
	profile_picture: "",
});
