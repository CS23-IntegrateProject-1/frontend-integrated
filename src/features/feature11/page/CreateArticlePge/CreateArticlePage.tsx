import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AutoResizeTextarea } from "../../components/AutoResizeTextArea";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { TextStyle } from "../../../../theme/TextStyle";
import { VenueProps } from "../../../../interfaces/feature11/ArticleType";
import { useCustomToast } from "../../../../components/useCustomToast";
import { useNavigate } from "react-router-dom";

export const CreateArticlePage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [category, setCategory] = useState<string>("Blog");
  const [selectedVenues, setSelectedVenues] = useState<VenueProps[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [images, setImages] = useState<File[] | null>([]);
  const toast = useCustomToast();
  const navigate = useNavigate();

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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);
      setImages(fileList);
    }
  };

  const handleCreateArticle = () => {
    if (
      topic === "" ||
      content === "" ||
      selectedVenues.length === 0 ||
      authorName === "" ||
      images?.length === 0
    ) {
      toast.warning("Please fill in all fields");    
      return;
    }
    const selectedVenueIds = Array.from(
      new Set(selectedVenues.map((venue) => venue.venueId))
    );

    const formData = new FormData();
    formData.append("topic", topic);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("author_name", authorName);
    for (let i = 0; i < selectedVenueIds.length; i++) {
      formData.append("venueIds[]", selectedVenueIds[i].toString());
    }
    tags.forEach((tag) => {
      formData.append("tags[]", tag);
    });
    if (images) {
      images.forEach((image) => {
        formData.append("files", image);
      });
    } else {
      console.log("no images");
    }
    Axios.post("/feature11/addArticle", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Article created successfully");
        setTimeout(() => {
          navigate("/article/myarticles");
        }, 500);
      })
      .catch((err) => {
        toast.error("Error creating article");
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
          multiple //if single file remove "multiple"
          onChange={handleFileChange}
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
                  setTagInput("");
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
