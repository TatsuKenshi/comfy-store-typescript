import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqQuestionsList = () => {
  const [questions, setQuestions] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
    question10: false,
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
                if (questions.question4) {
                  updateQuestions("question4", false);
                } else {
                  updateQuestions("question4", true);
                }
              }}
            >
              {questions.question4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question4 && (
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
                if (questions.question4) {
                  updateQuestions("question4", false);
                } else {
                  updateQuestions("question4", true);
                }
              }}
            >
              {questions.question4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question4 && (
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
                if (questions.question4) {
                  updateQuestions("question4", false);
                } else {
                  updateQuestions("question4", true);
                }
              }}
            >
              {questions.question4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question4 && (
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
                if (questions.question7) {
                  updateQuestions("question7", false);
                } else {
                  updateQuestions("question7", true);
                }
              }}
            >
              {questions.question7 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question7 && (
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
                if (questions.question8) {
                  updateQuestions("question8", false);
                } else {
                  updateQuestions("question8", true);
                }
              }}
            >
              {questions.question8 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question8 && (
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
                if (questions.question9) {
                  updateQuestions("question9", false);
                } else {
                  updateQuestions("question9", true);
                }
              }}
            >
              {questions.question9 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question9 && (
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
                if (questions.question10) {
                  updateQuestions("question10", false);
                } else {
                  updateQuestions("question10", true);
                }
              }}
            >
              {questions.question10 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
        </div>

        {/* answer div */}
        {questions.question10 && (
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
