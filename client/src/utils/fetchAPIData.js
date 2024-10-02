// src/utils/fetchAPIData.js
export const fetchAPIData = async (type) => {
    try {
        const response = await fetch('/api/' + type) // This is the endpoint on your server
        if (!response.ok) {
            throw new Error(
                `Error fetching data: ${response.statusText}`
            )
        }
        const data = await response.json()
        return await data // Assuming your server responds with the artist data
    } catch (error) {
        console.error('Error fetching data:', error)
        return [] // Return an empty array if there's an error
    }
}
