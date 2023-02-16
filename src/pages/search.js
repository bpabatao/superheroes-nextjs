/* eslint-disable react/jsx-key */
import { useState, FormEvent } from "react";
import Link from "next/link";
import { searchSuperheroes } from "./api/api";
import styled from "styled-components";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await searchSuperheroes(query);
    setResults(results);
  };

  const LinkText = styled.h4({
    color: "red",
    "> a": {
      color: "red",
      textDecoration: "none",
    },
    "&:hover": {
      color: "red",
      fontWeight: 800,
      textDecoration: "underline",
    },
  });

  return (
    <div>
      <h1>Search Superheroes</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results &&
          results.map((result) => (
            <LinkText>
              <li key={result.id}>
                <Link href={`/profile/${result.id}`}>{result.name}</Link>
              </li>
            </LinkText>
          ))}
        {!results && <div>NO DATA FOUND</div>}
      </ul>
    </div>
  );
}
