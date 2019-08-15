import React from 'react'
import { connect } from 'react-redux'

const GenreList = props => {
    return (
        <div>
            <h1>List of Genres</h1>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        genres: state.genres
    }
}

export default connect(mapStateToProps, {})(GenreList);
