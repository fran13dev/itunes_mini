import React from 'react'

const BodyItem = ({ artwork }) => {
    
    // inline stylesheet
    const styleItem = {
        maxWidth: '100%',
        height: 'auto'
    }

    return (
        <div>
            <img 
                src={artwork}
                alt="Artist Artwork"
                style={styleItem}
            />
        </div>
    )
}

export default BodyItem