import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqQuestionsList = () => {
  const [questions, setQuestions] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const updateQuestions = (questionId: string, questionState: boolean) => {
    setQuestions({ ...questions, [questionId]: questionState });
  };

  return (
    <section>
      {/* single question */}
      <article>
        {/* question div */}
        <div>
          <div>
            <p>The question goes here. What is it?</p>
          </div>
          <div>
            <button
              onClick={() => {
                if (questions.question1) {
                  updateQuestions("question1", false);
                } else {
                  updateQuestions("question1", true);
                }
              }}
            >
              {questions.question1 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question1 && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            tempore ipsum ab, mollitia, itaque nesciunt commodi obcaecati eos
            iusto corrupti quod recusandae nobis voluptas voluptatem.
          </div>
        )}
      </article>

      {/* single question */}
      <article>
        {/* question div */}
        <div>
          <div>
            <p>The question goes here. What is it?</p>
          </div>
          <div>
            <button
              onClick={() => {
                if (questions.question2) {
                  updateQuestions("question2", false);
                } else {
                  updateQuestions("question2", true);
                }
              }}
            >
              {questions.question2 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question2 && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            tempore ipsum ab, mollitia, itaque nesciunt commodi obcaecati eos
            iusto corrupti quod recusandae nobis voluptas voluptatem.
          </div>
        )}
      </article>

      {/* single question */}
      <article>
        {/* question div */}
        <div>
          <div>
            <p>The question goes here. What is it?</p>
          </div>
          <div>
            <button
              onClick={() => {
                if (questions.question3) {
                  updateQuestions("question3", false);
                } else {
                  updateQuestions("question3", true);
                }
              }}
            >
              {questions.question3 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question3 && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            tempore ipsum ab, mollitia, itaque nesciunt commodi obcaecati eos
            iusto corrupti quod recusandae nobis voluptas voluptatem.
          </div>
        )}
      </article>
    </section>
  );
};

export default FaqQuestionsList;
