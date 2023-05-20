import { useEffect, useRef, useState } from "react";
import "./WordCounter.css";
import WordList from "./WordList";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordArray, setWordArray] = useState([]);

  const inputTextRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setText(() => inputTextRef.current.value);
  };

  useEffect(() => {
    setWordArray(() => text.split(" "));
  }, [text]);

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <p>Enter text</p>
          <textarea
            rows={10}
            cols={50}
            className="text-input"
            ref={inputTextRef}
          />
          <br />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <br />
      <WordList words={wordArray} />
    </div>
  );
};

export default WordCounter;
