import { IConfigModel } from "../models/filter-config.model";

export const paperForm: IConfigModel[] = [
  {
    label: "Title",
    name: "title",
    type: "input",
    defaultValue: "",
    placeholder: "Enter the title for paper...",
    classes: ["ivd-col-12"],
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
    placeholder: "Enter description of the paper here",
    classes: ["ivd-col-12"],
  },
  {
    label: "Categories",
    name: "categories",
    type: "dropdown",
    placeholder: "Select tags for paper...",
    classes: ["ivd-col-12"],
    // TODO: Check for grouped dropdown with title
    options: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Data Structure",
        value: "data-structure",
      },
      {
        label: "Algorithms",
        value: "algorithms",
      },
    ],
  },
  {
    label: "Type",
    name: "type",
    type: "dropdown",
    placeholder: "Select type for paper...",
    classes: ["ivd-col-12", "ivd-inline"],
  },
  {
    label: "Author",
    name: "author",
    type: "input",
    placeholder: "Enter author name...",
    classes: ["ivd-col-12", "ivd-inline"],
  },
  {
    label: "Save",
    name: "save",
    type: "button",
    classes: ["ivd-col-1-half"],
  },
];
