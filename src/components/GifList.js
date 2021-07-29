import React from 'react'

export default function GifList(props) {
    return (
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
    )
}
