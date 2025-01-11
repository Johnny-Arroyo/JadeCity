export const fetchAPIData = async (type) => {
    try {
        const response = await fetch('/api/' + type)
        if (!response.ok) {
            throw new Error(
                `Error fetching data: ${response.statusText}`
            )
        }
        const data = await response.json()
        return await data
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}
