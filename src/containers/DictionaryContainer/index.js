import React, { Component } from "react"
import axios from "axios"
import Dictionary from "../../components/Dictionary"

class DictionaryContainer extends Component {
  constructor() {
    super()

    this.state = {
      wordresponse: [],
      laungage: "en",
      wordsearch: ""
    }
  }

  searchWord = () => {
    const url =
      "https://dictionaryapi.herokuapp.com/?define=" +
      this.state.wordsearch +
      "&lang=" +
      this.state.laungage

    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ wordresponse: data })
      })
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Dictionary
          onClick={this.searchWord}
          onChange={newSearch => this.setState({ wordsearch: newSearch })}
          onSearch={this.state.wordresponse}
        />
      </React.Fragment>
    )
  }
}

export default DictionaryContainer
