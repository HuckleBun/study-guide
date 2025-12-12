// Test questions with multiple choice options
const testQuestions = [
  // Chapter 14: Imagery
  {
    question: "What is mental imagery?",
    options: [
      "The cognitive process of creating or recreating experiences in the mind using all senses to visualize actions without physical execution",
      "A technique that requires physical movement and actual muscle activation to be effective and cannot work without simultaneous bodily motion",
      "A visualization method that only works for individuals who identify as visual learners and cannot be used effectively by other learning styles",
      "A form of hypnosis and psychological manipulation used to control athlete behavior and decision-making processes without their awareness",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "What is the difference between internal and external imagery?",
    options: [
      "Internal imagery is from a first-person perspective, while external imagery is from a third-person perspective",
      "Internal imagery is consistently more effective than external imagery for all athletes regardless of sport type or individual preferences",
      "Internal imagery requires simultaneous physical movement and muscle activation, while external imagery does not involve any physical components",
      "Internal imagery is specifically designed for individual sports, while external imagery is exclusively reserved for team sports and group activities",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "Why do athletes use imagery?",
    options: [
      "To improve performance, enhance motivation, build confidence, and practice skills mentally",
      "To completely replace all physical training and practice sessions, eliminating the need for actual physical preparation",
      "To communicate directly with coaches and receive real-time instructions during competition through mental visualization techniques",
      "To analyze opponents' weaknesses and develop counter-strategies by accessing information not available through normal observation",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "What are the keys to effective imagery?",
    options: [
      "Vividness and controllability",
      "Speed and intensity",
      "Location and timing",
      "Duration and frequency alone",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "According to psychoneuromuscular theory, how does imagery work?",
    options: [
      "Imagery activates the same neural pathways as physical practice",
      "Imagery only works if combined with physical movement",
      "Imagery has no physiological effects and is purely psychological",
      "Imagery requires external visualization aids like videos or pictures",
    ],
    correct: 0,
    chapter: "imagery",
  },

  // Chapter 16: Goal Setting
  {
    question: "What does SMARTS stand for in goal setting?",
    options: [
      "Specific, Measurable, Action-oriented, Realistic, Timely, Self-determined",
      "Simple, Meaningful, Achievable, Relevant, Time-bound, Structured",
      "Strategic, Motivating, Attainable, Rewarding, Trackable, Sustainable",
      "Systematic, Measurable, Ambitious, Realistic, Targeted, Specific",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question:
      "What is the difference between outcome, performance, and process goals?",
    options: [
      "Outcome goals focus on winning, performance goals focus on personal achievement, process goals focus on specific actions",
      "Outcome goals are exclusively short-term objectives, performance goals are medium-term objectives, process goals are long-term objectives",
      "Outcome goals are specifically designed for teams, performance goals are only for individuals, process goals are exclusively for coaches",
      "There is no meaningful difference between these three types of goals, and they can be used interchangeably",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question:
      "Which type of goal is most controllable and should be emphasized?",
    options: [
      "Process goals",
      "Performance goals",
      "Short-term goals",
      "Individual goals",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question: "Why does goal setting sometimes NOT work?",
    options: [
      "Setting unrealistic goals, lack of commitment, insufficient feedback, or poor goal specificity",
      "Goal setting always works when properly implemented, with failures only occurring due to improper application",
      "Athletes naturally resist any form of goal setting due to inherent psychological barriers and opposition",
      "Goal setting only fails when athletes lack natural talent and physical ability, regardless of other factors",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question: "What is a common problem in goal setting?",
    options: [
      "Setting too many goals at once",
      "Writing goals down on paper",
      "Sharing goals with teammates and coaches",
      "Setting goals that are too easy to achieve",
    ],
    correct: 0,
    chapter: "goals",
  },

  // Chapter 10: Leadership
  {
    question:
      "What are the four components of effective leadership in sport according to Weinberg and Gould?",
    options: [
      "Leader's qualities, Leadership styles, Situational factors, Follower's qualities",
      "Communication abilities, Motivation techniques, Strategy development, Discipline systems",
      "Experience levels, Knowledge base, Charisma traits, Authority structures",
      "Planning processes, Organizing methods, Leading approaches, Controlling mechanisms",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question:
      "What is the difference between relationship-oriented and task-oriented leaders?",
    options: [
      "Relationship-oriented leaders focus on building relationships and team cohesion, while task-oriented leaders focus on achieving goals and results",
      "Relationship-oriented leaders are consistently more effective than task-oriented leaders across all sport contexts and situations",
      "Relationship-oriented leaders work primarily with individual athletes, while task-oriented leaders work exclusively with teams and groups",
      "There is no meaningful difference between relationship-oriented and task-oriented leaders in their approaches or effectiveness",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What are the four components of Transformational Leadership?",
    options: [
      "Idealized influence, Inspirational motivation, Intellectual stimulation, Individualized consideration",
      "Vision development, Communication skills, Empowerment strategies, Recognition programs",
      "Planning processes, Execution methods, Evaluation techniques, Improvement initiatives",
      "Authority structures, Discipline systems, Organizational structure, Control mechanisms",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What is the trait approach to studying leadership?",
    options: [
      "It suggests leaders possess inherent personality characteristics",
      "It focuses on what leaders do rather than who they are",
      "It emphasizes the interaction between leader, followers, and situation",
      "It states that anyone can become a leader with proper training",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "In sport contexts, how do leaders differ from managers?",
    options: [
      "Leaders inspire and create vision, while managers organize and maintain systems",
      "Leaders are more important than managers in sport",
      "Leaders work with athletes, while managers work with coaches",
      "There is no difference between leaders and managers in sport contexts",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What did John Wooden emphasize about success?",
    options: [
      "Success is about doing your best and maximizing potential, not just winning",
      "Success is measured only by wins and losses",
      "Success requires natural talent above all else",
      "Success is achieved through strict discipline and punishment",
    ],
    correct: 0,
    chapter: "leadership",
  },

  // Chapter 9: Team Dynamics
  {
    question: "What is social loafing?",
    options: [
      "The tendency for individuals to exert less effort when working in a group compared to working alone",
      "The tendency for teams to consistently perform better than individuals working alone in all situations",
      "A team-building exercise that involves physical activity and group challenges designed to improve collaboration",
      "The process of assigning specific roles and responsibilities within a team to ensure clear function distribution",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "When is social loafing most likely to occur?",
    options: [
      "When individual contributions are not identifiable or when tasks are perceived as unimportant",
      "When teams are highly cohesive and well-organized, as strong team bonds reduce individual motivation",
      "When individual accountability is high and contributions are measurable, because clear measurement creates pressure",
      "When team size is very small (2-3 members), as smaller groups experience more social loafing than larger groups",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "What are the typical stages that sport teams work through?",
    options: [
      "Forming, Storming, Norming, Performing",
      "Planning, Training, Competing, Evaluating",
      "Selection, Integration, Optimization, Domination",
      "Introduction, Development, Mastery, Excellence",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "According to Steiner's model, what affects team performance?",
    options: [
      "Actual Productivity = Potential Productivity - (Motivation Losses + Coordination Losses)",
      "Potential Productivity = Actual Productivity - (Motivation Losses + Coordination Losses)",
      "Actual Productivity = Potential Productivity + (Motivation Losses + Coordination Losses)",
      "Potential Productivity = Actual Productivity + (Motivation Losses + Coordination Losses)",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question:
      "What is the difference between task cohesion and social cohesion?",
    options: [
      "Task cohesion focuses on working together to achieve goals, while social cohesion focuses on interpersonal relationships",
      "Task cohesion is consistently more important than social cohesion for all teams regardless of sport type or competitive level",
      "Task cohesion is specifically designed for competitive teams, while social cohesion is exclusively for recreational teams and activities",
      "There is no meaningful difference between task and social cohesion, and they can be used interchangeably to describe team dynamics",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question:
      "Which type of cohesion is more strongly related to team performance in sport?",
    options: [
      "Task cohesion",
      "Social cohesion",
      "Neither type of cohesion affects performance",
      "The relationship varies randomly and cannot be predicted",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "What happens during the 'storming' stage of team development?",
    options: [
      "Conflict arises, disagreements occur, and team members test boundaries",
      "Team members come together harmoniously and roles are immediately established",
      "Team functions effectively and high performance is achieved",
      "Cohesion develops smoothly and team unity emerges without conflict",
    ],
    correct: 0,
    chapter: "teams",
  },
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
  currentTest.forEach((question) => {
    const options = question.options.map((opt, idx) => ({
      text: opt,
      originalIdx: idx,
    }));
    const shuffled = shuffleArray(options);
    const correctIndex = shuffled.findIndex(
      (opt) => opt.originalIdx === question.correct
    );
    question.shuffledOptions = shuffled.map((opt) => opt.text);
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
  const testContent = document.getElementById("testContent");
  const currentQuestion = currentTest[currentQuestionIndex];

  document.getElementById("currentQuestion").textContent =
    currentQuestionIndex + 1;
  document.getElementById("totalQuestions").textContent = currentTest.length;
  document.getElementById("currentScore").textContent = score;
  document.getElementById("maxScore").textContent = currentTest.length;

  const hasPrevious = currentQuestionIndex > 0;
  const hasAnswer = userAnswers[currentQuestionIndex] !== undefined;

  testContent.innerHTML = `
         <div class="question-container">
             <div class="question-number">Question ${
               currentQuestionIndex + 1
             } of ${currentTest.length}</div>
             <div class="question-text">${currentQuestion.question}</div>
             <div class="answers">
                 ${currentQuestion.shuffledOptions
                   .map(
                     (option, idx) => `
                     <div class="answer-option ${
                       userAnswers[currentQuestionIndex] === idx
                         ? "selected"
                         : ""
                     }" 
                          onclick="selectAnswer(${idx})">
                         <input type="radio" 
                                name="answer" 
                                value="${idx}" 
                                ${
                                  userAnswers[currentQuestionIndex] === idx
                                    ? "checked"
                                    : ""
                                }
                                onchange="selectAnswer(${idx})">
                         <label class="answer-label">${option}</label>
                     </div>
                 `
                   )
                   .join("")}
             </div>
             ${
               hasPrevious
                 ? `
                 <button class="nav-arrow-btn prev-arrow-btn" 
                         id="prevBtn"
                         type="button"
                         onclick="previousQuestion(); return false;"
                         title="Previous Question">
                     <span class="arrow-icon">←</span>
                     <span>Back</span>
                 </button>
             `
                 : ""
             }
             <button class="nav-arrow-btn next-arrow-btn" 
                     id="nextBtn"
                     type="button"
                     onclick="nextQuestion(); return false;"
                     ${!hasAnswer ? "disabled" : ""}
                     title="${
                       currentQuestionIndex === currentTest.length - 1
                         ? "Submit Test"
                         : "Next Question"
                     }">
                 <span>${
                   currentQuestionIndex === currentTest.length - 1
                     ? "Submit"
                     : "Next"
                 }</span>
                 <span class="arrow-icon">${
                   currentQuestionIndex === currentTest.length - 1 ? "✓" : "→"
                 }</span>
             </button>
         </div>
     `;

  // Set up event listeners after rendering
  setTimeout(function () {
    const prevBtn = document.getElementById("prevBtn");
    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        previousQuestion();
      });
    }

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (userAnswers[currentQuestionIndex] !== undefined) {
          nextQuestion();
        }
      });
    }
  }, 0);
}

// Previous question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateTestDisplay();
  }
}

// Make functions globally accessible
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.selectAnswer = selectAnswer;
window.retakeTest = retakeTest;

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
  const questionResults = [];

  currentTest.forEach((question, idx) => {
    const userAnswer = userAnswers[idx];
    const isCorrect =
      userAnswer !== undefined && userAnswer === question.shuffledCorrect;
    if (isCorrect) {
      score++;
    }
    questionResults.push({
      question: question.question,
      userAnswer: userAnswer !== undefined ? userAnswer : -1, // -1 means not answered
      correctAnswer: question.shuffledCorrect,
      options: question.shuffledOptions,
      isCorrect: isCorrect,
      originalIndex: idx, // Store original index for proper numbering
    });
  });

  const percentage = Math.round((score / currentTest.length) * 100);
  const resultsContainer = document.getElementById("resultsContainer");
  const testContent = document.getElementById("testContent");

  if (!resultsContainer) {
    console.error("Results container not found");
    alert("Error: Results container not found. Please refresh the page.");
    return;
  }

  // Sort: incorrect first, then correct
  const sortedResults = [...questionResults].sort((a, b) => {
    if (a.isCorrect === b.isCorrect) return 0;
    return a.isCorrect ? 1 : -1;
  });

  // Hide test content and show results
  if (testContent) {
    testContent.style.display = "none";
  }

  resultsContainer.style.display = "block";
  resultsContainer.style.visibility = "visible";
  resultsContainer.innerHTML = `
        <div class="results-container">
            <h2 style="color: #ffffff; margin-bottom: 20px; font-weight: 600;">Test Results</h2>
            <div class="score-display">${score} / ${currentTest.length}</div>
            <div class="score-text">${percentage}% Correct</div>
            
            <div style="margin-top: 50px; text-align: left;">
                <h3 class="review-section-title">Question Review</h3>
                ${sortedResults
                  .map(
                    (result) => `
                    <div class="review-question-container ${
                      result.isCorrect ? "correct" : "incorrect"
                    }">
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <span class="review-badge ${
                              result.isCorrect ? "correct" : "incorrect"
                            }">
                                ${
                                  result.isCorrect ? "✓ Correct" : "✗ Incorrect"
                                }
                            </span>
                            <span class="review-question-number">Question ${
                              result.originalIndex + 1
                            }</span>
                        </div>
                        <div class="question-text" style="margin-bottom: 25px; color: #ffffff;">${
                          result.question
                        }</div>
                        <div style="margin-bottom: 15px;">
                            <span class="review-answer-label ${
                              result.isCorrect ? "correct" : "incorrect"
                            }">
                                ${
                                  result.isCorrect
                                    ? "Your Answer (Correct):"
                                    : "Your Answer:"
                                }
                            </span>
                        </div>
                        ${
                          result.userAnswer !== -1
                            ? `
                        <div class="answer-option ${
                          result.isCorrect ? "correct" : "incorrect"
                        }" style="margin-bottom: 20px; pointer-events: none;">
                            <label class="answer-label">${
                              result.options[result.userAnswer]
                            }</label>
                        </div>
                        `
                            : `
                        <div class="answer-option incorrect" style="margin-bottom: 20px; pointer-events: none;">
                            <label class="answer-label">(No answer selected)</label>
                        </div>
                        `
                        }
                        ${
                          !result.isCorrect
                            ? `
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2a2f3e;">
                                <span class="review-answer-label correct">Correct Answer:</span>
                                <div class="answer-option correct" style="margin-top: 12px; pointer-events: none;">
                                    <label class="answer-label">${
                                      result.options[result.correctAnswer]
                                    }</label>
                                </div>
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div style="margin-top: 50px; padding-top: 30px; border-top: 1px solid #2a2f3e;">
                <button class="retake-btn" onclick="retakeTest()">Retake Test</button>
            </div>
        </div>
    `;

  // Scroll to top of page to see results
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Also try scrolling to results container
  setTimeout(function () {
    resultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

// Retake test
function retakeTest() {
  const resultsContainer = document.getElementById("resultsContainer");
  const testContent = document.getElementById("testContent");

  if (resultsContainer) {
    resultsContainer.style.display = "none";
  }

  if (testContent) {
    testContent.style.display = "block";
  }

  initTest();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Setup event listeners for buttons (backup for GitHub Pages)
function setupEventListeners() {
  // This will be called after each question is rendered
  // We'll set up listeners in updateTestDisplay instead
}

// Initialize on load
window.onload = function () {
  initTest();

  // Also set up when DOM is ready as backup
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      // Event listeners will be set up dynamically in updateTestDisplay
    });
  }
};
