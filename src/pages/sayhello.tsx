import { useState } from "react";

const Sayhello = () => {
    const [data, setData] = useState({name: ""});

    return <div>hello {data.name}</div>
    
}

export default Sayhello;