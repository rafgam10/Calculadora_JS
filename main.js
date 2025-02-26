 // Seleciona o display e os botões
 const display = document.getElementById('display');
 const btnNumericos = document.querySelectorAll('.btnBlack');
 const btnFuncoes = document.querySelectorAll('.btn-orange');

 // Adiciona evento de clique para botões numéricos
 btnNumericos.forEach(button => {
     button.addEventListener('click', () => {
         display.value += button.value;
     });
 });

 // Adiciona evento de clique para botões de funções
 btnFuncoes.forEach(button => {
     button.addEventListener('click', () => {
         const value = button.textContent;

         if (value === '=') {
             try {
                 display.value = eval(display.value);
             } catch {
                 display.value = 'Erro';
             }
         } else if (value === 'C') {
             display.value = '';
         } else {
             display.value += value;
         }
     });
 });