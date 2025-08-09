document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o EmailJS
    emailjs.init("67Xl5tihLlrLTywI-");

    // Formulário de contacto
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("service_ayefoe8", "template_sl5lqbr", this)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            }, (error) => {
                alert("Erro ao enviar: " + error.text);
            });
    });

    // Lista de projetos
    const projetos = [
        {
            nome: "Portfolio Pessoal",
            descricao: "Website pessoal com HTML, CSS e JavaScript puro para mostrar projetos e contacto.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "proj1.html",
            imagem: "media/portfolio.jpg"
        },
        {
            nome: "Website Estaleiro de Sarilhos Pequenos",
            descricao: "Website institucional desenvolvido para o Estaleiro de Sarilhos Pequenos, apresentando informações sobre serviços, história, projetos, entre outros, com design responsivo e otimizado para diferentes dispositivos.",
            tecnologias: ["WordPress", "PHP", "CSS", "HTML", "JavaScript"],
            link: "proj2.html",
            imagem: "media/estaleiro.jpg" 
        },
        {
            nome: "App de reservas de barbearia",
            descricao: "Aplicação para agendamento de serviços de barbearia, com funcionalidades de login, gestão de reservas e notificações.",
            tecnologias: ["Kotlin", "Firebase", "Android"],
            link: "proj3.html",
            imagem: "media/barbearia.jpeg"
        }
    ];

    const list = document.getElementById("project-list");

    projetos.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
        <img src="${project.imagem}" alt="${project.nome}">
        <div class="project-card-content">
        <h3>${project.nome}</h3>
        <p>${project.descricao}</p>
        <p><strong>Tecnologias:</strong> ${project.tecnologias.join(", ")}</p>
        <a href="${project.link}" target="_blank">Ver projeto</a>
        </div>
    `;
        list.appendChild(card);
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});

