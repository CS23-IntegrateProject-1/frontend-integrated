/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Icon,
  Text,
  Button,

} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RDetailCard } from "../components/RDetailCard";
import { getReservationDetail } from "../../../api/Reservation/getReservationDetail";
import { useLocation } from "react-router-dom";

interface IData {
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
    Venue_photo: string;
  };
  location: {
    address: string;
  };
  reservations: [
    {
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
      user: {
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
      deposit: {
        deposit_amount: string;
        depositId: number;
        venueId: number;
      };
    }
  ];
}

export const GetReservationDetail = () => {
  const [data, setData] = useState<IData>();
  const [isLoaded, setIsLoaded] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seats = searchParams.get("count");

  useEffect(() => {
    fetchData();
    console.log("FNAME" + data?.reservations[0].user.fname);
  }, []);

  const fetchData = async () => {
    const response: IData = await getReservationDetail(1, 46);
    setData(response);
    setIsLoaded(true);
  };
  const render = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center" // Center the content horizontally
        justifyContent="center"
      >
        <RDetailCard />

        {/* This will push the reservation detail to the bottom */}
        <Box
          width="393px"
          height="480px"
          flexShrink={0}
          borderRadius="20px 20px 0px 0px"
          background="var(--Dark-background, #200944)"
          boxShadow="0px -4px 30px 0px #B921B2"
        >
          {/* Your Reservation Detail content goes here */}
          <Box
            width="369px"
            height="280px"
            flexShrink={0}
            borderRadius="20px"
            background="#DEBEF6"
            marginTop="16px"
            marginLeft="12px" // Adjust margin top as needed
          >
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={15}
              padding={19}
            >
              Reservation information
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop="4px"
            >
              Name :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft={34}
              marginTop="10px"
            >
              {/* {data?.reservations[0].user.fname} */}
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              marginLeft={34}
              marginTop={18}
            >
              Phone Number :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft={34}
              marginTop="10px"
            >
              1169
            </Text>
            <Icon
              width="24px"
              height="24px"
              flexShrink="0"
              marginTop="12px"
              marginLeft="40px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <g filter="url(#filter0_d_4080_13086)">
                  <path
                    d="M17.8333 2.49999H17V0.833328H15.3333V2.49999H8.66667V0.833328H7V2.49999H6.16667C5.24167 2.49999 4.50833 3.24999 4.50833 4.16666L4.5 15.8333C4.5 16.2754 4.67559 16.6993 4.98816 17.0118C5.30072 17.3244 5.72464 17.5 6.16667 17.5H17.8333C18.75 17.5 19.5 16.75 19.5 15.8333V4.16666C19.5 3.24999 18.75 2.49999 17.8333 2.49999ZM17.8333 15.8333H6.16667V7.49999H17.8333V15.8333ZM17.8333 5.83333H6.16667V4.16666H17.8333V5.83333ZM16.1667 9.99999H12V14.1667H16.1667V9.99999Z"
                    fill="#191919"
                  />
                  <path
                    d="M17.8333 2.49999H17V0.833328H15.3333V2.49999H8.66667V0.833328H7V2.49999H6.16667C5.24167 2.49999 4.50833 3.24999 4.50833 4.16666L4.5 15.8333C4.5 16.2754 4.67559 16.6993 4.98816 17.0118C5.30072 17.3244 5.72464 17.5 6.16667 17.5H17.8333C18.75 17.5 19.5 16.75 19.5 15.8333V4.16666C19.5 3.24999 18.75 2.49999 17.8333 2.49999ZM17.8333 15.8333H6.16667V7.49999H17.8333V15.8333ZM17.8333 5.83333H6.16667V4.16666H17.8333V5.83333ZM16.1667 9.99999H12V14.1667H16.1667V9.99999Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4080_13086"
                    x="0.5"
                    y="0.833328"
                    width="23"
                    height="24.6667"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4080_13086"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4080_13086"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Icon>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-20px"
            >
              Date :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              11/11/23
            </Text>
            <Icon
              width="24px"
              height="24px"
              flexShrink="0"
              marginTop="12px"
              marginLeft="38px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 30"
                fill="none"
              >
                <g filter="url(#filter0_d_4080_13077)">
                  <path
                    d="M13.99 2C8.47 2 4 6.48 4 12C4 17.52 8.47 22 13.99 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 13.99 2ZM14 20C9.58 20 6 16.42 6 12C6 7.58 9.58 4 14 4C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20Z"
                    fill="#200944"
                  />
                  <path
                    d="M13.99 2C8.47 2 4 6.48 4 12C4 17.52 8.47 22 13.99 22C19.52 22 24 17.52 24 12C24 6.48 19.52 2 13.99 2ZM14 20C9.58 20 6 16.42 6 12C6 7.58 9.58 4 14 4C18.42 4 22 7.58 22 12C22 16.42 18.42 20 14 20Z"
                    stroke="#200944"
                  />
                </g>
                <g filter="url(#filter1_d_4080_13077)">
                  <path
                    d="M14.5 7H13V13L18.25 16.15L19 14.92L14.5 12.25V7Z"
                    fill="#200944"
                  />
                  <path
                    d="M14.5 7H13V13L18.25 16.15L19 14.92L14.5 12.25V7Z"
                    stroke="#200944"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4080_13077"
                    x="0"
                    y="2"
                    width="28"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4080_13077"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4080_13077"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_4080_13077"
                    x="9"
                    y="7"
                    width="14"
                    height="17.15"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4080_13077"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4080_13077"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Icon>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-20px"
            >
              Time :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              11.11 pm
            </Text>
            <Icon
              width="24px"
              height="24px"
              flexShrink="0"
              marginTop="12px"
              marginLeft="38px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
              >
                <g filter="url(#filter0_d_4080_13074)">
                  <path
                    d="M11.6263 11.75C11.3086 11.75 11.0039 11.8817 10.7792 12.1161C10.5546 12.3505 10.4284 12.6685 10.4284 13C10.4284 13.3315 10.5546 13.6495 10.7792 13.8839C11.0039 14.1183 11.3086 14.25 11.6263 14.25C11.944 14.25 12.2487 14.1183 12.4734 13.8839C12.698 13.6495 12.8242 13.3315 12.8242 13C12.8242 12.6685 12.698 12.3505 12.4734 12.1161C12.2487 11.8817 11.944 11.75 11.6263 11.75ZM17.3763 11.75C17.0586 11.75 16.7539 11.8817 16.5292 12.1161C16.3046 12.3505 16.1784 12.6685 16.1784 13C16.1784 13.3315 16.3046 13.6495 16.5292 13.8839C16.7539 14.1183 17.0586 14.25 17.3763 14.25C17.694 14.25 17.9987 14.1183 18.2234 13.8839C18.448 13.6495 18.5742 13.3315 18.5742 13C18.5742 12.6685 18.448 12.3505 18.2234 12.1161C17.9987 11.8817 17.694 11.75 17.3763 11.75ZM14.5013 2C9.2113 2 4.91797 6.48 4.91797 12C4.91797 17.52 9.2113 22 14.5013 22C19.7913 22 24.0846 17.52 24.0846 12C24.0846 6.48 19.7913 2 14.5013 2ZM14.5013 20C10.2751 20 6.83464 16.41 6.83464 12C6.83464 11.71 6.8538 11.42 6.88255 11.14C9.14422 10.09 10.9363 8.16 11.8755 5.77C12.9711 7.39238 14.5057 8.63679 16.2829 9.34401C18.06 10.0512 19.999 10.1891 21.8517 9.74C22.053 10.45 22.168 11.21 22.168 12C22.168 16.41 18.7276 20 14.5013 20Z"
                    fill="#200944"
                  />
                  <path
                    d="M11.6263 11.75C11.3086 11.75 11.0039 11.8817 10.7792 12.1161C10.5546 12.3505 10.4284 12.6685 10.4284 13C10.4284 13.3315 10.5546 13.6495 10.7792 13.8839C11.0039 14.1183 11.3086 14.25 11.6263 14.25C11.944 14.25 12.2487 14.1183 12.4734 13.8839C12.698 13.6495 12.8242 13.3315 12.8242 13C12.8242 12.6685 12.698 12.3505 12.4734 12.1161C12.2487 11.8817 11.944 11.75 11.6263 11.75ZM17.3763 11.75C17.0586 11.75 16.7539 11.8817 16.5292 12.1161C16.3046 12.3505 16.1784 12.6685 16.1784 13C16.1784 13.3315 16.3046 13.6495 16.5292 13.8839C16.7539 14.1183 17.0586 14.25 17.3763 14.25C17.694 14.25 17.9987 14.1183 18.2234 13.8839C18.448 13.6495 18.5742 13.3315 18.5742 13C18.5742 12.6685 18.448 12.3505 18.2234 12.1161C17.9987 11.8817 17.694 11.75 17.3763 11.75ZM14.5013 2C9.2113 2 4.91797 6.48 4.91797 12C4.91797 17.52 9.2113 22 14.5013 22C19.7913 22 24.0846 17.52 24.0846 12C24.0846 6.48 19.7913 2 14.5013 2ZM14.5013 20C10.2751 20 6.83464 16.41 6.83464 12C6.83464 11.71 6.8538 11.42 6.88255 11.14C9.14422 10.09 10.9363 8.16 11.8755 5.77C12.9711 7.39238 14.5057 8.63679 16.2829 9.34401C18.06 10.0512 19.999 10.1891 21.8517 9.74C22.053 10.45 22.168 11.21 22.168 12C22.168 16.41 18.7276 20 14.5013 20Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4080_13074"
                    x="0.917969"
                    y="2"
                    width="27.168"
                    height="28"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4080_13074"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4080_13074"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Icon>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="71px"
              marginTop="-20px"
            >
              Seats :
            </Text>
            <Text
              color="#000"
              fontFamily="Roboto"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              marginLeft="120px"
              marginTop="-14px"
            >
              {seats}
            </Text>
            {/* Additional content goes here */}
          </Box>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Text
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            marginLeft="26px"
            marginTop="22.01"
          >
            Reservation fee
          </Text>
          <Text
            //   as='big'
            color="#F6F6F6"
            fontFamily="Roboto"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="700"
            // lineHeight="normal"
            marginLeft="288px"
            marginTop="-24px"
          >
            200 Baht
          </Text>
          <Box
            width="360px"
            height="1px"
            background="#DEBEF6"
            marginTop="18px"
            marginLeft="18px"
          ></Box>
          <Button
            borderRadius="10px"
            width="128px"
            height="36px"
            backgroundColor="#A533C8"
            textColor="white"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            marginTop="15px"
            marginLeft="133px"
          >
            Review
          </Button>
        </Box>
      </Box>
    );
  };

  return isLoaded ? render() : <div>Loading...</div>;
};
