// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.


let ML_Engineer = {
    languages: ["Python" , "SQL", "C++"],
    tools: ["seaborn", "pandas" ,"tableau"],
    frameworks: ["Tensorflow", "Pytoch" , "Scikitlearn"]
};
let { languages, frameworks, tools } = ML_Engineer;

console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);

