import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function AuthorList({ items, title }) {
  return (
    <div className="mt-6 mb-3">
      <h2 className="text-l pt-4 pb-2 font-bold leading-normal text-gray-800">
        {title}
      </h2>
      <ul className="m-0 p-0 list-none">
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key} className="mt-1 flex justify-left items-center ">
              <div className="ml-0.5 mr-2">
                {author && author.image && author.image.asset && (
                  <GatsbyImage
                    className="relative h-12 w-12 rounded-full overflow-hidden"
                    image={author.image.asset.gatsbyImageData}
                    alt="Author Portrait"
                  />
                )}
              </div>
              <div className="text-sm leading-normal my-4 text-gray-800 ">
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AuthorList;
