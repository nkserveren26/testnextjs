type ButtonProps = {
    label: string,
    text: string,
    disabled: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

//ラベルとボタンを表示するコンポーネント
//Presentational Componentは見た目のみを実装するコンポーネント
//Presentational Componentは内部に状態を保持したり、外部のAPI呼び出しはしない
export const Button = (props: ButtonProps) => {
    const {label, text, disabled, onClick } = props;
    return (
        <div>
            <span>{label}</span>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}