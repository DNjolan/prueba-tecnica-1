const URL_FACTS_RANDOM: string = 'https://catfact.ninja/fact'
const URL_GET_IMG_RANDOM: string = 'https://cataas.com/cat/says/'

export async function getRandomFact() {
    const res = await fetch(URL_FACTS_RANDOM)
    const data = await res.json()
    const threeWords = data.fact.split(' ', 3).join(' ')
    return threeWords
}

export async function getRandomImgById( fact: string ) {
    const paramsUrl = `${URL_GET_IMG_RANDOM}${fact}?fontSize=50&fontColor=red&json=true`
    const res = await fetch(paramsUrl)
    const data = await res.json()
    return `https://cataas.com/cat/${data._id}/says/${fact}?fontSize=50&fontColor=red`
}