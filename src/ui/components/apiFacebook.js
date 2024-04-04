const sendFacebookEvent = async (eventName, accessToken, pixelId, redirectUrl) => {
    const apiUrl = `https://graph.facebook.com/v19.0/${pixelId}/events`;
  
    const eventData = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: window.location.href,
          action_source: 'website',
          user_data: {
            "em": [
              "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
            ],
            "ph": [
              null
            ]
          },
        },
      ],
    };
  
    try {
      const response = await fetch(`${apiUrl}?access_token=${accessToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export default sendFacebookEvent;
  