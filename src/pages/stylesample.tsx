import { NextPage } from "next";
import Link, { LinkProps } from "next/link";

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

const StyleSample: NextPage = () => {
    return (
        <div></div>
    );
}