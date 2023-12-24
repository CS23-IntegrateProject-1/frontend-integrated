import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import Chair from "../../images/chair.png";
import RedSeat from "../../images/redSeat.png";
import PurpleSeat from "../../images/purpleSeat.png";
import YellowSeat from "../../images/yellowSeat.png";
import Check from "../../images/checked.png";
import ReserveSeat from "../../images/reserveSeat.png";
import { ISeat } from "../../../../interfaces/Movie/IScreenDatas.interface";

interface MovieSeatProps {
	isSelected: number[];
	onSeatClick: (seatId: number, price: number) => void;
	isNotAvailable: number[];
	seat: ISeat;
	defaultPrice: number;
}

export const MovieSeat: React.FC<MovieSeatProps> = ({
	isSelected,
	onSeatClick,
	isNotAvailable,
	seat,
	defaultPrice,
}) => {
	const seatId = seat.seatId;
	const type = seat.Seat_types.type_name;
	const seatPrice = seat.Seat_types.price_modifier * defaultPrice;
	const [isSeatSelectLocal, setIsSeatSelectLocal] = useState<boolean>(
		isSelected.includes(seatId)
	);

	const Available = !isNotAvailable.some((arr) => arr == seatId);
	const handleImageClick = () => {
		if (!Available) return;
		onSeatClick(seatId, seatPrice);
		setIsSeatSelectLocal(!isSeatSelectLocal);
	};

	return (
		<Box>
			<Box>
				<Image
					onClick={handleImageClick}
					style={{ cursor: "pointer" }}
					src={
						isSeatSelectLocal
							? Check
							: !Available
							? ReserveSeat
							: type === "Regular"
							? RedSeat
							: type === "Premium"
							? PurpleSeat
							: type === "Honeymoon"
							? YellowSeat
							: Chair
					}
					alt="chair"
					w="7vh"
				/>
			</Box>
		</Box>
	);
};
