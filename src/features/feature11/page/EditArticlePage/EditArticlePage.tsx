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
import {
  ArticleTagProps,
  ArticleVenueProps,
  VenueProps,
} from "../../../../interfaces/feature11/ArticleType";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticle } from "../../../../api/feature11/fetchArticle";
import { useQuery } from "@tanstack/react-query";
import { useCustomToast } from "../../../../components/useCustomToast";
import PhotoDisplayer from "../../components/PhotoDisplayer";

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
  console.log(article.data);
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
            Venue: { venueId: selectedVenue.venueId, name: selectedVenue.name },
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
          tagId: newTagId,
          Tag: {
            tagId: newTagId,
            tag_name: tagInput,
          },
        },
      ]);
    }
  };
  const handleRemoveTag = (tag: string) => {
    const updatedTags = tags.filter((t) => t.Tag.tag_name !== tag);
    setTags(updatedTags);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files);
      console.log(fileList);
      setImages(fileList);
    }
  };
  const handleEditArticle = () => {
    if (
      topic === "" ||
      content === "" ||
      selectedVenues.length === 0 ||
      authorName === ""
    ) {
      console.log(selectedVenues);
      console.log(authorName);

      toast.warning("Please fill in all fields");
      return;
    }
    const selectedVenueIds = Array.from(
      new Set(selectedVenues.map((venue) => venue.venueId))
    );
    const formattedTags = tags.map((tagObj) => tagObj.Tag.tag_name);

    const formData = new FormData();
    formData.append("articleId", articleId || "0");
    formData.append("topic", topic);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("author_name", authorName);
    for (let i = 0; i < selectedVenueIds.length; i++) {
      formData.append("venueIds[]", selectedVenueIds[i].toString());
    }
    formattedTags.forEach((tag) => {
      formData.append("tags[]", tag);
    });

    if (images) {
      images.forEach((image) => {
        formData.append("files", image);
      });
    } else {
      console.log("no images");
    }
    Axios.post(
      "/feature11/editArticle",
      formData,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
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
          onChange={handleFileChange}
          // value={images.map((image) => image.url)}
        />
      </FormControl>
      <PhotoDisplayer images={article.data?.Images || []} />
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
              <TagLabel>{value.Tag.tag_name}</TagLabel>
              <TagCloseButton
                onClick={() => handleRemoveTag(value.Tag.tag_name)}
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
              <TagLabel>{venue.Venue.name}</TagLabel>
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
