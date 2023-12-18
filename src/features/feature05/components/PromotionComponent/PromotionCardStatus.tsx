import { Box, Icon, Image } from "@chakra-ui/react";
import { FC } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PromotionStatusCardProps {
	data: {
		promotionId: number; // Assuming promotionId is a number
		isApprove: string;
		image_url: string;
		// Add other properties as needed
	};
}

export const PromotionStatusCard: FC<PromotionStatusCardProps> = ({ data }) => {
	const navigate = useNavigate();
    const handleClickEdit = () => {
        const { promotionId } = data;
		navigate(`/business/promotion/edit/${promotionId}`);
	};
	const status = data.isApprove;
	const img = data.image_url;
	const color =
		status === "Rejected"
			? "red"
			: status === "In_progress"
			? "blue"
			: "green";
	return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box
        pos={"relative"}
        w={"320px"}
        h={"129px"}
        overflow={"hidden"}
        marginTop={8}
        borderRadius={6}
      >
        <Image
          w={"320px"}
          h={"129px"}
          objectFit={"cover"}
          src={`${import.meta.env.VITE_BACKEND_URL}${img}`}
        />
        <Box
          pos={"absolute"}
          bg={color}
          bottom={2}
          right={2}
          borderRadius={10}
          px={"10px"}
        >
          {status}
        </Box>
        <Box pos={"absolute"} top={2} right={1} borderRadius={10} px={"10px"}>
          {status === "Rejected" && (
            <Icon
              as={FaRegEdit}
              color={"#5F0DBB"}
              onClick={handleClickEdit}
            ></Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
};
