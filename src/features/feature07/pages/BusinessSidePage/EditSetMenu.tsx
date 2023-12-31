import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Box,
  Center,
  Icon,
  InputGroup,
  InputRightElement,
  VStack,
  Select,
} from "@chakra-ui/react";
import { ButtonComponent } from "../../../../components/buttons/ButtonComponent";
import { Image } from "../../component/ImageUpload/Image";
import { useRef, useState, useEffect } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useCustomToast } from "../../../../components/useCustomToast";

// interface Menu {
//     name: string;
//   }

const getMenuItem = async (menuid: string) => {
  const response = await Axios.get(`/feature7/getSetById/${menuid}`);
  return response.data;
};

export const EditSetMenu: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMenus, setSelectedMenus] = useState<any[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const toast = useCustomToast();
  const { menuid } = useParams();
  const [editFormData, setEditFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [selectId, setSelectId] = useState("");

  const { data: menuData } = useQuery(["menuItem", menuid], () =>
    getMenuItem(menuid!)
  );
  // console.log(menuData);
  useEffect(() => {
    if (menuData) {
      setEditFormData({
        name: menuData.name,
        description: menuData.description,
        price: menuData.price,
      });
    }
  }, [menuData]);

  const getMenu = async () => {
    const response = await Axios.get(
      `/feature7/getMenuByVenueIdNotInSet/${menuid}`
    );
    const menus = response.data;
    //console.log(menuData);
    return menus;
  };
  const { data: menuOptions } = useQuery(["menuData"], () => getMenu());

  const getSetItems = async (menuid: string) => {
    const response = await Axios.get(`/feature7/showMenuItemsInSet/${menuid}`);
    const setItems = response.data;
    // console.log(setItems);
    return setItems;
  };
  const { data: setItems } = useQuery(["setItems", menuid], () =>
    getSetItems(menuid!)
  );
  useEffect(() => {
    if (setItems) {
      setSelectedMenus(setItems);
    }
  }, [setItems]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = async (selectedMenuId: string) => {
    setSelectId(selectedMenuId);
    try {
      const addResponse = await Axios.post(
        `/feature7/addMenuItemsToSetsInCookies/${menuid}`,
        { menuId: selectedMenuId }
      );
      // console.log("menuId:", selectedMenuId);
      if (addResponse.status === 200) {
        const response = await Axios.get(
          `/feature7/showMenuItemsInCookies/${menuid}`
        );
        const selectedItems = response.data;
        // console.log("Selected items:", selectedItems);
        // console.log("Selected menus before update:", selectedMenus);
        // setSelectedMenus((prevSelectedMenus) => {
        //   // Combine the previous state with the new selected items
        //   return [...prevSelectedMenus, ...selectedItems];
        // });

        // Find the selected item by its id
        const selectedItem = selectedItems.find(
          (item: any) => item.menuId == selectedMenuId
        );
        // console.log("Selected item:", selectedItem);
        if (selectedItem) {
          // console.log("Selected item:", selectedItem);
          // Update selectedMenus using the selectedItem directly
          setSelectedMenus((prevSelectedMenus) => [
            ...prevSelectedMenus,
            selectedItem,
          ]);
        }
      }
    } catch (error) {
      console.error(
        "Error adding menu items to cookies or fetching items",
        error
      );
    }
    setSelectId(""); // reset dropdown
  };

  const handleDeleteMenu = async (selectedMenuId: string) => {
    try {
      // const response1 = await Axios.post(`/feature7/deleteMenuItemBeforeAddingToSet/${menuid}`, { menuId: selectedMenuId });
      const response2 = await Axios.post(
        `/feature7/deleteMenuItemFromSet/${menuid}`,
        { menuId: selectedMenuId }
      );
      if (response2.status === 200) {
        // const response = await Axios.get(`/feature7/showMenuItemsInCookies/${menuid}`);
        // const selectedItems = response.data;
        // console.log('Selected items:', selectedItems);
        // setSelectedMenus((prevSelectedMenus) => {
        //   // Combine the previous state with the new selected items
        //   return [...prevSelectedMenus, ...selectedItems];
        // });
        setSelectedMenus((prevSelectedMenus) => {
          // Filter out the selectedMenuId from the previous state
          const updatedMenus = prevSelectedMenus.filter(
            (menu: any) => menu.menuId !== selectedMenuId
          );
          return updatedMenus;
        });
      }
    } catch (error) {
      console.error("Error deleting items in cookies", error);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    console.log("Selected file:", selectedFile);
  };

  const handleCancel = async () => {
    try {
      const response = await Axios.post(
        `/feature7/clearSetItemsInCookies/${menuid}`
      );
      console.log("Clear cookies:", response.data);
      navigate(`/business/venue/menubusiness`);
    } catch (error) {
      console.error("Error clearing cookie:", error);
    }
  };
  const isFormValid = () => {
    return (
      editFormData.name &&
      editFormData.description &&
      editFormData.price &&
      selectedMenus.length > 0
    );
  };

  const handleUpdate = async () => {
    // const targetPath = `/venue/${venueId}/menubusiness?section=allmenu`;
    // navigate(targetPath);
    setFormSubmitted(true);
    if (!isFormValid()) {
      toast.error("Please fill in all required fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", editFormData.name);
    formData.append("description", editFormData.description);
    formData.append("price", editFormData.price);
    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await Axios.post(
        `/feature7/editSet/${menuid}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Menu edited:", response.data);
      toast.success("Menu Edited");
      const targetPath = `/business/venue/bmenudetail/Set/${menuid}`;
      navigate(targetPath);
    } catch (error) {
      console.error("Error editing menu:", error);
    }
  };

  return (
    <FormControl>
      <Box display="flex" flexDirection="column">
        <Center>
          <Box>
            <FormLabel>Food name</FormLabel>
            <Input
              size="sm"
              variant="outline"
              width="307px"
              height="32px"
              padding="0px 12px 0px 12px"
              borderRadius="4px"
              borderColor={
                formSubmitted && !editFormData.name ? "red.300" : "brand.300"
              }
              bgColor="brand.300"
              marginBottom="10px"
              color="gray.300"
              name="name"
              value={editFormData.name}
              onChange={handleInputChange}
              required
              isInvalid={formSubmitted && !editFormData.name}
            />
          </Box>
        </Center>

        <Center>
          <Box>
            <FormLabel>Description</FormLabel>
            <Input
              variant="outline"
              width="307px"
              height="60px"
              marginBottom="10px"
              padding="0px 12px 0px 12px"
              borderColor={
                formSubmitted && !editFormData.description
                  ? "red.300"
                  : "brand.300"
              }
              bgColor="brand.300"
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
              required
              isInvalid={formSubmitted && !editFormData.description}
            />
          </Box>
        </Center>
        {/* <Center>
        <Box>
      <FormLabel>Selected Food in set:</FormLabel>
      <VStack align="start" spacing={2}>
        {selectedMenus.map((menu, index) => (
            <Box key={index}>
            <HStack spacing={2} align="center">
                <Box>{menu.name}</Box>
                <DeleteIcon
                ml={60}
                boxSize={4}
                aria-label={`Delete ${menu.name}`}
                onClick={() => handleDeleteMenu(index)}
                />
            </HStack>
            </Box>
        ))}
        </VStack>

      <InputGroup>
        <InputLeftElement>
          <AddIcon boxSize={4} onClick={handleAddMenuClick} />
        </InputLeftElement>
        <Input
          variant="flushed"
          width="307px"
          value={inputFieldValue}
          onChange={(e) => setInputFieldValue(e.target.value)}
        />
      </InputGroup>
    </Box>
        </Center> */}
        <Center>
          <Box>
            <FormLabel>Selected Food in set:</FormLabel>
            <VStack align="start" spacing={2}>
              {selectedMenus?.map((item) => (
                <Box width={"307px"} key={item.menuId}>
                  <HStack justify={"space-between"} align="center">
                    <Box>{item.menuName}</Box>
                    <DeleteIcon
                      // ml={60}
                      boxSize={4}
                      aria-label={`Delete ${item.menuName}`}
                      onClick={() => handleDeleteMenu(item.menuId)}
                    />
                  </HStack>
                </Box>
              ))}
            </VStack>
            <InputGroup>
              {/* <InputLeftElement>
                <AddIcon boxSize={4} onClick={handleChooseMenuClick} />
              </InputLeftElement> */}
              <Select
                variant="flushed"
                width="307px"
                placeholder="Add a menu"
                value={selectId}
                borderColor={
                  formSubmitted && selectedMenus.length === 0
                    ? "red.300"
                    : "brand.300"
                }
                isInvalid={formSubmitted && selectedMenus.length === 0}
                onChange={(e) => handleDropdownChange(e.target.value)}
                sx={{
                  "> option": {
                    background: "brand.300",
                    color: "white",
                  },
                }}
                bg={"brand.300"}
                as="select"
              >
                {menuOptions?.map((menu: any) => (
                  <option key={menu.menuId} value={menu.menuId}>
                    {menu.name}
                  </option>
                ))}
              </Select>
            </InputGroup>
          </Box>
        </Center>
        <Center>
          <Box>
            <FormLabel>Price</FormLabel>
            <Input
              size="sm"
              variant="outline"
              width="307px"
              height="32px"
              padding="0px 12px 0px 12px"
              borderRadius="4px"
              borderColor={
                formSubmitted && !editFormData.price ? "red.300" : "brand.300"
              }
              bgColor="brand.300"
              marginBottom="10px"
              name="price"
              value={editFormData.price}
              onChange={handleInputChange}
              required
              isInvalid={formSubmitted && !editFormData.price}
            />
          </Box>
        </Center>

        <Center>
          <Box position="relative">
            <FormLabel>Upload Image</FormLabel>
            <InputGroup>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: "0",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0,0,0,0)",
                  border: "0",
                }}
              />
              <Input
                variant="outline"
                width="250px"
                height="130px"
                padding="0px 12px 0px 12px"
                marginBottom="10px"
                borderColor="brand.300"
                bgColor="brand.300"
                style={{
                  backgroundImage: selectedFile
                    ? (`url(${URL.createObjectURL(selectedFile)})` as string)
                    : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <InputRightElement
                width="45%"
                height="185%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={handleImageClick}
              >
                <Icon
                  as={Image}
                  color="currentColor"
                  aria-label="Open Cart"
                  boxSize={40}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Center>
        <Center>
          <HStack marginTop="2" bottom="4" position="fixed">
            <Box marginRight="4">
              <ButtonComponent
                width={"150px"}
                text="Cancel"
                bgColor="white"
                textColor="brand.200"
                // onClick={() => navigate(`/venue/${venueId}/bmenudetail/Set/${menuid}`)}
                onClick={handleCancel}
              />
            </Box>
            <Box>
              <ButtonComponent
                width={"150px"}
                text="Update"
                onClick={handleUpdate}
              />
            </Box>
          </HStack>
        </Center>
      </Box>
    </FormControl>
  );
};
