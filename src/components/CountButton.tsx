import { useCallback, useState } from "react"

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

    const displayPopup = UsePopup();

    const [count, setCount] = useState(0);

    const disabled = count >= maximum;
    const text = disabled ? "Can\'t click any more" : `You've clicked ${count} times`;

    return (
        <Button />
    )
}