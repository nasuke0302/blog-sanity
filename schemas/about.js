import { BiHome } from "react-icons/bi";

export default {
  name: "about",
  title: "About",
  type: "document",
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  icon: BiHome,
  fields: [
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "blockContentSection" }],
    },
  ],
};
