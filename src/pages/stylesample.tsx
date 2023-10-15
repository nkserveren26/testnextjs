import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import { styled } from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string,
    children: React.ReactNode
}

//styled-componentで定義したスタイルを使う場合、propsで渡されるclassNameを対象コンポーネントのclassName属性に指定する
const BaseLink = (props: BaseLinkProps) => {
    const {className, children, ...rest} = props;
    return (
        <Link {...rest} className={className}>
            {children}
        </Link>
    );
}

//コンポーネントのスタイル定義は、継承形式で。
const StyledLink = styled(BaseLink)`
    color: blue;
    font: 15px;
`;

const StyleSample: NextPage = () => {
    return (
        <div>
            {/* 青色のリンクを表示する */}
            <StyledLink href="/">Go To index</StyledLink>

        </div>
    );
}

export default StyleSample;