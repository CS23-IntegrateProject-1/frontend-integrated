import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
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

interface ImageProps {
  url: string;
  description: string;
}
interface VenueProps {
  venueId: number;
  name: string;
}

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
  const [tags, setTags] = useState<string[]>(["hello", "Heoo"]);
  const [category, setCategory] = useState<string>("");
  const [selectedVenues, setSelectedVenues] = useState<VenueProps[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [images, setImages] = useState<ImageProps[]>([]);
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

  // const venues = useQuery({ queryKey: ["veueNames"], queryFn: fetchVenues });
  // if (venues.status == "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (venues.error instanceof Error) {
  //   return <div>An error occurred: {venues.error.message}</div>;
  // }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
    console.log(topic);
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

  const handleCreateArticle = () => {
    if (
      topic === ""
      // ||
      // content === "" ||
      // selectedVenues.length === 0 ||
      // authorName === ""
      // ||
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
      category: "Blog",
      // author_name: authorName,
      author_name: "mink",
      venueIds: selectedVenueIds,
      tags: tags,
      // images: images,
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
      <FormControl
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        my={"0.25em"}
        justifyContent={"center"}
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
        />
      </FormControl>
      <Box mt={"10px"} w={"95%"} display={"flex"}>
        <HStack>
          {tags.map((value) => (
            <Tag
              size={"sm"}
              key={value}
              borderRadius="full"
              variant="solid"
              bgColor={"brand.200"}
            >
              <TagLabel>{value}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </HStack>
        <IconButton
          mx={"5px"}
          textColor={"white"}
          variant={"unstyled"}
          height={"20px"}
          w={"20px"}
          fontSize={"20px"}
          borderRadius={"50%"}
          aria-label="add tag"
          icon={<IoAddCircleSharp />}
        />
        <Input type="text" size={"sm"}/>
      </Box>

      <FormControl display={"flex"} justifyContent={"center"} >
        <Box  w={"150px"} mr={"0.5em"}>
          <FormLabel display={"inline"} fontSize={"xs"}>
            Select Venue Names
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
          {selectedVenues.map((venue) => (
            <Tag
              key={venue.venueId}
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
