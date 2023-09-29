import { NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props;
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的サイト生成によってビルド時に生成されたページです
                </p>
                
            </main>
        </div>
    );
}