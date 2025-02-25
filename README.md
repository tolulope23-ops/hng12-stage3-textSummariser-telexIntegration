## PROJECT DESCRIPTION
 The Telex Text Summarizer is a Modifier Integration designed for the Telex platform. This integration utilizes Natural Language Processing (NLP) techniques to generate concise and meaningful summaries of long-form text inputs. It enhances text readability and improves information processing by extracting key insights from the given content.

 ## PROJECT FEATURES
 1. Automatic Summarization: Converts lengthy text into a shorter, coherent version while preserving key
 2. NLP-Powered Processing: Uses advanced NLP techniques to ensure high-quality summaries.
 3. Customizable Summary Length: Allows users to define the desired summary length (e.g., short, medium, long).

## HOW IT'S WORKS
1. The integration receives a text input from Telex.
2. It processes the text using an NLP-based summarization algorithm.
3. The summarized version of the text is returned as output.
4. Telex displays or utilizes the summary based on user-defined channel or workflow.

## INSTALLATION & DEPLOYMENT
1. Clone the repository
   ```
   git clone https://github.com/tolulope23-ops/hng12-stage3-textSummariser-telexIntegration.git
   cd hng12-stage3-textSummariser-telexIntegration
2. Install Dependencies
   ```
   npm install *packages*
   npm start
   
## TEST CASE
```
test('summarizes a long message correctly', () => {
const message = "AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. It's redefining information access and dissemination, while simultaneously raising complex ethical dilemmas. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases. Human-machine interactions are becoming increasingly sophisticated, blurring the lines between virtual and physical experiences. The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. Security and privacy concerns are amplified, necessitating new frameworks for data governance.";
const result = summarizer(message, 3);

expect(result).toContain("The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases.");
        });
```
![image alt](https://github.com/tolulope23-ops/hng12-stage3-textSummariser-telexIntegration/blob/f69c4e980323b230c8389d002b5ec2f405d31aaa/telexScreenshot.png)

## INTEGRATION WITH TELEX
1. Register your integration on the Telex platform.
2. Provide the API endpoint URL in the Telex configuration settings.
3. Map the integration to text input sources within Telex.
4. Deploy and test the summarization workflow.

## API ENDPOINT
1. Endpoint: /summarise
2. Methods: POST
     ### Request: body(json)
   ```
   {
       "message": "AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. It's redefining information access and dissemination, while simultaneously raising complex ethical dilemmas. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases. Human-machine interactions are becoming increasingly sophisticated, blurring the lines between virtual and physical experiences. The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. Security and privacy concerns are amplified, necessitating new frameworks for data governance.",
    "setting": {
                "label": SentenceLength,
                "type": "number",
                "description": "Sets the maximum sentence length for incoming messages to summarise.",
                "default": 3,
                "required": true
            }
   }
   ```
   message(String): Text to be summarised
   length(number): Number of sentence to summarise to, its cannot be less than the number of message sentence provided.
   
    ### Response body(json)
   ```
   {
   "event_name": "message_formatted",
   "message": "The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases.",
   "status": "success",
   "username": "Rachael"
   }
   ```
## TECHNOLOGY USED
1. Node.js (Express.js for API handling)
2. Natural Language Processing (NLP) (compromise)

## CONTRIBUTION
1. Fork the repository.
2. Create a new branch (feature/new-feature).
3. Commit your changes.
4. Submit a pull request.

## LICENCES
This project is licensed under the MIT License. Contact: Email: adeyemitoluadedoyin@gmail.com
   
