import { Dashboard } from './../features/feature06/pages/Dashboard';
import { RecommendationCard } from "./../features/feature05/components/RecommendationCard";
export const getPageTitle = (pathname: string) => {
  // You can implement a logic to map page routes to their titles here
  // For example, you can use a switch statement or an object mapping
  if (pathname.includes("/showtimes")) {
    return "Showtimes";
  }
  if (pathname.includes("/advertisement")) {
    return "Advertisement";
  }
  //feature 7

  if (pathname.includes("/venue") && pathname.includes("/menu")) {
    return "Menu";
  }
  if (pathname.includes("/venue") && pathname.includes("/order")) {
    return "Orders";
  }
  if (pathname.includes("/venue") && pathname.includes("/receipt")) {
    return "Receipt";
  }
  if (pathname.includes("/venue") && pathname.includes("/cart")) {
    return "Cart";
  }
  //feature 8

  if (pathname.includes("/Notification")) {
    return "Notification";
  }

  switch (pathname) {
    //feature 1
    case "/setting":
      return "Setting";
    case "/setting/account":
      return "Account & Security";
    case "/setting/account/profile":
      return "Profile";
    case "/setting/account/paymentmethodsetting":
      return "Payment Methods";
    case "/setting/privacy-policy":
      return "Privacy & Policy";
    case "/setting/term-of-service":
      return "Term of Services";
    case "/setting/help":
      return "Help & Support";
    case "/setting/about":
      return "About";
    //feature 2

    //feature 3
    case "/Restaurants":
      return "Restaurants";
    case "/Clubs":
      return "Clubs";
    case "/Bars":
      return "Bars";

    case "/Reviews":
      return "Reviews";
    case "/RecommendedPlaces":
      return "Recommendations";
    //feature 4
    case "/map":
      return "Locations";
    case "/map/savedlocation":
      return "Saved Location";
    case "/map/cinemas":
      return "Locations";
    case "/map/bars":
      return "Locations";
    //feature 5
    case "/list/recommendation":
      return "Recommendations";

    //feature 6
    case "/table":
      return "Table";
    case "/reservation-detail":
      return "Reservation Detail";
    //feature 7

    //feature 8

    //feature 9
    case "/membership":
      return "Membership";
    case "/membership/my-privileges":
      return "Privileges";

    //feature 10
    case "/cinemaMainPage":
      return "Cinemas";
    //feature 11
    case "/article":
      return "Article";
    case "/article/create":
      return "Create Article";
    //feature 12
    case "/chatbot":
      return "Chatbot";
    //feature 13
    case "/business/dashboard":
      return "Dashboard";
    // more later...
    default:
      return "Harmoni";
  }
};
