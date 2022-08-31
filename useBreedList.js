import { useDebugValue, useEffect, useState } from "react"

const localCache ={};

export default function useBreedList(animal) {
    const [breedlist, setBreedList] = useState([]);
    const [status, setStatus] = useState("unload");
    useDebugValue("number of values in cache "+
    Object.keys(localCache).length);

    useEffect(()=> {
        if(!animal){
            setBreedList([]);
        } else if (localCache[animal]){
            setBreedList(localCache[animal]);
        }else {
            requestBreedList();
        }
        
        async function requestBreedList(){
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            localCache[animal]= json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        }
    },[animal]);
    return [breedlist,status]
}