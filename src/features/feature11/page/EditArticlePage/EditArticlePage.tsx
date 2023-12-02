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
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { AutoResizeTextarea } from "../../components/AutoResizeTextArea";
import { Axios } from "../../../../AxiosInstance";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { TextStyle } from "../../../../theme/TextStyle";
import {
  ArticleTagProps,
  ArticleVenueProps,
  VenueProps,
} from "../../../../interfaces/feature11/ArticleType";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticle } from "../../../../api/feature11/fetchArticle";
import { useQuery } from "@tanstack/react-query";
import { useCustomToast } from "../../../../components/useCustomToast";

// const fetchAllArticle = async (): Promise<VenueProps[]> => {
//   try {
//     const venues = await Axios.get("/feature11/fetchAllVenueName");
//     return venues.data; // Extract the data from the response
//   } catch (error) {
//     console.error("Error fetching venues:", error);
//     throw new Error("Failed to fetch venues");
//   }
// };

export const EditArticlePage = () => {
  const article = useQuery({
    queryKey: ["article"],
    queryFn: () => fetchArticle(articleId ?? ""),
    onSuccess: (data) => {
      // Set default values once the data is successfully fetched
      setTopic(data.topic);
      setContent(data.content);
      setCategory(data.category);
      setAuthorName(data.author_name);
      setSelectedVenues(data.Article_venue);
      setTags(data.Article_tags);
    },
  });
  const [tags, setTags] = useState<ArticleTagProps[]>(
    article.data?.Article_tags || []
  );
  const [tagInput, setTagInput] = useState<string>("");
  const [category, setCategory] = useState<string>(
    article.data?.category || ""
  );
  const [selectedVenues, setSelectedVenues] = useState<ArticleVenueProps[]>(
    article.data?.Article_venue || []
  );
  const [topic, setTopic] = useState<string>(article.data?.topic || "");
  const [content, setContent] = useState<string>(article.data?.content || "");
  const [authorName, setAuthorName] = useState<string>("");
  const [images, setImages] = useState<File[] | null>([]);
  const { articleId } = useParams();
  const toast = useCustomToast();
  const navigate = useNavigate();
  const [venues, setVenues] = useState<VenueProps[]>([]);
  useEffect(() => {
    Axios.get("/feature11/fetchAllVenueName")
      .then((res) => {
        setVenues(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (venues.length === 0) {
    return <FullPageLoader />;
  }

  if (article.status === "loading") {
    return <span>Loading...</span>;
  }

  if (article.error instanceof Error) {
    return <div>An error occurred: {article.error.message}</div>;
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
        setSelectedVenues([
          ...selectedVenues,
          {
            articleId: parseInt(articleId || "0"),
            venueId: selectedVenue.venueId,
            venue: { venueId: selectedVenue.venueId, name: selectedVenue.name },
          },
        ]);
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
  const handleAddTag = () => {
    if (tagInput !== "") {
      const newTagId = tags.length + 1;
      setTags([
        ...tags,
        {
          articleId: parseInt(articleId || "0"),
          tagId: newTagId, // Assign the value of 4 to tagId
          tag: {
            tagId: newTagId,
            tag_name: tagInput,
          },
        },
      ]);
    }
  };
  const handleRemoveTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t.tag.tag_name !== tag);
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
  const handleEditArticle = () => {
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
    console.log("before: ", tags )
    const formattedTags = tags.map((tagObj) => tagObj.tag.tag_name);
    console.log("after: ", formattedTags)
    Axios.patch("/feature11/editArticle", {
      articleId: parseInt(articleId || "0"),
      topic: topic,
      content: content,
      // category: category,
      category: category,
      // author_name: authorName,
      author_name: authorName,
      venueIds: selectedVenueIds,
      tags: formattedTags,
      images: [
        {
          url: "/test.jpg",
          description: "test",
        },
      ],
    })
      .then((res) => {
        console.log(res);
        toast.success("Edit article successfully");
        navigate(`/article/${articleId}`);
        
      })
      .catch((err) => {
        console.log("error", err);
        toast.error("Edit article failed");
        throw new Error("Failed to edit article");
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
                  handleAddTag();
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
          h={"32px"}
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
              <TagLabel>{value.tag.tag_name}</TagLabel>
              <TagCloseButton
                onClick={() => handleRemoveTag(value.tag.tag_name)}
              />
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
          h={"32px"}
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
              <TagLabel>{venue.venue.name}</TagLabel>
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
        w={"100px"}
        _hover={{ bg: "brand.300" }}
        onClick={handleEditArticle}
      >
        Save
      </Button>
    </Box>
  );
};
