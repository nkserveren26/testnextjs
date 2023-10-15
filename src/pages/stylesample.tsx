import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import { styled } from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string,
    children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
    const {className, children, ...rest} = props;
    return (
        <Link {...rest}>
            <a className={className}>{children}</a>
        </Link>
    );
}

const StyledLink = styled(BaseLink)`
    color: blue;
    font: 15px;
`;

const StyleSample: NextPage = () => {
    return (
        <div>
            {/* 青色のリンクを表示する */}

        </div>
    );
}