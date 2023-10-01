import { NextPage } from "next"
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
                    <title>Static Site Generation</title>
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