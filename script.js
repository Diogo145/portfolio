document.addEventListener("DOMContentLoaded", () => {
    // === EmailJS ===
    emailjs.init({
        publicKey: "67Xl5tihLlrLTywI-",
    });

    const form = document.getElementById("contact-form");
    if (form) {
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
    }

    // Lista de projetos
    const projetos = [
        {
            nome: "Website Estaleiro de Sarilhos Pequenos",
            descricao: "Website institucional desenvolvido para o Estaleiro de Sarilhos Pequenos, apresentando informações sobre serviços, história, projetos, entre outros, com design responsivo e otimizado para diferentes dispositivos.",
            tecnologias: ["WordPress", "PHP", "CSS", "HTML", "JavaScript"],
            link: "proj1.html",
            imagem: "media/proj1/estaleiro.jpg"
        },
        {
            nome: "App de Agendamentos para Barbearia",
            descricao: "Aplicação completa para o agendamento de serviços numa barbearia, oferecendo funcionalidades de login seguro, gestão detalhada das reservas dos clientes, o histórico de clientes e uma interface intuitiva e responsiva.",
            tecnologias: ["Kotlin", "Firebase", "Android"],
            link: "proj3.html",
            imagem: "media/proj3/all.png"
        },
        {
            nome: "Portfolio Pessoal",
            descricao: "Website pessoal desenvolvido com HTML, CSS e JavaScript puro, criado para apresentar de forma organizada e interativa os meus projetos, habilidades e informações de contacto, com design responsivo e navegação intuitiva.",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "proj2.html",
            imagem: "media/proj2/portfolio.png"
        },
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
        <a href="${project.link}">Ver projeto</a>
        </div>
    `;
        list.appendChild(card);
    });


    // Lista de experiências
    const experiencias = [
        {
            nome: "PAFSE European Project - Assistente",
            descricao: "Apoio a professores e alunos na implementação de projetos científicos, elaboração de relatórios e acompanhamento de grupos de alunos durante o Open Day do ISEL.",
            tipo: "Voluntariado",
            periodo: "Março 2023 - Junho 2023",
            local: "Lisboa, Portugal",
            imagem: "media/pafse.jpeg"
        },
        {
            nome: "Web Summit 2024 - Stand Promoter",
            descricao: "Representação de uma startup portuguesa no maior evento tecnológico da Europa, promoção de soluções inovadoras e contacto com profissionais do setor.",
            tipo: "Profissional / Evento",
            periodo: "Novembro 2024",
            local: "Lisboa, Portugal",
            imagem: "media/ws.jpeg"
        },
        {
            nome: "FUNDEC - Avaliador",
            descricao: "Análise de candidaturas ao fundo ambiental, com foco em equipamentos energeticamente eficientes, avaliando segundo critérios técnicos e sustentáveis.",
            tipo: "Profissional",
            periodo: "Março 2024 - Presente",
            local: "Lisboa, Portugal",
            imagem: "media/paes.png"
        }
    ];

    const expList = document.getElementById("experience-list");

    experiencias.forEach((exp) => {
        const card = document.createElement("div");
        card.className = "experience-card";
        card.innerHTML = `
        <img src="${exp.imagem}" alt="${exp.nome}">
        <div class="experience-card-content">
            <h3>${exp.nome}</h3>
            <p><strong>Tipo:</strong> ${exp.tipo}</p>
            <p><strong>Período:</strong> ${exp.periodo}</p>
            <p><strong>Local:</strong> ${exp.local}</p>
            <p>${exp.descricao}</p>
        </div>
    `;
        expList.appendChild(card);
    });

});

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("show");
});

// aplica scroll suave manualmente apenas se o destino for da mesma página
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href'); 

    // Verifica se é um link interno (começa com "#")
    if (targetId.startsWith('#')) {
      e.preventDefault(); // evita salto imediato

      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // -60px para compensar o header
          behavior: 'smooth'
        });
      }

      // fechar o menu hambúrguer depois de clicar
      document.querySelector("nav ul").classList.remove("show");
      document.getElementById("menuBtn").classList.remove("active");
    }
    // Caso contrário (outra página), deixa o link funcionar normalmente
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal, .project, .project.reverse");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // só anima uma vez
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));
});