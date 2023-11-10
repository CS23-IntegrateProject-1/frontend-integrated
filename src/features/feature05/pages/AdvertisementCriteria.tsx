import {
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import { useNavigate } from "react-router-dom";

export const AdvertisementCriteria = () => {
  const navigate = useNavigate();
  const handleClick=()=> { navigate("/advertisement/request");}
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      {/* Criteria * */}
      <Box
        width={{base:"90%" ,md:"70%" ,lg:"50%"}}
        minWidth="250px"
        maxWidth="700px"
        display="flex"
        flexDirection={"column"}
      >
        <Text style={TextStyle.h1} color={"white"} paddingBottom={3}>
          {" "}
          Advertisement criteria
        </Text>

        {/* 1 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Truthful and Transparent Advertising:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Ensure that all advertising content, whether on your website, social
            media, flyers, or other platforms, accurately represents your
            products, services, and promotions. Avoid false or exaggerated
            claims.
          </Text>
        </Box>

        {/* 2 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Intellectual Property Rights:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Respect intellectual property rights when creating and using
            marketing materials. Do not use copyrighted images, logos, or
            slogans without proper authorization.
          </Text>
        </Box>

        {/* 3 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Privacy and Data Protection:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Safeguard customer data and ensure compliance with data protection
            laws, such as the General Data Protection Regulation (GDPR) in the
            European Union or equivalent regulations in your region.
          </Text>
        </Box>

        {/* 4 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Avoid Discriminatory Content:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Refrain from using discriminatory language or imagery in advertising
            materials. Promote diversity and inclusivity in your marketing
            campaigns.
          </Text>
        </Box>

        {/* 5 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Environmental Claims:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            If you make environmental claims (e.g., "eco-friendly,"
            "sustainable"), ensure they are accurate and substantiated. Avoid
            greenwashing, which involves exaggerating or making false claims
            about environmental practices.
          </Text>
        </Box>

        {/* 6 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Pricing Transparency:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Clearly display prices, fees, and any additional charges in your
            advertising materials. Avoid hidden fees or misleading pricing
            practices.
          </Text>
        </Box>

        {/* 7 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Social Responsibility:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Use your advertising to promote responsible drinking and encourage
            designated drivers or alternative transportation options, especially
            in bars and clubs.
          </Text>
        </Box>

        {/* 8 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Avoid Offensive Content:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Steer clear of offensive or controversial content that could
            alienate potential customers or harm your brand's reputation.
          </Text>
        </Box>

        {/* 9 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Community Engagement:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Engage with the local community in a positive way through your
            advertising efforts. Highlight community involvement, sponsorships,
            and support for local charities or causes.
          </Text>
        </Box>

        {/* 10 */}
        <Box paddingBottom={3} display="flex" flexDirection={"column"}>
          <Text style={TextStyle.h2} color={"white"}>
            {" "}
            Monitor User-Generated Content:
          </Text>
          <Text style={TextStyle.h4} color={"white"}>
            {" "}
            Keep an eye on user-generated content related to your business on
            the platform and review sites. Address any inappropriate or
            misleading content promptly.
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={"row"}
          paddingBottom={3}
          justifyContent={"space-evenly"}
        >
          <Button 
            backgroundColor="#A533C8"
            variant="solid"
            width="40%"
            maxWidth={"200px"}
            color="white"
            onClick={handleClick}
          >
            Create
          </Button>

        </Box>
      </Box>
    </Box>
  );
};
