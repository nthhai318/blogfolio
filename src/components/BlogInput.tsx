import { useState, useRef, useEffect } from "react";

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight.toString();

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

type InputProp = {
  row?: number;
  style?: string;
};

const BlogInput = (props: InputProp) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };
  return (
    <textarea
      className={props.style ? `${props.style} text-black ` : `text-black`}
      onChange={handleChange}
      placeholder="What did you like or dislike?"
      ref={textAreaRef}
      rows={props.row}
      value={value}
    />
  );
};

export default BlogInput;
