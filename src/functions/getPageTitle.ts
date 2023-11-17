export const getPageTitle = (pathname: string) => {
  // You can implement a logic to map page routes to their titles here
  // For example, you can use a switch statement or an object mapping
  switch (pathname) {
    //feature 1
    case "/setting":
      return "Setting";
    case "/setting/account":
      return "Account & Security";
    case "/setting/account/profile":
      return "Profile";
    //feature 2
    

    //feature 3
    case "/Restaurants":
      return "Restaurant List"
    case "/Clubs":
      return "Club List"
    case "/Bars":
      return "Bar List"
    //feature 4

    //feature 5
    case "/list/recommendation":
    return "Recommendations"

    //feature 6
    //feature 7
    //feature 8

    //feature 9
    case "/membership":
      return "Membership";
    case "/membership/my-privileges":
      return "Privileges";

    //feature 10
    //feature 11
    case "/article":
      return "Article"
  
    //feature 12
    //feature 13
    // more later...
    default:
      return "Harmoni";
  }
};
