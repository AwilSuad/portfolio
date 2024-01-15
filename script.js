document.addEventListener("DOMContentLoaded", function () {
    // Dummy project data, replace with your actual projects
    const projects = [
        {
            title: "Project 1",
            description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "project1.jpg"
        },
        {
            title: "Project 2",
            description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "project2.jpg"
        }
        // Add more projects as needed
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);

        projectList.appendChild(projectDiv);
    });
});
