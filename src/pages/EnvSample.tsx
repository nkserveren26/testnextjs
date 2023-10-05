import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
    console.log("process.env.TEST: ", process.env.TEST);

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>hogehoge</p>
                {/* envで参照する変数はサーバーサイド描画時のみ参照できる。クライアントサイドでの再描画では何も表示されない */}
                <p>
                    {process.env.TEST}
                </p>
                
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    
    console.log("process.env.TEST: ", process.env.TEST);
    return {
        props: {},
    }
}

export default EnvSample;