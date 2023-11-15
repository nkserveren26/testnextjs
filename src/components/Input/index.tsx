import { useState } from "react";

//&で2つの型をマージ（厳密に言うとintersection）
type InputProps = JSX.IntrinsicElements["input"] & {
    label: string
}

//コンポーネント
export const Input = (props: InputProps) => {
    const {label, ...rest} = props;
    const [text, setText] = useState("");

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const resetInputField = () => {
        setText("");
    }

    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input {...rest} type="text" value={text} onChange={onInputChange} />
            <button onClick={resetInputField}>Reset</button>
        </div>
    );
}