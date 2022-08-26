export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "60d2fca34891a1bc990c3c71",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uf2c5frs",
                  apiId: "7e978d9f-c80c-473f-ade2-7317cff5505a",
                },
                {
                  buildHookId: "60d2fca330074fae5ab479af",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5nrfnc8n",
                  apiId: "66a0d5f0-70ba-4c78-8ae1-30c7c9333058",
                },
              ],
            },
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
  ],
};
