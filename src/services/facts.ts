const URL_FACTS_RANDOM: string = 'https://catfact.ninja/fact'

export async function getRandomFact() {
    const res = await fetch(URL_FACTS_RANDOM)
    const data = await res.json()
    const threeWords = data.fact.split(' ', 3).join(' ')
    return threeWords
}