import { Box, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
// import { FaRegEdit } from "react-icons/fa";
//import { useNavigate } from "react-router-dom";

interface RewardData {
  User_voucher: [
    {
      isUsed: boolean;
    }
  ];
  voucher_image: string;
  voucherId: number;
  // Add other properties as needed
}

export const MyRewardsCard: FC<{
  data: RewardData;
}> = ({ data }) => {
  const navigate = useNavigate();

  const status = data.User_voucher[0].isUsed;
  const img = data.voucher_image;
  const voucherId = data.voucherId; // Assuming voucherId is a number

  const handleClick = () => {
    navigate(`/voucher/${voucherId}`);
  };

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
          onClick={handleClick}
          objectFit={"cover"}
          src={`${import.meta.env.VITE_BACKEND_URL}${img}`}
        />
        <Box
          pos={"absolute"}
          // bg={color}
          bottom={2}
          right={2}
          borderRadius={10}
          px={"10px"}
        >
          {status}
        </Box>
      </Box>
    </Box>
  );
};
