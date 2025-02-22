require('dotenv').config();
const URL = process.env.URL
const integrationConfig = {
    "data": {
        "date": {
        "created_at": "2025-02-19",
        "updated_at": "2025-02-22"
        },
        "descriptions": {
        "app_name": "Briefify",
        "app_description": "Briefify is a text summariser, that automatically condense lengthy-text into short concise version retaining the essential meaning and key information",
        "app_logo": "https://images.app.goo.gl/LZ74mWw7dPDTfa4u8",
        "app_url": URL,
        "background_color": "#ffffff"
        },
        "is_active": true,
        "integration_category": "Communication & Collaboration",
        "integration_type": "modifier",
        "key_features": [
        "Maintain key information"
        ],
        "author": "Adeyemi Rachael",
        "settings": [
        {
            "label": "SentenceLength",
            "type": "number",
            "description": "Sets the maximum sentence length for incoming messages to summarise.",
            "default": 3,
            "required": true
          }
        ],
        "target_url": `${URL}/summarise`
    }
}

module.exports = {integrationConfig};