import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
    //サーバーサイドで描画する際はtest1と表示され、クライアントサイドで描画する際はundefinedと表示される
    console.log("process.env.TEST: ", process.env.TEST);

    //test2と表示される
    console.log("process.env.NEXT_PUBLIC_TEST: ", process.env.NEXT_PUBLIC_TEST);

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* envで参照する変数はサーバーサイド描画時のみ参照できる。クライアントサイドでの再描画では何も表示されない */}
                <p>
                    {process.env.TEST}
                </p>
                <p>
                    {process.env.NEXT_PUBLIC_TEST}
                </p>
                
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    //test1が表示される
    console.log("process.env.TEST: ", process.env.TEST);

    //test2と表示される
    console.log("process.env.NEXT_PUBLIC_TEST: ", process.env.NEXT_PUBLIC_TEST);
    return {
        props: {},
    }
}

export default EnvSample;