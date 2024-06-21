document.addEventListener('DOMContentLoaded', function(){
    const items = document.querySelectorAll('.item-cardapio');
    const descricao = document.getElementById('descricao');
});

//index.html - nos botões
// Função para mostrar uma mensagem de alerta quando o botão "Reserve a sua!" for clicado
document.querySelector('.reservar').addEventListener('click', function() {
    alert('Reserva realizada com sucesso!');
});

// Função para mudar o texto do botão "Monte a seu prato!" quando for clicado
document.querySelector('.montar').addEventListener('click', function() {
    alert('Prato montado!');
});

//meche na h1-index
document.addEventListener('DOMContentLoaded', (event) => {
    const texts = [
        { elementId: 'h1-text', text: 'Venha descobrir os Sabores Autênticos do Pará', speed: 100 },
        { elementId: 'h2-text', text: 'Ingredientes Frescos, Receitas Tradicionais e Produtos de Alta Qualidade para Todas as Ocasiões', speed: 50 }
    ];

    texts.forEach(({ elementId, text, speed }) => {
        let index = 0;
        const element = document.getElementById(elementId);

        function typeWriter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        element.innerHTML = '';  // Clear the text
        typeWriter();
    });
});



//cardapio.html
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item-cardapio');
    const descricao = document.getElementById('descricao');

    items.forEach(item => {
        item.addEventListener('click', function(event) {
            const target = event.target;
            let textoDescritivo = '';

            if (target.tagName === 'H3' || target.tagName === 'H4' || target.tagName === 'BUTTON') {
                const pratoNome = item.querySelector('h3').textContent;

                switch(pratoNome) {
                    case 'Caruru Paraense':
                        textoDescritivo = `Descrição do Caruru Paraense: O Caruru Paraense é um prato tradicional do Pará, feito com quiabo, camarões secos, azeite de dendê, e outros temperos locais. Este prato é uma explosão de sabores e um verdadeiro representante da culinária paraense.`;
                        break;
                    case 'Maniçoba':
                        textoDescritivo = `Descrição da Maniçoba: A Maniçoba é um prato típico do Pará, feito com folhas de mandioca moídas e cozidas por uma semana. É acompanhado de diversos tipos de carne, incluindo carne seca e linguiça, resultando em um prato de sabor único e marcante.`;
                        break;
                    case 'Arroz Paraense':
                        textoDescritivo = `Descrição do Arroz Paraense: O Arroz Paraense é um prato que combina arroz branco com ingredientes típicos da região amazônica, como camarão e jambu. É conhecido por seu sabor único e aroma envolvente.`;
                        break;
                    case 'Tacacá':
                        textoDescritivo = `Descrição do Tacacá: O Tacacá é uma sopa indígena da região Norte do Brasil, preparada com tucupi, goma de tapioca, camarão seco e jambu. É servido geralmente em cuias de cerâmica, e é uma das iguarias mais conhecidas da culinária paraense.`;
                        break;
                    case 'Vatapá':
                        textoDescritivo = `Descrição do Vatapá: O Vatapá é um prato típico da culinária afro-brasileira, bastante popular no Pará. É feito com pão esmigalhado, leite de coco, azeite de dendê, camarões secos e castanha de caju triturada, resultando em um creme espesso e saboroso.`;
                        break;
                    case 'Bolo de Macaxeira':
                        textoDescritivo = `Descrição do Bolo de Macaxeira: O Bolo de Macaxeira, também conhecido como Aipim ou Mandioca, é uma sobremesa típica do Norte do Brasil. Feito com macaxeira ralada, coco ralado, leite condensado e outros ingredientes, é uma opção deliciosa para quem aprecia sabores regionais.`;
                        break;
                    case 'Mousse de bacurí':
                        textoDescritivo = `Descrição do Mousse de Bacurí: O Bacurí é uma fruta típica da região amazônica, conhecida por seu sabor doce e marcante. O Mousse de Bacurí é uma sobremesa cremosa e refrescante, perfeita para finalizar uma refeição com um toque tropical.`;
                        break;
                    case 'Bolo de Tapioca':
                        textoDescritivo = `Descrição do Bolo de Tapioca: O Bolo de Tapioca é uma iguaria nordestina que ganhou espaço também na culinária paraense. Feito com goma de tapioca, leite de coco, leite condensado e coco ralado, é uma sobremesa leve e saborosa, ideal para quem busca sabores autênticos.`;
                        break;
                    case 'Mousse de Cupuaçu':
                        textoDescritivo = `Descrição do Mousse de Cupuaçu: O Cupuaçu é uma fruta da Amazônia, parente do cacau, com sabor único e refrescante. O Mousse de Cupuaçu é uma sobremesa cremosa e aveludada, muito apreciada na culinária paraense.`;
                        break;
                }

                if (target.tagName === 'H4') {
                    textoDescritivo += ` Preço: ${target.textContent}`;
                } else if (target.tagName === 'BUTTON') {
                    textoDescritivo += ` Você escolheu pedir o ${pratoNome}.`;
                }

                descricao.textContent = textoDescritivo;  
                descricao.style.display =  'block';
            }
        });
    });
});



//produtos.html
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item-cardapio');
    const descricao = document.getElementById('descricao');

    items.forEach(item => {
        item.addEventListener('click', function(event) {
            const target = event.target;
            let textoDescritivo = '';

            if (target.tagName === 'H3' || target.tagName === 'H4' || target.tagName === 'BUTTON') {
                const pratoNome = item.querySelector('h3').textContent;

                switch(pratoNome) {
                    case 'Açai (Polpa Pura)':
                        textoDescritivo = `Descrição do Açaí (Polpa Pura): Polpa pura de açaí, perfeita para energizar o seu dia.`;
                        break;
                    case 'Farinha de Tapioca':
                        textoDescritivo = `Descrição da Farinha de Tapioca: Ideal para preparar deliciosos pratos típicos da culinária brasileira.`;
                        break;
                    case 'Farinha de Bragança':
                        textoDescritivo = `Descrição da Farinha de Bragança: Farinha tradicional de Bragança, conhecida por sua qualidade e sabor.`;
                        break;
                    case 'Maniva':
                        textoDescritivo = `Descrição da Maniva: Ingrediente essencial para o preparo da maniçoba, prato típico da culinária paraense.`;
                        break;
                }

                if (target.tagName === 'H4') {
                    textoDescritivo += ` Preço: ${target.textContent}`;
                } else if (target.tagName === 'BUTTON') {
                    textoDescritivo += ` Você escolheu pedir o ${pratoNome}.`;
                }

                descricao.textContent = textoDescritivo;
                descricao.style.display = 'block';
            }
        });
    });
});