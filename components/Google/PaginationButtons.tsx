import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  const itemsPerPage = 5;
  return (
    <div className="flex w-full justify-between mb-5 max-w-xl md:pl-[14%] lg:pl-48">
      {startIndex >= itemsPerPage && (
        <Link
          href={`/search?term=${router.query.term}&start=${
            startIndex - itemsPerPage
          }`}
        >
          <div className="flex flex-grow md:flex-none flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5 " />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${
          startIndex + itemsPerPage
        }`}
      >
        <div className="flex flex-grow sm:flex-none flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5 " />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
