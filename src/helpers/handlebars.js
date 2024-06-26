const Handlebars = require("handlebars");

module.exports = {
    sum: (a, b) => a + b,
    isEqual: (a, b) => {
        // console.log("show header : " + a);
        // console.log("value : " + b);
        // console.log(a===b);
        return a === b;
    },
    not (value){
        return !value;
    },
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default"; //seperate icon , actions

        // console.log("Helper: sort-column: " + sort.column);
        // console.log("Helper: sort-type: " + sort.type);

        const icons = {
            default: "fa-solid fa-sort",
            asc: "fa-solid fa-arrow-down-short-wide",
            desc: "fa-solid fa-arrow-down-wide-short",
        };
        const types = {
            default: "desc",
            asc: "desc",
            desc: "asc",
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(
            `/me/stored/courses/sort?_sort=true&column=${field}&type=${type}`,
        );

        const output = `<a class="ms-2 sort-link" id="sort-link" href="${href}">
        <i class="${icon}"></i>
        </a>`;
        return new Handlebars.SafeString(output);
    },
    isSaved(courseID, userCourses){
        // console.log("helper _id: "+ courseID);
        // console.log("helper user-courses: "+ userCourses);
        return !userCourses.includes(courseID);
    }
    
};
