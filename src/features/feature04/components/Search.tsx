import {
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { TextStyle } from "../../../theme/TextStyle";
import colors from "../../../theme/foundations/colors";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import textStyles from "../../../theme/foundations/textStyles";
const Search = () => {
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleIsFocused = () => {
    setIsInput(true);
  };
  const handleIsBlured = () => {
    setIsInput(false);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Box mb={10} display={"flex"} flexDirection={"column"}>
      <Text
        fontSize={TextStyle.h1.fontSize}
        fontWeight={TextStyle.h1.fontWeight}
        color={colors.white}
        mb={2}
      >
        Where do you want to go?
      </Text>
      <Box display={"flex"} flexDirection={"row"}>
        <InputGroup size={"md"}>
          <InputLeftElement pointerEvents="none">
            {inputValue === "" ? <SearchIcon color="#A0AEC0" /> : null}
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search"
            border="1px solid "
            borderRadius={"30px"}
            variant="unstyled"
            backgroundColor={"White"}
            color={colors.black}
            p={2}
            pl={8}
            
            onFocus={handleIsFocused}
            onBlur={handleIsBlured}
            value={inputValue}
            onChange={handleInputValue}
          />
        </InputGroup>
        <Box>
          <Button variant={"unstyle"} >
            <Box
              borderRadius={"100%"}
              height="20px"
              width="20px"
              backgroundColor={colors.grey[100]}
            />
            <Text m={2} fontSize={textStyles.body3.fontSize} fontWeight={textStyles.body3.fontWeight}>Filter</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Search;
