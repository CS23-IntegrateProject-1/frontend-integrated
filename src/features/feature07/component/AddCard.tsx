// AddCard.tsx
import { Flex, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";

interface AddCardProps {
	id: number;
	foodName: string;
	description: string;
	price: number;
	imageUrl: string;
	onSelect?: (id: number) => void;
}

export const AddCard: FC<AddCardProps> = ({
	id,
	foodName,
	description,
	price,
	imageUrl,
	onSelect,
}) => {
	const [isSelected, setIsSelected] = useState(false);
	// const [amount, setAmount] = useState(0);

	// const increaseAmount = () => {
	//   setAmount(amount + 1);
	// };

	// const decreaseAmount = () => {
	//   if (amount > 0) {
	//     setAmount(amount - 1);
	//   }
	// };

	const handleSelect = () => {
		if (onSelect) {
			onSelect(id); // Pass the ID of the selected menu item
			//console.log(id);
		}
		setIsSelected(!isSelected);
	};

	return (
		<Flex
			borderWidth="1px"
			borderRadius="md"
			width="319px"
			height="129px"
			p={1}
			//ask NanZun about color
			borderColor={isSelected ? "brand.500" : "brand.100"}
			onClick={handleSelect}>
			<Flex justifyContent="center">
				<Image
					// src="/src/features/feature07/assets/test.jpg"
					src={import.meta.env.VITE_BACKEND_URL + imageUrl}
					alt={foodName}
					objectFit="cover"
					mt={1}
					width="140px"
					height="110px"
					borderRadius="5px"
					position="relative"
				/>
			</Flex>

			<VStack alignItems="left" mt={2} ml={2}>
				<Text {...textStyles.h2} color="white" lineHeight="1">
					{/* food Name Integrate */}
					{foodName}
				</Text>
				<Text {...textStyles.body2} color="white" lineHeight="1">
					{/* Description Integrate lkflasjfoasdhfkjfh */}
					{description}
				</Text>
				<Text {...textStyles.body3} color="white" lineHeight="1.5">
					{/* Price Integrate */}
					{`${price} baht`}
				</Text>
				<HStack>
					{/* <Box border="solid"
          bgColor="white"
          width="116px"
          height="30px"
          ml='0'
          borderColor="white"
          borderRadius="5px"
        >
          <Flex justifyContent="space-between">
            <IconButton
              icon={<MinusIcon />}
              onClick={decreaseAmount}
              isDisabled={amount === 0}
              aria-label="Decrease Amount"
              width="30px"
              height="28px"
              borderRadius="5px 0 0 5px"
            />
            <Text {...textStyles.h2} color="black">
              {amount}
            </Text>
            <IconButton
              icon={<AddIcon />}
              onClick={() => {
                increaseAmount();
                handleSelect();
              }}
              aria-label="Increase Amount"
              width="30px"
              height="28px"
              borderRadius="0 5px 5px 0"
            />
          </Flex>
        </Box> */}
				</HStack>
			</VStack>
		</Flex>
	);
};
