// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var ML_Engineer = {
    languages: ["Python", "SQL", "C++"],
    tools: ["seaborn", "pandas", "tableau"],
    frameworks: ["Tensorflow", "Pytoch", "Scikitlearn"]
};
var languages = ML_Engineer.languages, frameworks = ML_Engineer.frameworks, tools = ML_Engineer.tools;
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
