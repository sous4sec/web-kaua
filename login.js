document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');

    // Efeito de foco nos inputs
    const inputs = document.querySelectorAll('.glass-input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });

        // Placeholder animation
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.setAttribute('data-has-value', 'true');
            } else {
                this.removeAttribute('data-has-value');
            }
        });
    });

    // Processamento do formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar loader
        btnText.style.opacity = '0';
        btnLoader.style.display = 'flex';
        loginBtn.disabled = true;
        
        // Simular processamento
        setTimeout(function() {
            // Redirecionar para a página de denúncia em nova aba
            window.open('denuncia.html', '_blank');
            
            // Resetar botão após um tempo
            setTimeout(function() {
                btnText.style.opacity = '1';
                btnLoader.style.display = 'none';
                loginBtn.disabled = false;
            }, 1000);
        }, 2000);
    });

    // Efeito de digitação no terminal
    const terminalLines = document.querySelectorAll('.terminal-line');
    let currentLine = 0;
    let currentChar = 0;
    let typingInterval;

    function typeTerminal() {
        if (currentLine < terminalLines.length) {
            const line = terminalLines[currentLine];
            const text = line.textContent;
            
            if (currentChar < text.length) {
                line.textContent = text.substring(0, currentChar + 1);
                currentChar++;
            } else {
                currentLine++;
                currentChar = 0;
            }
        } else {
            clearInterval(typingInterval);
        }
    }

    // Iniciar efeito de digitação após um delay
    setTimeout(() => {
        terminalLines.forEach(line => {
            line.textContent = '';
            line.style.display = 'block';
        });
        typingInterval = setInterval(typeTerminal, 50);
    }, 1000);

    // Efeito de partículas de código
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
        
        // Animação
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