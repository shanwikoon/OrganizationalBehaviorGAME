
// Array of scenarios
const scenarios = [
    {
        question: "You have an important project with a tight deadline. Do you delegate key tasks to your team or handle them yourself to ensure quality?",
        choices: [
            {
                text: "Delegate the tasks to your team and provide guidance.",
                fundChange: -5000,  // Cost of delegating and providing guidance
                moraleChange: 5,
                employeeEngagementChange: 5,
                productivityChange: -5,
                leadershipInfluenceChange: 10,
                innovationChange: 3,
                satisfactionChange: 2,
                scoreChange: 8
            },
            {
                text: "Handle the tasks yourself to ensure they are done correctly.",
                fundChange: 0,
                moraleChange: -5,
                employeeEngagementChange: -10,
                productivityChange: 10,
                leadershipInfluenceChange: -5,
                innovationChange: 0,
                satisfactionChange: -2,
                scoreChange: 5
            }
        ]
    },
    {
        question: "Two key team members are in conflict over project direction. How do you resolve it?",
        choices: [
            {
                text: "Mediate and find a compromise that both agree to.",
                fundChange: -2000,  // Cost of mediation process
                moraleChange: 5,
                employeeEngagementChange: 5,
                productivityChange: -5,
                leadershipInfluenceChange: 10,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 9
            },
            {
                text: "Make a firm decision yourself, setting the direction.",
                fundChange: 0,
                moraleChange: -5,
                employeeEngagementChange: -5,
                productivityChange: 10,
                leadershipInfluenceChange: 5,
                innovationChange: -3,
                satisfactionChange: -3,
                scoreChange: 6
            }
        ]
    },
    {
        question: "You are considering introducing new technology to improve productivity. How do you approach this?",
        choices: [
            {
                text: "Train the team thoroughly and implement the technology gradually.",
                fundChange: -5000,  // Cost for gradual training and implementation
                moraleChange: 10,
                employeeEngagementChange: 5,
                productivityChange: 5,
                leadershipInfluenceChange: -5,
                innovationChange: 5,
                satisfactionChange: 0,
                scoreChange: 9
            },
            {
                text: "Implement the technology immediately to maximize productivity gains.",
                fundChange: -20000,  // High upfront cost for immediate implementation
                moraleChange: -10,
                employeeEngagementChange: -10,
                productivityChange: 10,
                leadershipInfluenceChange: 5,
                innovationChange: 10,
                satisfactionChange: 0,
                scoreChange: 7
            }
        ]
    },
    {
        question: "Your team has been working long hours on a critical project. Do you encourage them to take some time off once the project is completed?",
        choices: [
            {
                text: "Encourage team members to take time off.",
                fundChange: 0,
                moraleChange: 10,
                leadershipInfluenceChange: 5,
                productivityChange: -5,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 8
            },
            {
                text: "Encourage them to continue working hard to capitalize on momentum.",
                fundChange: 0,
                moraleChange: -10,
                leadershipInfluenceChange: -5,
                productivityChange: 10,
                innovationChange: 0,
                satisfactionChange: 0,
                scoreChange: 6
            }
        ]
    },
    {
        question: "One of your employees is underperforming. Do you address this publicly or privately?",
        choices: [
            {
                text: "Address the issue privately in a one-on-one meeting.",
                fundChange: 0,
                moraleChange: 10,
                leadershipInfluenceChange: 10,
                productivityChange: -5,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 8
            },
            {
                text: "Call the employee out publicly in a meeting to set an example.",
                fundChange: 0,
                moraleChange: -10,
                employeeEngagementChange: -10,
                productivityChange: 5,
                leadershipInfluenceChange: -5,
                innovationChange: 0,
                satisfactionChange: -5,
                scoreChange: 4
            }
        ]
    },
    {
        question: "Your team has completed a major milestone successfully. Do you reward them with bonuses or with recognition and praise?",
        choices: [
            {
                text: "Give monetary bonuses.",
                fundChange: -10000,  // Cost of monetary bonuses
                moraleChange: 10,
                employeeEngagementChange: 5,
                productivityChange: -10,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 8
            },
            {
                text: "Provide public recognition and praise.",
                fundChange: 0,
                moraleChange: 5,
                employeeEngagementChange: 5,
                leadershipInfluenceChange: 5,
                productivityChange: 0,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 10
            }
        ]
    },
    {
        question: "Your employees are concerned about work overload, but you know the project deadline is critical. Do you stay late to work alongside them?",
        choices: [
            {
                text: "Stay late and work with the team.",
                fundChange: 0,
                moraleChange: -5,
                employeeEngagementChange: 5,
                leadershipInfluenceChange: 10,
                productivityChange: 0,
                innovationChange: 0,
                satisfactionChange: 0,
                scoreChange: 7
            },
            {
                text: "Encourage them to work hard and promise a break later.",
                fundChange: 0,
                moraleChange: -5,
                employeeEngagementChange: 0,
                leadershipInfluenceChange: 5,
                productivityChange: 5,
                innovationChange: 0,
                satisfactionChange: 0,
                scoreChange: 6
            }
        ]
    },
    {
        question: "You're planning for a future leadership transition. Do you mentor a promising employee for the role or hire externally for fresh ideas?",
        choices: [
            {
                text: "Mentor a current employee.",
                fundChange: 0,
                moraleChange: 10,
                employeeEngagementChange: 10,
                leadershipInfluenceChange: 5,
                productivityChange: -5,
                innovationChange: 0,
                satisfactionChange: 5,
                scoreChange: 9
            },
            {
                text: "Hire an external candidate with fresh ideas.",
                fundChange: -15000,  // Cost of hiring externally
                moraleChange: -5,
                employeeEngagementChange: -5,
                leadershipInfluenceChange: 5,
                productivityChange: 10,
                innovationChange: 0,
                satisfactionChange: 0,
                scoreChange: 7
            }
        ]
    }
];

// Start game
let currentScenario = 0;

function displayScenario(index) {
    let scenario = scenarios[index];
    document.getElementById('question').textContent = scenario.question;
    
    let choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    scenario.choices.forEach((choice, i) => {
        let button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = function() { makeChoice(i); };
        choicesDiv.appendChild(button);
    });
}

// Display the first scenario when the page loads
window.onload = function() {
    displayScenario(currentScenario);
};
