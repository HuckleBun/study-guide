// Test questions with multiple choice options
const testQuestions = [
  // Chapter 14: Imagery
  {
    question: "What is mental imagery?",
    options: [
      "The cognitive process of creating or recreating experiences in the mind using all senses to visualize actions without physical execution",
      "The process of mentally rehearsing skills by imagining successful performance outcomes",
      "A visualization technique that uses only visual senses to picture desired results",
      "A mental practice method that combines physical movement with cognitive visualization",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "What is the difference between internal and external imagery?",
    options: [
      "Internal imagery is from a first-person perspective, while external imagery is from a third-person perspective",
      "Internal imagery focuses on kinesthetic sensations, while external imagery focuses on visual details",
      "Internal imagery is used during performance, while external imagery is used during practice",
      "Internal imagery emphasizes outcomes, while external imagery emphasizes technique",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "Why do athletes use imagery?",
    options: [
      "To improve performance, enhance motivation, build confidence, and practice skills mentally",
      "To enhance focus, reduce anxiety, and mentally prepare for competition",
      "To replace physical training when injured or unable to practice",
      "To analyze game footage and develop strategic plans",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "What are the keys to effective imagery?",
    options: [
      "Vividness and controllability",
      "Clarity and consistency",
      "Frequency and duration",
      "Realism and repetition",
    ],
    correct: 0,
    chapter: "imagery",
  },
  {
    question: "According to psychoneuromuscular theory, how does imagery work?",
    options: [
      "Imagery activates the same neural pathways as physical practice",
      "Imagery creates mental blueprints that guide physical performance",
      "Imagery strengthens the connection between mind and body through visualization",
      "Imagery improves performance by enhancing cognitive understanding of skills",
    ],
    correct: 0,
    chapter: "imagery",
  },

  // Chapter 16: Goal Setting
  {
    question: "What does SMARTS stand for in goal setting?",
    options: [
      "Specific, Measurable, Action-oriented, Realistic, Timely, Self-determined",
      "Specific, Measurable, Achievable, Relevant, Time-bound, Systematic",
      "Strategic, Meaningful, Attainable, Realistic, Trackable, Self-directed",
      "Structured, Measurable, Action-based, Realistic, Time-sensitive, Self-motivated",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question:
      "What is the difference between outcome, performance, and process goals?",
    options: [
      "Outcome goals focus on winning, performance goals focus on personal achievement, process goals focus on specific actions",
      "Outcome goals focus on results, performance goals focus on improvement, process goals focus on technique",
      "Outcome goals are competitive, performance goals are personal, process goals are skill-based",
      "Outcome goals are external, performance goals are internal, process goals are behavioral",
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
      "Focusing only on outcome goals without process or performance goals",
      "Setting too many goals simultaneously or failing to monitor progress regularly",
      "Lack of athlete involvement in goal creation or insufficient support from coaches",
    ],
    correct: 0,
    chapter: "goals",
  },
  {
    question: "What is a common problem in goal setting?",
    options: [
      "Setting too many goals at once",
      "Focusing exclusively on long-term outcome goals",
      "Not adjusting goals when circumstances change",
      "Setting goals that are too challenging to achieve",
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
      "Leader characteristics, Behavioral approaches, Contextual elements, Team member attributes",
      "Personal traits, Communication methods, Environmental conditions, Athlete characteristics",
      "Leadership skills, Management techniques, Situational awareness, Team dynamics",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question:
      "What is the difference between relationship-oriented and task-oriented leaders?",
    options: [
      "Relationship-oriented leaders focus on building relationships and team cohesion, while task-oriented leaders focus on achieving goals and results",
      "Relationship-oriented leaders emphasize communication and support, while task-oriented leaders emphasize structure and organization",
      "Relationship-oriented leaders prioritize athlete well-being, while task-oriented leaders prioritize performance outcomes",
      "Relationship-oriented leaders use democratic styles, while task-oriented leaders use autocratic styles",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What are the four components of Transformational Leadership?",
    options: [
      "Idealized influence, Inspirational motivation, Intellectual stimulation, Individualized consideration",
      "Charismatic influence, Vision communication, Creative thinking, Personal attention",
      "Role modeling, Vision sharing, Innovation encouragement, Individual support",
      "Respect building, Commitment inspiring, Critical thinking, Mentoring",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What is the trait approach to studying leadership?",
    options: [
      "It suggests leaders possess inherent personality characteristics",
      "It focuses on identifying specific personality traits that predict leadership effectiveness",
      "It emphasizes that leadership qualities are fixed and cannot be developed",
      "It suggests that leadership is determined by genetic factors alone",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "In sport contexts, how do leaders differ from managers?",
    options: [
      "Leaders inspire and create vision, while managers organize and maintain systems",
      "Leaders focus on motivation and direction, while managers focus on planning and administration",
      "Leaders influence through relationships, while managers influence through authority",
      "Leaders emphasize change and innovation, while managers emphasize stability and efficiency",
    ],
    correct: 0,
    chapter: "leadership",
  },
  {
    question: "What did John Wooden emphasize about success?",
    options: [
      "Success is about doing your best and maximizing potential, not just winning",
      "Success comes from focusing on the process and effort rather than outcomes",
      "Success is defined by personal improvement and character development",
      "Success requires balancing individual achievement with team goals",
    ],
    correct: 0,
    chapter: "leadership",
  },

  // Chapter 9: Team Dynamics
  {
    question: "What is social loafing?",
    options: [
      "The tendency for individuals to exert less effort when working in a group compared to working alone",
      "The phenomenon where team members reduce their individual contributions in group settings",
      "A decrease in individual motivation and effort when individual contributions cannot be identified",
      "The tendency for some team members to rely on others to complete shared tasks",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "When is social loafing most likely to occur?",
    options: [
      "When individual contributions are not identifiable or when tasks are perceived as unimportant",
      "When individual effort cannot be measured or when group size is large",
      "When team members feel their contribution won't be noticed or when accountability is low",
      "When tasks lack personal relevance or when team cohesion is weak",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "What are the typical stages that sport teams work through?",
    options: [
      "Forming, Storming, Norming, Performing",
      "Orientation, Conflict, Cohesion, Achievement",
      "Assembly, Adjustment, Integration, Excellence",
      "Initiation, Development, Unification, Mastery",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "According to Steiner's model, what affects team performance?",
    options: [
      "Actual Productivity = Potential Productivity - (Motivation Losses + Coordination Losses)",
      "Team performance equals potential performance minus losses from reduced effort and poor coordination",
      "Team effectiveness is determined by subtracting motivation and coordination deficits from maximum potential",
      "Actual team output is calculated by subtracting effort losses and synchronization problems from ideal performance",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question:
      "What is the difference between task cohesion and social cohesion?",
    options: [
      "Task cohesion focuses on working together to achieve goals, while social cohesion focuses on interpersonal relationships",
      "Task cohesion emphasizes shared objectives and performance, while social cohesion emphasizes friendship and social bonds",
      "Task cohesion relates to commitment to team goals, while social cohesion relates to liking and enjoying teammates",
      "Task cohesion is about functional unity, while social cohesion is about emotional connection",
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
      "Both are equally important for team performance",
      "The relationship depends on the type of sport",
    ],
    correct: 0,
    chapter: "teams",
  },
  {
    question: "What happens during the 'storming' stage of team development?",
    options: [
      "Conflict arises, disagreements occur, and team members test boundaries",
      "Team members challenge roles, compete for positions, and experience interpersonal friction",
      "Disagreements emerge about team goals, leadership, and individual responsibilities",
      "Power struggles develop, conflicts surface, and team members establish their positions",
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
             <div style="display: flex; gap: 12px; margin-top: 20px; align-items: center;" id="buttonContainer">
                 ${
                   hasPrevious
                     ? `
                     <button class="prev-btn" 
                             id="prevBtn"
                             type="button"
                             onclick="previousQuestion(); return false;">
                         Previous
                     </button>
                 `
                     : ""
                 }
                 <button class="submit-btn" 
                         id="nextBtn"
                         type="button"
                         onclick="nextQuestion(); return false;"
                         ${!hasAnswer ? "disabled" : ""}
                         style="flex: 1;">
                     ${
                       currentQuestionIndex === currentTest.length - 1
                         ? "Submit Test"
                         : "Next Question"
                     }
                 </button>
             </div>
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
            <h2 style="color: #ffffff; margin-bottom: 20px;">Test Results</h2>
            <div class="score-display">${score} / ${currentTest.length}</div>
            <div class="score-text">${percentage}% Correct</div>
            
            <div style="margin-top: 40px; text-align: left;">
                <h3 style="color: #ffffff; margin-bottom: 20px; font-size: 1.3em;">Question Review</h3>
                ${sortedResults
                  .map(
                    (result, idx) => `
                    <div class="question-container" style="margin-bottom: 25px; ${
                      result.isCorrect
                        ? "border-left-color: #10b981;"
                        : "border-left-color: #ef4444;"
                    }">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: ${
                              result.isCorrect ? "#10b981" : "#ef4444"
                            }; color: #ffffff; padding: 4px 12px; font-weight: 600; margin-right: 15px;">
                                ${
                                  result.isCorrect ? "✓ Correct" : "✗ Incorrect"
                                }
                            </span>
                            <span style="color: #9ca3af; font-size: 0.9em;">Question ${
                              result.originalIndex + 1
                            }</span>
                        </div>
                        <div class="question-text" style="margin-bottom: 20px;">${
                          result.question
                        }</div>
                        <div style="margin-bottom: 10px;">
                            <strong style="color: ${
                              result.isCorrect ? "#10b981" : "#ef4444"
                            };">
                                ${
                                  result.isCorrect
                                    ? "Your Answer (Correct):"
                                    : "Your Answer:"
                                }
                            </strong>
                        </div>
                        ${
                          result.userAnswer !== -1
                            ? `
                        <div class="answer-option ${
                          result.isCorrect ? "correct" : "incorrect"
                        }" style="margin-bottom: 15px;">
                            <label class="answer-label">${
                              result.options[result.userAnswer]
                            }</label>
                        </div>
                        `
                            : `
                        <div class="answer-option incorrect" style="margin-bottom: 15px;">
                            <label class="answer-label">(No answer selected)</label>
                        </div>
                        `
                        }
                        ${
                          !result.isCorrect
                            ? `
                            <div style="margin-top: 15px;">
                                <strong style="color: #10b981;">Correct Answer:</strong>
                            </div>
                            <div class="answer-option correct" style="margin-top: 10px;">
                                <label class="answer-label">${
                                  result.options[result.correctAnswer]
                                }</label>
                            </div>
                        `
                            : ""
                        }
                    </div>
                `
                  )
                  .join("")}
            </div>
            
            <div style="margin-top: 40px;">
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
