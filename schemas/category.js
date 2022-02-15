import { MdCategory } from "react-icons/md";
export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: MdCategory,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
