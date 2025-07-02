document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    // Função para mostrar seção específica
    function showSection(sectionId) {
        // Esconder todas as seções
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remover classe active de todas as abas
        navTabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Mostrar seção selecionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Adicionar classe active na aba correspondente
        const activeTab = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Scroll suave para o topo da seção
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Adicionar event listeners para as abas
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            
            // Atualizar URL sem recarregar a página
            history.pushState(null, null, `#${sectionId}`);
        });
    });

    // Verificar se há hash na URL ao carregar a página
    function checkUrlHash() {
        // Por padrão, se não houver hash, mostre 'julho'
        let hash = window.location.hash.substring(1) || 'julho';
        
        if (document.getElementById(hash)) {
            showSection(hash);
        } else {
            // Se o hash for inválido, mostre a primeira aba como padrão
            showSection('julho');
        }
    }

    // Executar verificação inicial
    checkUrlHash();

    // Escutar mudanças no hash da URL (botão voltar/avançar do navegador)
    window.addEventListener('hashchange', checkUrlHash);

    // Animações de entrada para elementos
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card, .action-item, .week-item, .date-item, .strategy-card, .game-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Configurar elementos para animação
    function setupAnimations() {
        const elements = document.querySelectorAll('.card, .action-item, .week-item, .date-item, .strategy-card, .game-card');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    }

    // Executar configuração de animações
    setupAnimations();
    
    // Executar animação inicial
    setTimeout(animateOnScroll, 100);
    
    // Escutar scroll para animações
    window.addEventListener('scroll', animateOnScroll);
});
