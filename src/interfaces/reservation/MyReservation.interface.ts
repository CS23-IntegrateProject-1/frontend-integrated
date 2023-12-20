export interface IData {
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
  Venue: {
    name: string;
    description: string;
    category: string;
    capacity: number;
    chatRoomId: number;
    locationId: number;
    score: string;
    venueId: number;
    website_url: string;
    venue_picture: string;
    Venue_photo: IPhotoData[];
    Menu: [
      {
        price: number;
      }
    ];
  };
}

export interface IPhotoData {
  venuePhotoId: number;
  venueId: number;
  image_url: string;
  date_added: string;
}

export const initialStateData: IData[] = [
  {
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
    Venue: {
      name: "",
      description: "",
      category: "",
      capacity: 0,
      chatRoomId: 0,
      locationId: 0,
      score: "",
      venueId: 0,
      website_url: "",
      venue_picture: "",
      Venue_photo: [
        {
          venuePhotoId: 0,
          venueId: 0,
          image_url: "",
          date_added: "",
        },
      ],
      Menu: [
        {
          price: 0,
        },
      ],
    },
  },
];
