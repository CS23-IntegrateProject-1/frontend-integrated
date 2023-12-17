import { Box, Flex, Image, Text,  VStack } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../theme/foundations/textStyles";


interface PreparedMenuCardProps {
  id:number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  amount: number;
}

export const PreparedMenuCard: FC<PreparedMenuCardProps>= ({foodName,description,price,imageUrl,amount}) => {

  return (
		<Flex
			borderWidth="1px"
			borderRadius="md"
			width="319px"
			height="120px"
			p={1}
			borderColor={"brand.100"}>
			<Flex justifyContent="center">
				<Image
					src={
						imageUrl
							? `${import.meta.env.VITE_BACKEND_URL}${imageUrl}`
							: "/src/features/feature07/assets/test.jpg"
					}
					alt={imageUrl ? foodName : ""}
					objectFit="cover"
					mt={0.5}
					width="140px"
					height="105px"
					borderRadius="5px"
					position="relative"
				/>
			</Flex>

			<VStack alignItems="left" mt={2} ml={2}>
				<Box>
					<Text {...textStyles.h2} color="white" lineHeight="1.5">
						{/* Prepare food Name  */}
						{foodName}
					</Text>
					<Text {...textStyles.body2} color="white" lineHeight="1.8">
						{/* Description Integrate kasjfakldf
          asflkajsflk 
          dkASJDH */}
						{description}
					</Text>
					<Text {...textStyles.body3} color="white" lineHeight="1.5">
						{/* Price Integrate */}
						{`${price} baht`}
					</Text>
					<Text
						{...textStyles.h3}
						color="white"
						lineHeight="1"
						justifyContent="flex-end"
						ml={40}>
						x{amount}
					</Text>
				</Box>
			</VStack>
		</Flex>
  );
};


