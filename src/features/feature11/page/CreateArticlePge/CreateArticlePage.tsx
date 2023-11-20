import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  ImageProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AutoResizeTextarea } from "../../components/AutoResizeTextArea";
import { Axios } from "../../../../AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { TextStyle } from "../../../../theme/TextStyle";
import textStyles from "../../../../theme/foundations/textStyles";
import { VenueProps } from "../../ArticleTypes";

// const fetchVenues = async (): Promise<VenueProps[]> => {
//   try {
//     const venues = await Axios.get("/feature11/fetchAllVenueName");
//     return venues.data; // Extract the data from the response
//   } catch (error) {
//     console.error("Error fetching venues:", error);
//     throw new Error("Failed to fetch venues");
//   }
// };

export const CreateArticlePage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [category, setCategory] = useState<string>("Blog");
  const [selectedVenues, setSelectedVenues] = useState<VenueProps[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [images, setImages] = useState<File[] | null>([]);

  const [venues, setVenues] = useState<VenueProps[]>([]);
  useEffect(() => {
    Axios.get("/feature11/fetchAllVenueName")
      .then((res) => {
        setVenues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (venues.length === 0) {
    return <FullPageLoader />;
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSelectVenue = (venueId: string) => {
    if (venues) {
      const selectedVenue = venues.find(
        (venue) => venue.venueId === parseInt(venueId)
      );
      if (selectedVenue) {
        setSelectedVenues([...selectedVenues, selectedVenue]);
      }
    }
  };

  const handleRemoveVenue = (venueId: number) => {
    if (venues) {
      const updatedVenues = selectedVenues.filter(
        (venue) => venue.venueId !== venueId
      );
      setSelectedVenues(updatedVenues);
    }
  };
  const handleAddTag = (tag: string) => {
    if (tagInput != "") {
      setTags([...tags, tag]);
    }
  };
  const handleRemoveTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  // const handleImageUpload = async (e: { target: { files: any; }; }) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0) {
  //     const formData = new FormData();

  //     Array.from(files).forEach((file) => {
  //       formData.append("images", file);
  //     });

  //     try {
  //       const response = await Axios.post("/api/images/upload", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });

  //       const uploadedFilesData = response.data.uploadedFiles;
  //       setUploadedFiles(uploadedFilesData);
  //     } catch (error) {
  //       console.error("Error uploading images:", error);
  //     }
  //   }
  // };
  const handleCreateArticle = () => {
    if (
      topic === "" ||
      content === "" ||
      selectedVenues.length === 0 ||
      authorName === ""
      // images.length === 0
    ) {
      alert("Please fill in all the fields");
      return;
    }
    const selectedVenueIds = Array.from(
      new Set(selectedVenues.map((venue) => venue.venueId))
    );

    Axios.post("/feature11/addArticle", {
      topic: topic,
      content: content,
      // category: category,
      category: category,
      // author_name: authorName,
      author_name: authorName,
      venueIds: selectedVenueIds,
      tags: tags,
      images: [
        {
          url: "/test.jpg",
          description: "test",
        },
      ],
    })
      .then((res) => {
        console.log(res);
        // alert("Article created");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <FormControl id="title" w={"95%"} isRequired>
        <Input
          placeholder="Article Title"
          h={"60px"}
          fontWeight={"bold"}
          fontSize={"2xl"}
          border={"none"}
          mb={"5px"}
          focusBorderColor="rgba(0, 0, 0, 0)"
          name={"title"}
          value={topic}
          onChange={handleTitleChange}
          maxLength={100}
        />
      </FormControl>
      <FormControl id="title" w={"95%"} isRequired></FormControl>
      <Divider />
      {/* =============== Image ================== */}
      <FormControl>
        <FormLabel style={TextStyle.h3}>Images</FormLabel>
        <Input
          variant={"unstyled"}
          type="file"
          multiple
          // onChange={handleImageUpload}
          // value={images.map((image) => image.url)}
        />
      </FormControl>

      {/* =============== Author Name ================== */}
      <FormControl
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        my={"0.25em"}
      >
        <FormLabel style={TextStyle.h3} m={"0"} w={"120px"}>
          Author Name:
        </FormLabel>
        <Input
          variant={"flushed"}
          type="text"
          placeholder="author name, if empty will be username"
          maxW={"500px"}
          borderColor={"whiteAlpha.600"}
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </FormControl>

      {/* =============== Category ==================*/}
      <FormControl
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        my={"0.25em"}
      >
        <FormLabel style={TextStyle.h3} m={"0"} w={"120px"}>
          Category
        </FormLabel>
        <Select
          maxW={"250px"}
          variant={"flushed"}
          borderColor={"whiteAlpha.600"}
          size={"sm"}
          // value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Blog">Blog</option>
          <option value="Review">Review</option>
          <option value="Question">Question</option>
        </Select>
      </FormControl>

      {/* ============= TAG===========  */}
      <FormControl display={"flex"} alignItems={"flex-end"}>
        <Box>
          <FormLabel display={"inline"} fontSize={"xs"}>
            Add tag
          </FormLabel>
          <InputGroup
            justifyContent="center"
            alignItems="center"
            mr={"0.5em"}
            w={"150px"}
            size={"sm"}
          >
            <Input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="add tag"
            />
            <InputRightElement>
              <IconButton
                textColor={"white"}
                variant={"unstyled"}
                // isRound={true}
                aria-label="add tag"
                icon={<IoAddCircleSharp />}
                size={"xs"}
                fontSize={"xl"}
                onClick={() => {
                  handleAddTag(tagInput);
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <HStack
          spacing={2}
          // overflow={"scroll"}
          overflowX={"auto"} // Enable horizontal scrolling
          maxW={"calc(100% - 150px)"} // Limit maximum width
        >
          {tags.map((value, index) => (
            <Tag
              key={index}
              size="md"
              borderRadius="full"
              variant="subtle"
              minWidth={"fit-content"}
              bgColor={"brand.200"}
              color={"white"}
            >
              <TagLabel>{value}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveTag(value)} />
            </Tag>
          ))}
        </HStack>
      </FormControl>
      {/* ============= SELECT VENUE ===========  */}

      <FormControl display={"flex"}>
        <Box w={"150px"} mr={"0.5em"}>
          <FormLabel display={"inline"} fontSize={"xs"}>
            Select Venue
          </FormLabel>
          <Select
            size={"sm"}
            placeholder="Select Venue"
            onChange={(e) => handleSelectVenue(e.target.value)}
          >
            {venues?.map((venue: VenueProps) => (
              <option key={venue.venueId} value={venue.venueId}>
                {venue.name}
              </option>
            ))}
          </Select>
        </Box>

        <HStack
          spacing={2}
          // overflow={"scroll"}
          overflowX={"auto"} // Enable horizontal scrolling
          maxW={"calc(100% - 150px)"} // Limit maximum width
          alignSelf={"flex-end"}
        >
          {selectedVenues.map((venue, index) => (
            <Tag
              key={index}
              size="md"
              borderRadius="full"
              variant="subtle"
              minWidth={"fit-content"}
              bgColor={"brand.200"}
              color={"white"}
            >
              <TagLabel>{venue.name}</TagLabel>
              <TagCloseButton
                onClick={() => handleRemoveVenue(venue.venueId)}
              />
            </Tag>
          ))}
        </HStack>
      </FormControl>

      <FormControl w={"100%"} isRequired>
        <AutoResizeTextarea
          placeholder="Write your story"
          border={"none"}
          rows={15}
          mt={"5px"}
          focusBorderColor="rgba(0, 0, 0, 0)"
          name={"content"}
          value={content}
          onChange={handleContentChange}
        ></AutoResizeTextarea>
      </FormControl>

      <Button
        position={"fixed"}
        bottom={"2em"}
        right={"2em"}
        size={"sm"}
        borderRadius={"20px"}
        bg={"brand.200"}
        color={"white"}
        _hover={{ bg: "brand.300" }}
        onClick={handleCreateArticle}
      >
        Submit
      </Button>
    </Box>
  );
};
