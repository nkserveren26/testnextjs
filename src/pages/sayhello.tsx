import { useEffect, useState } from "react";

const Sayhello = () => {
    const [data, setData] = useState({name: ""});

    //副作用はuseEffect内で処理するのがお作法
    //外部API実行は副作用に該当するのでuseEffect内に記載
    useEffect(() => {
        fetch("api/hello")
        .then((res) => res.json())
        .then((profile) => {
            setData(profile);
        });
    });

    return <div>hello {data.name}</div>
    
}

export default Sayhello;