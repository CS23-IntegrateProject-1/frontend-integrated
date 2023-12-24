import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";
import { IVenue } from "../../../interfaces/AdminDashboard/IVenue.interface";

interface SortingModalProps {
	isOpen: boolean;
	onClose: () => void;
	venueData: IVenue[];
	setVenueData: (venueData: IVenue[]) => void;
}

const SortingModal: React.FC<SortingModalProps> = ({
	isOpen,
	onClose,
	venueData,
	setVenueData,
}) => {
	const sort = (state: number) => {
		switch (state) {
			case 1:
				return () => {
					const sortedVenueData = venueData.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						} else {
							return 1;
						}
					});
					setVenueData(sortedVenueData);
					onClose();
				};
			case 2:
				return () => {
					const sortedVenueData = venueData.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						} else {
							return -1;
						}
					});
					setVenueData(sortedVenueData);
					onClose();
				};
			default:
				return () => {
					onClose();
				};
		}
	};
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			closeOnOverlayClick={true}
			closeOnEsc={true}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textAlign="center" color="black">
					Sort By
				</ModalHeader>
				<ModalCloseButton color="black" />
				<ModalBody
					textAlign="center"
					display="flex"
					flexDirection="column"
					alignItems="center">
					<Button colorScheme="purple" onClick={sort(1)} mb={2}>
						A to Z
					</Button>
					<Button colorScheme="purple" onClick={sort(2)} mb={2}>
						Z to A
					</Button>
					<Button colorScheme="purple" onClick={onClose}>
						Close
					</Button>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default SortingModal;
