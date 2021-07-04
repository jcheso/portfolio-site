import { format } from "date-fns";

export default {
  name: "project",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The project title",
    },

    {
      name: "previewImage",
      type: "image",
      title: "Preview Image",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          name: "skill",
          type: "reference",
          to: [
            {
              type: "skill",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "A summary of the project",
    },
    {
      title: "Project URL",
      name: "projectUrl",
      type: "url",
    },
  ],
};
