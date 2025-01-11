
//op=["Html","Css","Javascript","Nodejs","Angular","Redux"]
//hint: use split method.....iterate it and capitalize only frst character in every string.
let courses = "html-css-javascript-react-nodejs-angular-redux";
let splitCourse = courses.split("-");
let emptyArray = [];

for (let i = 0; i < splitCourse.length; i++) {
    let capitalized = splitCourse[i][0].toUpperCase() + splitCourse[i].slice(1);
    emptyArray.push(capitalized);
}

console.log(emptyArray);

