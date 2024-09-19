const translations = {
    'pt': {
        'page-title': 'Portfólio de Henrique de Andrade Reynaud',
        'portfolio': 'Meu Portfólio',
        'about': 'Sobre',
        'projects': 'Projetos',
        'contact': 'Contato',
        'name': 'Henrique de Andrade Reynaud',
        'role': 'Estudante FullStack | Desenvolvedor Web em Formação',
        'about-description': 'Sou um estudante apaixonado por desenvolvimento FullStack, buscando constantemente aprender e aprimorar minhas habilidades em diversas tecnologias web. Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor.',
        'skills': 'Minhas Habilidades',
        'my-projects': 'Meus Projetos',
        'your-name': 'Seu Nome',
        'your-email': 'Seu Email',
        'your-message': 'Sua Mensagem',
        'send-message': 'Enviar Mensagem',
        'education': 'Educação',
        'course-title': 'Curso Desenvolvimento de Sistemas',
        'workload': 'Carga horária',
        'period': 'Período',
        'rights-reserved': 'Todos os direitos reservados',
        'download-cv': 'Download CV',
        'contact-me': 'Contate-me'
    },
    'en': {
        'page-title': 'Henrique de Andrade Reynaud\'s Portfolio',
        'portfolio': 'My Portfolio',
        'about': 'About',
        'projects': 'Projects',
        'contact': 'Contact',
        'name': 'Henrique de Andrade Reynaud',
        'role': 'FullStack Student | Web Developer in Training',
        'about-description': 'I am a passionate FullStack development student, constantly seeking to learn and improve my skills in various web technologies. I am always looking for new challenges and opportunities to grow as a developer.',
        'skills': 'My Skills',
        'my-projects': 'My Projects',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-message': 'Your Message',
        'send-message': 'Send Message',
        'education': 'Education',
        'course-title': 'Systems Development Course',
        'workload': 'Workload',
        'period': 'Period',
        'rights-reserved': 'All rights reserved',
        'download-cv': 'Download CV',
        'contact-me': 'Contact Me'
    },
    'es': {
        'page-title': 'Portafolio de Henrique de Andrade Reynaud',
        'portfolio': 'Mi Portafolio',
        'about': 'Sobre',
        'projects': 'Proyectos',
        'contact': 'Contacto',
        'name': 'Henrique de Andrade Reynaud',
        'role': 'Estudiante FullStack | Desarrollador Web en Formación',
        'about-description': 'Soy un estudiante apasionado por el desarrollo FullStack, buscando constantemente aprender y mejorar mis habilidades en diversas tecnologías web. Siempre estoy en busca de nuevos desafíos y oportunidades para crecer como desarrollador.',
        'skills': 'Mis Habilidades',
        'my-projects': 'Mis Proyectos',
        'your-name': 'Su Nombre',
        'your-email': 'Su Email',
        'your-message': 'Su Mensaje',
        'send-message': 'Enviar Mensaje',
        'education': 'Educación',
        'course-title': 'Curso de Desarrollo de Sistemas',
        'workload': 'Carga horaria',
        'period': 'Período',
        'rights-reserved': 'Todos los derechos reservados',
        'download-cv': 'Descargar CV',
        'contact-me': 'Contáctame'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key];
    });
    document.title = translations[lang]['page-title'];
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // Set initial language
    setLanguage('pt');
});