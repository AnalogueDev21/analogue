import { learningPaths } from "../data/learningPaths.js";
import { profileTypes } from "../data/profileTypes.js";
import { calculateScores, getAverageScore } from "./scoringService.js";

function selectProfileType(scores) {
  const average = getAverageScore(scores);

  if (average < 40) return profileTypes.beginnerBuilder;
  if (average < 60) return profileTypes.carefulStarter;
  if (average < 78) return profileTypes.curiousExplorer;
  return profileTypes.structuredInvestor;
}

function selectLearningPath(scores) {
  if (scores.financialReadiness < 50) return learningPaths.foundationFirst;
  if (scores.knowledge < 55) return learningPaths.firstInvestmentMap;
  if (scores.risk < 60 || scores.goalClarity < 65) return learningPaths.decisionFramework;
  return learningPaths.portfolioThinking;
}

function getReadinessLabel(scores) {
  const average = getAverageScore(scores);
  if (average < 40) return "เริ่มสร้างฐาน";
  if (average < 60) return "พร้อมเริ่มเรียน";
  if (average < 78) return "พร้อมจัดระบบ";
  return "พร้อมต่อยอด";
}

function buildStrengths(scores) {
  const strengths = [];

  if (scores.knowledge >= 60) {
    strengths.push("คุณมีพื้นฐานความรู้ที่ช่วยให้ต่อยอดได้เร็วขึ้น");
  }
  if (scores.risk >= 60) {
    strengths.push("คุณมีแนวโน้มรับมือกับความผันผวนได้ด้วยเหตุผล");
  }
  if (scores.financialReadiness >= 60) {
    strengths.push("ฐานเงินสำรองของคุณช่วยให้เรียนรู้เรื่องการลงทุนได้ใจเย็นขึ้น");
  }
  if (scores.goalClarity >= 60) {
    strengths.push("เป้าหมายของคุณเริ่มชัดพอที่จะสร้างเส้นทางการเรียนรู้เฉพาะตัว");
  }

  return strengths.length
    ? strengths
    : ["คุณเริ่มจากการรู้จักตัวเองก่อน ซึ่งเป็นจุดตั้งต้นที่ดีมากสำหรับการเรียนรู้เรื่องเงิน"];
}

function buildWeaknesses(scores) {
  const weaknesses = [];

  if (scores.knowledge < 60) {
    weaknesses.push("ควรเสริมพื้นฐานเรื่องความเสี่ยง ผลตอบแทน และประเภทสินทรัพย์");
  }
  if (scores.risk < 60) {
    weaknesses.push("ควรฝึกกรอบคิดรับมือความผันผวนก่อนตัดสินใจจากอารมณ์");
  }
  if (scores.financialReadiness < 60) {
    weaknesses.push("ควรจัดฐานเงินสำรองให้มั่นคงขึ้นก่อนเพิ่มความเสี่ยง");
  }
  if (scores.goalClarity < 60) {
    weaknesses.push("ควรทำให้เป้าหมายชัดขึ้นว่าเรียนและลงทุนไปเพื่ออะไร");
  }

  return weaknesses.length
    ? weaknesses
    : ["ขั้นต่อไปคือรักษาวินัยและทบทวนแผนเป็นรอบ ๆ แทนการเปลี่ยนตามข่าวรายวัน"];
}

export function generateProfile(answers) {
  const scores = calculateScores(answers);

  return {
    scores,
    profileType: selectProfileType(scores),
    readinessLabel: getReadinessLabel(scores),
    strengths: buildStrengths(scores),
    weaknesses: buildWeaknesses(scores),
    learningPath: selectLearningPath(scores),
  };
}
