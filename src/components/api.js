export async function getCoiffure() {
    const res = await fetch("api/coiffures")
    
    const data = await res.json()
    return data.coiffures
}
