export const getSectionScores = (sectionTtile, rubric) => {
  const section = rubric.filter(sectionItem => sectionItem.section_title === sectionTtile);
  return section[0].section_scores;
};
