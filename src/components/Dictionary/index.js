import React from "react"
import Primitives from "lib/primitives"
import styled from "styled-components"
import SearchIcon from "@material-ui/icons/Search"

const Dictionary = ({ onChange, onClick, onSearch }) => (
  <Primitives.Flex
    flexDirection="column"
    margin="auto"
    bg="#AAAAAA"
    width={[300, 400, 500, 600, 700]}
  >
    <Primitives.Flex pt={20} pl={20} pr={5}>
      <Primitives.Input
        style={{ width: "100%" }}
        fontSize={1}
        onChange={event => onChange(event.target.value)}
      />
      <Primitives.Button
        style={{ height: "49px", width: "40px" }}
        boxShadow="0px"
        alignSelf="flex-start"
        fontSize={1}
        onClick={() => onClick()}
      >
        <SearchIcon />
      </Primitives.Button>
    </Primitives.Flex>
    <ul>
      {onSearch.map((word, index) => (
        <div key={index}>
          {word.word}
          {word.phonetic}
          {word.meaning.noun && <h1> Noun </h1>}
          {word.meaning.noun &&
            word.meaning.noun.map((entry, index) => (
              <div key={index}>
                {entry.definition}
                {entry.example}
                {entry.synonyms}
              </div>
            ))}
          {word.meaning.verb && <h1> Verb </h1>}
          {word.meaning.verb &&
            word.meaning.verb.map((entry, index) => (
              <div key={index}>
                {entry.definition}
                {entry.example}
                {entry.synonyms}
              </div>
            ))}
          {word.meaning.adjective && <h1> Adjective </h1>}
          {word.meaning.adjective &&
            word.meaning.adjective.map((entry, index) => (
              <div key={index}>
                {entry.definition}
                {entry.example}
                {entry.synonyms}
              </div>
            ))}
          {word.meaning.adverb && <h1> Adverb </h1>}
          {word.meaning.adverb &&
            word.meaning.adverb.map((entry, index) => (
              <div key={index}>
                {entry.definition}
                {entry.example}
                {entry.synonyms}
              </div>
            ))}
          {word.meaning.abbreviation && <h1> Abbreviation </h1>}
          {word.meaning.abbreviation &&
            word.meaning.abbreviation.map((entry, index) => (
              <div key={index}>
                {entry.definition}
                {entry.example}
                {entry.synonyms}
              </div>
            ))}
        </div>
      ))}
    </ul>
  </Primitives.Flex>
)

export default Dictionary
