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
        const elements = document.querySelectorAll('.card, .meta-card, .action-item, .week-item, .departamento-card, .strategy-card, .protecao-card');
        
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
        const elements = document.querySelectorAll('.card, .meta-card, .action-item, .week-item, .departamento-card, .strategy-card, .protecao-card');
        
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
    
    // Funcionalidade de busca rápida
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
    
    // Funcionalidade de modo escuro
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
    
    // Funcionalidade de compartilhamento
    function addShareButtons() {
        const shareContainer = document.createElement('div');
        shareContainer.style.cssText = `
            position: fixed;
            bottom: 160px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 1000;
        `;
        
        // Botão de copiar link
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-link"></i>';
        copyButton.title = 'Copiar link';
        copyButton.style.cssText = `
            background: #0066FF;
            color: white;
            border: none;
            padding: 0.8rem;
            border-radius: 50%;
            cursor: pointer;
            width: 45px;
            height: 45px;
            box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
            transition: transform 0.3s ease;
        `;
        
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(function() {
                showNotification('Link copiado!');
            });
        });
        
        shareContainer.appendChild(copyButton);
        document.body.appendChild(shareContainer);
    }
    
    // Adicionar botões de compartilhamento
    addShareButtons();
    
    // Função para mostrar notificações
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
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
            box-shadow: 0 4px 15px rgba(50, 205, 50, 0.3);
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 2000);
    }
    
    // Funcionalidade de estatísticas em tempo real
    function addStatsCounter() {
        const statsElements = document.querySelectorAll('.valor, .margem-numero, .porcentagem');
        
        function animateNumber(element, target, duration = 2000) {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (element.textContent.includes('R$')) {
                    element.textContent = `R$ ${Math.floor(current).toLocaleString('pt-BR')}`;
                } else if (element.textContent.includes('%')) {
                    element.textContent = `${current.toFixed(1)}%`;
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }
        
        // Observar quando os elementos entram na tela
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const text = element.textContent;
                    
                    if (text.includes('3.550.000')) {
                        animateNumber(element, 3550000);
                    } else if (text.includes('2.000.000')) {
                        animateNumber(element, 2000000);
                    } else if (text.includes('1.550.000')) {
                        animateNumber(element, 1550000);
                    } else if (text.includes('28,50')) {
                        animateNumber(element, 28.5);
                    } else if (text.includes('70')) {
                        animateNumber(element, 70);
                    } else if (text.includes('30')) {
                        animateNumber(element, 30);
                    }
                    
                    observer.unobserve(element);
                }
            });
        });
        
        statsElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Adicionar contador de estatísticas
    addStatsCounter();
    
    // Funcionalidade de favoritos
    function addFavoriteButton() {
        const favoriteButton = document.createElement('button');
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteButton.title = 'Adicionar aos favoritos';
        favoriteButton.style.cssText = `
            position: fixed;
            bottom: 230px;
            right: 20px;
            background: #FF3366;
            color: white;
            border: none;
            padding: 0.8rem;
            border-radius: 50%;
            cursor: pointer;
            width: 45px;
            height: 45px;
            box-shadow: 0 4px 15px rgba(255, 51, 102, 0.3);
            transition: transform 0.3s ease;
            z-index: 1000;
        `;
        
        favoriteButton.addEventListener('click', function() {
            const isFavorited = this.classList.contains('favorited');
            
            if (isFavorited) {
                this.innerHTML = '<i class="fas fa-heart"></i>';
                this.classList.remove('favorited');
                showNotification('Removido dos favoritos');
            } else {
                this.innerHTML = '<i class="fas fa-heart" style="color: #FFD700;"></i>';
                this.classList.add('favorited');
                showNotification('Adicionado aos favoritos!');
            }
        });
        
        document.body.appendChild(favoriteButton);
    }
    
    // Adicionar botão de favoritos
    addFavoriteButton();
    
    // Adicionar efeitos de hover melhorados
    function enhanceHoverEffects() {
        const cards = document.querySelectorAll('.card, .meta-card, .action-item, .strategy-card, .departamento-card, .protecao-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Aplicar efeitos de hover melhorados
    enhanceHoverEffects();
});

// Função para copiar link da seção
function copyLink(sectionId) {
    const url = window.location.origin + window.location.pathname + '#' + sectionId;
    navigator.clipboard.writeText(url).then(function() {
        showNotification('Link da seção copiado!');
    });
}

// Função para exportar dados (simulação)
function exportData() {
    const data = {
        meta_total: 'R$ 3.550.000',
        meta_tiangua: 'R$ 2.000.000',
        meta_sobral: 'R$ 1.550.000',
        margem_objetivo: '28,50%',
        crescimento: '20%',
        acoes_principais: 10,
        semanas: 4,
        data_export: new Date().toLocaleDateString('pt-BR')
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'construpiso-acoes-agosto-2025.json';
    link.click();
    
    URL.revokeObjectURL(url);
    showNotification('Dados exportados com sucesso!');
}

// Adicionar funcionalidade de teclado
document.addEventListener('keydown', function(e) {
    // Navegação por teclado
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                document.querySelector('[data-section="visao-geral"]').click();
                break;
            case '2':
                e.preventDefault();
                document.querySelector('[data-section="acoes-estrategicas"]').click();
                break;
            case '3':
                e.preventDefault();
                document.querySelector('[data-section="cronograma"]').click();
                break;
            case '4':
                e.preventDefault();
                document.querySelector('[data-section="focos-departamentais"]').click();
                break;
            case '5':
                e.preventDefault();
                document.querySelector('[data-section="crm-marketing"]').click();
                break;
            case '6':
                e.preventDefault();
                document.querySelector('[data-section="protecao-margem"]').click();
                break;
            case 'p':
                e.preventDefault();
                window.print();
                break;
        }
    }
});

// Função para mostrar notificações
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
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
        box-shadow: 0 4px 15px rgba(50, 205, 50, 0.3);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    }, 2000);
}

