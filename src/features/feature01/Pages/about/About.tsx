import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import harmoni_logo from "../../../../assets/logo/harmoni_logo.png";
import textStyles from "../../../../theme/foundations/textStyles";
import { Axios } from "../../../../AxiosInstance";

type About = {
  detail: string;
  id: number;
  last_update: string;
  version: string;
};

const defaultAbout = {
  detail: "",
  id: 0,
  last_update: "",
  version: "V0.0.0.0",
};

export const About = () => {
  const [about, setAbout] = useState<About>(defaultAbout);

  useEffect(() => {
    Axios.get("/feature1/about?latest").then((res) => {
      if (res.status === 200) {
        setAbout(res.data as About);
      }
    });
  }, []);

  return (
    <Grid>
      <GridItem width={"25%"} margin={"auto"}>
        <img src={harmoni_logo} alt={"logo"} />
      </GridItem>
      <GridItem style={{ textAlign: "center" }}>
        <Text
          py={4}
          fontSize={[textStyles.h2.fontSize]}
          fontWeight={[textStyles.h2.fontWeight]}
          color={"brand.100"}
        >
          {" "}
          {about.version}
        </Text>
      </GridItem>
      <GridItem>
        <HStack pb={4}>
          <Heading
            fontSize={[textStyles.h1.fontSize]}
            fontWeight={[textStyles.h1.fontWeight]}
          >
            Harmoni
          </Heading>
          <Divider border={"2px"} color={"brand.100"} />
        </HStack>
      </GridItem>
      <GridItem
        fontSize={[textStyles.body1.fontSize]}
        fontWeight={[textStyles.body1.fontWeight]}
      >
        {about.detail}
      </GridItem>
    </Grid>
  );
};
