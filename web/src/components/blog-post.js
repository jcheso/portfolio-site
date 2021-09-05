import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
// import PortableText from "./portableText";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PortableText from "react-portable-text";
import { Figure } from "./Figure";
import BlockContent from "@sanity/block-content-to-react";

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;
  const image = getImage(mainImage.asset.gatsbyImageData);
  console.log(_rawBody);
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div className="block relative bg-gray-300">
          <GatsbyImage className="" image={image} alt={props.mainImage.alt} />
        </div>
      )}
      <Container>
        <div>
          <div>
            <h1 className="text-2xl font-bold leading-normal mb-8 text-gray-800">
              {title}
            </h1>
            {/* {_rawBody && <PortableText blocks={_rawBody} />} */}
            <PortableText
              // Pass in block content straight from Sanity.io
              content={_rawBody}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => (
                  <li className="special-list-item">{children}</li>
                ),
                normal: (props) => (
                  <p className="my-4 text-justify" {...props} />
                ),
                mainImage: Figure,
              }}
            />
          </div>
          <aside className="divide-y divide-light-gray-400">
            {publishedAt && (
              <div className="mb-4 my-8 text-m font-semibold text-gray-800 ">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}
            {authors && <AuthorList items={authors} title="Authors" />}
            {categories && (
              <div>
                <h3 className="text-left text-m leading-normal mt-2 pt-2 pb-2 text-gray-800  font-bold">
                  Categories
                </h3>
                <ul>
                  {categories.map((category) => (
                    <li
                      className=" text-sm leading-normal mt-1 mb-4 text-gray-800 "
                      key={category._id}
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
