document.addEventListener('DOMContentLoaded', function() {
    // Efeitos de interação nos cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efeito de foco nos inputs
    const inputs = document.querySelectorAll('.glass-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.background = 'var(--bg-glass-light)';
        });
    });

    // Alternar entre views de denúncias
    const viewOptions = document.querySelectorAll('.view-option');
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            viewOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Aqui você pode adicionar a lógica para filtrar as denúncias
            console.log('View alterada para:', this.textContent);
        });
    });

    // Formulário de nova denúncia
    const denunciaForm = document.querySelector('.denuncia-form');
    if (denunciaForm) {
        denunciaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Mostrar mensagem de sucesso
                alert('Denúncia enviada com sucesso!');
                this.reset();
            }, 2000);
        });
    }

    // Efeito de partículas de código (igual ao login)
    function createCodeParticle() {
        const particles = ['{', '}', '<', '>', ';', '=', '(', ')', '/', '*'];
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'fixed';
        particle.style.color = `rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1})`;
        particle.style.fontFamily = 'JetBrains Mono, monospace';
        particle.style.fontSize = `${Math.random() * 14 + 10}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = '-50px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.opacity = '0';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { 
                opacity: 0, 
                transform: 'translateY(0) rotate(0deg)',
                filter: 'blur(0px)'
            },
            { 
                opacity: 1, 
                transform: `translateY(${Math.random() * 20 + 10}vh) rotate(${Math.random() * 360}deg)`,
                filter: 'blur(1px)'
            },
            { 
                opacity: 0, 
                transform: `translateY(${Math.random() * 40 + 30}vh) rotate(${Math.random() * 720}deg)`,
                filter: 'blur(2px)'
            }
        ], {
            duration: Math.random() * 10000 + 5000,
            easing: 'cubic-bezier(0.1, 0.2, 0.8, 0.9)'
        });
        
        animation.onfinish = () => particle.remove();
    }

    // Criar partículas periodicamente
    setInterval(createCodeParticle, 500);
});