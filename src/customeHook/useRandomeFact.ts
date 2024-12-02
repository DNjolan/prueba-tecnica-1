import { useState, useEffect } from "react"
// Services
import { getRandomFact } from "../services/facts"
export default function useRandomFact() {
    const [fact, setFact] = useState('')

    const handleRandomFact = () => {
        getRandomFact().then(res => setFact(res))
    }

    useEffect(handleRandomFact, [])

    return {fact, handleRandomFact}
}