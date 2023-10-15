import { NextPage } from "next";
import { LinkProps } from "next/link";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string,
    children: React.ReactNode
}

const BaseLink = () => {

}

const StyleSample: NextPage = () => {
    return (
        <div></div>
    );
}