import React from 'react';
import WordMeaning from './'
const wordTypes = ["noun", "verb", "adverb"]

const Dictionary = ({ onChange, onClick, searchquery }) => (

    <React.Fragment>
        <input onChange={e => onChange(e.target.value)}/>
        <input type="button" onClick={e => onClick()}/>
        <div>
            <ul>
                            {searchquery.map((word, index) => (
                              <li key={word.index}>
                                {word.word}-{word.origin}
                                {word.phonetic}
                                {wordTypes.forEach(type => {
                                  if (word.meaning[type]) {
                                  console.log(word.meaning[type])
                                    word.meaning[type].map((entry, index) => (
                                        <WordMeaning key={entry.index} type={type} {...entry} />


                                    ))
                                  }
                                })}
                              </li>
                            ))}
                          </ul>
        </div>
    </React.Fragment>
)

export default Dictionary;
