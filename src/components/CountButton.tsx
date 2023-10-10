import { useCallback, useState } from "react"
import { Button } from "./Button";

// ポップアップを表示するためのフック
const UsePopup = () => {
    const cb = useCallback((text: string) => {
        prompt(text);
    }, []);

    return cb;
}

// CountButtonのpropsの型定義
type CounterButtonProps = {
    label: string,
    maximum: number
}

// クリックされた回数を表示するボタンを表示するコンポーネント
// このコンポーネントはContainer Componentであり、ビジネスロジックのみを定義する（コンポーネントの見た目は定義しない）
export const CountButton = (props: CounterButtonProps) => {
    const { label, maximum } = props;

    // アラートを表示させるためのフックを使う
    const displayPopup = UsePopup();

    // カウントを保持する状態を定義する
    const [count, setCount] = useState(0);

    const onClick = useCallback(() => {
        const newCount = count + 1;
        setCount(newCount);

        if(newCount >= maximum) {
            displayPopup(`You've clicked ${newCount} times`);
        }
    }, [count, maximum]);

    const disabled = count >= maximum;
    const text = disabled ? "Can\'t click any more" : `You've clicked ${count} times`;

    return (
        <Button disabled={disabled} onClick={onClick} label={label} text={text}/>
    )
}