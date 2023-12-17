async function getTimeZoneInfo(latitude, longitude) {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // הכנס/י את המפתח שלך כאן
  
    const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`;
  console.log("sljfj")
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.error_message || 'Failed to retrieve time zone information.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  
  // דוגמה לשימוש בפונקציה
  const latitude = 37.7749; // קו רוחב של נקודה במפה
  const longitude = -122.4194; // קו אורך של נקודה במפה
  
  getTimeZoneInfo(latitude, longitude)
    .then((result) => {
      if (result) {
        console.log('Time Zone Information:', result);
      } else {
        console.log('Failed to retrieve time zone information.');
      }
    });
  