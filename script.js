// Funcionalidade de navegação por abas
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
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
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
    
    // Funcionalidade de busca rápida (opcional)
    function addSearchFunctionality() {
        // Criar campo de busca
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="search-input" placeholder="Buscar conteúdo..." style="
                padding: 0.5rem 1rem;
                border: 2px solid #ddd;
                border-radius: 25px;
                font-size: 0.9rem;
                width: 250px;
                margin: 1rem 0;
                transition: border-color 0.3s ease;
            ">
        `;
        
        // Adicionar ao header
        const header = document.querySelector('.header .container');
        header.appendChild(searchContainer);
        
        const searchInput = document.getElementById('search-input');
        
        // Funcionalidade de busca
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const allText = document.querySelectorAll('.content-section p, .content-section h3, .content-section h4, .content-section li');
            
            allText.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (searchTerm && text.includes(searchTerm)) {
                    element.style.backgroundColor = '#ffff99';
                    element.style.padding = '2px 4px';
                    element.style.borderRadius = '3px';
                } else {
                    element.style.backgroundColor = '';
                    element.style.padding = '';
                    element.style.borderRadius = '';
                }
            });
        });
        
        // Estilo do campo de busca
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#FF3366';
            this.style.outline = 'none';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
        });
    }
    
    // Adicionar funcionalidade de busca
    addSearchFunctionality();
    
    // Funcionalidade de impressão
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir';
        printButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #FF3366 0%, #FF6B35 100%);
            color: white;
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(255, 51, 102, 0.3);
            transition: transform 0.3s ease;
            z-index: 1000;
        `;
        
        printButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        printButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
    }
    
    // Adicionar botão de impressão
    addPrintButton();
    
    // Funcionalidade de modo escuro (opcional)
    function addDarkModeToggle() {
        const darkModeButton = document.createElement('button');
        darkModeButton.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeButton.style.cssText = `
            position: fixed;
            bottom: 90px;
            right: 20px;
            background: #333;
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
            width: 50px;
            height: 50px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
            z-index: 1000;
        `;
        
        darkModeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            this.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
        
        document.body.appendChild(darkModeButton);
        
        // Estilos para modo escuro
        const darkModeStyles = document.createElement('style');
        darkModeStyles.textContent = `
            .dark-mode {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: #fff;
            }
            .dark-mode .content-section h2 {
                color: #FF6B35;
            }
            .dark-mode .action-item,
            .dark-mode .week-content,
            .dark-mode .date-item,
            .dark-mode .strategy-card {
                background: #333;
                color: #fff;
            }
            .dark-mode .navigation {
                background: #2d2d2d;
            }
            .dark-mode .nav-tab {
                color: #ccc;
            }
            .dark-mode .nav-tab:hover {
                background: #444;
                color: #FF6B35;
            }
            .dark-mode .nav-tab.active {
                color: #FF6B35;
                background: #444;
            }
        `;
        document.head.appendChild(darkModeStyles);
    }
    
    // Adicionar toggle de modo escuro
    addDarkModeToggle();
    
    // Contador de progresso de leitura
    function addReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #FF3366, #FF6B35);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Adicionar barra de progresso de leitura
    addReadingProgress();
});

// Função para copiar link da seção
function copyLink(sectionId) {
    const url = window.location.origin + window.location.pathname + '#' + sectionId;
    navigator.clipboard.writeText(url).then(function() {
        // Mostrar feedback visual
        const feedback = document.createElement('div');
        feedback.textContent = 'Link copiado!';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #32CD32;
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 1002;
            font-weight: bold;
        `;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 2000);
    });
}
