import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(({data}) => {
                this.setState({
                    gifs: data.map( gif => ({url: gif.images.original.url}))
                })
            })
            //store the first 3 gifs from response into component state
            //pass that data down to its child the <GifList> as a prop
    }
    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer

//does fetching and then renders its corresponding sub component
//https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
//want path image from data.images.original.url

