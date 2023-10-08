import { useCallback } from "react"

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

export const CountButton = () => {

    return (
        <Button />
    )
}