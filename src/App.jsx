import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const quoteList = [["I was born and raised a guido. It's just a lifestyle, it's being Italian, it's representing, family, friends, tanning, gel, everything.","DJ Pauly D"],["We're all black when the lights go out", "Lil Jon"], ["Real gs move in silence like lasagna.", "Lil Wayne"], ["Positive thinking can be contagious. Being surrounded by winners helps you develop into a winner.", "Arnold"]];
  const quote=quoteList[quoteIndex][0];
  const author=quoteList[quoteIndex][1];

  return (
    <div className="App">
      <div id="quote-box">
        <h1 id="text">"{quote}"</h1>
        <h2 id="author">{author}</h2>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <button id="new-quote" 
          onClick={() => setQuoteIndex(quoteIndex => (quoteIndex<quoteList.length-1) ? quoteIndex+1 : 0)}
        >New Quote</button>
      </div>
    </div>
  )
}

export default App
