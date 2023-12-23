import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Checkbox,
	Button,
	Stack,
} from "@chakra-ui/react";

const checkboxColor = "#763FAF"; // สีกล่องเลือก

interface FilteringModalProps {
	isOpen: boolean;
	onClose: () => void;
	options: { [key: string]: boolean };
	handleOptionChange: (option: string) => void;
	handleApplyFilter: () => void;
}

const FilteringModal: React.FC<FilteringModalProps> = ({
	isOpen,
	onClose,
	options,
	handleApplyFilter,
	handleOptionChange,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent color="black">
				<ModalHeader>Filter By</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Stack spacing={2}>
						<Checkbox
							isChecked={options.Restaurant}
							onChange={() => handleOptionChange("Restaurant")}
							colorScheme="purple"
							color={checkboxColor}>
							Restaurant
						</Checkbox>
						<Checkbox
							isChecked={options.Club}
							onChange={() => handleOptionChange("Club")}
							colorScheme="purple"
							color={checkboxColor}>
							Club
						</Checkbox>
						<Checkbox
							isChecked={options.Bar}
							onChange={() => handleOptionChange("Bar")}
							colorScheme="purple"
							color={checkboxColor}>
							Bar
						</Checkbox>
					</Stack>
				</ModalBody>
				<ModalFooter>
					<Button
						colorScheme="purple"
						mr={3}
						onClick={handleApplyFilter}
						backgroundColor={checkboxColor} // กำหนดสีพื้นหลังของ Button
						_hover={{ backgroundColor: "#5F0DBB" }} // กำหนดสีเมื่อโฮเวอร์
						_active={{ backgroundColor: "#5F0DBB" }} // กำหนดสีเมื่อกด
					>
						Done
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default FilteringModal;
