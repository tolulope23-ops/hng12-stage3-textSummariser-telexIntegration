const summariser = require('./utils/summariser');
test('summarizes a long message correctly', () => {
    const message = "AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. It's redefining information access and dissemination, while simultaneously raising complex ethical dilemmas. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases. Human-machine interactions are becoming increasingly sophisticated, blurring the lines between virtual and physical experiences. The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. Security and privacy concerns are amplified, necessitating new frameworks for data governance.";
    const result = summariser(message, 3);

    expect(result).toContain("The very nature of creativity and innovation is being challenged, as AI generates novel outputs and insights. AI's pervasive influence is reshaping societal structures, altering the landscape of labor and productivity. Decision-making processes across industries are being augmented, leading to both efficiency gains and potential biases.");
});
