import { Avatar, Box } from "@chakra-ui/react";
import { FC, useState } from "react";
import { TextStyle } from "../../../../theme/TextStyle";
import { useLocation } from "react-router-dom";
import { set } from "date-fns";
interface SelectedFriend {
  user_id: number;
  name: string;
  avatar: string;
}
interface GroupMemberProps {
  selectedFriends: SelectedFriend[];
  setSelectedFriends: React.Dispatch<React.SetStateAction<SelectedFriend[]>>;
}

// const [selectedFriends, setSelectedFriends] = useState<SelectedFriend[]>([]);
export const GroupAva: FC<GroupMemberProps> = (props: GroupMemberProps) => {
  return (
    <Box display={"flex"} gap={10}>
      {props.selectedFriends.map(
        (friend: { user_id: number; name: string; avatar: string }) => (
          <Box cursor={"pointer"} position={"relative"}>
            <Box>
              <Avatar src="https://bit.ly/broken-link" size={"md"} />
            </Box>
            <Box fontSize={TextStyle.body2.fontSize}>{friend.name}</Box>
            <Box
              borderRadius={"50%"}
              px={2}
              bg={"brand.200"}
              fontWeight={TextStyle.body1.fontWeight}
              position={"absolute"}
              top={-1}
              left={8}
              color={"white"}
              onClick={(e) => {
                props.setSelectedFriends(
                  props.selectedFriends.filter(
                    (f) => f.user_id !== friend.user_id
                  )
                );
              }}
            >
              x
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};
