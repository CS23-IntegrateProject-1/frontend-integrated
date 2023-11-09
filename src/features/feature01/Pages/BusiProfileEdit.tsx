import { Box, Text, Editable, Flex, Button, ButtonGroup } from "@chakra-ui/react"
import { useState } from "react";
export const BusiProfileEdit = () => {
    const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
    return (
        <Box>
            <Flex mt={8} alignItems={'center'} justifyContent={'center'}>
                <Box>
                    <svg width="101" height="96" viewBox="0 0 101 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="96" rx="48" fill="#A0AEC0"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1281 30.5927C29.1281 20.3227 37.5743 12 47.9968 12C58.4192 12 66.8717 20.3227 66.8717 30.5927C66.8717 40.8688 58.4192 49.1915 47.9968 49.1915C37.5743 49.1915 29.1281 40.8688 29.1281 30.5927ZM48.1344 88C60.5952 88 71.872 83.0843 80 75.1761V69.566C80 62.7822 74.272 57.2766 67.2 57.2766H28.8C21.728 57.2766 16 62.7822 16 69.566V74.8934C24.1472 82.9614 35.5328 88 48.1344 88Z" fill="white"/>
                        <circle cx="89" cy="70" r="11" fill="white" stroke="#A0AEC0" stroke-width="2"/>
                        <path d="M90.3733 68.0133L90.9867 68.6267L84.9467 74.6667H84.3333V74.0533L90.3733 68.0133ZM92.7733 64C92.6067 64 92.4333 64.0667 92.3067 64.1933L91.0867 65.4133L93.5867 67.9133L94.8067 66.6933C94.8685 66.6317 94.9175 66.5584 94.951 66.4777C94.9844 66.3971 95.0016 66.3106 95.0016 66.2233C95.0016 66.136 94.9844 66.0496 94.951 65.9689C94.9175 65.8883 94.8685 65.815 94.8067 65.7533L93.2467 64.1933C93.1133 64.06 92.9467 64 92.7733 64ZM90.3733 66.1267L83 73.5V76H85.5L92.8733 68.6267L90.3733 66.1267Z" fill="#A0AEC0"/>
                    </svg>
                </Box>
            </Flex>
             
        </Box>
    )
}