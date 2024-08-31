const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");
   const perguntas=[
    {
        enunciado:"assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue respoder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hipes-realistas.Qualo primeiro pensamento?",
        alternativas:[
        {
            texto:"isso é assustador!",
           afirmacao:"No início ficou com medo do que essa tecnologia pode fazer."
           },
           {
            texto:"isso é maravilhoso!",
            afirmacao:"No início ficou com medo do que essa tecnologia pode fazer."
           
        }
        ]
      },
      {
        enunciado:"Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas:[
            {
                texto:" Ultiliza uma ferramenta de busca na internet que ultiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao:" Conseguiu ultilizar a IA para buscar informações úteis."
            },
            {
                texto:"Escreve o trabalho com base nas conversasque teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },

{
    enunciado:"Após a elaboraçâo do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas:[
        {
            texto:" Defende a ideia de que a IA pode criar novas oprtunidades de emprego e melhorar habilidades humanas.",
            afirmacao:"Vem impulsionando a inovaçâo na área de IA e luta para abrir novos caminhos profissionais com IA."
        },
        {
            texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância  de proteger os trabalhadores.",
            afirmacao:" Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética." 
        }
    ]
},
{
    enunciado:"Ao final da discussão, você precisou  criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas:[
        {
            texto:"Criar uma imagem utilizando uma plataforma de design como o paint.",
            afirmacao:"Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            
        },
        {
            texto:"Criar uma imagem utilizando um gerador de IA.",
            afirmacao:"Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
        }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >=perguntas.leghth) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
        const botaoalternativas = document.createElement("button");
        botaoalternativas.textContent = alternativas.texto;
        botaoalternativas.addEventListener("click", ()=> respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoalternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes=opcaoSelecionada.afirmacao;
    historiaFinal+=afirmacoes+"";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent= "em 2049...";
    textoResultado.textContent=historiaFinal;
    caixaAlternativas.textContent="";
}
mostraPergunta();

        