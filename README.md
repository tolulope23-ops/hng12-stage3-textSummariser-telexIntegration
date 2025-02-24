**DESCRIPTION**
    
The Telex Text Summarizer is a Modifier Integration designed for the Telex platform. This integration utilizes Natural Language Processing (NLP) techniques to generate concise and meaningful summaries of long-form text inputs. It enhances text readability and improves information processing by extracting key insights from the given content.

**FEATURES**

1. Automatic Summarization: Converts lengthy text into a shorter, coherent version while preserving key information.

2. NLP-Powered Processing: Uses advanced NLP techniques to ensure high-quality summaries.

3. Customizable Summary Length: Allows users to define the desired summary length (e.g., short, medium, long).

4. Fast and Scalable: Optimized for low-latency and high-performance processing.


**HOW ITS WORKS**

1. The integration receives a text input from Telex.

2. It processes the text using an NLP-based summarization algorithm.

3. The summarized version of the text is returned as output.

4. Telex displays or utilizes the summary based on user-defined channel or workflow.


**API Endpoints**

The integration provides a simple API for processing text summaries.

Endpoint: /summarise

Method: POST

Request Body (JSON):

    {
        "message": "AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. It's redefining information access and dissemination, while simultaneously raising complex ethical dilemmas. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases. Human-machine interactions are becoming increasingly sophisticated, blurring the lines between virtual and physical experiences. The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. Security and privacy concerns are amplified, necessitating new frameworks for data governance."
        "settings": [
            {
                "label": "SentenceLength",
                "type": "number",
                "description": "Sets the maximum sentence length for incoming messages to summarise.",
                "default": 3,
                "required": true
            }
        ]
    }

message (string, required): The input text to be summarized.

length (string, optional): The desired summary length (short, medium, or long). Default is medium.

Type(string, required): The desired summary type(Extractive or Abstractive).

Response (JSON):

        {
        "event_name": "message_formatted",
        "message": "The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases.",
        "status": "success",
        "username": "Rachael"
        }


 **INSTALLATION & DEPLOYMENT**

    Clone the repository:
    
    git clone https://github.com/tolulope23-ops/hng12-stage3-textSummariser-telexIntegration.git
    
    INSTALL DEPENDENCIES
    
    cd hng12-stage3-textSummariser-telexIntegration
    npm install express 
    
    Run the service:
    
    npm start

**Running Tests**
To ensure the summarizer function works correctly, run unit tests using Jest.
Install Jest: npm install --save-dev jest
Run tests: npm jest

    **TEST CASES**
          test('summarizes a long message correctly', () => {
                const message = "This is an important sentence. Another crucial line. Generic text follows.";
                const result = summarizer(message, 2);
                
            expect(result).toContain("This is an important sentence.");
            expect(result).toContain("Another crucial line.");
            });

**INTEGRATION WITH TELEX**

Register your integration on the Telex platform.

Provide the API endpoint URL in the Telex configuration settings.

Map the integration to text input sources within Telex.

Deploy and test the summarization workflow.

Technologies Used

Node.js (Express.js for API handling)

Natural Language Processing (NLP) (compromise)

**CONTRIBUTING**

    Contributions are welcome! To contribute:
    
    Fork the repository.
    
    Create a new branch (feature/new-feature).
    
    Commit your changes.
    
    Submit a pull request.

**License**

    This project is licensed under the MIT License.
    
    Contact
    
    For inquiries or support, reach out via:
    
    Email: adeyemitoluadedoyin@gmail.com




