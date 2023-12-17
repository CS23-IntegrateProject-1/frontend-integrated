import {
  Box,
  Text,
  Flex,
  Avatar,
  Input,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Button,
} from "@chakra-ui/react";
import { TextStyle } from "../../../../theme/TextStyle";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { useEffect, useState } from "react";
import { Axios } from "../../../../AxiosInstance";

export const Profile = () => {

  const [profileData, setProfileData] = useState({
    username: "",
    phone: "",
    email: "",
    birthday: "",
    gender: "",
    profile_img: "",
  });

  useEffect(() => {
    const url1 = `/feature1/profile`;
    Axios.get(url1, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          data.birthday = data.birthday.split("T")[0];
          setProfileData(response.data);
          console.log(profileData);
          // friData.map((item) => {
          //     console.log(item.name);
          // })
        }
      })
      .catch((error) => {
        console.error("Error fetching profile  data:", error);
      });
  }, []);
  const handleSave = (e : React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // const newProfileData = {
    //   phone: profileData.phone,
    //   email: profileData.email,
    //   birthday: new Date(profileData.birthday).toISOString(),
    //   gender: profileData.gender,
    //   profile_img: profileData.selectedFile,
    // };
    //debugger;
    //sending with form 
    const allData = new FormData();
    allData.append("phone", profileData.phone);
    allData.append("email", profileData.email);
    allData.append("birthday", new Date(profileData.birthday).toISOString());
    allData.append("gender", profileData.gender);
    allData.append("profile_img", profileData.profile_img);

    Axios.put(`/feature1/profile`, allData, { withCredentials: true })
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
        }
        return response; // Add this line to fix the type error
      })
      .catch((error) => {
        console.error("Error saving profile data:", error);
      });
    console.log("save");
  };
  //handle imge profile
  const profileImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const objUrl = URL.createObjectURL(file);
    console.log(objUrl);
    setProfileData({ ...profileData, profile_img: objUrl }); //adding profile img to profile Data
  };
  return (
    <FormControl>
      <Grid>
        <GridItem>
          <Box>
            {/* white bg box */}
            <Box zIndex={-2} bg={"white"} w={"200"} h={"120"}></Box>
            <Flex
              zIndex={-1}
              mt={-14}
              alignItems={"center"}
              justifyContent={"center"}
              cursor={'pointer'}
            >
              <Box position={"relative"} cursor={"pointer"}>
                {profileData.profile_img ? (
                  <Avatar size={"xl"} src={profileData.profile_img} />
                ) : (
                  <Avatar size={"xl"} src="https://bit.ly/broken-link" />
                )} 
                {/* button to change image */}
                <Box position={"absolute"} top={51} left={20}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="white"
                      stroke="#A0AEC0"
                      strokeWidth="2"
                    />
                    <path
                      d="M13.3733 10.0133L13.9867 10.6267L7.94667 16.6667H7.33333V16.0533L13.3733 10.0133ZM15.7733 6C15.6067 6 15.4333 6.06667 15.3067 6.19333L14.0867 7.41333L16.5867 9.91333L17.8067 8.69333C17.8685 8.63166 17.9175 8.5584 17.951 8.47775C17.9844 8.3971 18.0016 8.31065 18.0016 8.22333C18.0016 8.13602 17.9844 8.04957 17.951 7.96892C17.9175 7.88827 17.8685 7.81501 17.8067 7.75333L16.2467 6.19333C16.1133 6.06 15.9467 6 15.7733 6ZM13.3733 8.12667L6 15.5V18H8.5L15.8733 10.6267L13.3733 8.12667Z"
                      fill="#A0AEC0"
                    />
                  </svg>
                  <Input
                    type="file"
                    height={20}
                    width={20}
                    position={"absolute"}
                    top={"15%"}
                    left={-9}
                    opacity={0}
                    aria-visibility={"hidden"}
                    accept="image/*"
                    onChange={profileImageHandler}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={5}>
            <Text {...TextStyle}>Name</Text>
            <Input
              value={profileData.username}
              placeholder="Name"
              size="md"
              borderColor={"#DEBEF6"}
              variant={"flushed"}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={5}>
            <Text {...TextStyle}>Phone Number</Text>
            {/* <Input onChange={(e) => setPhone(e.target.value)} value={profileData.phone} placeholder="080-*******" size="md" borderColor={"#DEBEF6"} variant={'flushed'}/> */}
            <Input
              onChange={(e) =>
                setProfileData({ ...profileData, phone: e.target.value })
              }
              value={profileData.phone}
              placeholder="080-*******"
              size="md"
              borderColor={"#DEBEF6"}
              variant={"flushed"}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={5}>
            <Text {...TextStyle}>Email</Text>
            <Input
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
              placeholder="***@gmail.com"
              size="md"
              borderColor={"#DEBEF6"}
              variant={"flushed"}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={5}>
            <label>Birthday</label>
            <Input
              placeholder="DD/MM/YYYY"
              size="md"
              type="date"
              borderColor={"#DEBEF6"}
              variant={"flushed"}
              value={profileData.birthday}
              onChange={(e) =>
                setProfileData({ ...profileData, birthday: e.target.value })
              }
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box mt={5}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                onChange={(e) =>
                  setProfileData({ ...profileData, gender: e.target.value })
                }
                value={profileData.gender}
                placeholder="Gender"
                borderColor={"#DEBEF6"}
                variant={"flushed"}
              >
                <option value={"Male"} style={{ color: "black" }}>
                  Male
                </option>
                <option value={"Female"} style={{ color: "black" }}>
                  Female
                </option>
                <option value={"Others"} style={{ color: "black" }}>
                  Others
                </option>
              </Select>
            </FormControl>
          </Box>
        </GridItem>
        <GridItem>
          <Flex justify={"center"} mt={5}>
            <Box paddingRight={"5px"}>
              <ButtonComponent text="Cancel" />
            </Box>
            <Box paddingLeft={"5px"}>
              <Button onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </FormControl>
  );
};
