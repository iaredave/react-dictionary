import React from "react"
import WordMeaning from "../WordMeaning/index.js"
const wordTypes = ["noun", "verb", "adverb", "pronoun", "abbreviation"]
let newArray = []

const Dictionary = ({ onChange, onClick, searchquery }) => (
  <React.Fragment>
    <input onChange={e => onChange(e.target.value)} />
    <input type="button" onClick={e => onClick()} />
    <div>
      <ul>
        {searchquery.map((word, index) => (
          <li key={word.index}>
            {word.word}-{word.origin}
            {word.phonetic}
            {wordTypes.forEach(type => {
              if (word.meaning[type]) {
              {console.log(word.meaning[type])}
               word.meaning[type].map((entry, index) => {
                    return newArray.push(entry)
                })
              }
            })}
            <div>
            {newArray.map((partofspeech, index) => (
                <div key={partofspeech.index}>
                    {partofspeech.definition}
                    {partofspeech.example}
                    {partofspeech.synonyms}
                 </div>
                ))}
                {newArray = []}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
)

export default Dictionary;
