/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
// import { formatDatetime1 } from "../../../../functions/formatDatetime";

type Notification = {
	notiReserveId: number;
	title: string;
	message: string;
	status: string; // Keep sendOn as string for now
	reserveId: number;
};

type Reservation = {
	venueId: number;
	guest_amount: number;
	reserved_time: Date;
	status: string;
	userId: number;
	entry_time: Date;
	isReview: boolean;
	reservationId: number;
	depositId: number;
	isPaidDeposit: string;
	Check_in_log?: string;
	Notes?: string;
	Orders?: string;
};
type advernoti = {
	notiAdBusinessId: number;
	title: string;
	message: string;
	isApprove: string;
	advertisementId: number;
};


type Order = {
  orderId: number,
  reservedId: number,
  order_date: string,
  tableNo: number,
}

interface property {
	property : property;
}
interface property {
	venueId: number;
	businessId: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formatDate = (dateString: string) => {
	if (!dateString) {
		return "Invalid Date";
	}

	const date: string = formatDate(dateString);

	if (isNaN(new Date(date).getTime())) {
		return "Invalid Date";
	}

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(date).toLocaleDateString(undefined, options);
};

export const Notification = () => {
	const [notificationData, setNotificationData] = useState<Notification[]>(
		[]
	);
	const [userData, setUserData] = useState("");
	userData;
	const [userId, setUserId] = useState("");
	const [venueId, setVenueId] = useState(0);
	userId;
	const [reservation, setReservation] = useState<Reservation[]>([]);
	const [tableNumberMap, setTableNumberMap] = useState<Record<string, any>>(
		{}
		);
		const [advertisementData, setAdvertisementData] = useState<any[]>([]);
		advertisementData;
		const [businessId, setBusinessId] = useState(0);
		businessId;
		const [businessAdver, setbusinessAdver] = useState<advernoti[]>([]);
	const [businessAdMain, setBusinessAdMain] = useState();
	
	const fetchVenueId = async () => {
		const venueId = await Axios.get<property>(`/feature8/venue/getVenueIdByBusinessId`);
		const venueIds = venueId.data;  
		return { property: venueIds }; // Change property to venueIds
	};
	const { data: venueIds } = useQuery<{
		property: property;
	}>(['fetchVenueId'], () => fetchVenueId()); 
	useEffect(() => {
		if (venueIds?.property?.property) {
			setVenueId(venueIds?.property?.property.venueId);
			setBusinessId(venueIds?.property?.property.businessId);
		}
	}, [venueIds?.property?.property]);
	
	



	const fetchData = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;
			// Use the fetch function instead of axios
			const response = await fetch(backendUrl + "/feature8/user", {
				credentials: "include",
			});
			// Check if the request was successful (status code in the range 200-299)
			if (response.ok) {
				const userData = await response.json(); // Extract userData from response
				// Check if userData exists before calling setUserData
				if (userData) {
					setUserData(userData); // Call setUserData with valid userData
					setUserId(userData.userId);
				} else {
					console.error("No user data received from API");
				}
			} else {
				// Handle non-successful response (status code outside the range 200-299)
				console.error(
					"Error fetching user data. Status:",
					response.status
				);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
	const fetchReservationData = async () => {
		try {
			
			const reservationResponse = await Axios.get(
				`/feature8/reservation/${venueId}`
			);
			const reservationData = reservationResponse.data; // Assuming the data is in the 'data' property
			setReservation(reservationData);
		} catch (error) {
			console.error("Error fetching reservation data:", error);
		}
	};

	useEffect(() => {
		if(venueId!==0){
			fetchReservationData();
		}
	}, [venueId]);


	useEffect(() => {
		fetchData();
	}, []); // Run once when the component mounts

	// reservation.map((res) => console.log(res.status));
	const reservationIds = useMemo(() => {
		return reservation.map((res) => res.reservationId);
	}, [reservation]);

	const notiData = async () => {
		try {
			
			const reservationResponse = await Axios.get(
				`/feature8/notifications/reservation`
			);
			const notiReserveData = reservationResponse.data;

			// Filter notifications based on matching reserveId and reservationIds
			const filteredNotifications = notiReserveData.filter(
				(notification: { reserveId: any }) =>
					reservationIds.includes(notification.reserveId)
			);


			setNotificationData(filteredNotifications);
		} catch (error) {
			console.error("Error fetching reservation data:", error);
		}
	};

	useEffect(() => {
		notiData();
	}, [reservationIds]); // Run once when the component mounts

	const reserveIdMap = useMemo(() => {
		const map: Record<number, Notification> = {};

		notificationData
			.filter((notification) => notification.status === "Check_out")
			.forEach((notification) => {
				const reserveId = notification.reserveId;

				if (reserveId !== undefined) {
					map[reserveId as number] = notification as Notification;
				}
			});

		return map;
	}, [notificationData]);

	// useEffect(() => {
	//   // Access the memoized reserveIdMap when needed
	//   // console.log('ReserveId Map:', reserveIdMap);

	//   // ... do something with reserveIdMap
	// }, [reserveIdMap]);

	useEffect(() => {
		const fetchTableNumbers = async () => {
			try {
				

				// Extracting reserveIds from reserveIdMap
				const reserveIds = Object.keys(reserveIdMap) as string[];

				// Use Promise.all to make parallel requests for table numbers
				const tableNumberResponses = await Promise.all(
					reserveIds.map(async (reserveId) => {
						const tableNumberResponse = await Axios.get(
							`/feature8/reservation/${venueId}/${reserveId}`
						);
						return {
							reserveId,
							tableNumberData: tableNumberResponse.data,
						};
					})
				);

				// Construct a mapping of reserveId to tableNumberData
				tableNumberResponses.forEach(
					({ reserveId, tableNumberData }) => {
						setTableNumberMap((prevTableNumberMap) => ({
							...prevTableNumberMap,
							[reserveId as string]: tableNumberData,
						}));
					}
				);

				// Now you can use tableNumberMap in your component
			
			} catch (error) {
				console.error("Error fetching table number data:", error);
			}
		};

		// Fetch table numbers when reserveIdMap changes
		fetchTableNumbers();
	}, [reserveIdMap, venueId]);
// }, [reserveIdMap, tableNumberMap, venueId]);

	const pendingReservations = notificationData.filter(
		(res) => res.status === "Pending"
	);
	const checkOutReservations = notificationData.filter(
		(res) => res.status === "Check_out"
	);

	const fetchAdvertisementData = async () => {
		try {
			
			const advertisementResponse = await Axios.get(
				`/feature8/notifications/advertisementbizId`
			);
			const advertisementData = advertisementResponse.data; // Assuming the data is in the 'data' property
			setAdvertisementData(advertisementData);
		} catch (error) {
			console.error("Error fetching advertisement data:", error);
		}
	};

	useEffect(() => {
		fetchAdvertisementData();
	}, []);
	// http://localhost:8080/feature8/notifications/advertisementbizId/1
	// const fetchBusinessId = async () => {
	// 	try {
			
	// 		const FetchbusinessId = await Axios.get(
	// 			`/feature8/notifications/advertisementbizId/${venueId}`
	// 		);
	// 		const businessId = FetchbusinessId.data.businessId; // Assuming the data is in the 'data' property
	// 		setBusinessId(businessId);
	// 	} catch (error) {
	// 		console.error("Error fetching advertisement data:", error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchBusinessId();
	// }, [venueId]);

	const bizAdverAd = async () => {
		try {
			
			const advertisementResponse = await Axios.get(
				`/feature8/notifications/advertisement`
			);
			const advertisementData = advertisementResponse.data; // Assuming the data is in the 'data' property
			setbusinessAdver(advertisementData);
		} catch (error) {
			console.error("Error fetching advertisement data:", error);
		}
	};

	useEffect(() => {
		bizAdverAd();
	}, []);

	const advertisementId = useMemo(() => {
		return businessAdver.map((res: any) => res.advertisementId);
	}, [businessAdver]);

	const bizAllAdvertiseMain = async () => {
		try {
			
			const advertisementResponse = await Axios.get(
				`/feature8/business/adall`
			);
			const advertisementData = advertisementResponse.data; // Assuming the data is in the 'data' property
			setBusinessAdMain(advertisementData);
		} catch (error) {
			console.error("Error fetching advertisement data:", error);
		}
	};

	useEffect(() => {
		bizAllAdvertiseMain();
	}, []);

  const fetchOrderUpdate = async () => {
    const orderRes = await Axios.get<Order[]>(`/feature8/venue/${venueId}/getOrdersAndTableNos`);

    const orderData = orderRes.data;
    
    return { orderData };
  };


const { data: orderData } = useQuery<{
  orderData: Order[];
}>(['orderUpdate', venueId], () => fetchOrderUpdate());

// /feature8/venue/:venueId/getBusinessId
// Rename the function to avoid redeclaration
// const fetchBusinessIdFromVenue = async () => {
//   const bizIdRes = await Axios.get<{ businessId: number }>(`/feature8/venue/${venueId}/getBusinessId`);

//   // Extract the businessId from the response data
//   const bizId = bizIdRes.data.businessId;
  
//   // Return the businessId, not an object
//   return bizId;
// };

// Use the renamed function in useQuery
// const { data: dataBusinessId } = useQuery<number>(['fetchBusinessId', venueId], fetchBusinessIdFromVenue);
  


	// Have to filter the businessId as well ! DON'T FORGET, NOT DONE YET
	const filteredAds = useMemo(() => {
		if (!businessAdMain || !advertisementId) {
			return [];
		}

		return (businessAdMain as any[]).filter(
			(ad: { advertisementId: number }) =>
				advertisementId.includes(ad.advertisementId)
		);
	}, [businessAdMain, advertisementId]);


	const allNotifications = useMemo(() => {
		const pendingResNotifications = pendingReservations.map(
			(pendingRes) => {
				const matchingReservation = reservation.find(
					(res) => res.reservationId === pendingRes.reserveId
				);
				return matchingReservation
					? { ...pendingRes, time: matchingReservation.reserved_time }
					: null;
			}
		);

		const checkOutResNotifications = checkOutReservations.map(
			(checkOutRes) => {
				const tableNumberData = tableNumberMap[checkOutRes.reserveId];
				const tableNumber = tableNumberData
					? tableNumberData.tableNo
					: "N/A";
				const matchingReservation = reservation.find(
					(res) => res.reservationId === checkOutRes.reserveId
				);
				return matchingReservation
					? {
							...checkOutRes,
							time: matchingReservation.reserved_time,
							tableNumber,
					}
					: null;
			}
		);

		const adNotifications = filteredAds.map((ad) => {
			return { ...ad, time: new Date(ad.start_date) };
		});

    // const totalOrderDate = orderData?.orderData?.reduce(
    //   (sum, order) => sum + new Date(order.order_date).getTime(),
    //   0
    // );
    const adOrderUpdate = orderData?.orderData.map((ou) => {
		console.log(orderData)
      return {...ou, time: new Date(ou.order_date)}
    })

    

		// Filter out null entries
		return [
			...pendingResNotifications,
			...checkOutResNotifications,
			...adNotifications,
      ...(adOrderUpdate || []),
		].filter((notification) => notification !== null);
	}, [
		pendingReservations,
		checkOutReservations,
		filteredAds,
		reservation,
		tableNumberMap,
	]);

	// Sort all notifications by time
	const sortedNotifications = useMemo(() => {
		return allNotifications.sort((notif1, notif2) => {
			const date1 = new Date(notif1.time);
			const date2 = new Date(notif2.time);
			return date2.getTime() - date1.getTime();
		});
	}, [allNotifications]);

	return (
		<div>
			{sortedNotifications.map((notification, index) => {
				const timeDifference = formatDistanceToNow(
					new Date(notification.time),
					{ addSuffix: true }
				);

				if (notification.reserveId) {
					// New Reservation or Check-out
					return (
						<Link
							key={index}
							to={`/business/Notification/${
								notification.status === "Pending"
									? "NewReservation"
									: "Checkout"
							}/${venueId}/${notification.reserveId}`}>
							<Flex
								bg="blackAlpha.300"
								h="75px"
								align="center"
								borderRadius="10px"
								transition="background-color 0.3s ease-in-out"
								_hover={{ bg: "blackAlpha.400" }}
								_active={{ bg: "blackAlpha.200" }}
								marginBottom="10px">
								<Box ml="3">
									<Text fontWeight="bold">
										{notification.status === "Pending"
											? "New reservation"
											: "Check out"}
									</Text>
									<Text fontSize="sm">
										{notification.status === "Pending"
											? "Report to business"
											: `Table no.${
													notification.tableNumber ||
													"N/A"
											}`}
									</Text>
								</Box>
								<Spacer />
								<Box>
									<Text
										fontSize="md"
										textAlign="right"
										paddingRight={3}>
										{timeDifference}
									</Text>
								</Box>
							</Flex>
						</Link>
					);
				} else if (notification.advertisementId && businessId === notification.businessId) {
					// Advertisement
					return (
						<Link
							key={index}
							to={`/business/Notification/advertisement/${notification.advertisementId}`}>
							<Flex
								bg="blackAlpha.300"
								h="75px"
								align="center"
								borderRadius="10px"
								transition="background-color 0.3s ease-in-out"
								_hover={{ bg: "blackAlpha.400" }}
								_active={{ bg: "blackAlpha.200" }}
								marginBottom="10px">
								<Box ml="3">
									<Text fontWeight="bold">
										Advertisement Notice
									</Text>
									<Text fontSize="sm">{`Advertisement number ${notification.advertisementId}, Report to business`}</Text>
								</Box>
								<Spacer />
								<Box>
									<Text
										fontSize="md"
										textAlign="right"
										paddingRight={3}>
										{timeDifference}
									</Text>
								</Box>
							</Flex>
						</Link>
					);
				}

        else if (notification.orderId) {
			console.log(notification)
          // Handle order notifications
          return (
            <Link
              key={index}
              to={`/business/Notification/OrderUpdate/${notification.orderId}`}>
              <Flex
                bg="blackAlpha.300"
                h="75px"
                align="center"
                borderRadius="10px"
                transition="background-color 0.3s ease-in-out"
                _hover={{ bg: "blackAlpha.400" }}
                _active={{ bg: "blackAlpha.200" }}
                marginBottom="10px">
                <Box ml="3">
                  <Text fontWeight="bold">
                    Order Update
                  </Text>
                  <Text fontSize="sm">{`Table no. ${notification.tableNo || "N/A"}`}</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text
                    fontSize="md"
                    textAlign="right"
                    paddingRight={3}>
                    {timeDifference}
                  </Text>
                </Box>
              </Flex>
            </Link>
          );
        }
          
          
          return null; // Handle other notification types as needed
        })}

      {/* {Array.isArray(orderData?.orderData) && orderData?.orderData.map((order, index) => {
        const differenceInDays = (Date.now() - new Date(order.order_date).getTime());
          
        return (
          <Link
          key={index}
          to={`/business/Notification/${
            order.orderId.status === "Pending"
            ? "NewReservation"
            : "Checkout"
          }/${venueId}/${order.orderId}`}>
            <Flex
              bg="blackAlpha.300"
              h="75px"
              align="center"
              borderRadius="10px"
              transition="background-color 0.3s ease-in-out"
              _hover={{ bg: "blackAlpha.400" }}
              _active={{ bg: "blackAlpha.200" }}
              marginBottom="10px">
              <Box ml="3">
                <Text fontWeight="bold">
                  Order Update
                </Text>
                <Text fontSize="sm">
                  Table no. {order.tableNo}
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text
                  fontSize="md"
                  textAlign="right"
                  paddingRight={3}>
                  {order.order_date}
                </Text>
              </Box>
            </Flex>
          </Link>
        );
      })} */}
      </div>
      
      
      );


};
