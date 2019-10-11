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

    $(".pill").click(function (event) {
        if (!$(event.target).hasClass("active")) {
            $(".pill").removeClass("active");
            $(this).addClass("active");
            $(".tab").removeClass("active");
            let targetContainerId = "#" + event.target.id.split("-")[0] + "-container";
            $(targetContainerId).addClass("active");
        }
    });

    $("#add-course-button").click(function (event) {
        $("#add-course").toggle();
    });

    $("#save-course").click(function (event) {       
        let inputTitle = $("#title").val();
        let inputSemester = $("#semester").val();
        let inputGrade = $("#grade").val();

        let coursesTableBody = $("#courses tbody");
        let tr = $("<tr></tr>");

        courses.push(new Course(inputTitle, inputSemester, inputGrade));

        let rowId = $("<td></td>").text(courses.length);
        let courseTitle = $("<td></td>").text(inputTitle);
        let semester = $("<td></td>").text(inputSemester);
        let grade = $("<td></td>").text(inputGrade);

        tr.append(rowId);
        tr.append(courseTitle);
        tr.append(semester);
        tr.append(grade);
        coursesTableBody.append(tr);

    });
    
});
