import { useLocation } from "react-router-dom";

export default function useLoacationArray() {
    const loc = useLocation()
    const locArray = loc.pathname.split('/').filter((str) => { if (str !== '') return str });
    return locArray
}
