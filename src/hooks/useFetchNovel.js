import { useState, useEffect } from "react";
import prodApis from "../api/home";
import { useSelector } from "react-redux";

const useFetchNovel = (index) => {
    const [data, setData] = useState([]);
    const sv = useSelector((state)=>state.server.sv);
        const getData = async () => {
            const response = await prodApis.server_novel(sv);
            setData(response.data[index].data);
        };

    useEffect(() => {
        getData();
    }, [sv]);
    return data;
};

export default useFetchNovel;

   
