
export const fetchNewsData = async () => {
    try {
        const response = await fetch('/news'); // This is the endpoint on your server
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data; // Assuming your server responds with the artist data
    } catch (error) {
        console.error('Error fetching news data:', error);
        return []; // Return an empty array if there's an error
    }
  };