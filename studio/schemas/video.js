export default {
  name: "video",
  title: "video",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Title",
      type: "string",
    },
    {
      name: "blockVideo",
      title: "Block Video",
      description: "Admin controls: Toggle if video is deemed inappropriate",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Progile Image",
      type: "string",
    },
    {
      name: "file",
      title: "Video file",
      type: "string",
    },
  ],

  // preview: {
  //   select: {
  //     title: 'text',
  //     author: 'username',
  //     media: 'file',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${username}`,
  //     })
  //   },
  // },
};
