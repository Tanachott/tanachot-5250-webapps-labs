const AI21_API_KEY = 'API_KEY';

function callAi21ChatApi(userQuery) {
  const url = "https://api.ai21.com/studio/v1/j2-ultra/chat";
  const payload = {
    "numResults": 1,
    "temperature": 0.7,
    "messages": [
      {
        "text": userQuery,
        "role": "user"
      }
    ],
    "system": "Answer briefly"
  };

  const options = {
    "method": "post",
    "headers": {
      "Authorization": `Bearer ${AI21_API_KEY}`,
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(response.getContentText());

    Logger.log("Full AI21 response: " + JSON.stringify(json));

    // Extract the response content based on AI21’s chat API response structure
    if (json && json.outputs && json.outputs[0] && json.outputs[0].text) {
      return json.outputs[0].text.trim();
    } else {
      throw new Error("Unexpected response format from AI21 Chat API");
    }

  } catch (error) {
    Logger.log("Error in AI21 Chat API call: " + error.toString());
    return "I'm sorry, there was an error processing your request.";
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      Logger.log("No post data available");
      return ContentService.createTextOutput(JSON.stringify({
        "fulfillmentMessages": [
          {
            "text": {
              "text": ["No data received"]
            }
          }
        ]
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Parse the incoming request
    const requestBody = JSON.parse(e.postData.contents);
    const userQuery = requestBody.queryResult.queryText;

    // Call AI21 API with the user's question
    const ai21Response = callAi21ChatApi(userQuery);

    // Return AI21 response
    return ContentService.createTextOutput(JSON.stringify({
      "fulfillmentMessages": [
        {
          "text": {
            "text": [ai21Response]
          }
        }
      ]
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error occurred: " + error.toString());

    return ContentService.createTextOutput(JSON.stringify({
      "fulfillmentMessages": [
        {
          "text": {
            "text": ["I'm sorry, there was an error processing your request."]
          }
        }
      ]
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
