import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import initialFetch, { type TFetchedData  } from "../services/fetchData";



const DataContext = createContext({} as TFetchedData);

export default function FetchedDataProvider (props: PropsWithChildren){
    const [data, setData] = useState<TFetchedData>();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        async function loadData(){
            setLoading(true);
            const initialData = await initialFetch()
            setData(initialData);
            setLoading(false);
        }
        loadData()
    }, [])

    if(!data || isLoading){
        return (
            <div className="flex h-[100vh] w-[100vw] items-center justify-center gap-2">
                <div className="animate-spin">
                    <img src="/logo_72x72.png" alt="Elektra" />
                </div>
                <h1 className="animate-pulse"><b>Cargando...</b></h1>
            </div>
        )
    }

    return (
        <DataContext.Provider value={data}>
        {props.children}
        </DataContext.Provider>
    )
} 

export const useFetchedData = () => useContext(DataContext);