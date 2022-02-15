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
