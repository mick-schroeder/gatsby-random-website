import React from "react";
//import { GatsbyImage } from "gatsby-plugin-image";
import { useNextSiteContext } from "./next-site-context";
import { Link } from "gatsby";

//import { Link } from "gatsby";

const WebShufflePlayer = () => {
  const {
    nextSite,
    nextSiteName,
    nextSiteSlug,
    refreshNextSite,
    nextSiteDescription,
    // nextSiteImage,
  } = useNextSiteContext();

  const handleClick = (event) => {
    event.preventDefault();
    window.open(nextSite, "_blank");
    refreshNextSite();
  };

  return (
    <div className="flex-grow flex items-center justify-center px-2">
      <div className="flex py-1 px-4 backdrop-blur bg-zinc-100/85 dark:bg-zinc-900/85 border border-zinc-300/85 dark:border-zinc-600/85 rounded-lg shadow  w-full md:w-9/12">
        <div className="flex flex-col items-center w-full">
          <h2 className="truncate text-sm text-center font-bold text-zinc-900 dark:text-white">
            <Link
              href={`/sources/${nextSiteSlug}`}
              className="truncate line-clamp-1"
            >
              {nextSiteName}
            </Link>
          </h2>
          {/*nextSiteImage && (
            <GatsbyImage
              image={nextSiteImage.childImageSharp.gatsbyImageData}
              alt={nextSiteName}
              className="mb-3 w-32"
            />
          )*/}
          <blockquote
            title={nextSiteDescription}
            className="line-clamp-1 text-xs text-ellipsis font-normal text-zinc-700 dark:text-zinc-400 w-60 lg:w-96 text-center"
          >
            {nextSiteDescription || "No description available."}
          </blockquote>

          <p className="text-xs mt-1 font-semibold text-zinc-700 dark:text-zinc-400">
            <a
              onClick={handleClick}
              href={nextSite}
              className="cursor-pointer inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              target="_blank"
              rel="noopener"
              aria-label={`Open site: ${nextSiteName}`}
            >
              {nextSite.length > 32 ? nextSite.slice(0, 32) + "..." : nextSite}
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-start mx-3">
        <button
          onClick={refreshNextSite}
          className="text-zinc-200 px-3 py-2 rounded-lg hover:bg-zinc-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Refresh next site"
        >
          <svg
            className="w-6 h-6 text-zinc-800 dark:text-zinc-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WebShufflePlayer;
