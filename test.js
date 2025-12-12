// Test questions with multiple choice options
const testQuestions = [
    // Chapter 14: Imagery
    {
        question: "What is mental imagery?",
        options: [
            "The cognitive process of creating or recreating experiences in the mind using all senses to visualize actions without physical execution",
            "A physical training technique that involves practicing movements repeatedly",
            "A form of meditation that focuses on breathing exercises",
            "A method of analyzing past performances through video review"
        ],
        correct: 0,
        chapter: "imagery"
    },
    {
        question: "What is the difference between internal and external imagery?",
        options: [
            "Internal imagery is from a first-person perspective, while external imagery is from a third-person perspective",
            "Internal imagery uses only visual senses, while external imagery uses all senses",
            "Internal imagery is for beginners, while external imagery is for advanced athletes",
            "Internal imagery focuses on outcomes, while external imagery focuses on processes"
        ],
        correct: 0,
        chapter: "imagery"
    },
    {
        question: "Why do athletes use imagery?",
        options: [
            "To improve performance, enhance motivation, build confidence, and practice skills mentally",
            "To replace physical practice entirely",
            "To analyze opponents' strategies",
            "To communicate with coaches during competition"
        ],
        correct: 0,
        chapter: "imagery"
    },
    {
        question: "What are the keys to effective imagery?",
        options: [
            "Vividness and controllability",
            "Speed and frequency",
            "Duration and intensity",
            "Location and timing"
        ],
        correct: 0,
        chapter: "imagery"
    },
    {
        question: "According to psychoneuromuscular theory, how does imagery work?",
        options: [
            "Imagery activates the same neural pathways as physical practice",
            "Imagery only works for visual learners",
            "Imagery requires physical movement to be effective",
            "Imagery is purely psychological with no physiological effects"
        ],
        correct: 0,
        chapter: "imagery"
    },
    
    // Chapter 16: Goal Setting
    {
        question: "What does SMARTS stand for in goal setting?",
        options: [
            "Specific, Measurable, Action-oriented, Realistic, Timely, Self-determined",
            "Simple, Meaningful, Achievable, Relevant, Time-bound, Structured",
            "Strategic, Motivating, Attainable, Rewarding, Trackable, Sustainable",
            "Systematic, Measurable, Ambitious, Realistic, Targeted, Specific"
        ],
        correct: 0,
        chapter: "goals"
    },
    {
        question: "What is the difference between outcome, performance, and process goals?",
        options: [
            "Outcome goals focus on winning, performance goals focus on personal achievement, process goals focus on specific actions",
            "Outcome goals are long-term, performance goals are medium-term, process goals are short-term",
            "Outcome goals are team-based, performance goals are individual, process goals are coach-directed",
            "There is no difference; they are interchangeable terms"
        ],
        correct: 0,
        chapter: "goals"
    },
    {
        question: "Which type of goal is most controllable and should be emphasized?",
        options: [
            "Process goals",
            "Outcome goals",
            "Performance goals",
            "Team goals"
        ],
        correct: 0,
        chapter: "goals"
    },
    {
        question: "Why does goal setting sometimes NOT work?",
        options: [
            "Setting unrealistic goals, lack of commitment, insufficient feedback, or poor goal specificity",
            "Goals are always effective when properly written",
            "Athletes don't understand the concept of goal setting",
            "Goal setting only works for individual sports, not team sports"
        ],
        correct: 0,
        chapter: "goals"
    },
    {
        question: "What is a common problem in goal setting?",
        options: [
            "Setting too many goals at once",
            "Setting goals that are too easy",
            "Writing goals down",
            "Sharing goals with teammates"
        ],
        correct: 0,
        chapter: "goals"
    },
    
    // Chapter 10: Leadership
    {
        question: "What are the four components of effective leadership in sport according to Weinberg and Gould?",
        options: [
            "Leader's qualities, Leadership styles, Situational factors, Follower's qualities",
            "Communication, Motivation, Strategy, Discipline",
            "Experience, Knowledge, Charisma, Authority",
            "Planning, Organizing, Leading, Controlling"
        ],
        correct: 0,
        chapter: "leadership"
    },
    {
        question: "What is the difference between relationship-oriented and task-oriented leaders?",
        options: [
            "Relationship-oriented leaders focus on building relationships and team cohesion, while task-oriented leaders focus on achieving goals and results",
            "Relationship-oriented leaders are more effective, while task-oriented leaders are less effective",
            "Relationship-oriented leaders work with individuals, while task-oriented leaders work with teams",
            "There is no significant difference between the two"
        ],
        correct: 0,
        chapter: "leadership"
    },
    {
        question: "What are the four components of Transformational Leadership?",
        options: [
            "Idealized influence, Inspirational motivation, Intellectual stimulation, Individualized consideration",
            "Vision, Communication, Empowerment, Recognition",
            "Planning, Execution, Evaluation, Improvement",
            "Authority, Discipline, Structure, Control"
        ],
        correct: 0,
        chapter: "leadership"
    },
    {
        question: "What is the trait approach to studying leadership?",
        options: [
            "It suggests leaders possess inherent personality characteristics",
            "It focuses on what leaders do rather than who they are",
            "It emphasizes the interaction between leader, followers, and situation",
            "It states that anyone can become a leader with proper training"
        ],
        correct: 0,
        chapter: "leadership"
    },
    {
        question: "In sport contexts, how do leaders differ from managers?",
        options: [
            "Leaders inspire and create vision, while managers organize and maintain systems",
            "Leaders are more important than managers",
            "Leaders work with athletes, while managers work with coaches",
            "There is no difference in sport contexts"
        ],
        correct: 0,
        chapter: "leadership"
    },
    {
        question: "What did John Wooden emphasize about success?",
        options: [
            "Success is about doing your best and maximizing potential, not just winning",
            "Success is measured only by wins and losses",
            "Success requires natural talent above all else",
            "Success is achieved through strict discipline and punishment"
        ],
        correct: 0,
        chapter: "leadership"
    },
    
    // Chapter 9: Team Dynamics
    {
        question: "What is social loafing?",
        options: [
            "The tendency for individuals to exert less effort when working in a group compared to working alone",
            "The tendency for teams to perform better than individuals",
            "A team-building exercise that involves physical activity",
            "The process of assigning roles within a team"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "When is social loafing most likely to occur?",
        options: [
            "When individual contributions are not identifiable or when tasks are perceived as unimportant",
            "When teams are highly cohesive",
            "When individual accountability is high",
            "When team size is small"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "What are the typical stages that sport teams work through?",
        options: [
            "Forming, Storming, Norming, Performing",
            "Planning, Training, Competing, Evaluating",
            "Introduction, Development, Mastery, Excellence",
            "Selection, Integration, Optimization, Domination"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "According to Steiner's model, what affects team performance?",
        options: [
            "Actual Productivity = Potential Productivity - (Motivation Losses + Coordination Losses)",
            "Team performance is always equal to the sum of individual performances",
            "Team performance depends only on the best player",
            "Team performance is unrelated to individual contributions"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "What is the difference between task cohesion and social cohesion?",
        options: [
            "Task cohesion focuses on working together to achieve goals, while social cohesion focuses on interpersonal relationships",
            "Task cohesion is more important than social cohesion",
            "Task cohesion is for competitive teams, while social cohesion is for recreational teams",
            "There is no meaningful difference"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "Which type of cohesion is more strongly related to team performance in sport?",
        options: [
            "Task cohesion",
            "Social cohesion",
            "Both equally",
            "Neither type of cohesion affects performance"
        ],
        correct: 0,
        chapter: "teams"
    },
    {
        question: "What happens during the 'storming' stage of team development?",
        options: [
            "Conflict arises, disagreements occur, and team members test boundaries",
            "Team members come together and roles are established",
            "Team functions effectively and high performance is achieved",
            "Cohesion develops and team unity emerges"
        ],
        correct: 0,
        chapter: "teams"
    }
];

let currentTest = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let testSubmitted = false;

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize test
function initTest() {
    // Shuffle questions
    currentTest = shuffleArray(testQuestions);
    
    // Shuffle options for each question
    currentTest.forEach(question => {
        const options = question.options.map((opt, idx) => ({ text: opt, originalIdx: idx }));
        const shuffled = shuffleArray(options);
        const correctIndex = shuffled.findIndex(opt => opt.originalIdx === question.correct);
        question.shuffledOptions = shuffled.map(opt => opt.text);
        question.shuffledCorrect = correctIndex;
    });
    
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    testSubmitted = false;
    
    updateTestDisplay();
}

// Update test display
function updateTestDisplay() {
    const testContent = document.getElementById('testContent');
    const currentQuestion = currentTest[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = currentTest.length;
    document.getElementById('currentScore').textContent = score;
    document.getElementById('maxScore').textContent = currentTest.length;
    
    testContent.innerHTML = `
        <div class="question-container">
            <div class="question-number">Question ${currentQuestionIndex + 1} of ${currentTest.length}</div>
            <div class="question-text">${currentQuestion.question}</div>
            <div class="answers">
                ${currentQuestion.shuffledOptions.map((option, idx) => `
                    <div class="answer-option ${userAnswers[currentQuestionIndex] === idx ? 'selected' : ''}" 
                         onclick="selectAnswer(${idx})">
                        <input type="radio" 
                               name="answer" 
                               value="${idx}" 
                               ${userAnswers[currentQuestionIndex] === idx ? 'checked' : ''}
                               onchange="selectAnswer(${idx})">
                        <label class="answer-label">${option}</label>
                    </div>
                `).join('')}
            </div>
            <button class="submit-btn" 
                    onclick="nextQuestion()" 
                    ${userAnswers[currentQuestionIndex] === undefined ? 'disabled' : ''}>
                ${currentQuestionIndex === currentTest.length - 1 ? 'Submit Test' : 'Next Question'}
            </button>
        </div>
    `;
}

// Select answer
function selectAnswer(index) {
    if (testSubmitted) return;
    
    userAnswers[currentQuestionIndex] = index;
    updateTestDisplay();
}

// Next question or submit
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) return;
    
    if (currentQuestionIndex < currentTest.length - 1) {
        currentQuestionIndex++;
        updateTestDisplay();
    } else {
        submitTest();
    }
}

// Submit test
function submitTest() {
    testSubmitted = true;
    score = 0;
    
    currentTest.forEach((question, idx) => {
        if (userAnswers[idx] === question.shuffledCorrect) {
            score++;
        }
    });
    
    const percentage = Math.round((score / currentTest.length) * 100);
    const resultsContainer = document.getElementById('resultsContainer');
    
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `
        <div class="results-container">
            <h2 style="color: #ffffff; margin-bottom: 20px;">Test Results</h2>
            <div class="score-display">${score} / ${currentTest.length}</div>
            <div class="score-text">${percentage}% Correct</div>
            <div style="margin-top: 30px;">
                <button class="retake-btn" onclick="retakeTest()">Retake Test</button>
            </div>
        </div>
    `;
    
    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Retake test
function retakeTest() {
    initTest();
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('testContent').scrollIntoView({ behavior: 'smooth' });
}

// Initialize on load
window.onload = function() {
    initTest();
};

