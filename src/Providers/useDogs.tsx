import axios from 'axios';
import React, {useState, useEffect} from 'react'

export const DogsContext = React.createContext([{}]);

export function DogsProvider(props:any) {
    const [dogsState, setDogsState] = useState([{}])  

    useEffect(() => {
        const options= {
            method: 'GET',
            url: 'http://localhost:8000/dogs'
        }
        axios.request(options).then((response) => {
            setDogsState(response.data)
            console.log('dogsState',response.data)
            console.log('1 DOG OBJ',response.data[0])
        })
    }, [])

    return (
        <DogsContext.Provider value={dogsState}>
            {props.children}
        </DogsContext.Provider>
    )
}

export const useDogs = () => React.useContext(DogsContext);
