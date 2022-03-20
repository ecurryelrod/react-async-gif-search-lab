import React, {Component} from 'react'

export default class GifSearch extends Component {
    state = {query: ""}

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder='Search Gifs' value={this.state.query} onChange={this.handleChange}/>
            </form>
        )
    }
}