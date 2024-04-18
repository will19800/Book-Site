const NinjaURL = 'http://127.0.0.1:8000/api/login/'

import React, {useState, useContext} from 'react'

const AppContext = React.createContext()

const PracticeNinja = async () => {
    const[loginID, setLoginID] = useState['']

    try {
        const response = await fetch(`${NinjaURL}2`)
        console.log(response)

    } catch (err) {
        console.log(err)
    }
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };