import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'

const GenreContainer = styled.div`
    display: flex;
`;

const GenreTitle = styled.div`
  color: #f4e676;
  font-size: 1.7rem;
  text-align: left;
  margin: 3rem auto;
  border-bottom: 2px solid #f4e676;
  padding-bottom: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;


const PlayButton = styled.button`
    vertical-align: middle;
    background: none;
    color: lightgray;
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 0.4rem;
    margin-right: 2.5rem;

    :hover {
        cursor: pointer;
        color: white;
        border-color: white;
    }

    svg {
        font-size: 1.4rem;
    }
`


const Genre = props => {
  return (
    <GenreContainer>
      <GenreTitle>{props.genre}<PlayButton><FontAwesomeIcon icon={faHeadphonesAlt} /></PlayButton></GenreTitle>
      
    </GenreContainer>
  );
};

export default Genre;
