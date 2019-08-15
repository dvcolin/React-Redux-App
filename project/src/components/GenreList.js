import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

const GenreList = props => {
    return (
        <div>
            <h1>List of Genres</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    'Get Unique Genres'
                ) : (
                    'Get Unique Genres'
                )}
            </button>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genres
    }
}

export default connect(mapStateToProps, { getData })(GenreList);
