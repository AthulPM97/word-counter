import "./WordList.css";

const WordList = (props) => {
  const { words } = props;

  let wordMap = new Map();

  //Map will keep track of words and its count
  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i])) {
      wordMap.set(words[i], wordMap.get(words[i]) + 1);
    } else {
      wordMap.set(words[i], 1);
    }
  }
  //convert map to array and sort it in descending order
  const entries = Array.from(wordMap).sort((a, b) => b[1] - a[1]);

  return (
    <>
      <h4>Result</h4>
      <div className="word-container">
        {entries.map((item) => {
          return (
            <p>
              {item[0]} ({item[1]})
            </p>
          );
        })}
      </div>
    </>
  );
};

export default WordList;
