import i18n from "./18n";
import income from "../../assets/slide-income.svg";
import marketing from "../../assets/slide-marketing.svg";
import processes from "../../assets/slide-processes.svg";
import product from "../../assets/slide-product.svg";
import team from "../../assets/slide-team.svg";
import testing from "../../assets/slide-testing.svg";

import questionsAnalytics from "../../assets/questions-analytics.svg";
import questionsMarketing from "../../assets/questions-marketing.svg";
import questionsOutstaffing from "../../assets/questions-outstaffing.svg";
import questionsProduct from "../../assets/questions-product.svg";
import questionsResearch from "../../assets/questions-research.svg";

export const ServiceData = () => {
  return [
    {
      id: 1,
      content: i18n.t("need-department"),
      backgroundImage: marketing,
    },
    {
      id: 2,
      content: i18n.t("need-channel"),
      backgroundImage: income,
    },
    {
      id: 3,
      content: i18n.t("need-optimisation"),
      backgroundImage: processes,
    },
    {
      id: 4,
      content: i18n.t("need-product"),
      backgroundImage: product,
    },
    {
      id: 5,
      content: i18n.t("need-test"),
      backgroundImage: testing,
    },
    {
      id: 6,
      content: i18n.t("need-team"),
      backgroundImage: team,
    },
  ];
};

export const faq = () => {
  return [
    {
      question: i18n.t("question-1"),
      answer: i18n.t("answer-1"),
      backgroundImage: questionsMarketing,
    },
    {
      question: i18n.t("question-2"),
      answer: i18n.t("answer-2"),
      backgroundImage: questionsResearch,
    },
    {
      question: i18n.t("question-3"),
      answer: i18n.t("answer-3"),
      backgroundImage: questionsProduct,
    },
    {
      question: i18n.t("question-4"),
      answer: i18n.t("answer-4"),
      backgroundImage: questionsOutstaffing,
    },
    {
      question: i18n.t("question-5"),
      answer: i18n.t("answer-5"),
      backgroundImage: questionsAnalytics,
    },
  ];
};
