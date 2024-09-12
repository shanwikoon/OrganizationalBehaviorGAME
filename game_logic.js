
// Game state
let gameState = {
    funds: 100000,
    morale: 50,
    productivity: 50,
    innovation: 50,
    satisfaction: 50,
    score: 0
};

// Function to update game metrics and display
function makeDecision(fundChange = 0, moraleChange = 0, productivityChange = 0, innovationChange = 0, satisfactionChange = 0, scoreChange = 0) {
    gameState.funds += fundChange;
    gameState.morale += moraleChange;
    gameState.productivity += productivityChange;
    gameState.innovation += innovationChange;
    gameState.satisfaction += satisfactionChange;
    gameState.score += scoreChange;

    // Ensure morale, innovation, and satisfaction stay within bounds (0 - 100)
    gameState.morale = Math.max(0, Math.min(100, gameState.morale));
    gameState.innovation = Math.max(0, Math.min(100, gameState.innovation));
    gameState.satisfaction = Math.max(0, Math.min(100, gameState.satisfaction));

    updateDisplay();
}

// Function to display the game metrics on the page
function updateDisplay() {
    document.getElementById('funds').textContent = `£${gameState.funds}`;
    document.getElementById('morale').textContent = gameState.morale;
    document.getElementById('productivity').textContent = gameState.productivity;
    document.getElementById('innovation').textContent = gameState.innovation;
    document.getElementById('satisfaction').textContent = gameState.satisfaction;
    document.getElementById('score').textContent = gameState.score;
}

// Function to display feedback after each decision
function provideFeedback(fundChange, moraleChange, productivityChange, innovationChange, satisfactionChange) {
    let feedback = 'Previous Decision Outcome: ';
    if (fundChange !== 0) feedback += `Funds changed by £${Math.abs(fundChange)}. `;
    if (moraleChange !== 0) feedback += `Morale changed by ${moraleChange}. `;
    if (productivityChange !== 0) feedback += `Productivity changed by ${productivityChange}. `;
    if (innovationChange !== 0) feedback += `Innovation changed by ${innovationChange}. `;
    if (satisfactionChange !== 0) feedback += `Satisfaction changed by ${satisfactionChange}.`;

    document.getElementById('feedback').textContent = feedback;
}

// Function to handle player's decision
function makeChoice(choiceIndex) {
    let choice = scenarios[currentScenario].choices[choiceIndex];
    makeDecision(
        choice.fundChange,
        choice.moraleChange,
        choice.productivityChange,
        choice.innovationChange || 0,
        choice.satisfactionChange || 0,
        choice.scoreChange
    );
    provideFeedback(
        choice.fundChange,
        choice.moraleChange,
        choice.productivityChange,
        choice.innovationChange || 0,
        choice.satisfactionChange || 0
    );

    currentScenario++;
    if (currentScenario < scenarios.length) {
        displayScenario(currentScenario);
    } else {
        endGame();
    }
}

// End the game and show final results with detailed feedback and feedforward
function endGame() {
    document.getElementById('question').textContent = "Game Over!";
    document.getElementById('choices').innerHTML = '';

    let finalFeedback = `<strong>Final Score: ${gameState.score}</strong><br><br>`;
    finalFeedback += `<strong>Performance Breakdown:</strong><br>`;
    finalFeedback += `Final Funds: £${gameState.funds}<br>`;
    finalFeedback += `Final Employee Morale: ${gameState.morale} (A well-motivated team performs better in the long run.)<br>`;
    finalFeedback += `Final Productivity: ${gameState.productivity} (Great for short-term gains, but don't burn out your team.)<br>`;
    finalFeedback += `Final Innovation: ${gameState.innovation} (Innovation is key for long-term success.)<br>`;
    finalFeedback += `Final Stakeholder Satisfaction: ${gameState.satisfaction} (Satisfied stakeholders are essential for future growth.)<br><br>`;

    // Adjust score thresholds for better feedback control
    if (gameState.score >= 80) {
        finalFeedback += "You demonstrated excellent leadership, balancing all aspects of your organization exceptionally well.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Keep up the great work! Focus on maintaining this balance as the organization grows.";
    } else if (gameState.score >= 60) {
        finalFeedback += "You showed strong leadership, with room to improve in a few areas.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on improving areas like employee morale or innovation, and continue building on your strengths.";
    } else if (gameState.score >= 40) {
        finalFeedback += "You demonstrated decent leadership, but there's significant room for improvement in balancing the organization's needs.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on improving your long-term strategy, especially around morale and productivity.";
    } else {
        finalFeedback += "You struggled to manage many aspects of the business, leading to unbalanced outcomes.<br><br>";
        finalFeedback += "<strong>Feedforward:</strong> Focus on maintaining employee morale and innovation, and avoid prioritizing short-term productivity at the expense of long-term success.";
    }

    document.getElementById('feedback').innerHTML = finalFeedback;
}

// Start the game
window.onload = function() {
    displayScenario(currentScenario);
};
