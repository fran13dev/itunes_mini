import React from 'react'

// import react-bootstrap component
import { Carousel } from 'react-bootstrap'

// import components
import BodyItem from './BodyItem'

// import images
import ArtworkAdele from '../images/ArtworkAdele.jpg'
import ArtworkBobMarley from '../images/ArtworkBobMarley.jpg'
import ArtworkEdSheeran from '../images/ArtworkEdSheeran.jpg'
import ArtworkFrancois from '../images/ArtworkFrancois.jpg'
import ArtworkGaryClark from '../images/ArtworkGaryClark.jpg'
import ArtworkJohnnyCash from '../images/ArtworkJohnnyCash.jpg'
import ArtworkPassenger from '../images/ArtworkPassenger.jpg'
import ArtworkTasche from '../images/ArtworkTasche.jpg'
import ArtworkTylerChilders from '../images/ArtworkTylerChilders.jpg'
import ArtworkYelawolf from '../images/ArtworkYelawolf.jpg'

const ArtistCarousel = () => {

    const carouselItem = {
        display: 'flex',
        width: '100%'
    }

    return (

        <Carousel
            interval='3000'
            pauseOnHover={false}
            indicators={false}
        >

            <Carousel.Item>
                <div
                    style={carouselItem}
                >
                    <BodyItem
                        artwork={ArtworkFrancois}
                    />
                    <BodyItem
                        artwork={ArtworkPassenger}
                    />
                    <BodyItem
                        artwork={ArtworkAdele}
                    />
                    <BodyItem
                        artwork={ArtworkBobMarley}
                    />
                    <BodyItem
                        artwork={ArtworkJohnnyCash}
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div
                    style={carouselItem}
                >
                    <BodyItem
                        artwork={ArtworkTylerChilders}
                    />
                    <BodyItem
                        artwork={ArtworkEdSheeran}
                    />
                    <BodyItem
                        artwork={ArtworkTasche}
                    />
                    <BodyItem
                        artwork={ArtworkGaryClark}
                    />
                    <BodyItem
                        artwork={ArtworkYelawolf}
                    />
                </div>
            </Carousel.Item>

        </Carousel>
    )
}

export default ArtistCarousel
