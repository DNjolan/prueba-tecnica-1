// Custome Hook
import useRandomFact from "../customeHook/useRandomeFact"
import useRandomCat from "../customeHook/useRandomeCat"

export default function App() {
    const { fact, handleRandomFact } = useRandomFact()
    const { urlRandomCat } = useRandomCat(fact)

    const handleRefreshCat = () => {
        handleRandomFact()
    }

    return(
        <main>
            <button onClick={handleRefreshCat}>Get Random Cat</button>
            <h1>{fact && <p>{fact}</p>}</h1>
            {urlRandomCat && <img src={urlRandomCat} alt="Obtener random cat with three first words, by id." />}
        </main>
    )
}
