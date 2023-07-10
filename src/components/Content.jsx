import { useState } from "react";
const Content = () => {
  
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    alert(`Entered text: ${text}`);
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{text}</p>
    </div>
  );
};

export default Content