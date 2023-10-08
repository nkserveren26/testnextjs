import { useCallback, useState } from "react"

const UsePopup = () => {

    const cb = useCallback((text: string) => {
        prompt(text);
    }, []);

    return cb;
}

type CounterButtonProps = {
    label: string,
    maximum: number
}

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