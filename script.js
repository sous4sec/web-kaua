document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    const notification = document.querySelector('.floating-notification');
  
    // Efeito de foco nos inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (this.value === '') {
          this.parentElement.classList.remove('focused');
        }
      });
    });
  
    // Animação dos botões sociais
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
      
      btn.addEventListener('click', function() {
        this.style.transform = 'translateY(0) scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'translateY(0) scale(1)';
        }, 150);
        
        showNotification();
      });
    });
  
    // Processamento do formulário de login
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Mostrar loader
      btnText.style.display = 'none';
      btnLoader.style.display = 'block';
      loginBtn.disabled = true;
      
      // Simular processamento
      setTimeout(function() {
        // Redirecionar para a página de denúncia em nova aba
        window.open('denuncia.html', '_blank');
        
        // Mostrar notificação
        showNotification();
        
        // Resetar botão
        setTimeout(function() {
          btnText.style.display = 'block';
          btnLoader.style.display = 'none';
          loginBtn.disabled = false;
        }, 1000);
      }, 1500);
    });
  
    // Função para mostrar notificação
    function showNotification() {
      notification.classList.add('show');
      
      setTimeout(function() {
        notification.classList.remove('show');
      }, 3000);
    }
  
    // Efeito de partículas no fundo (opcional)
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('shape');
      particle.style.width = Math.random() * 30 + 10 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.animationDuration = Math.random() * 20 + 10 + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      document.querySelector('.background-shapes').appendChild(particle);
      
      // Remover após a animação
      setTimeout(() => {
        particle.remove();
      }, 30000);
    }
  
    // Criar partículas periodicamente
    setInterval(createParticle, 1000);
  });