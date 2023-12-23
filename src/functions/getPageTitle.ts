export const getPageTitle = (pathname: string) => {
  // You can implement a logic to map page routes to their titles here
  // For example, you can use a switch statement or an object mapping

  if (pathname.includes("/showtimes")) {
    return "Showtimes";
  }
  //feature 3
  else if (pathname.includes("/VenBranchPage")) {
    return "VenueBranches";
  } else if (pathname.includes("/VenDetail/")) {
    return "VenueDetailPage";
  } else if (pathname.includes("/Reviews/")) {
    return "Reviews";
  } else if (pathname.includes("/ReviewDelivery/")) {
    return "ReviewDelivery";
  } else if (pathname.includes("/ReviewReservation/")) {
    return "ReviewReservation";
  }

  //feature 5
  else if (pathname.includes("/advertisement")) {
    return "Advertisement";
  } else if (pathname.includes("/admin/advertisement")) {
    return "Advertisement";
  } else if (pathname.includes("/admin/advertisement/*/reject")) {
    return "Review";
  } else if (pathname.includes("/business/advertisement/edit")) {
    return "Advertisement";
  } else if (pathname.includes("/business/voucher/edit")) {
    return "View Voucher";
  } else if (pathname.includes("/promotion")) {
    return "Promotion";
  } else if (pathname.includes("/voucher")) {
    return "Voucher";
  } else if (pathname.includes("/business/promotion/edit")) {
    return "Promotion";
  } else if (pathname.includes("/business/redeem/edit")) {
    return "Redeem";
  }
  //feature 6

  //user
  else if (pathname.includes("/my-reservation")) {
    return "My Reservation";
  } else if (pathname.includes("/table")) {
    return "Table";
  } else if (pathname.includes("/reservation-detail")) {
    return "Reservation";
  } else if (pathname.includes("/getreservation-detail")) {
    return "Reservation";
  }

  // business
  else if (pathname.includes("/business/tablelist")) {
    return "Table List";
  } else if (pathname.includes("/business/Reservation")) {
    return "Reservation";
  } else if (pathname.includes("/business/WalkInDetail")) {
    return "Reservation";
  } else if (pathname.includes("/business/WalkInPeople")) {
    return "Table";
  } else if (pathname.includes("/business/viewtable")) {
    return "Table List";
  } else if (pathname.includes("/business/createtable1")) {
    return "Table List";
  } else if (pathname.includes("/business/createtable2")) {
    return "Table List";
  } else if (pathname.includes("/business/qrcode")) {
    return "QR CODE";
  }

  //feature 7
  else if (pathname.includes("/venue") && pathname.includes("/menu")) {
    return "Menu";
  } else if (pathname.includes("/venue") && pathname.includes("/receipt")) {
    return "Receipt";
  } else if (pathname.includes("/Notification")) {
    return "Notification";
  } else if (pathname.includes("/venue") && pathname.includes("/menudetail")) {
    return "Menu Detail";
  } else if (pathname.includes("/venue") && pathname.includes("/cart")) {
    if (pathname.includes("/cartdetail")) {
      return "Edit Cart";
    } else {
      return "Cart";
    }
  } else if (pathname.includes("/venue") && pathname.includes("/order")) {
    return "Order Status";
  } else if (pathname.includes("/venue") && pathname.includes("/editmenu")) {
    return "Edit Menu";
  } else if (pathname.includes("/venue") && pathname.includes("/editsetmenu")) {
    return "Edit Set Menu";
  } else if (pathname.includes("/venue") && pathname.includes("/addmenu")) {
    return "Add Menu";
  } else if (pathname.includes("/venue") && pathname.includes("/addsetmenu")) {
    return "Add Set Menu";
  } else if (pathname.includes("/venue") && pathname.includes("/bmenudetail")) {
    return "Menu Detail";
  } else if (pathname.includes("/venue") && pathname.includes("/orderstat")) {
    return "Order Status";
  }

  //feature 8
  // else if (pathname.includes("/Notification")) {
  //   return "Notification";
  // }
  // customer side
  else if (pathname.includes("/venue/") && pathname.includes("/payment")) {
    return "Select Payment";
  } else if (pathname.includes("/customer/") && pathname.includes("/addcard")) {
    return "Add Card";
  } else if (pathname.includes("/venue/") && pathname.includes("/qr-payment")) {
    return "Qr Code Scan";
    // delivery side
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/delivery_addcard")
  ) {
    return "Add Card";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/delivery_payment")
  ) {
    return "Select Payment";
  }
  // business side
  else if (
    pathname.includes("/venue") &&
    pathname.includes("/business/checkout")
  ) {
    return "Select Payment";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/business/qr-payment")
  ) {
    return "Qr CODE";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/business/addcard")
  ) {
    return "Add Card";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/business/history")
  ) {
    return "Payment History";
  } else if (pathname.includes("/Account/eachmonth")) {
    return "Finance Overview";
  } else if (
    pathname.includes("/Account/") &&
    pathname.includes("/datexpand/")
  ) {
    return "Finance Overview";
  } else if (pathname.includes("/Account/Checkbill")) {
    return "Receipt";

    // admin side
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/checkout")
  ) {
    return "Select Payment";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/qr-payment")
  ) {
    return "Qr Code";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/addcard")
  ) {
    return "Add Card";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/insight")
  ) {
    return "Insight";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/dashboard")
  ) {
    return "Dashboard";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/reservation")
  ) {
    return "Reservation";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/FoodOrder")
  ) {
    return "Food Order";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/FoodDelivery")
  ) {
    return "Food Delivery";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/receipt")
  ) {
    return "Receipt";
  } else if (
    pathname.includes("/venue") &&
    pathname.includes("/admin/checkbill")
  ) {
    return "Receipt";
  } else if (pathname.includes("/Notification/BusinessNoti")) {
    return "Notification";
  } else if (pathname.includes("/Notification/advertisement")) {
    return "Notification";
  } else if (pathname.includes("/Notification/Promotion")) {
    return "Notification";
  } else if (pathname.includes("/Notification/Checkout")) {
    return "Notification";
  } else if (pathname.includes("/Notification/NewReservation")) {
    return "Notification";
  } else if (pathname.includes("/Notification/OrderUpdate")) {
    return "Notification";
  } else if (pathname.includes("/Notification/Update")) {
    return "Notification";
  } else if (pathname.includes("/Notification/addcard")) {
    return "Addcard";
  } else if (pathname.includes("/Notification/entercode")) {
    return "Qr CODE";
  }

  switch (pathname) {
    //feature 1 //done
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
    case "/setting/overview":
      return "Overview";
    case "/Friends":
      return "Friends";
    case "/CreateGroup":
      return "Choose Friends";
    case "/AddFriend":
      return "Add Friends";
    case "/business/busiProfileEdit":
      return "Profile";
    case "/business/busiProfile":
      return "Profile";
    case "/business/BusiUpdateCard":
      return "Update Card";
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
    case "/VenuesPage":
      return "VenuePage";
    case "/MyReviews":
      return "MyReview";
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
    case "/admin/advertisement":
      return "Advertisement";

    case "/business/advertisement/status":
      return "Advertisement";
    case "/business/advertisement/criteria":
      return "Advertisement";
    case "/business/advertisement/request":
      return "Advertisement";

    case "/business/voucher":
      return "Vouchers";
    case "/business/voucher/create":
      return "Vouchers";
    case "/membership":
      return "Membership";
    case "/redeem":
      return "Voucher";
    case "/my-privilege":
      return "Member Privileges";
    case "/my-rewards":
      return "My Rewards";
    case "/promotion":
      return "Promotion";

    case "/business/redeem/status":
      return "Redeem";
    case "/business/redeem/create":
      return "Redeem";

    case "/business/promotion/status":
      return "Promotion";
    case "/business/promotion/create":
      return "Promotion";

    //feature 6
    case "/table":
      return "Table";
    case "/reservation-detail":
      return "Reservation Detail";

    //! waiting

    //feature 7

    //feature 8
    //! waiting
    //feature 9
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
