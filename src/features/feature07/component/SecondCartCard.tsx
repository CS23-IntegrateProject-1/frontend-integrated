import { Box, Flex, Image, Text,  VStack, HStack } from "@chakra-ui/react";
import { FC} from "react";
import textStyles from "../../../theme/foundations/textStyles";
import { ButtonComponent } from "../../../components/buttons/ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
interface SecondCardProps {
  id:number;
  foodName: string;
  description: string;
  price: number;
  imageUrl: string;
  amount: number;
  type: string;
}

export const SecondCartCard: FC<SecondCardProps>= ({id,foodName,price,imageUrl,amount,type}) => {
    const navigate = useNavigate();
    const { venueId } = useParams();

  const handleMenuEdit = (type: string, id: string) => {
    navigate(`/venue/${venueId}/cartdetail/${type}/${id}`);
    console.log("Clicked menu. Menu ID:", id);
  }

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
					// src="/src/features/feature07/assets/test.jpg"
					// alt="integrate"
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
					<Text {...textStyles.body3} color="white" lineHeight="2">
						{/* Price Integrate */}
						{`${price * amount} baht`}
					</Text>
					<HStack
						justifyContent="space-between"
						alignItems="center"
						width="100%"
						mt={5}>
						<ButtonComponent
							text="Edit"
							width={"100px"}
							height={"30px"}
							onClick={() => handleMenuEdit(type, `${id}`)}
						/>
						<Text
							{...textStyles.h2}
							color="white"
							lineHeight="1"
							justifyContent="flex-end"
							ml={6}>
							x{amount}
						</Text>
					</HStack>
				</Box>
			</VStack>
		</Flex>
  );
};


