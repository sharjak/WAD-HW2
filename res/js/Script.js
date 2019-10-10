$(function () {
    var user = new User("Jaanus", "Talvik", "21/04/1997", "Software Development", 4.35);
    init();

    function init() {
        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);
    }
});
