document.addEventListener("DOMContentLoaded", function () {
    const viewMoreButton = document.getElementById("view-more");
    const viewLessButton = document.getElementById("view-less");
    const additionalProjects = document.querySelectorAll(".additional-projects");

    viewMoreButton.addEventListener("click", function () {
        additionalProjects.forEach(function (project) {
            project.style.display = "block";
        });
        viewMoreButton.style.display = "none";
        viewLessButton.style.display = "inline-block";
    });

    viewLessButton.addEventListener("click", function () {
        additionalProjects.forEach(function (project) {
            project.style.display = "none";
        });
        viewMoreButton.style.display = "inline-block";
        viewLessButton.style.display = "none";
    });
});
