export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      description: "Reference the video the comment i accociated to:",
      type: "reference",
      to: {
        type: "video",
      },
    },
  ],
};
