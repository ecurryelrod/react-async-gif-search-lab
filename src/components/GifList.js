import React, {Component} from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map((gif, idx) => <img key={idx} src={gif.url} alt="gif"/>)}
            </div>
        )
    }
}