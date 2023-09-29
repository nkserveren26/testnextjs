import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

//postsページのpropsの型を定義
type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props;
    const router = useRouter();

    //リクエストされたページが存在しないときに返す
    if (router.isFallback) {
        return <div>Loading...</div>
    }

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
                <p>{`/posts/${id}に対応するページです`}</p>
            </main>
        </div>
    );
}

//GetStaticPaths型の関数を定義
//posts以下の各idのパラメータを定義
//定義したidのページを表示できるようになる
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: {
                id: "1",
            },
        },
        {
            params: {
                id: "2",
            },
        },
        {
            params: {
                id: "3",
            },
        },
    ];

    //fallback:false→上記で定義してないidを指定すると404ページを返す
    //falback:true→上記で定義してないidを指定すると、fallbackページを返す
    //その後サーバーサイドでGetStaticPropsが実行され、idに応じたpropsをクライアントに返却
    //クライアント側で再描画実施
    //また、サーバーサイド側で静的ページが生成され、それが保存される
    //以降は生成した静的ページを返す
    return {
        paths,
        fallback: true
    };
}

//パスパラメータの型を定義
interface PostParams extends ParsedUrlQuery {
    id: string
}

//パスパラメータの型をGetStaticPropsで指定する
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    console.log(context.params);
    return {
        props: {
            id: context.params!["id"],
        }
    }
}

export default Post;