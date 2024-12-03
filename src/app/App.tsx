// Custome Hook
import useRandomFact from "../customeHook/useRandomeFact"

export default function App() {
    const { fact, handleRandomFact } = useRandomFact()
    
    return(
        <main>
            <button onClick={handleRandomFact}>Get Random Cat</button>
            <h1>{fact && <p>{fact}</p>}</h1>
            {fact && <img src={'https://cataas.com/cat/says/'+fact} alt={"Obtener un gato random con tres palabras: "+fact} />}
        </main>
    )
}
