import Question from './Question'

function Questions({questions}){
  const allQuestions = questions.map((question)=> <Question question={question}/>)
  return ( 
    <section className="questions">
      {allQuestions}
    </section>)
}
export default Questions

