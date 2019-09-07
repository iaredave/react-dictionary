import React from "react"
import Primitives from "lib/primitives"
import SearchIcon from "@material-ui/icons/Search"
import { Example, Synonyms } from "./styles"

const Dictionary = ({ onChange, onClick, onSearch }) => {
  return (
    <Primitives.Flex
      flexDirection={"column"}
      margin={"auto"}
      bg={"white"}
      border={"1px solid #DDDDDD"}
      borderRadius={"8px"}
      width={[300, 400, 500, 600, 700]}
      lineHeight={[0, 1, 2, 3, 4, 5]}
    >
      <Primitives.Text
        fontSize={"18px"}
        color={"#545454"}
        style={{ textIndent: "30px", marginTop: "15px" }}
      >
        Dictionary
      </Primitives.Text>
      <Primitives.Flex pt={20} pl={20} pr={5}>
        <Primitives.Input
          style={{ width: "100%" }}
          fontSize={1}
          onChange={event => onChange(event.target.value)}
        />
        <Primitives.Button
          boxShadow={"0px"}
          alignSelf={"flex-start"}
          fontSize={3}
          onClick={() => onClick()}
        >
          <SearchIcon />
        </Primitives.Button>
      </Primitives.Flex>
      <ul style={{ listStyle: "disc" }}>
        {onSearch.map((word, index) => (
          <div key={index}>
            <Primitives.Text fontSize={"18px"} fontWeight={500}>
              {word.word}
            </Primitives.Text>
            <Primitives.Text fontSize={"15px"} color={"#AAAAAA"}>
              {word.phonetic}
            </Primitives.Text>
            <>
              {word.meaning.noun && (
                <Primitives.Text
                  style={{ textIndent: "-30px" }}
                  fontStyle={"italic"}
                  lineHeight={[0, 1, 2, 3, 4, 5]}
                >
                  noun
                </Primitives.Text>
              )}
            </>
            {word.meaning.noun &&
              word.meaning.noun.map((entry, index) => (
                <div key={index}>
                  <li style={{ fontSize: "13px" }}>{entry.definition}</li>
                  {entry.example && <Example>{entry.example}</Example>}
                  {entry.synonyms && (
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#aaaaaa",
                        fontStyle: "italic"
                      }}
                    >
                      synonyms:{" "}
                    </span>
                  )}
                  {entry.synonyms &&
                    entry.synonyms.map((entry, index) => {
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <Synonyms>
                            {
                              <Primitives.Text
                                fontSize={["13px"]}
                                color={"#1a0dab"}
                              >
                                {entry + `, `}
                              </Primitives.Text>
                            }
                          </Synonyms>
                        </div>
                      )
                    })}
                </div>
              ))}
            <>
              {word.meaning.verb && (
                <Primitives.Text
                  style={{ textIndent: "-30px" }}
                  fontStyle={"italic"}
                  lineHeight={[0, 1, 2, 3, 4, 5]}
                >
                  verb
                </Primitives.Text>
              )}
            </>
            {word.meaning.verb &&
              word.meaning.verb.map((entry, index) => (
                <div key={index}>
                  <li style={{ fontSize: "13px" }}>{entry.definition}</li>
                  {entry.example && <Example>{entry.example}</Example>}
                  {entry.synonyms && (
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#aaaaaa",
                        fontStyle: "italic"
                      }}
                    >
                      synonyms:{" "}
                    </span>
                  )}
                  {entry.synonyms &&
                    entry.synonyms.map((entry, index) => {
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <Synonyms>
                            {
                              <Primitives.Text
                                fontSize={["13px"]}
                                color={"#1a0dab"}
                              >
                                {entry + `, `}
                              </Primitives.Text>
                            }
                          </Synonyms>
                        </div>
                      )
                    })}
                </div>
              ))}
            <>
              {word.meaning.adjective && (
                <Primitives.Text
                  style={{ textIndent: "-30px" }}
                  fontStyle={"italic"}
                  lineHeight={[0, 1, 2, 3, 4, 5]}
                >
                  adjective
                </Primitives.Text>
              )}
            </>
            {word.meaning.adjective &&
              word.meaning.adjective.map((entry, index) => (
                <div key={index}>
                  <li style={{ fontSize: "13px" }}>{entry.definition}</li>
                  {entry.example && <Example>{entry.example}</Example>}
                  {entry.synonyms && (
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#aaaaaa",
                        fontStyle: "italic"
                      }}
                    >
                      synonyms:{" "}
                    </span>
                  )}
                  {entry.synonyms &&
                    entry.synonyms.map((entry, index) => {
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <Synonyms>
                            {
                              <Primitives.Text
                                fontSize={["13px"]}
                                color={"#1a0dab"}
                              >
                                {entry + `, `}
                              </Primitives.Text>
                            }
                          </Synonyms>
                        </div>
                      )
                    })}
                </div>
              ))}
            <>
              {word.meaning.adverb && (
                <Primitives.Text
                  style={{ textIndent: "-30px" }}
                  fontStyle={"italic"}
                  lineHeight={[0, 1, 2, 3, 4, 5]}
                >
                  adverb
                </Primitives.Text>
              )}
            </>
            {word.meaning.adverb &&
              word.meaning.adverb.map((entry, index) => (
                <div key={index}>
                  <li style={{ fontSize: "13px" }}>{entry.definition}</li>
                  {entry.example && <Example>{entry.example}</Example>}
                  {entry.synonyms && (
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#aaaaaa",
                        fontStyle: "italic"
                      }}
                    >
                      synonyms:{" "}
                    </span>
                  )}
                  {entry.synonyms &&
                    entry.synonyms.map((entry, index) => {
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <Synonyms>
                            {
                              <Primitives.Text
                                fontSize={["13px"]}
                                color={"#1a0dab"}
                              >
                                {entry + `, `}
                              </Primitives.Text>
                            }
                          </Synonyms>
                        </div>
                      )
                    })}
                </div>
              ))}
            <>
              {word.meaning.abbreviation && (
                <Primitives.Text
                  style={{ textIndent: "-30px" }}
                  fontStyle={"italic"}
                  lineHeight={[0, 1, 2, 3, 4, 5]}
                >
                  abbreviation
                </Primitives.Text>
              )}
            </>
            {word.meaning.abbreviation &&
              word.meaning.abbreviation.map((entry, index) => (
                <div key={index}>
                  <li style={{ fontSize: "13px" }}>{entry.definition}</li>
                  {entry.example && <Example>{entry.example}</Example>}
                  {entry.synonyms && (
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#aaaaaa",
                        fontStyle: "italic"
                      }}
                    >
                      synonyms:{" "}
                    </span>
                  )}
                  {entry.synonyms &&
                    entry.synonyms.map((entry, index) => {
                      return (
                        <div style={{ display: "inline-block" }} key={index}>
                          <Synonyms>
                            {
                              <Primitives.Text
                                fontSize={["13px"]}
                                color={"#1a0dab"}
                              >
                                {entry + `, `}
                              </Primitives.Text>
                            }
                          </Synonyms>
                        </div>
                      )
                    })}
                </div>
              ))}
          </div>
        ))}
      </ul>
    </Primitives.Flex>
  )
}

export default Dictionary
