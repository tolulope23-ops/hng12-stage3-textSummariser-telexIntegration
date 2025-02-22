require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express(); 
const summariser = require('./utils/messageSummarizer');

app.use(express.json());
app.use(cors());

app.post("/summarise", (req, res) => {
    try {
        let {settings, message } = req.body;
        let sentenceLength;

        // Extract settings
        settings.forEach(setting => {
            if (setting.label === "SentenceLength" && typeof setting.default === "number") {
                sentenceLength = setting.default;
            }
        });

        const summarisedMessage = summariser(message, sentenceLength)
        res.json({
            event_name: "message_formatted",
            message: summarisedMessage,
            status: "success",
            username: "Rachael"
        });
    } catch (error) {
        console.error("Error summarising message:", error);
        res.status(500).json({ detail: "Internal Server Error" });
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log("Server is listening...");
})