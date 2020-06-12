import React, { useState, useEffect } from 'react'

// import stylesheet
import './styles/Body.css'

// import react-bootstrap component
import { Spinner } from 'react-bootstrap'

// import components
import Search from './Search'
import ArtistCarousel from './ArtistCarousel'
import Data from './Data'
import Favourites from './Favourites'

const Body = () => {
    // data will store the result from the API
    const [data, setData] = useState([])
    // input will store the result from the form input
    const [input, setInput] = useState('')
    // loading will store the state of the API call
    const [loading, setLoading] = useState(false)
    // toggle display of liked items
    const [likedContent, setLikedContent] = useState(false)

    const fetchData = async (query) => {
        // console.log(query)
        if (query) {
            setLoading(true)
            try {
                const res = await fetch(`/api/${query}`)
                const response = await res.json()
                const result = response.results
                setData(result)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
                setLikedContent(false)
            }
        }
    }

    // console.log(data)

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (event) => {
        const value = event.target.value
        setInput(value)
    }

    const handleClick = (event) => {
        if (!input) {
            alert('Please search for specific content')
        }
        const query = input
        fetchData(query)
        setInput('')
        event.preventDefault()
    }
    
    const handleLiked = (event) => {
        event.preventDefault()
        setData([])
        setLikedContent(true)
    }

    return (
        <div
            className="bodyFlex"
        >

            <ArtistCarousel />

            <div
                className="bodyItemFlex"
            >
                <Search
                    input={input}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    handleLiked={handleLiked}
                />
            </div>

            <div
                className="spinnerPos"
            >

                {
                    loading ? (
                        <Spinner
                            animation="border"
                            role="status"
                            className="styleSpinner"
                        />
                    ) : ''
                }

            </div>

            <div>
                <Data
                    data={data}
                />
            </div>
            <div>
                {
                    likedContent ? (
                        <Favourites />
                    ) : (
                        ''
                    )
                }
            </div>
        </div>
    )
}

export default Body
