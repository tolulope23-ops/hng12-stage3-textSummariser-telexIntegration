const NLP = require('compromise');

// Function identifies key sentences, and select the most important sentence
 function summarizer(message, sentenceLimit) {
    if (!message) return "No message provided";

    // Process the message using NLP
    let processedMessage = NLP(message);
    
    let sentences = processedMessage.sentences().out('array');
    if (sentences.length <= sentenceLimit) return message;

    // Tokenize words and calculate word frequency
    let wordFrequency = {};
    let wordsArray = message.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);

    wordsArray.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Score sentences based on word importance
    let rankedSentences = sentences.map(sentence => {
        let words = NLP(sentence).terms().out('array');
        let sentenceScore = words.reduce((acc, word) => acc + (wordFrequency[word] || 0), 0);
        return { sentence, score: sentenceScore };
    });

    // Sort sentences by score (importance)
    rankedSentences.sort((a, b) => b.score - a.score);

    // Select the top `sentenceLimit` sentences
    let selectedSentences = rankedSentences.slice(0, sentenceLimit).map(s => s.sentence);

    return selectedSentences.join(' ');
}

module.exports = summarizer;