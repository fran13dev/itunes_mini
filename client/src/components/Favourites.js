import React from 'react'

// import stylesheet
import './styles/Data.css'

// import react-bootstrap component
import { Button } from 'react-bootstrap'

const Favourites = () => {

    const prevLikedItems = JSON.parse(sessionStorage.getItem("likedItems"))

    return (

        <div
            className="styleData"
        >
            {
                prevLikedItems.map((item, index) => (

                    <div
                        key={index}
                    >
                        <p
                            className='positionData'
                        >
                            {item.title}
                            <br />
                            {item.artist}
                        </p>

                        <a
                            href={item.profile}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                src={item.artwork}
                                alt="Album Artwork"
                                className="styleAlbum"
                            />
                        </a>

                        <br />
                        <br />

                        <p>
                            {item.album}

                        <br />

                        <a
                            href={item.preview}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Preview
                        </a>

                        </p>

                        <Button
                            variant="outline-light"
                            onClick={() => {
                                prevLikedItems.splice(index, 1)
                                sessionStorage.setItem("likedItems", JSON.stringify(prevLikedItems))
                                window.location.reload()
                            }}
                            size="sm"
                        >
                            Remove
                        </Button>

                    </div>
                ))
            }
        </div>
    )
}

export default Favourites
