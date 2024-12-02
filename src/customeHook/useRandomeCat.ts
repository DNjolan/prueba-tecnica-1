import { useState, useEffect } from "react"
// Services
import { getRandomImgById } from "../services/facts"
export default function useRandomCat( fact: string) {
    const [urlRandomCat, setUrlRandomCat] = useState('')

    useEffect(() => {
        if (fact) {
            getRandomImgById(fact).then((res) => setUrlRandomCat(res))
        }
    }, [fact])

    return { urlRandomCat }
}