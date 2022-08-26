export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background Image",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "seoImage",
      type: "image",
      title: "SEO Image",
    },
  ],
};
