import React, { Component } from 'react'
import { withRouter } from 'react-router'
import '../assets/css/Search.css'

class Search extends Component {
    state={
        search:null
    }
    handleInput=(e)=>{
        this.setState({search:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.history.push(`/${this.state.search}`)
        //console.log(this.props)
    }
    render() {
        //console.log(this.props)
        return (
            <section className="search">
                <form onSubmit={this.handleSubmit}>
                <div className="search-bar">
                    <input type="button" value="🔍" />
                    <input type="search" name="search" id="search" onKeyUp={this.handleInput}/>
                </div>
                </form>
            </section>
        )
    }
}

export default withRouter(Search)
