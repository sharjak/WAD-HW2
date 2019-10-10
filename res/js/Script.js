$(function () {
    let user = new User("Jaanus", "Talvik", "21/04/1997", "Software Development", 4.35);
    let courses = [
        new Course("Object-oriented programming", 1, 95),
        new Course("Programming in Python", 1, 100),
        new Course("Data Structures and Algorithms", 2, 85),
        new Course("Introduction to artificial intelligence", 2, 88)
    ];
    init();

    function init() {
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);

        let coursesTableBody = $("#courses tbody");
        for (let i = 0; i < courses.length; i++) {
            let tr = $("<tr></tr>");
            let rowId = $("<td></td>").text(i + 1);
            let courseTitle = $("<td></td>").text(courses[i].title);
            let semester = $("<td></td>").text(courses[i].semester);
            let grade = $("<td></td>").text(courses[i].grade);
            tr.append(rowId);
            tr.append(courseTitle);
            tr.append(semester);
            tr.append(grade);
            coursesTableBody.append(tr);

        }
    }
});
