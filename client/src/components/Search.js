import React from 'react'

// import stylesheet
import './styles/Search.css'

// import react-bootstrap component
import { Button } from 'react-bootstrap'

const Header = ({ input, handleChange, handleClick, handleLiked }) => {

    const prevLikedItems = JSON.parse(sessionStorage.getItem("likedItems"))

    return (
        <div
            className="styleHeader"
        >
            <div>

                <h2>iTunes Search API</h2>
                <h5>Search for content within the iTunes Store and Apple Books Store.</h5>

                <br />

                <form>

                    <input
                        className="styleInput"
                        type="text"
                        value={input}
                        onChange={handleChange}
                    />

                    <br />
                    <br />

                    <div
                        className="styleButton"
                    >
                        <Button
                            variant="outline-light"
                            onClick={handleClick}
                            type="submit"
                        >
                            Search
                        </Button>

                        {
                            prevLikedItems !== null && prevLikedItems.length !== 0 ? (
                                <Button
                                    variant="outline-light"
                                    className="buttonPosition"
                                    onClick={handleLiked}
                                >
                                Liked Songs
                            </Button>
                            ) : ''
                        }
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Header
