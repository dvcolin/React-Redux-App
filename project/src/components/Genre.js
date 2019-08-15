import React from "react";
import styled from "styled-components";

const GenreContainer = styled.div``;

const GenreTitle = styled.h2`
  color: #f4e676;
  font-size: 1.7rem;
  text-align: left;
  margin: 3rem auto;
  border-bottom: 2px solid #f4e676;
  padding-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 80%;
`;

const Genre = props => {
  return (
    <GenreContainer>
      <GenreTitle>{props.genre}</GenreTitle>
    </GenreContainer>
  );
};

export default Genre;
