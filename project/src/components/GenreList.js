import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import Genre from './Genre'


const StyledGenreList = styled.div`
    width: 80%;
    margin: 2.5rem auto;
    margin-bottom: 3.5rem;
    display: flex;
    flex-direction: column;
    background: #191919;
    min-height: 250px;
    border-radius: 5px;
`

const Header = styled.h1`
    margin-bottom: 3.5rem;
    margin-right: auto;
    margin-left: 2.5rem;
    color: #f4e676;
`

const GetGenresButton = styled.button`
    width: 350px;
    margin: 0 auto;
    padding: 1.8rem 2.8rem;
    border-radius: 5px;
    background: none;
    color: lightgray;
    border: 2px solid lightgray;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: all 250ms ease-out;

    :hover {
        color: white;
        border-color: white;
        cursor: pointer;
    }

    :focus {
        outline: none;
    }
`

const GenreList = props => {
    return (
        <StyledGenreList>
            <Header>List of Genres</Header>

            <GetGenresButton onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="ThreeDots" color="white" height={22} width={22} />
                ) : (
                    'Get Unique Genres'
                )}
            </GetGenresButton>
            <div>
                {props.genres.map(genre => 
                    <Genre key={genre} genre={genre} />
                )}
            </div>

        </StyledGenreList>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genres,
        songs: state.songs
    }
}

export default connect(mapStateToProps, { getData })(GenreList);
