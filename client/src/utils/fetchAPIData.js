export const fetchAPIData = async (type) => {
  try {
      const baseURL = process.env.REACT_APP_API_URL || ''; // Use Amplify's REACT_APP_API_URL in production, fallback to relative path in development
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
