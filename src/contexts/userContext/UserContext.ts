import { createContext } from "react";

export const UserContext = createContext({
	//   userId: -1,
	username: "",
	fname: "",
	lname: "",
	email: "",
	addId: "",
	phone: "",
	profile_picture: ""
});
