import { BsBlockquoteRight } from "react-icons/bs";

export default {
  name: "blockContentSection",
  title: "Block Content Section",
  type: "object",
  icon: BsBlockquoteRight,
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "imagePosition",
      title: "Image Position",
      type: "string",
      defaultvalue: "left",
      options: {
        list: [
          { title: "left", value: "left" },
          { title: "right", value: "right" },
        ],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "header",
    },
  },
};
