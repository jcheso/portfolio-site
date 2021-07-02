import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className="min-w-0 break-words bg-gray-50 w-full shadow-xl rounded-2xl">
        <div className="lg:p-8 p-4 mb-4">
          <div>
            {props.mainImage && props.mainImage.asset && (
              <img
                className="rounded-2xl"
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(4032)
                  .height(Math.floor((9 / 16) * 4032))
                  .auto("format")
                  .url()}
                alt={props.mainImage.alt}
              />
            )}
          </div>
          <div>
            <h3 className="mt-2 text-xl font-semibold leading-relaxed text-gray-800">
              {props.title}
            </h3>
            {props._rawExcerpt && (
              <div className={styles.excerpt}>
                <PortableText blocks={props._rawExcerpt} />
              </div>
            )}
            <div className="mb-2 text-sm text-gray-800">
              {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
