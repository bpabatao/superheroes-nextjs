import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const HeaderLinks = () => {
  const HeaderLink = styled.h1({
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

  const MainComponent = styled.div`
    padding-bottom: 3rem;
  `;

  const Header1 = styled.h1``;
  const Header2 = styled.h2`
    padding-top: 2rem;
  `;

  const ListLink = styled.p({
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

  const superheroList = [
    {
      id: 644,
      name: "Superman",
    },
    {
      id: 70,
      name: "Batman",
    },
    {
      id: 717,
      name: "Wolverine",
    },
    {
      id: 561,
      name: "Robin",
    },
    {
      id: 659,
      name: "Thor",
    },
    {
      id: 732,
      name: "Ironman",
    },
    {
      id: 332,
      name: "Hulk",
    },
    {
      id: 655,
      name: "Thanos",
    },
    {
      id: 30,
      name: "Ant-man",
    },
    {
      id: 498,
      name: "Odin",
    },
  ];

  return (
    <MainComponent>
      <Header1>
      <Link href="/">Superhero API</Link>
       </Header1>

      <HeaderLink>
        <Link href="/search">Search for Superheroes</Link>
      </HeaderLink>
      <Header2>List of Superheroes</Header2>

      {superheroList && superheroList.map((profile) => (
        <ListLink key={profile.id}>
          <Link href={`/profile/${profile.id}`}>{profile.name}</Link>
        </ListLink>
      ))}
    </MainComponent>
  );
};
