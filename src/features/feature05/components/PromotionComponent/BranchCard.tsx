import { Card, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IBranchCardListProp } from "../../../../interfaces/Promotion/IBranchCardLiistProp.interface";

export const BranchCard: FC<IBranchCardListProp> = (branch) => {
  console.log(branch);
  return (
    <Card bg={"brand.100"} mx={"10px"} mb={"15px"}>
      <Text p={"10px"}>{branch.branch_name}</Text>
    </Card>
  );
};
