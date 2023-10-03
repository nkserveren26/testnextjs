import { NextPage } from "next";
import Image from "next/image";
import CloudImage from "../../public/images/cloud.png";

const ImageSample: NextPage<void> = () => {
    return (
        <div>
            <h1>画像表示の比較</h1>
            <p>imgタグで表示した場合</p>
            <img src="/images/cloud.png" />
            <p>Imageコンポーネントで表示した場合</p>
            <Image src={CloudImage} alt="image"/>
            <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
        </div>
    );
}

export default ImageSample;