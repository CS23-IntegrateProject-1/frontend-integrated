import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import { TextStyle } from "../../../../theme/TextStyle";
interface SelectedFriend {
  user_id: number;
  name: string;
  avatar: string;
}
interface NextButtonProps {
  selectedFriends: SelectedFriend[];
//   setSelectedFriends: React.Dispatch<React.SetStateAction<SelectedFriend[]>>;
}
export const NextButton: FC<NextButtonProps> = (props: NextButtonProps) => {
    const isDisabled = props.selectedFriends.length < 2;
    const buttonColor = isDisabled ? "gray.100" : "brand.200";
  return (
    <Box>
      <Button
        fontSize={TextStyle.h2.fontSize}
        cursor={"pointer"}
        bg={"none"}
        isDisabled={isDisabled}
        color={buttonColor}
        onClick={() => {
            console.log(props.selectedFriends);
          }}
      >
        {" "}
        Next
      </Button>
    </Box>
  );
};
