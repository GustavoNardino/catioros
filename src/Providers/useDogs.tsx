import axios from 'axios';
import React, {useState, useEffect} from 'react'

export const DogsContext = React.createContext([{}]);

export function DogsProvider(props:any) {
    const [dogsState, setDogsState] = useState([{}])  
    const [counter, setCounter] = useState(true)

    useEffect(() => {
        const options= {
            method: 'GET',
            url: 'http://localhost:8000/dogs'
        }
        axios.request(options).then((response) => {
            setDogsState(response.data)
            setTimeout(() => counter?setCounter(false):setCounter(true), 3000)
        })
    }, [counter])

    return (
        <DogsContext.Provider value={dogsState}>
            {props.children}
        </DogsContext.Provider>
    )
}

export const useDogs = () => React.useContext(DogsContext);
