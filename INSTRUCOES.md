# Instruções de Uso - Site Ações Comerciais Construpiso

## 🚀 Como usar este projeto

### 1. Visualização Local
- Abra o arquivo `index.html` em qualquer navegador web
- Todas as funcionalidades funcionam offline

### 2. Hospedagem Web
- Faça upload de todos os arquivos para seu servidor web
- Certifique-se de que o `index.html` está na raiz
- O site é totalmente estático, não requer servidor especial

### 3. Versionamento com Git

#### Primeiro uso:
```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd construpiso-acoes-agosto-2025
```

#### Para fazer alterações:
```bash
# Edite os arquivos necessários
git add .
git commit -m "Descrição das alterações"
git push origin main
```

### 4. Estrutura de Arquivos
```
construpiso-acoes-agosto-2025/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Funcionalidades interativas
├── README.md           # Documentação do projeto
├── INSTRUCOES.md       # Este arquivo
├── .gitignore          # Arquivos ignorados pelo Git
└── assets/             # Pasta para imagens (criar se necessário)
```

## 🎯 Funcionalidades Disponíveis

### Navegação
- **Abas superiores**: Clique para navegar entre seções
- **URLs compartilháveis**: Cada seção tem sua própria URL
- **Teclado**: Use Ctrl+1, Ctrl+2, etc. para navegação rápida

### Ferramentas
- **🔍 Busca**: Campo no topo para encontrar conteúdo
- **🖨️ Impressão**: Botão flutuante para imprimir
- **🌙 Modo Escuro**: Toggle no canto inferior direito
- **❤️ Favoritos**: Marcar como favorito
- **🔗 Compartilhar**: Copiar link da página/seção

### Responsividade
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Adaptação automática do layout
- **Mobile**: Interface otimizada para toque

## 📝 Como Editar o Conteúdo

### 1. Alterações Simples (Textos)
Edite diretamente o arquivo `index.html`:
- Encontre a seção desejada
- Altere o texto entre as tags HTML
- Salve o arquivo

### 2. Alterações de Design
Edite o arquivo `styles.css`:
- Cores: Procure por valores hexadecimais (#FF3366, etc.)
- Fontes: Modifique a propriedade `font-family`
- Espaçamentos: Ajuste valores de `padding` e `margin`

### 3. Novas Funcionalidades
Edite o arquivo `script.js`:
- Adicione novos event listeners
- Implemente novas funcionalidades
- Teste sempre no navegador

## 🎨 Personalização

### Cores da Marca
As cores principais estão definidas no CSS:
- **Vermelho Construpiso**: #FF3366
- **Laranja**: #FF6B35
- **Azul**: #0066FF
- **Verde**: #32CD32
- **Dourado**: #FFD700

### Alterando o Slogan
No arquivo `index.html`, procure por:
```html
<p class="subtitle">Agosto 2025 - Erguendo Seus Sonhos!</p>
```

### Alterando Metas
Procure pelas seções com valores monetários e percentuais:
```html
<p class="valor">R$ 3.550.000</p>
```

## 📊 Atualizando Dados

### Metas Mensais
1. Abra `index.html`
2. Procure pela seção "metas-grid"
3. Altere os valores nas classes "valor"

### Ações Estratégicas
1. Encontre a seção "acoes-estrategicas"
2. Edite o conteúdo de cada "action-item"
3. Adicione/remova ações conforme necessário

### Cronograma
1. Localize a seção "cronograma"
2. Modifique as "week-item" conforme o novo planejamento

## 🔧 Solução de Problemas

### Site não carrega corretamente
- Verifique se todos os arquivos estão na mesma pasta
- Confirme que o `index.html` está na raiz
- Teste em navegador diferente

### Funcionalidades não funcionam
- Verifique se o `script.js` está carregando
- Abra o console do navegador (F12) para ver erros
- Confirme que o Font Awesome está carregando

### Layout quebrado
- Verifique se o `styles.css` está carregando
- Teste em diferentes tamanhos de tela
- Confirme que não há erros de CSS

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos
- ✅ Desktop (1920x1080+)
- ✅ Laptop (1366x768+)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667+)

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte este arquivo de instruções
2. Verifique o README.md para informações técnicas
3. Teste as alterações localmente antes de publicar

---

**Construpiso - Erguendo Seus Sonhos!** 🏗️
