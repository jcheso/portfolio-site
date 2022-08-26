// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import project from "./documents/project";
import skill from "./documents/skill";
import profile from "./documents/profile";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import mainImage from "./objects/mainImage";

export default createSchema({
  name: "studio",
  types: schemaTypes.concat([
    siteSettings,
    profile,
    project,
    skill,
    mainImage,
    bodyPortableText,
  ]),
});
