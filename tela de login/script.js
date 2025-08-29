 document.addEventListener('DOMContentLoaded', function() {
            const toggleBtn = document.getElementById('toggleAside');
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            
            // Verificar estado anterior (se existir)
            const isCollapsed = localStorage.getItem('asideCollapsed') === 'true';
            
            // Aplicar estado salvo
            if (isCollapsed) {
                sidebar.classList.add('collapsed');
                mainContent.classList.add('collapsed');
            }
            
            // Alternar aside
            toggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
                mainContent.classList.toggle('collapsed');
                
                // Salvar estado no localStorage
                const currentlyCollapsed = sidebar.classList.contains('collapsed');
                localStorage.setItem('asideCollapsed', currentlyCollapsed);
            });
            
            // Fechar o aside ao clicar fora dele (em dispositivos móveis)
            document.addEventListener('click', function(event) {
                const isToggleButton = toggleBtn.contains(event.target);
                const isSidebar = sidebar.contains(event.target);
                
                if (window.innerWidth <= 768 && !isToggleButton && !isSidebar && !sidebar.classList.contains('collapsed')) {
                    sidebar.classList.add('collapsed');
                    mainContent.classList.add('collapsed');
                    localStorage.setItem('asideCollapsed', 'true');
                }
            });
        });