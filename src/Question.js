import {useState} from "react"

function Question({question}){
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const toggleButtonState = () => setIsButtonPressed((oldValue)=>!oldValue)

  return <article className="question">
    <h1 className="question-title">{question.title}</h1>
      <button onClick={toggleButtonState} className="question-button">{isButtonPressed ? 'minus' : 'plus'}</button>
<p className="question-answer">{isButtonPressed && question.info}</p>
    </article>
}
export default Question
