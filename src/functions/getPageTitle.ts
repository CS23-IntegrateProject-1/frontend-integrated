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

    //feature 4

    //feature 5

    //feature 6
    //feature 7
    //feature 8

    //feature 9
    case "/membership":
      return "Membership";
    case "/membership/my-privileges":
      return "Privileges";
    // more later...
    default:
      return "Harmoni";
  }
};
