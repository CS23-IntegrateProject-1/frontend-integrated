export interface IGetReservationDetailPhotoData {
  date_added: string;
  venueId: number;
  image_url: string;
}

export interface IGetReservationDetailData {
  venue: {
    name: string;
    description: string;
    category: string;
    capacity: number;
    chatRoomId: number;
    locationId: number;
    score: string;
    venueId: number;
    website_url: string;
    Venue_photo: IGetReservationDetailPhotoData[] | undefined;
  };
  location: {
    address: string;
  };
  reservations: [
    {
      name: string;
      venueId: number;
      guest_amount: number;
      reserved_time: string;
      status: string;
      userId: number;
      entry_time: string;
      isReview: boolean;
      reservationId: number;
      depositId: number;
      isPaidDeposit: string;
      branchId: number;
      phone: string;
      User: {
        username: string;
        hashed_password: string;
        fname: string;
        lname: string;
        email: string;
        profile_picture: string;
        addId: string;
        phone: string;
        tierId: number;
        userId: number;
        User_bio: string;
      };
      Deposit: {
        deposit_amount: string;
        depositId: number;
        venueId: number;
      };
    }
  ];
}

export const initialStateData: IGetReservationDetailData = {
  venue: {
    name: "",
    description: "",
    category: "",
    capacity: 0,
    chatRoomId: 0,
    locationId: 0,
    score: "",
    venueId: 0,
    website_url: "",
    Venue_photo: undefined,
  },
  location: {
    address: "",
  },
  reservations: [
    {
      name: "",
      venueId: 0,
      guest_amount: 0,
      reserved_time: "",
      status: "",
      userId: 0,
      entry_time: "",
      isReview: false,
      reservationId: 0,
      depositId: 0,
      isPaidDeposit: "",
      branchId: 0,
      phone: "",
      User: {
        username: "",
        hashed_password: "",
        fname: "",
        lname: "",
        email: "",
        profile_picture: "",
        addId: "",
        phone: "",
        tierId: 0,
        userId: 0,
        User_bio: "",
      },
      Deposit: {
        deposit_amount: "",
        depositId: 0,
        venueId: 0,
      },
    },
  ],
};
