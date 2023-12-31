import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props;
    return (
        <>
            <div>
                <Head>
                    <title>Server Side Rendering</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <p>
                        このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです
                    </p>
                    <p>
                        {message}
                    </p>
                </main>

            </div>
        </>
    )
}

//SSRはGetServerSideProps型の関数を定義し、returnにpropsを含める
export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にこのページのgetaServerSidePropsが実行されました`;
    return {
        props: {
            message,
        }
    }

}

export default SSR;