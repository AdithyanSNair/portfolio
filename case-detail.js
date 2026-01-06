const params = new URLSearchParams(window.location.search);
const caseId = params.get("id");

fetch("content/cases.json")
  .then(res => res.json())
  .then(data => {
    const project = data.find(item => item.id === caseId);

    if (!project) return;

    document.getElementById("caseTitle").textContent = project.title;
    document.getElementById("caseDesc").textContent = project.description;

    const imgWrap = document.getElementById("caseImages");
    project.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      imgWrap.appendChild(img);
    });
  });
