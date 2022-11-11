import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-GhuraFira`;
    },[title])
}

export default useTitle