export default {
  name: "profile",
  type: "document",
  title: "Profile",
  __experimental_actions: ["update", /*"create",  'delete', */ "publish"],

  fields: [
    {
      name: "name",
      type: "string",
      title: "Full Name",
    },
    {
      name: "portrait",
      type: "image",
      title: "Portrait",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "job",
      type: "string",
      title: "Current Job",
    },
    {
      name: "education",
      type: "string",
      title: "Education",
    },
    {
      name: "aboutMe",
      type: "text",
      title: "About Me",
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
  ],
};
