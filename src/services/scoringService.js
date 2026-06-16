const clampScore = (score) => Math.max(0, Math.min(100, Math.round(score)));

const getValue = (answers, questionId) => answers[questionId]?.value ?? 0;

export function calculateScores(answers) {
  const investmentExperience = getValue(answers, "investmentExperience");
  const financialGoal = getValue(answers, "financialGoal");
  const knowledgeLevel = getValue(answers, "knowledgeLevel");
  const riskTolerance = getValue(answers, "riskTolerance");
  const emergencyFund = getValue(answers, "emergencyFund");
  const decisionBehavior = getValue(answers, "decisionBehavior");

  return {
    knowledge: clampScore(investmentExperience * 0.45 + knowledgeLevel * 0.55),
    risk: clampScore(riskTolerance * 0.7 + decisionBehavior * 0.3),
    financialReadiness: clampScore(emergencyFund * 0.75 + financialGoal * 0.25),
    goalClarity: clampScore(financialGoal * 0.55 + decisionBehavior * 0.45),
  };
}

export function getAverageScore(scores) {
  const values = Object.values(scores);
  return clampScore(values.reduce((sum, score) => sum + score, 0) / values.length);
}
