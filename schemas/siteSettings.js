import { GoSettings } from "react-icons/go";

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  icon: GoSettings,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Keywords",
      name: "keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
