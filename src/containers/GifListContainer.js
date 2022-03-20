import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {gifs: []}

    fetchGifs = (query = 'dolphin') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=OrsQqjWjIvOWoi14DLwQHlIHRnkGn1lt&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({gifs: json.data.slice(0, 3).map(gif => ({url: gif.images.original.url}))})
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchGifs={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}