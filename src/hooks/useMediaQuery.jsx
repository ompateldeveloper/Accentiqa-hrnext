import { useEffect, useState } from "react"

export default function useMediaQuery(query) {
    const [matches,setMatches] = useState(false);
    useEffect(()=>{
        const mediaQuery = window.matchMedia(query)
        const updateMatches = ()=>{ 
            setMatches(mediaQuery.matches)
        }
        updateMatches();
        const listener = () => {
            updateMatches()
        }

        mediaQuery.addEventListener('change',listener);
        return()=>{
            mediaQuery.removeEventListener('change',listener);

        }

    },[query])
    return matches
}
