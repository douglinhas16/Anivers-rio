const messages = {
    3: "Oii tudo bem boaaa noite espero que essas mensagens te deixem mais feliz até o melhor dia desse ano vulgo dia 21 quer dizer 20👀 te amo velhinha. Vamos 21 fazer um jogo se 21 você pensar no mesmo 21 número que eu escrevo e 21 você me 21 dá um beijão não vale mentir tá 21.",
    4: "Oiiii tudo bemmmm como foi a prova arrasou com ctz !! vc é a melhor do mundo ❤️ falta pouco emmm hehehe tá animada eu tô muito queria te dizer que você é uma garota incrível e eu amo você muito.",
    5: "Oi gatinha como vc está tudo bem? prova difícil? Espero que esteja bemmm. Vai fazer 18 aninhosssss tô muito feliz por você e pela pessoa incrível que você está se tornando viu? Obrigado por estar ao meu lado.",
    6: "Opaaaa não vai me ver hj né? Se eu fosse vc me chamava pra sair. Espero que não brigue comigo! Aiai, já tá pensando em roubar um carro? Enfim, só vim passar aqui pra falar que todo dia penso em você e lembro do seu aniversário.",
    7: "Oiii bom dia ou boa tarde ou boa noite!! Tô falando com amor da minha vida??? Amo você o tanto que você ama Taylor Swift e melhor do que nos filmes.",
    8: "Oiii amor tudo bem?? Sabia que você é a melhor pessoa do mundo? Feliz final de semanaaaa! Se você fosse um livro, você seria um livro de romance que eu amaria ler todos os dias. Te amo!",
    9: "Oiiii tudo bemmm? Como vc está no dia 9 veiii? Você virou meu motivo de acordar, viver o meu dia e até dormir pra poder te ver logo. Espero que possa fazer seu dia ser tão importante quanto você é pra mim.",
    10: "Carambaaaaa falta 10 diaaas! Você não está preparada pro que vai ganhar, pode confiar. Você está bem? Fale comigo amoré saiba que você é a melhor do mundo.",
    11: `
        Falta 9 dias! Vamos fazer um jogo de novo. Aqui estão as perguntas:
        <div class="question" onclick="toggleAnswer('answer11')">Comida favorita?</div>
        <div id="answer11" class="answer">Purê com carne.</div>
        <div class="question" onclick="toggleAnswer('answer12')">Doce favorito?</div>
        <div id="answer12" class="answer">Chocolate.</div>
        <div class="question" onclick="toggleAnswer('answer13')">Super-herói favorito?</div>
        <div id="answer13" class="answer">Homem-Aranha.</div>
    `,
    12: `
        Oi Br, vamos jogar de novo! Aqui estão as perguntas:
        <div class="question" onclick="toggleAnswer('answer21')">Qual foi o dia do nosso primeiro beijo?</div>
        <div id="answer21" class="answer">Dia 10 de outubro.</div>
        <div class="question" onclick="toggleAnswer('answer22')">Qual foi mês que você me deu caixinha com mensagens?</div>
        <div id="answer22" class="answer">14 de março.</div>
        <div class="question" onclick="toggleAnswer('answer23')">Nossa primeira conversa?</div>
        <div id="answer23" class="answer">Sobre Sanji.</div>
    `,
    13: "Oiiii linda! Hoje vai ser mais simples, mas saiba que você é maravilhosa e muito importante pra mim. Manda foto pra mim??? Um dos presentes é de uma cantora sua.",
    14: "Bom dia boa tarde boa noite! Já pensou que tá chegando veiiii? Dica do dia: um dos presentes armazena algo.",
    15: "Vei, apenas 5 dias! Momentos finais em você ganha um vale pergunta, mas não vale perguntar nada óbvio. Seja criativa ksks.",
    16: "Hey, how's it going? Just so you know, I love you in every language, my twenty-one.",
    17: "Veiii, tem doce hj emm hehehe! Espero conseguir fazer viu. Adoro tu, amo vc. Te dou uma casa, um filho e um cachorro e um edredom no seu aniversário de 28.",
    18: "Igual sua idade ebaaaaaaaaaa! Falta muito poucoooooooo. Prometo fazer cada aniversário ser melhor que o outro.",
    19: "Oii amor da minha vida?? Já me deu um beijão de despedida? Espero que goste dos presentes! Tentei ser criativo e mudar um pouco.",
    20: "Carambaaaaa, feliz aniversário meu amorrr! Muitas felicidades, espero que você esteja feliz. Te amo, Lari! Será que tem mensagem pro dia 21 hehehe?",
    21: "Olha nosso dia e eu só penso em como eu quero passar muitos ainda ao seu lado. Quero ser o amor da sua vida e que você também queira isso. Queria me desculpar pelas coisas do começo do ano e que você saiba que eu errei muito com você. Se a distância machucar, lembra que nosso amor é maior que isso."
};

const today = new Date().getDate();
const messageDiv = document.getElementById('message');
const countdownDiv = document.getElementById('countdown');

// Função para calcular dias restantes até o dia 20
function calculateDaysUntil(date) {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth(), date);
    const timeDiff = targetDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // converte milissegundos para dias
}

// Função para alternar a exibição da resposta
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.style.display = answerElement.style.display === 'none' || answerElement.style.display === '' ? 'block' : 'none';
}

// Exibe a mensagem do dia e o contador
if (today >= 3 && today <= 21) {
    messageDiv.innerHTML = messages[today];
    const daysUntil20 = calculateDaysUntil(20);
    countdownDiv.textContent = `Faltam ${daysUntil20} dias para o dia 20!`;
} else {
    messageDiv.textContent = "Hoje não há mensagem especial. Aguarde os próximos dias!";
    countdownDiv.textContent = "";
}
