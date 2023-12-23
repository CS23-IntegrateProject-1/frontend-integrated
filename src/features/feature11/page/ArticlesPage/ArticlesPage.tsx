import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ArticlesBox } from "./ArticlesBox";
import { MdAddCircle } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { FullPageLoader } from "../../../../components/Loader/FullPageLoader";
import { Axios } from "../../../../AxiosInstance";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { AuthorBox } from "./AuthorBox";
import { formatDate1 } from "../../../../functions/formatDatetime";
import { ArticlesPageProps } from "../../../../interfaces/feature11/ArticleType";

const fetchArticles = async (): Promise<ArticlesPageProps[]> => {
  const res = await Axios.get("/feature11/fetchAllArticle");
  res.data.forEach((article: ArticlesPageProps) => {
    article.created_date = formatDate1(article.created_date);
  });
  return res.data;
};

export const ArticlesPage = () => {
  // const result = useQuery(fetchArticle);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<ArticlesPageProps[]>(
    []
  );
  const [filteredAuthors, setFilteredAuthors] = useState<ArticlesPageProps[]>(
    []
  );
  {
    filteredAuthors;
  }

  const articles = useQuery({ queryKey: ["articles"], queryFn: fetchArticles });
  useEffect(() => {
    const filtered = articles.data?.filter((article) =>
      article.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered || []);
  }, [searchTerm, articles.data]);
  useEffect(() => {
    const uniqueUserIds = new Set<number>();
    const filtered = articles.data?.filter((article) => {
      const userId = article.userId;
      if (!uniqueUserIds.has(userId)) {
        uniqueUserIds.add(userId);
        return true;
      }
      return false;
    });
    setFilteredAuthors(filtered || []);
  }, [searchTerm, articles.data]);

  if (articles.status == "loading") {
    return <FullPageLoader />;
  }

  if (articles.error instanceof Error) {
    return <div>An error occurred: {articles.error.message}</div>;
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      <Box
        width={{ base: "100%", md: "80%", lg: "50%" }}
        height={"56px"}
        bg={"#5F0DBB"}
        mt={{ base: "-1em", md: "-2em" }}
      >
        {/* <Text
          fontSize={"16px"}
          color={"#DEBEF6"}
          lineHeight={"56px"}
          as={"b"}
          margin={"22px"}
        >
          User Feed
        </Text> */}
        <InputGroup>
          <InputRightElement>
            <Search2Icon color="gray.400" />
          </InputRightElement>
          <Input
            type="text"
            bg={"white"}
            color={"black"}
            placeholder="Search article or author name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Box>
          <Tabs isLazy isFitted variant="enclosed">
            <TabList>
              <Tab bg={"brand.400"} _selected={{ bg: "brand.300" }}>
                Article
              </Tab>
              <Tab bg={"brand.400"} _selected={{ bg: "brand.300" }}>
                Author
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={"0"} pt={"1px"}>
                {filteredArticles?.map((article) => {
                  return (
                    <ArticlesBox
                      articleId={article.articleId}
                      topic={article.topic}
                      author_name={article.author_name}
                      Images={article.Images}
                      Like={article.Like}
                      Comment={article.Comment}
                      created_date={article.created_date}
                      key={article.articleId}
                      content={article.content}
                      category={article.category}
                      userId={article.userId}
                      isLike={article.isLike}
                      Article_tags={article.Article_tags}
                      Article_venue={article.Article_venue}
                      User={article.User}
                    />
                  );
                })}
              </TabPanel>
              <TabPanel p={"0"} pt={"1px"}>
                {filteredAuthors?.map((article) => {
                  return (
                    <AuthorBox
                      articleId={article.articleId}
                      topic={article.topic}
                      author_name={article.author_name}
                      Images={article.Images}
                      Like={article.Like}
                      Comment={article.Comment}
                      created_date={article.created_date}
                      key={article.articleId}
                      content={article.content}
                      category={article.category}
                      userId={article.userId}
                      isLike={article.isLike}
                      Article_tags={article.Article_tags}
                      Article_venue={article.Article_venue}
                      User={article.User}
                    />
                  );
                })}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      <IconButton
        borderRadius={"50%"}
        position={"fixed"}
        bottom={"40px"}
        right={"10px"}
        variant="unstyled"
        aria-label="add"
        icon={<MdAddCircle size={"72px"} color={"#A533C8"} />}
        onClick={() => {
          navigate("/article/create");
        }}
      />
    </Box>
  );
};
