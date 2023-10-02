import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props;
    return (
        <>
            <div>
                <Head>
                    <title>Static Site Generation</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <p>
                        このページは静的サイト生成によってビルド時に生成されたページです
                    </p>
                    <p>
                        {message}
                    </p>
                    <Link href="/ssr">
                        Go To SSR
                    </Link>
                </main>

            </div>
        </>
    )
}

//SSGではGetStaticProps型の関数を定義する
//この関数はビルド時に実行される
//関数ではreturnにpropsを含める
//propsはページコンポーネントに渡される
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        }
    }
}

export default SSG;