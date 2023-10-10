import { Button } from "@/components/Button";
import { CountButton } from "@/components/CountButton";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

type SSGProps = {
    message: string
};


const SSG: NextPage<SSGProps> = (props) => {
    //routerコンポーネントを使う際はuseRouterを呼ぶ
    //フックはコンポーネント内で呼ばないとエラーになる
    const router = useRouter();

    const goToSSR = () => {
        router.push("/ssr");
    }

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
                    {/* Linkコンポーネントはページ遷移に使用する */}
                    <Link href="/ssr">
                        Go To SSR
                    </Link>
                    {/* ページ遷移はrouterのpushメソッドでも可能 */}
                    <button onClick={goToSSR}>Go To SSR</button>
                    <CountButton label="testbutton" maximum={5}/>
                </main>

            </div>
        </>
    )
}

//SSGではGetStaticProps型の関数を定義する
//この関数はビルド時に実行される
//関数ではreturnにpropsを含める
//propsはページコンポーネントに渡される
//SSGはページをビルド時に作成し、それをクライアントに返却するので高速に描画できる
//初期描画時のデータはビルド時のデータなので古い
//なので常に最新データを表示したい場合はSSG以外を使う
//SSGは不変のページもしくは初期描画時のデータが古くても問題ないページ向き
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