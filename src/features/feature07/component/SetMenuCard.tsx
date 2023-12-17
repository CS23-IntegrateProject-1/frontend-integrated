import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import textStyles from "../../../theme/foundations/textStyles";


interface SetMenuCardProps {
  id:number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
}

export const SetMenuCard: FC<SetMenuCardProps>= ({foodName,description,price,imageUrl,onClick}) => {

  return (
		<Flex
			borderWidth="1px"
			borderRadius="md"
			width="319px"
			height="120px"
			p={1}
			borderColor={"brand.100"}
			cursor={onClick ? "pointer" : "default"}
			onClick={onClick}>
			<Flex justifyContent="center" width="140px" height="105px">
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

			<VStack alignItems="left" mt={2} ml={2} flex="1">
				<Box>
					<Text {...textStyles.h2} color="white" lineHeight="1.5">
						{/* Set food Name Integrate */}
						{foodName}
					</Text>
					<Text {...textStyles.body2} color="white" lineHeight="1.8">
						{/* Description Integrate kasjfakldf
          asflkajsflk 
          dkASJDH */}
						{description}
					</Text>
					<Text {...textStyles.body3} color="white" lineHeight="2">
						{/* Price Integrate */}
						{`${price} baht`}
					</Text>
				</Box>
			</VStack>
		</Flex>
  );
};


