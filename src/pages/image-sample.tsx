import { NextPage } from "next";
import Image from "next/image";

//静的画像はインポートして利用することもできる
import CloudImage from "../../public/images/cloud.png";

//外部画像のURL
const imageUrl = "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGx5cm8knTLo61O84kVTxOan841a30-aIJSoqkmlQNsP4-Qv0KVqX9M9vYFUiwJk7TdeTeuLh4mZUxU1oOxSNWEWS-sZ7t-vVla9bI12R2CQvexAMmQkE7-R57g8s7yFWIJBupr9RiFEHaQMQGRMXfLIOjUBkLlJWqwoH8SuyZtXzxnl8uBP379OktjUnv7rlbXdF0YL0tXZFM7E6dcgzACwRvuTQurLRS3VdvoAO_PTz8FhoG-XlOmDrR3RMmJk18Uwe0Z9sFdtrNrFvplMHyonXeBkziLXhu6ze1CUdDjhwlqYys_jMvhpmBIRvSLvwtjhMIyrRsnzA8QXcmpLqKhduVS5k1zA5K2WGkfHuFBHJLSeyQmZjrL0scd6seAomPk2Yd4g-hfsT3zhl-IDlJuJ-sdbuzxN4RY9bUJfTnpyt/800px-B27Z_Best_Buy_Theater_montage.jpg?errorImage=false";

const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/cloud.png" />
            <p>Imageコンポーネントで表示した場合</p>
            {/* パスを指定する代わりにインポートした画像を指定可能 */}
            <Image src={CloudImage} alt="image" layout="responsive"/>
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
            <p>外部画像をImageコンポーネントで表示した場合</p>
            {/* 外部画像はwidthとheightを取得できないので、layoutがfill以外の場合は値を明示的に指定する必要がある */}
            {/* 外部画像を表示するために、next.config.jsにドメインを追加する必要がある */}
            <Image src={imageUrl} alt="image" layout="responsive" width="800" height="571" />
        </div>
    );
}

export default ImageSample;