import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white px-8 pt-2 shadow-md">
      <div className="-mb-px flex justify-center">
        <a
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
          href="#"
        >
          <div className="underline w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
        </a>
        <a
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          href="#"
        >
          <div className="underline w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
          href="#"
        >
          <div className="underline w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
          href="#"
        >
          <div className="underline w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
