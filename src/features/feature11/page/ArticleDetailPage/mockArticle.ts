export const mockArticle = 
  {
    articleId: "98765",
    articleName: "Exciting News1",
    articleContent:
      "Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.Breaking news that will change the world.",
    writerUsername: "breaking_news",
    writerName: "News Reporter",
    writerProfilePicture: "https://example.com/news_reporter.jpg",
    articlePicture: [
      "https://example.com/news1.jpg",
      "https://example.com/news2.jpg",
    ],
    articleLikes: 123,
    articleComments: [
      {
        commentId: "1",
        commentContent: "This is the first comment.",
        commentDate: "2023-10-28T16:45:00Z",
        likedByCreator: true,
        commentWriterUsername: "user1",
      },
      {
        commentId: "2",
        commentContent: "Another comment here.",
        commentDate: "2023-10-28T16:45:00Z",
        likedByCreator: false,
        commentWriterUsername: "user2",
      },
      {
        commentId: "3",
        commentContent: "Third comment goes here.",
        commentDate: "2023-10-28T16:45:00Z",
        likedByCreator: true,
        commentWriterUsername: "user3",
      },
      {
        commentId: "4",
        commentContent: "A new comment.",
        commentDate: "2023-10-28T16:45:00Z",
        likedByCreator: false,
        commentWriterUsername: "user4",
      },
    ],
    dateCreated: "2023-10-28T16:45:00Z",
  };
