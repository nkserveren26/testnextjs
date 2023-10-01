import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props;
    return (
        <>
            <div>
                <Head>
                    <title>ISR Page</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <p>
                        このページはISRによってビルド時に生成されたページです
                    </p>
                    <p>
                        {message}
                    </p>
                </main>

            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp} にgetStaticPropsが実行されました`;
    console.log(message);
    return {
        props: {
            message,
        },
        //ISRではページの有効期間を秒単位で指定する
        revalidate: 60,
    }
}

export default ISR;