import { useEffect, useState } from "react";
import Cricketer from "../Cricketer/Cricketer";

const Cricketers = () => {
    const [cricketers, setCricketers] = useState([]);

    useEffect(() => {
        fetch('cricketers.json')
            .then(res => res.json())
            .then(data => setCricketers(data))
    }, [])

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cricketers.map(cricketer => <Cricketer
                    key={cricketer.playerId}
                    cricketer={cricketer}
                ></Cricketer>)
            }
        </div>
    );
};

export default Cricketers;