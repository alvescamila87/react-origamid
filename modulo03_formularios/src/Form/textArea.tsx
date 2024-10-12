import { useState } from "react";

const TextArea = () => {
  const [textArea, setTextArea] = useState("");

  return (
    <form>
      <textarea 
        value={textArea} 
        onChange={(event) => setTextArea(event.target.value)}
        rows={5}
      />
    </form>
  );
};

export default TextArea;
