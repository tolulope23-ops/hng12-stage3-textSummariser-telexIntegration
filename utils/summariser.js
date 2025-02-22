const NLP = require('compromise');

const pseudo_message = `I just wanted to take a moment to remind you how much you mean to me. Life has its ups and downs, but having you by my side has made every journey worthwhile. 
Your friendship is one of the greatest gifts I could ever ask for, and I am so grateful to have you in my life.
From the countless memories we've made together to the deep conversations that only we understand, every moment with you is special.
Your kindness, support, and unwavering presence have been a constant source of strength for me.
No matter where life takes us, I want you to know that I will always be here for you, just as you have always been for me.     
Thank you for being the amazing person that you are. Thank you for the laughter, the encouragement, and the love you so freely give.  
I cherish our friendship more than words can express, and I look forward to creating even more unforgettable memories with you.`

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