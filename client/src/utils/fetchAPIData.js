export const fetchAPIData = async (type) => {
  try {
      const baseURL = process.env.REACT_APP_API_URL || ''; // Use Amplify's REACT_APP_API_URL in production, fallback to relative path in development
      const finalURL = `${baseURL}/api/${type}`;
      console.log('Fetching from:', finalURL);
      const response = await fetch(`${baseURL}/api/${type}`);
      
      if (!response.ok) {
          throw new Error(
              `Error fetching data: ${response.statusText}`
          );
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
};

// New function for POST requests
export const postAPIData = async (type, body) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error posting data: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data:', error);
        return { error: 'Failed to post data' };
    }
};