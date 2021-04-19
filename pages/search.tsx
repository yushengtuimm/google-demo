import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import SearchBar from "../components/Google/SearchBar";
import response from "../test/response";
import SearchResults from "../components/Google/SearchResults";
import PaginationButtons from "../components/Google/PaginationButtons";
import Footer from "../components/Footer";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  const pageination = results.queries?.nextPage ? (
    <PaginationButtons />
  ) : (
    <p></p>
  );

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      {/* Header */}
      <SearchBar />

      {/* Search Results */}
      <SearchResults results={results} />

      {pageination}
    </div>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const api_key = process.env.API_KEY;
  const context_key = process.env.CONTEXT_KEY;

  const data = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass the results to the client
  return {
    props: {
      results: data,
    },
  };
};
