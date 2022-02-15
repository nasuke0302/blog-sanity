// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import { GoSettings } from "react-icons/go";
import { BiHome } from "react-icons/bi";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .showIcon(true)
        .icon(GoSettings)
        .child(
          S.document()
            .title("Site Settings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("About")
        .showIcon(true)
        .icon(BiHome)
        .child(
          S.document()
            .title("About Page")
            .schemaType("about")
            .documentId("about")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteSettings", "about"].includes(listItem.getId())
      ),
    ]);
