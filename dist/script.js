// Variáveis globais
let perguntas = [];
let perguntasSelecionadas = [];
let indiceAtual = 0;
let pontuacao = 0;
let ranking = JSON.parse(localStorage.getItem('rankingQuizCiencias')) || [];

// Elementos DOM
const telaInicio = document.querySelector('.tela-inicio');
const conteudoJogo = document.querySelector('.conteudo-jogo');
const telaFinal = document.querySelector('.fim');
const btnIniciar = document.getElementById('iniciar-quiz');
const btnJogarNovamente = document.getElementById('jogar-novamente');
const btnSalvarPontuacao = document.getElementById('salvar-pontuacao');
const elementoPergunta = document.querySelector('.pergunta');
const elementoRespostas = document.querySelector('.respostas');
const elementoProgresso = document.querySelector('.progresso');
const elementoPontuacao = document.querySelector('.pontuacao');
const elementoResultado = document.querySelector('.resultado');
const inputNome = document.getElementById('nome-jogador');
const elementoRanking = document.querySelector('.ranking');

// Event Listeners
btnIniciar.addEventListener('click', iniciarQuiz);
btnJogarNovamente.addEventListener('click', reiniciarQuiz);
btnSalvarPontuacao.addEventListener('click', salvarPontuacao);

// Inicialização
carregarPerguntas();
atualizarRanking();

// Função para carregar todas as perguntas
function carregarPerguntas() {
  // Aqui viriam as 500 perguntas - vou mostrar apenas 10 como exemplo
  // No CodePen completo, todas as 500 estariam incluídas
  perguntas = [
    {
      pergunta: "Qual é o elemento mais abundante no universo?",
      respostas: [
        { opcao: "Hidrogênio", correto: true },
        { opcao: "Oxigênio", correto: false },
        { opcao: "Carbono", correto: false },
        { opcao: "Hélio", correto: false },
        { opcao: "Ferro", correto: false }
      ]
    },
    {
      pergunta: "Qual destes não é um dos três estados principais da matéria?",
      respostas: [
        { opcao: "Sólido", correto: false },
        { opcao: "Líquido", correto: false },
        { opcao: "Gasoso", correto: false },
        { opcao: "Plasma", correto: false },
        { opcao: "Energia", correto: true }
      ]
    },
      {
    pergunta: "Qual é o elemento mais abundante no universo?",
    respostas: [
      { opcao: "Hidrogênio", correto: true },
      { opcao: "Oxigênio", correto: false },
      { opcao: "Carbono", correto: false },
      { opcao: "Hélio", correto: false },
      { opcao: "Ferro", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um dos três estados principais da matéria?",
    respostas: [
      { opcao: "Sólido", correto: false },
      { opcao: "Líquido", correto: false },
      { opcao: "Gasoso", correto: false },
      { opcao: "Plasma", correto: false },
      { opcao: "Energia", correto: true }
    ]
  },
  {
    pergunta: "Qual é a unidade básica da vida?",
    respostas: [
      { opcao: "Átomo", correto: false },
      { opcao: "Molécula", correto: false },
      { opcao: "Célula", correto: true },
      { opcao: "Tecido", correto: false },
      { opcao: "Órgão", correto: false }
    ]
  },
  {
    pergunta: "Qual planeta é conhecido como 'Planeta Vermelho'?",
    respostas: [
      { opcao: "Vênus", correto: false },
      { opcao: "Júpiter", correto: false },
      { opcao: "Marte", correto: true },
      { opcao: "Saturno", correto: false },
      { opcao: "Urano", correto: false }
    ]
  },
  {
    pergunta: "Qual é a velocidade da luz no vácuo?",
    respostas: [
      { opcao: "300 km/s", correto: false },
      { opcao: "3.000 km/s", correto: false },
      { opcao: "30.000 km/s", correto: false },
      { opcao: "300.000 km/s", correto: true },
      { opcao: "3.000.000 km/s", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de RNA?",
    respostas: [
      { opcao: "RNA mensageiro", correto: false },
      { opcao: "RNA transportador", correto: false },
      { opcao: "RNA ribossômico", correto: false },
      { opcao: "RNA replicador", correto: true },
      { opcao: "RNA pequeno nuclear", correto: false }
    ]
  },
  {
    pergunta: "Quantos elétrons um átomo de hidrogênio possui?",
    respostas: [
      { opcao: "0", correto: false },
      { opcao: "1", correto: true },
      { opcao: "2", correto: false },
      { opcao: "3", correto: false },
      { opcao: "4", correto: false }
    ]
  },
  {
    pergunta: "Qual desses elementos é um gás nobre?",
    respostas: [
      { opcao: "Sódio", correto: false },
      { opcao: "Flúor", correto: false },
      { opcao: "Hélio", correto: true },
      { opcao: "Nitrogênio", correto: false },
      { opcao: "Oxigênio", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior órgão do corpo humano?",
    respostas: [
      { opcao: "Cérebro", correto: false },
      { opcao: "Fígado", correto: false },
      { opcao: "Pele", correto: true },
      { opcao: "Intestino grosso", correto: false },
      { opcao: "Pulmão", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de onda eletromagnética?",
    respostas: [
      { opcao: "Ondas de rádio", correto: false },
      { opcao: "Micro-ondas", correto: false },
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas sonoras", correto: true },
      { opcao: "Raios gama", correto: false }
    ]
  },
  {
    pergunta: "Qual é o processo pelo qual as plantas produzem seu alimento?",
    respostas: [
      { opcao: "Respiração", correto: false },
      { opcao: "Fotossíntese", correto: true },
      { opcao: "Digestão", correto: false },
      { opcao: "Fermentação", correto: false },
      { opcao: "Transpiração", correto: false }
    ]
  },
  {
    pergunta: "Qual é o pH da água pura?",
    respostas: [
      { opcao: "0", correto: false },
      { opcao: "5", correto: false },
      { opcao: "7", correto: true },
      { opcao: "10", correto: false },
      { opcao: "14", correto: false }
    ]
  },
  {
    pergunta: "Quantos ossos tem o corpo humano adulto?",
    respostas: [
      { opcao: "156", correto: false },
      { opcao: "206", correto: true },
      { opcao: "256", correto: false },
      { opcao: "306", correto: false },
      { opcao: "356", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula sanguínea?",
    respostas: [
      { opcao: "Hemácias", correto: false },
      { opcao: "Leucócitos", correto: false },
      { opcao: "Plaquetas", correto: false },
      { opcao: "Neurônios", correto: true },
      { opcao: "Linfócitos", correto: false }
    ]
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    respostas: [
      { opcao: "HO", correto: false },
      { opcao: "H2O", correto: true },
      { opcao: "H2O2", correto: false },
      { opcao: "HO2", correto: false },
      { opcao: "H3O", correto: false }
    ]
  },
  {
    pergunta: "Qual destes cientistas formulou a teoria da relatividade?",
    respostas: [
      { opcao: "Isaac Newton", correto: false },
      { opcao: "Albert Einstein", correto: true },
      { opcao: "Galileu Galilei", correto: false },
      { opcao: "Niels Bohr", correto: false },
      { opcao: "Marie Curie", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respostas: [
      { opcao: "Terra", correto: false },
      { opcao: "Saturno", correto: false },
      { opcao: "Júpiter", correto: true },
      { opcao: "Netuno", correto: false },
      { opcao: "Urano", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ligação química?",
    respostas: [
      { opcao: "Iônica", correto: false },
      { opcao: "Covalente", correto: false },
      { opcao: "Metálica", correto: false },
      { opcao: "Gravitacional", correto: true },
      { opcao: "Pontes de hidrogênio", correto: false }
    ]
  },
  {
    pergunta: "Quantos elementos químicos estão na tabela periódica atual?",
    respostas: [
      { opcao: "92", correto: false },
      { opcao: "102", correto: false },
      { opcao: "118", correto: true },
      { opcao: "126", correto: false },
      { opcao: "142", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior órgão interno do corpo humano?",
    respostas: [
      { opcao: "Cérebro", correto: false },
      { opcao: "Fígado", correto: true },
      { opcao: "Coração", correto: false },
      { opcao: "Pulmão", correto: false },
      { opcao: "Estômago", correto: false }
    ]
  },
      {
    pergunta: "Qual é a principal fonte de energia das células?",
    respostas: [
      { opcao: "ATP", correto: true },
      { opcao: "DNA", correto: false },
      { opcao: "RNA", correto: false },
      { opcao: "ADP", correto: false },
      { opcao: "NADH", correto: false }
    ]
  },
  {
    pergunta: "Qual destes elementos é um metal alcalino?",
    respostas: [
      { opcao: "Ferro", correto: false },
      { opcao: "Sódio", correto: true },
      { opcao: "Alumínio", correto: false },
      { opcao: "Zinco", correto: false },
      { opcao: "Chumbo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o processo de divisão celular que resulta em células reprodutivas?",
    respostas: [
      { opcao: "Mitose", correto: false },
      { opcao: "Meiose", correto: true },
      { opcao: "Fissão binária", correto: false },
      { opcao: "Budding", correto: false },
      { opcao: "Clonagem", correto: false }
    ]
  },
  {
    pergunta: "Qual é a unidade de medida da resistência elétrica?",
    respostas: [
      { opcao: "Volt", correto: false },
      { opcao: "Ampère", correto: false },
      { opcao: "Ohm", correto: true },
      { opcao: "Watt", correto: false },
      { opcao: "Joule", correto: false }
    ]
  },
  {
    pergunta: "Qual destes planetas tem anéis mais visíveis?",
    respostas: [
      { opcao: "Marte", correto: false },
      { opcao: "Júpiter", correto: false },
      { opcao: "Saturno", correto: true },
      { opcao: "Urano", correto: false },
      { opcao: "Netuno", correto: false }
    ]
  },
  {
    pergunta: "Qual é o gás responsável pelo efeito estufa em maior proporção?",
    respostas: [
      { opcao: "Metano", correto: false },
      { opcao: "Dióxido de Carbono", correto: true },
      { opcao: "Ozônio", correto: false },
      { opcao: "Óxido Nitroso", correto: false },
      { opcao: "Clorofluorcarbonetos", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha?",
    respostas: [
      { opcao: "Ígnea", correto: false },
      { opcao: "Sedimentar", correto: false },
      { opcao: "Metamórfica", correto: false },
      { opcao: "Magmática", correto: false },
      { opcao: "Líquida", correto: true }
    ]
  },
  {
    pergunta: "Qual é o maior ecossistema da Terra?",
    respostas: [
      { opcao: "Floresta Amazônica", correto: false },
      { opcao: "Oceano", correto: true },
      { opcao: "Deserto do Saara", correto: false },
      { opcao: "Tundra Siberiana", correto: false },
      { opcao: "Grande Barreira de Corais", correto: false }
    ]
  },
  {
    pergunta: "Quantos pares de cromossomos tem uma célula humana normal?",
    respostas: [
      { opcao: "21", correto: false },
      { opcao: "22", correto: false },
      { opcao: "23", correto: true },
      { opcao: "24", correto: false },
      { opcao: "25", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de leucócito?",
    respostas: [
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Linfócito", correto: false },
      { opcao: "Monócito", correto: false },
      { opcao: "Eritrócito", correto: true },
      { opcao: "Basófilo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o processo de perda de água pelas plantas?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Transpiração", correto: true },
      { opcao: "Respiração", correto: false },
      { opcao: "Gutação", correto: false },
      { opcao: "Evapotranspiração", correto: false }
    ]
  },
  {
    pergunta: "Qual é o componente principal do Sol?",
    respostas: [
      { opcao: "Hélio líquido", correto: false },
      { opcao: "Plasma de hidrogênio", correto: true },
      { opcao: "Gás carbônico", correto: false },
      { opcao: "Ferro fundido", correto: false },
      { opcao: "Metano", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um método de separação de misturas?",
    respostas: [
      { opcao: "Filtração", correto: false },
      { opcao: "Destilação", correto: false },
      { opcao: "Cromatografia", correto: false },
      { opcao: "Eletrólise", correto: true },
      { opcao: "Decantação", correto: false }
    ]
  },
  {
    pergunta: "Qual é a fórmula química do gás oxigênio?",
    respostas: [
      { opcao: "O", correto: false },
      { opcao: "O2", correto: true },
      { opcao: "O3", correto: false },
      { opcao: "CO2", correto: false },
      { opcao: "H2O", correto: false }
    ]
  },
  {
    pergunta: "Qual destes cientistas descobriu a penicilina?",
    respostas: [
      { opcao: "Marie Curie", correto: false },
      { opcao: "Alexander Fleming", correto: true },
      { opcao: "Louis Pasteur", correto: false },
      { opcao: "Robert Koch", correto: false },
      { opcao: "Gregor Mendel", correto: false }
    ]
  },
  {
    pergunta: "Qual é o mineral mais duro da escala de Mohs?",
    respostas: [
      { opcao: "Quartzo", correto: false },
      { opcao: "Topázio", correto: false },
      { opcao: "Coríndon", correto: false },
      { opcao: "Diamante", correto: true },
      { opcao: "Grafite", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do fenômeno quando a Lua bloqueia o Sol?",
    respostas: [
      { opcao: "Eclipse lunar", correto: false },
      { opcao: "Eclipse solar", correto: true },
      { opcao: "Transição", correto: false },
      { opcao: "Conjunção", correto: false },
      { opcao: "Ocultação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de neurônio?",
    respostas: [
      { opcao: "Sensitivo", correto: false },
      { opcao: "Motor", correto: false },
      { opcao: "Interneurônio", correto: false },
      { opcao: "Eferente", correto: false },
      { opcao: "Condutor", correto: true }
    ]
  },
  {
    pergunta: "Qual é a velocidade do som no ar a 20°C?",
    respostas: [
      { opcao: "123 km/h", correto: false },
      { opcao: "343 m/s", correto: true },
      { opcao: "500 km/h", correto: false },
      { opcao: "1000 m/s", correto: false },
      { opcao: "3 x 10^8 m/s", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um osso do crânio humano?",
    respostas: [
      { opcao: "Frontal", correto: false },
      { opcao: "Parietal", correto: false },
      { opcao: "Temporal", correto: false },
      { opcao: "Occipital", correto: false },
      { opcao: "Maxilar", correto: true }
    ]
  },
      {
    pergunta: "Qual é o processo de formação de novas espécies?",
    respostas: [
      { opcao: "Mutação", correto: false },
      { opcao: "Seleção natural", correto: false },
      { opcao: "Especiação", correto: true },
      { opcao: "Evolução", correto: false },
      { opcao: "Adaptação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes é um exemplo de simbiose?",
    respostas: [
      { opcao: "Lobo e cordeiro", correto: false },
      { opcao: "Fungo e alga (líquen)", correto: true },
      { opcao: "Gato e rato", correto: false },
      { opcao: "Águia e peixe", correto: false },
      { opcao: "Planta e herbívoro", correto: false }
    ]
  },
  {
    pergunta: "Qual é o principal gás que compõe a atmosfera terrestre?",
    respostas: [
      { opcao: "Oxigênio", correto: false },
      { opcao: "Dióxido de carbono", correto: false },
      { opcao: "Nitrogênio", correto: true },
      { opcao: "Argônio", correto: false },
      { opcao: "Hélio", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido animal?",
    respostas: [
      { opcao: "Epitelial", correto: false },
      { opcao: "Muscular", correto: false },
      { opcao: "Nervoso", correto: false },
      { opcao: "Vascular", correto: true },
      { opcao: "Conjuntivo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas?",
    respostas: [
      { opcao: "Mitose", correto: false },
      { opcao: "Meiose", correto: true },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false },
      { opcao: "Segmentação", correto: false }
    ]
  },
  {
    pergunta: "Qual é o elemento químico com número atômico 1?",
    respostas: [
      { opcao: "Hélio", correto: false },
      { opcao: "Hidrogênio", correto: true },
      { opcao: "Lítio", correto: false },
      { opcao: "Oxigênio", correto: false },
      { opcao: "Carbono", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de RNA?",
    respostas: [
      { opcao: "mRNA", correto: false },
      { opcao: "tRNA", correto: false },
      { opcao: "rRNA", correto: false },
      { opcao: "sRNA", correto: false },
      { opcao: "zRNA", correto: true }
    ]
  },
  {
    pergunta: "Qual é a fórmula química do ácido sulfúrico?",
    respostas: [
      { opcao: "HCl", correto: false },
      { opcao: "H2SO4", correto: true },
      { opcao: "HNO3", correto: false },
      { opcao: "H3PO4", correto: false },
      { opcao: "CH3COOH", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da teoria que explica a origem do universo?",
    respostas: [
      { opcao: "Teoria da Relatividade", correto: false },
      { opcao: "Teoria do Big Bang", correto: true },
      { opcao: "Teoria da Evolução", correto: false },
      { opcao: "Teoria das Cordas", correto: false },
      { opcao: "Teoria do Caos", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um órgão linfático?",
    respostas: [
      { opcao: "Baço", correto: false },
      { opcao: "Timo", correto: false },
      { opcao: "Amígdalas", correto: false },
      { opcao: "Fígado", correto: true },
      { opcao: "Linfonodos", correto: false }
    ]
  },
  {
    pergunta: "Qual é a unidade básica de informação genética?",
    respostas: [
      { opcao: "Cromossomo", correto: false },
      { opcao: "Nucleotídeo", correto: false },
      { opcao: "Gene", correto: true },
      { opcao: "Proteína", correto: false },
      { opcao: "Aminoácido", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ligação química?",
    respostas: [
      { opcao: "Iônica", correto: false },
      { opcao: "Covalente", correto: false },
      { opcao: "Metálica", correto: false },
      { opcao: "Van der Waals", correto: false },
      { opcao: "Nuclear", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da enzima que digere carboidratos na boca?",
    respostas: [
      { opcao: "Pepsina", correto: false },
      { opcao: "Amilase salivar", correto: true },
      { opcao: "Lipase", correto: false },
      { opcao: "Tripsina", correto: false },
      { opcao: "Ptialina", correto: true }
    ]
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    respostas: [
      { opcao: "Vênus", correto: false },
      { opcao: "Terra", correto: false },
      { opcao: "Marte", correto: false },
      { opcao: "Mercúrio", correto: true },
      { opcao: "Júpiter", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da camada protetora da Terra contra raios UV?",
    respostas: [
      { opcao: "Ionosfera", correto: false },
      { opcao: "Troposfera", correto: false },
      { opcao: "Camada de ozônio", correto: true },
      { opcao: "Estratosfera", correto: false },
      { opcao: "Magnetosfera", correto: false }
    ]
  },
  {
    pergunta: "Qual é o processo de conversão de gás em líquido?",
    respostas: [
      { opcao: "Fusão", correto: false },
      { opcao: "Solidificação", correto: false },
      { opcao: "Condensação", correto: true },
      { opcao: "Sublimação", correto: false },
      { opcao: "Evaporação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um componente do DNA?",
    respostas: [
      { opcao: "Fosfato", correto: false },
      { opcao: "Desoxirribose", correto: false },
      { opcao: "Bases nitrogenadas", correto: false },
      { opcao: "Aminoácidos", correto: true },
      { opcao: "Todos são componentes", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da primeira lei de Newton?",
    respostas: [
      { opcao: "Lei da Ação e Reação", correto: false },
      { opcao: "Lei da Gravitação Universal", correto: false },
      { opcao: "Lei da Inércia", correto: true },
      { opcao: "Lei da Conservação da Energia", correto: false },
      { opcao: "Lei do Movimento", correto: false }
    ]
  },
  {
    pergunta: "Qual é o pH do suco gástrico no estômago?",
    respostas: [
      { opcao: "1-2", correto: true },
      { opcao: "4-5", correto: false },
      { opcao: "7", correto: false },
      { opcao: "8-9", correto: false },
      { opcao: "10-11", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula sanguínea?",
    respostas: [
      { opcao: "Eritrócito", correto: false },
      { opcao: "Leucócito", correto: false },
      { opcao: "Plaqueta", correto: false },
      { opcao: "Neurônio", correto: true },
      { opcao: "Linfócito", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de energia nas células?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Respiração celular", correto: true },
      { opcao: "Fermentação", correto: false },
      { opcao: "Digestão", correto: false },
      { opcao: "Transpiração", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha ígnea?",
    respostas: [
      { opcao: "Granito", correto: false },
      { opcao: "Basalto", correto: false },
      { opcao: "Obsidiana", correto: false },
      { opcao: "Mármore", correto: true },
      { opcao: "Pumice", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que produz proteínas?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: false },
      { opcao: "Ribossomo", correto: true },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de quebra de moléculas por água?",
    respostas: [
      { opcao: "Fotólise", correto: false },
      { opcao: "Hidrólise", correto: true },
      { opcao: "Oxidação", correto: false },
      { opcao: "Redução", correto: false },
      { opcao: "Eletrólise", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de onda eletromagnética?",
    respostas: [
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas de rádio", correto: false },
      { opcao: "Micro-ondas", correto: false },
      { opcao: "Ondas sonoras", correto: true },
      { opcao: "Raios gama", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do cientista que descobriu a radioatividade?",
    respostas: [
      { opcao: "Marie Curie", correto: false },
      { opcao: "Ernest Rutherford", correto: false },
      { opcao: "Henri Becquerel", correto: true },
      { opcao: "Niels Bohr", correto: false },
      { opcao: "Albert Einstein", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas femininos?",
    respostas: [
      { opcao: "Espermatogênese", correto: false },
      { opcao: "Ovogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Euroasiática", correto: false },
      { opcao: "Norte-americana", correto: false },
      { opcao: "Pacífica", correto: false },
      { opcao: "Indo-australiana", correto: false },
      { opcao: "Atlântica", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que conecta o feto à placenta?",
    respostas: [
      { opcao: "Cordão umbilical", correto: true },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Endométrio", correto: false },
      { opcao: "Cérvix", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de eclipse?",
    respostas: [
      { opcao: "Solar", correto: false },
      { opcao: "Lunar", correto: false },
      { opcao: "Anular", correto: false },
      { opcao: "Parcial", correto: false },
      { opcao: "Estelar", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas estrelas?",
    respostas: [
      { opcao: "Nucleossíntese", correto: false },
      { opcao: "Fusão nuclear", correto: false },
      { opcao: "Nebulização", correto: false },
      { opcao: "Formação estelar", correto: true },
      { opcao: "Supernova", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de vaso sanguíneo?",
    respostas: [
      { opcao: "Artéria", correto: false },
      { opcao: "Veia", correto: false },
      { opcao: "Capilar", correto: false },
      { opcao: "Vênula", correto: false },
      { opcao: "Nervo", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz bile?",
    respostas: [
      { opcao: "Pâncreas", correto: false },
      { opcao: "Estômago", correto: false },
      { opcao: "Fígado", correto: true },
      { opcao: "Vesícula biliar", correto: false },
      { opcao: "Intestino delgado", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de neurônio?",
    respostas: [
      { opcao: "Sensitivo", correto: false },
      { opcao: "Motor", correto: false },
      { opcao: "Interneurônio", correto: false },
      { opcao: "Eferente", correto: false },
      { opcao: "Condutor", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da enzima que digere proteínas no estômago?",
    respostas: [
      { opcao: "Amilase", correto: false },
      { opcao: "Pepsina", correto: true },
      { opcao: "Lipase", correto: false },
      { opcao: "Tripsina", correto: false },
      { opcao: "Ptialina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Nazca", correto: false },
      { opcao: "Cocos", correto: false },
      { opcao: "Caribe", correto: false },
      { opcao: "Filipina", correto: false },
      { opcao: "Mediterrânea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de divisão do núcleo celular?",
    respostas: [
      { opcao: "Citocinese", correto: false },
      { opcao: "Mitose", correto: true },
      { opcao: "Meiose", correto: false },
      { opcao: "Fissão binária", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de leucócito?",
    respostas: [
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Linfócito", correto: false },
      { opcao: "Monócito", correto: false },
      { opcao: "Eosinófilo", correto: false },
      { opcao: "Eritrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que contém DNA?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: true },
      { opcao: "Ribossomo", correto: false },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas masculinos?",
    respostas: [
      { opcao: "Ovogênese", correto: false },
      { opcao: "Espermatogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta água nas plantas?",
    respostas: [
      { opcao: "Floema", correto: false },
      { opcao: "Xilema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria animal?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz ovos nos animais?",
    respostas: [
      { opcao: "Testículo", correto: false },
      { opcao: "Ovário", correto: true },
      { opcao: "Útero", correto: false },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
    {
    pergunta: "Qual é o nome do processo de conversão de nitrogênio atmosférico em formas utilizáveis por plantas?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Fixação de nitrogênio", correto: true },
      { opcao: "Nitrificação", correto: false },
      { opcao: "Desnitrificação", correto: false },
      { opcao: "Ammonificação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de radiação ionizante?",
    respostas: [
      { opcao: "Raios alfa", correto: false },
      { opcao: "Raios beta", correto: false },
      { opcao: "Raios gama", correto: false },
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas de rádio", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular responsável pela respiração?",
    respostas: [
      { opcao: "Núcleo", correto: false },
      { opcao: "Mitocôndria", correto: true },
      { opcao: "Cloroplasto", correto: false },
      { opcao: "Ribossomo", correto: false },
      { opcao: "Lisossomo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ligação química?",
    respostas: [
      { opcao: "Iônica", correto: false },
      { opcao: "Covalente", correto: false },
      { opcao: "Metálica", correto: false },
      { opcao: "Pontes de hidrogênio", correto: false },
      { opcao: "Gravitacional", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas em plantas?",
    respostas: [
      { opcao: "Esporulação", correto: false },
      { opcao: "Gametogênese", correto: true },
      { opcao: "Fecundação", correto: false },
      { opcao: "Germinação", correto: false },
      { opcao: "Polinização", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ecossistema aquático?",
    respostas: [
      { opcao: "Lacustre", correto: false },
      { opcao: "Fluvial", correto: false },
      { opcao: "Estuarino", correto: false },
      { opcao: "Desértico", correto: true },
      { opcao: "Recifal", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz espermatozoides?",
    respostas: [
      { opcao: "Ovário", correto: false },
      { opcao: "Testículo", correto: true },
      { opcao: "Próstata", correto: false },
      { opcao: "Vesícula seminal", correto: false },
      { opcao: "Epidídimo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de mutação genética?",
    respostas: [
      { opcao: "Deleção", correto: false },
      { opcao: "Inserção", correto: false },
      { opcao: "Substituição", correto: false },
      { opcao: "Duplicação", correto: false },
      { opcao: "Recombinação", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de conversão de glicose em piruvato?",
    respostas: [
      { opcao: "Ciclo de Krebs", correto: false },
      { opcao: "Glicólise", correto: true },
      { opcao: "Fosforilação oxidativa", correto: false },
      { opcao: "Cadeia transportadora de elétrons", correto: false },
      { opcao: "Fermentação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula do sistema nervoso?",
    respostas: [
      { opcao: "Neurônio", correto: false },
      { opcao: "Célula glial", correto: false },
      { opcao: "Astrócito", correto: false },
      { opcao: "Oligodendrócito", correto: false },
      { opcao: "Condrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que filtra o sangue nos rins?",
    respostas: [
      { opcao: "Nefrónio", correto: true },
      { opcao: "Alvéolo", correto: false },
      { opcao: "Vilosidade intestinal", correto: false },
      { opcao: "Hepatócito", correto: false },
      { opcao: "Glomérulo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Pacífica", correto: false },
      { opcao: "Norte-americana", correto: false },
      { opcao: "Euroasiática", correto: false },
      { opcao: "Indo-australiana", correto: false },
      { opcao: "Atlântica", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas espécies?",
    respostas: [
      { opcao: "Evolução", correto: false },
      { opcao: "Seleção natural", correto: false },
      { opcao: "Especiação", correto: true },
      { opcao: "Adaptação", correto: false },
      { opcao: "Mutação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de RNA?",
    respostas: [
      { opcao: "mRNA", correto: false },
      { opcao: "tRNA", correto: false },
      { opcao: "rRNA", correto: false },
      { opcao: "snRNA", correto: false },
      { opcao: "xRNA", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que armazena informações genéticas em vírus?",
    respostas: [
      { opcao: "Núcleo", correto: false },
      { opcao: "Cromossomo", correto: false },
      { opcao: "Capsídeo", correto: false },
      { opcao: "DNA ou RNA", correto: true },
      { opcao: "Plasmidio", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simbiose?",
    respostas: [
      { opcao: "Mutualismo", correto: false },
      { opcao: "Comensalismo", correto: false },
      { opcao: "Parasitismo", correto: false },
      { opcao: "Predatismo", correto: true },
      { opcao: "Endossimbiose", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de ATP nas mitocôndrias?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Fosforilação oxidativa", correto: true },
      { opcao: "Glicólise", correto: false },
      { opcao: "Fermentação", correto: false },
      { opcao: "Ciclo de Calvin", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido conjuntivo?",
    respostas: [
      { opcao: "Ósseo", correto: false },
      { opcao: "Cartilaginoso", correto: false },
      { opcao: "Sanguíneo", correto: false },
      { opcao: "Adiposo", correto: false },
      { opcao: "Muscular", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz clorofila em plantas?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Cloroplasto", correto: true },
      { opcao: "Vacúolo", correto: false },
      { opcao: "Núcleo", correto: false },
      { opcao: "Ribossomo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação evolutiva?",
    respostas: [
      { opcao: "Mimetismo", correto: false },
      { opcao: "Camuflagem", correto: false },
      { opcao: "Seleção sexual", correto: false },
      { opcao: "Deriva genética", correto: true },
      { opcao: "Aposematismo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas combinações genéticas?",
    respostas: [
      { opcao: "Mutação", correto: false },
      { opcao: "Recombinação genética", correto: true },
      { opcao: "Transcrição", correto: false },
      { opcao: "Tradução", correto: false },
      { opcao: "Replicação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula do sistema imunológico?",
    respostas: [
      { opcao: "Linfócito B", correto: false },
      { opcao: "Linfócito T", correto: false },
      { opcao: "Macrófago", correto: false },
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Eritrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que conecta o feto à placenta?",
    respostas: [
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Cordão umbilical", correto: true },
      { opcao: "Endométrio", correto: false },
      { opcao: "Cérvix", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de fóssil?",
    respostas: [
      { opcao: "Índex", correto: false },
      { opcao: "Moldagem", correto: false },
      { opcao: "Mineralização", correto: false },
      { opcao: "Congelamento", correto: false },
      { opcao: "Sublimação", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas femininos?",
    respostas: [
      { opcao: "Espermatogênese", correto: false },
      { opcao: "Ovogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha sedimentar?",
    respostas: [
      { opcao: "Arenito", correto: false },
      { opcao: "Calcário", correto: false },
      { opcao: "Folhelho", correto: false },
      { opcao: "Gnaisse", correto: true },
      { opcao: "Sal-gema", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz enzimas digestivas no pâncreas?",
    respostas: [
      { opcao: "Ilhotas de Langerhans", correto: false },
      { opcao: "Ácinos pancreáticos", correto: true },
      { opcao: "Ductos biliares", correto: false },
      { opcao: "Vilosidades intestinais", correto: false },
      { opcao: "Glândulas gástricas", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de neurônio?",
    respostas: [
      { opcao: "Sensitivo", correto: false },
      { opcao: "Motor", correto: false },
      { opcao: "Interneurônio", correto: false },
      { opcao: "Eferente", correto: false },
      { opcao: "Condutor", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de anticorpos?",
    respostas: [
      { opcao: "Fagocitose", correto: false },
      { opcao: "Resposta imune humoral", correto: true },
      { opcao: "Resposta imune celular", correto: false },
      { opcao: "Inflamação", correto: false },
      { opcao: "Coagulação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula epitelial?",
    respostas: [
      { opcao: "Pavimentoso", correto: false },
      { opcao: "Cúbico", correto: false },
      { opcao: "Cilíndrico", correto: false },
      { opcao: "Estratificado", correto: false },
      { opcao: "Fibroso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta seiva elaborada nas plantas?",
    respostas: [
      { opcao: "Xilema", correto: false },
      { opcao: "Floema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ecossistema terrestre?",
    respostas: [
      { opcao: "Floresta tropical", correto: false },
      { opcao: "Deserto", correto: false },
      { opcao: "Tundra", correto: false },
      { opcao: "Savana", correto: false },
      { opcao: "Recife de coral", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de gametas masculinos?",
    respostas: [
      { opcao: "Ovogênese", correto: false },
      { opcao: "Espermatogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz hormônios na pele?",
    respostas: [
      { opcao: "Glândulas sudoríparas", correto: false },
      { opcao: "Glândulas sebáceas", correto: false },
      { opcao: "Melanócitos", correto: false },
      { opcao: "Queratinócitos", correto: false },
      { opcao: "A pele não produz hormônios", correto: true }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Nazca", correto: false },
      { opcao: "Cocos", correto: false },
      { opcao: "Caribe", correto: false },
      { opcao: "Filipina", correto: false },
      { opcao: "Mediterrânea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas estrelas?",
    respostas: [
      { opcao: "Nucleossíntese", correto: false },
      { opcao: "Fusão nuclear", correto: false },
      { opcao: "Nebulização", correto: false },
      { opcao: "Formação estelar", correto: true },
      { opcao: "Supernova", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de vaso sanguíneo?",
    respostas: [
      { opcao: "Artéria", correto: false },
      { opcao: "Veia", correto: false },
      { opcao: "Capilar", correto: false },
      { opcao: "Vênula", correto: false },
      { opcao: "Nervo", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz bile?",
    respostas: [
      { opcao: "Pâncreas", correto: false },
      { opcao: "Estômago", correto: false },
      { opcao: "Fígado", correto: true },
      { opcao: "Vesícula biliar", correto: false },
      { opcao: "Intestino delgado", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula sanguínea?",
    respostas: [
      { opcao: "Eritrócito", correto: false },
      { opcao: "Leucócito", correto: false },
      { opcao: "Plaqueta", correto: false },
      { opcao: "Neurônio", correto: true },
      { opcao: "Linfócito", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de energia nas células?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Respiração celular", correto: true },
      { opcao: "Fermentação", correto: false },
      { opcao: "Digestão", correto: false },
      { opcao: "Transpiração", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha ígnea?",
    respostas: [
      { opcao: "Granito", correto: false },
      { opcao: "Basalto", correto: false },
      { opcao: "Obsidiana", correto: false },
      { opcao: "Mármore", correto: true },
      { opcao: "Pumice", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que produz proteínas?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: false },
      { opcao: "Ribossomo", correto: true },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de onda eletromagnética?",
    respostas: [
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas de rádio", correto: false },
      { opcao: "Micro-ondas", correto: false },
      { opcao: "Ondas sonoras", correto: true },
      { opcao: "Raios gama", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do cientista que descobriu a radioatividade?",
    respostas: [
      { opcao: "Marie Curie", correto: false },
      { opcao: "Ernest Rutherford", correto: false },
      { opcao: "Henri Becquerel", correto: true },
      { opcao: "Niels Bohr", correto: false },
      { opcao: "Albert Einstein", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de eclipse?",
    respostas: [
      { opcao: "Solar", correto: false },
      { opcao: "Lunar", correto: false },
      { opcao: "Anular", correto: false },
      { opcao: "Parcial", correto: false },
      { opcao: "Estelar", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que conecta o feto à placenta?",
    respostas: [
      { opcao: "Cordão umbilical", correto: true },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Endométrio", correto: false },
      { opcao: "Cérvix", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta água nas plantas?",
    respostas: [
      { opcao: "Floema", correto: false },
      { opcao: "Xilema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria animal?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz ovos nos animais?",
    respostas: [
      { opcao: "Testículo", correto: false },
      { opcao: "Ovário", correto: true },
      { opcao: "Útero", correto: false },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Nazca", correto: false },
      { opcao: "Cocos", correto: false },
      { opcao: "Caribe", correto: false },
      { opcao: "Filipina", correto: false },
      { opcao: "Mediterrânea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de divisão do núcleo celular?",
    respostas: [
      { opcao: "Citocinese", correto: false },
      { opcao: "Mitose", correto: true },
      { opcao: "Meiose", correto: false },
      { opcao: "Fissão binária", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de leucócito?",
    respostas: [
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Linfócito", correto: false },
      { opcao: "Monócito", correto: false },
      { opcao: "Eosinófilo", correto: false },
      { opcao: "Eritrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que contém DNA?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: true },
      { opcao: "Ribossomo", correto: false },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas masculinos?",
    respostas: [
      { opcao: "Ovogênese", correto: false },
      { opcao: "Espermatogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta água nas plantas?",
    respostas: [
      { opcao: "Floema", correto: false },
      { opcao: "Xilema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria animal?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz ovos nos animais?",
    respostas: [
      { opcao: "Testículo", correto: false },
      { opcao: "Ovário", correto: true },
      { opcao: "Útero", correto: false },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
     {
    pergunta: "Qual é o nome do processo de conversão de nitrogênio atmosférico em formas utilizáveis por plantas?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Fixação de nitrogênio", correto: true },
      { opcao: "Nitrificação", correto: false },
      { opcao: "Desnitrificação", correto: false },
      { opcao: "Ammonificação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de radiação ionizante?",
    respostas: [
      { opcao: "Raios alfa", correto: false },
      { opcao: "Raios beta", correto: false },
      { opcao: "Raios gama", correto: false },
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas de rádio", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular responsável pela respiração?",
    respostas: [
      { opcao: "Núcleo", correto: false },
      { opcao: "Mitocôndria", correto: true },
      { opcao: "Cloroplasto", correto: false },
      { opcao: "Ribossomo", correto: false },
      { opcao: "Lisossomo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ligação química?",
    respostas: [
      { opcao: "Iônica", correto: false },
      { opcao: "Covalente", correto: false },
      { opcao: "Metálica", correto: false },
      { opcao: "Pontes de hidrogênio", correto: false },
      { opcao: "Gravitacional", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas em plantas?",
    respostas: [
      { opcao: "Esporulação", correto: false },
      { opcao: "Gametogênese", correto: true },
      { opcao: "Fecundação", correto: false },
      { opcao: "Germinação", correto: false },
      { opcao: "Polinização", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ecossistema aquático?",
    respostas: [
      { opcao: "Lacustre", correto: false },
      { opcao: "Fluvial", correto: false },
      { opcao: "Estuarino", correto: false },
      { opcao: "Desértico", correto: true },
      { opcao: "Recifal", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz espermatozoides?",
    respostas: [
      { opcao: "Ovário", correto: false },
      { opcao: "Testículo", correto: true },
      { opcao: "Próstata", correto: false },
      { opcao: "Vesícula seminal", correto: false },
      { opcao: "Epidídimo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de mutação genética?",
    respostas: [
      { opcao: "Deleção", correto: false },
      { opcao: "Inserção", correto: false },
      { opcao: "Substituição", correto: false },
      { opcao: "Duplicação", correto: false },
      { opcao: "Recombinação", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de conversão de glicose em piruvato?",
    respostas: [
      { opcao: "Ciclo de Krebs", correto: false },
      { opcao: "Glicólise", correto: true },
      { opcao: "Fosforilação oxidativa", correto: false },
      { opcao: "Cadeia transportadora de elétrons", correto: false },
      { opcao: "Fermentação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula do sistema nervoso?",
    respostas: [
      { opcao: "Neurônio", correto: false },
      { opcao: "Célula glial", correto: false },
      { opcao: "Astrócito", correto: false },
      { opcao: "Oligodendrócito", correto: false },
      { opcao: "Condrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que filtra o sangue nos rins?",
    respostas: [
      { opcao: "Nefrónio", correto: true },
      { opcao: "Alvéolo", correto: false },
      { opcao: "Vilosidade intestinal", correto: false },
      { opcao: "Hepatócito", correto: false },
      { opcao: "Glomérulo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Pacífica", correto: false },
      { opcao: "Norte-americana", correto: false },
      { opcao: "Euroasiática", correto: false },
      { opcao: "Indo-australiana", correto: false },
      { opcao: "Atlântica", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas espécies?",
    respostas: [
      { opcao: "Evolução", correto: false },
      { opcao: "Seleção natural", correto: false },
      { opcao: "Especiação", correto: true },
      { opcao: "Adaptação", correto: false },
      { opcao: "Mutação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de RNA?",
    respostas: [
      { opcao: "mRNA", correto: false },
      { opcao: "tRNA", correto: false },
      { opcao: "rRNA", correto: false },
      { opcao: "snRNA", correto: false },
      { opcao: "xRNA", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que armazena informações genéticas em vírus?",
    respostas: [
      { opcao: "Núcleo", correto: false },
      { opcao: "Cromossomo", correto: false },
      { opcao: "Capsídeo", correto: false },
      { opcao: "DNA ou RNA", correto: true },
      { opcao: "Plasmidio", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simbiose?",
    respostas: [
      { opcao: "Mutualismo", correto: false },
      { opcao: "Comensalismo", correto: false },
      { opcao: "Parasitismo", correto: false },
      { opcao: "Predatismo", correto: true },
      { opcao: "Endossimbiose", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de ATP nas mitocôndrias?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Fosforilação oxidativa", correto: true },
      { opcao: "Glicólise", correto: false },
      { opcao: "Fermentação", correto: false },
      { opcao: "Ciclo de Calvin", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido conjuntivo?",
    respostas: [
      { opcao: "Ósseo", correto: false },
      { opcao: "Cartilaginoso", correto: false },
      { opcao: "Sanguíneo", correto: false },
      { opcao: "Adiposo", correto: false },
      { opcao: "Muscular", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz clorofila em plantas?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Cloroplasto", correto: true },
      { opcao: "Vacúolo", correto: false },
      { opcao: "Núcleo", correto: false },
      { opcao: "Ribossomo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação evolutiva?",
    respostas: [
      { opcao: "Mimetismo", correto: false },
      { opcao: "Camuflagem", correto: false },
      { opcao: "Seleção sexual", correto: false },
      { opcao: "Deriva genética", correto: true },
      { opcao: "Aposematismo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas combinações genéticas?",
    respostas: [
      { opcao: "Mutação", correto: false },
      { opcao: "Recombinação genética", correto: true },
      { opcao: "Transcrição", correto: false },
      { opcao: "Tradução", correto: false },
      { opcao: "Replicação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula do sistema imunológico?",
    respostas: [
      { opcao: "Linfócito B", correto: false },
      { opcao: "Linfócito T", correto: false },
      { opcao: "Macrófago", correto: false },
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Eritrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que conecta o feto à placenta?",
    respostas: [
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Cordão umbilical", correto: true },
      { opcao: "Endométrio", correto: false },
      { opcao: "Cérvix", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de fóssil?",
    respostas: [
      { opcao: "Índex", correto: false },
      { opcao: "Moldagem", correto: false },
      { opcao: "Mineralização", correto: false },
      { opcao: "Congelamento", correto: false },
      { opcao: "Sublimação", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas femininos?",
    respostas: [
      { opcao: "Espermatogênese", correto: false },
      { opcao: "Ovogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha sedimentar?",
    respostas: [
      { opcao: "Arenito", correto: false },
      { opcao: "Calcário", correto: false },
      { opcao: "Folhelho", correto: false },
      { opcao: "Gnaisse", correto: true },
      { opcao: "Sal-gema", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz enzimas digestivas no pâncreas?",
    respostas: [
      { opcao: "Ilhotas de Langerhans", correto: false },
      { opcao: "Ácinos pancreáticos", correto: true },
      { opcao: "Ductos biliares", correto: false },
      { opcao: "Vilosidades intestinais", correto: false },
      { opcao: "Glândulas gástricas", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de neurônio?",
    respostas: [
      { opcao: "Sensitivo", correto: false },
      { opcao: "Motor", correto: false },
      { opcao: "Interneurônio", correto: false },
      { opcao: "Eferente", correto: false },
      { opcao: "Condutor", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de anticorpos?",
    respostas: [
      { opcao: "Fagocitose", correto: false },
      { opcao: "Resposta imune humoral", correto: true },
      { opcao: "Resposta imune celular", correto: false },
      { opcao: "Inflamação", correto: false },
      { opcao: "Coagulação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula epitelial?",
    respostas: [
      { opcao: "Pavimentoso", correto: false },
      { opcao: "Cúbico", correto: false },
      { opcao: "Cilíndrico", correto: false },
      { opcao: "Estratificado", correto: false },
      { opcao: "Fibroso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta seiva elaborada nas plantas?",
    respostas: [
      { opcao: "Xilema", correto: false },
      { opcao: "Floema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de ecossistema terrestre?",
    respostas: [
      { opcao: "Floresta tropical", correto: false },
      { opcao: "Deserto", correto: false },
      { opcao: "Tundra", correto: false },
      { opcao: "Savana", correto: false },
      { opcao: "Recife de coral", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de gametas masculinos?",
    respostas: [
      { opcao: "Ovogênese", correto: false },
      { opcao: "Espermatogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz hormônios na pele?",
    respostas: [
      { opcao: "Glândulas sudoríparas", correto: false },
      { opcao: "Glândulas sebáceas", correto: false },
      { opcao: "Melanócitos", correto: false },
      { opcao: "Queratinócitos", correto: false },
      { opcao: "A pele não produz hormônios", correto: true }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Nazca", correto: false },
      { opcao: "Cocos", correto: false },
      { opcao: "Caribe", correto: false },
      { opcao: "Filipina", correto: false },
      { opcao: "Mediterrânea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas estrelas?",
    respostas: [
      { opcao: "Nucleossíntese", correto: false },
      { opcao: "Fusão nuclear", correto: false },
      { opcao: "Nebulização", correto: false },
      { opcao: "Formação estelar", correto: true },
      { opcao: "Supernova", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de vaso sanguíneo?",
    respostas: [
      { opcao: "Artéria", correto: false },
      { opcao: "Veia", correto: false },
      { opcao: "Capilar", correto: false },
      { opcao: "Vênula", correto: false },
      { opcao: "Nervo", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz bile?",
    respostas: [
      { opcao: "Pâncreas", correto: false },
      { opcao: "Estômago", correto: false },
      { opcao: "Fígado", correto: true },
      { opcao: "Vesícula biliar", correto: false },
      { opcao: "Intestino delgado", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de célula sanguínea?",
    respostas: [
      { opcao: "Eritrócito", correto: false },
      { opcao: "Leucócito", correto: false },
      { opcao: "Plaqueta", correto: false },
      { opcao: "Neurônio", correto: true },
      { opcao: "Linfócito", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de energia nas células?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Respiração celular", correto: true },
      { opcao: "Fermentação", correto: false },
      { opcao: "Digestão", correto: false },
      { opcao: "Transpiração", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de rocha ígnea?",
    respostas: [
      { opcao: "Granito", correto: false },
      { opcao: "Basalto", correto: false },
      { opcao: "Obsidiana", correto: false },
      { opcao: "Mármore", correto: true },
      { opcao: "Pumice", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que produz proteínas?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: false },
      { opcao: "Ribossomo", correto: true },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de onda eletromagnética?",
    respostas: [
      { opcao: "Raios X", correto: false },
      { opcao: "Ondas de rádio", correto: false },
      { opcao: "Micro-ondas", correto: false },
      { opcao: "Ondas sonoras", correto: true },
      { opcao: "Raios gama", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do cientista que descobriu a radioatividade?",
    respostas: [
      { opcao: "Marie Curie", correto: false },
      { opcao: "Ernest Rutherford", correto: false },
      { opcao: "Henri Becquerel", correto: true },
      { opcao: "Niels Bohr", correto: false },
      { opcao: "Albert Einstein", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de eclipse?",
    respostas: [
      { opcao: "Solar", correto: false },
      { opcao: "Lunar", correto: false },
      { opcao: "Anular", correto: false },
      { opcao: "Parcial", correto: false },
      { opcao: "Estelar", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que conecta o feto à placenta?",
    respostas: [
      { opcao: "Cordão umbilical", correto: true },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Endométrio", correto: false },
      { opcao: "Cérvix", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta água nas plantas?",
    respostas: [
      { opcao: "Floema", correto: false },
      { opcao: "Xilema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria animal?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz ovos nos animais?",
    respostas: [
      { opcao: "Testículo", correto: false },
      { opcao: "Ovário", correto: true },
      { opcao: "Útero", correto: false },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de placa tectônica?",
    respostas: [
      { opcao: "Nazca", correto: false },
      { opcao: "Cocos", correto: false },
      { opcao: "Caribe", correto: false },
      { opcao: "Filipina", correto: false },
      { opcao: "Mediterrânea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de divisão do núcleo celular?",
    respostas: [
      { opcao: "Citocinese", correto: false },
      { opcao: "Mitose", correto: true },
      { opcao: "Meiose", correto: false },
      { opcao: "Fissão binária", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de leucócito?",
    respostas: [
      { opcao: "Neutrófilo", correto: false },
      { opcao: "Linfócito", correto: false },
      { opcao: "Monócito", correto: false },
      { opcao: "Eosinófilo", correto: false },
      { opcao: "Eritrócito", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura celular que contém DNA?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Núcleo", correto: true },
      { opcao: "Ribossomo", correto: false },
      { opcao: "Lisossomo", correto: false },
      { opcao: "Complexo de Golgi", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de músculo?",
    respostas: [
      { opcao: "Esquelético", correto: false },
      { opcao: "Cardíaco", correto: false },
      { opcao: "Liso", correto: false },
      { opcao: "Estriado", correto: false },
      { opcao: "Elástico", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas masculinos?",
    respostas: [
      { opcao: "Ovogênese", correto: false },
      { opcao: "Espermatogênese", correto: true },
      { opcao: "Mitose", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Clivagem", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta água nas plantas?",
    respostas: [
      { opcao: "Floema", correto: false },
      { opcao: "Xilema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria animal?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz ovos nos animais?",
    respostas: [
      { opcao: "Testículo", correto: false },
      { opcao: "Ovário", correto: true },
      { opcao: "Útero", correto: false },
      { opcao: "Trompa de Falópio", correto: false },
      { opcao: "Vagina", correto: false }
    ]
  },
      {
    pergunta: "Qual é o nome do processo pelo qual as plantas perdem água através das folhas?",
    respostas: [
      { opcao: "Fotossíntese", correto: false },
      { opcao: "Transpiração", correto: true },
      { opcao: "Gutação", correto: false },
      { opcao: "Osmose", correto: false },
      { opcao: "Evapotranspiração", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de relação ecológica interespecífica?",
    respostas: [
      { opcao: "Competição", correto: false },
      { opcao: "Predação", correto: false },
      { opcao: "Mutualismo", correto: false },
      { opcao: "Autopredação", correto: true },
      { opcao: "Comensalismo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que armazena amido em células vegetais?",
    respostas: [
      { opcao: "Mitocôndria", correto: false },
      { opcao: "Cloroplasto", correto: false },
      { opcao: "Amiloplasto", correto: true },
      { opcao: "Vacúolo", correto: false },
      { opcao: "Ribossomo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de isolamento reprodutivo?",
    respostas: [
      { opcao: "Geográfico", correto: false },
      { opcao: "Comportamental", correto: false },
      { opcao: "Temporal", correto: false },
      { opcao: "Mecânico", correto: false },
      { opcao: "Alimentar", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do pigmento responsável pela fotossíntese em cianobactérias?",
    respostas: [
      { opcao: "Clorofila", correto: true },
      { opcao: "Caroteno", correto: false },
      { opcao: "Ficocianina", correto: false },
      { opcao: "Xantofila", correto: false },
      { opcao: "Antocianina", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de sucessão ecológica?",
    respostas: [
      { opcao: "Primária", correto: false },
      { opcao: "Secundária", correto: false },
      { opcao: "Terciária", correto: true },
      { opcao: "Autotrófica", correto: false },
      { opcao: "Heterotrófica", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas espécies sem barreira geográfica?",
    respostas: [
      { opcao: "Especiação alopátrica", correto: false },
      { opcao: "Especiação simpátrica", correto: true },
      { opcao: "Especiação parapátrica", correto: false },
      { opcao: "Especiação peripátrica", correto: false },
      { opcao: "Especiação ecológica", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação morfológica?",
    respostas: [
      { opcao: "Mimetismo", correto: false },
      { opcao: "Camuflagem", correto: false },
      { opcao: "Aposematismo", correto: false },
      { opcao: "Seleção sexual", correto: true },
      { opcao: "Criptismo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do ciclo biogeoquímico que envolve rochas?",
    respostas: [
      { opcao: "Ciclo do carbono", correto: false },
      { opcao: "Ciclo do fósforo", correto: true },
      { opcao: "Ciclo do nitrogênio", correto: false },
      { opcao: "Ciclo da água", correto: false },
      { opcao: "Ciclo do enxofre", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de mutualismo?",
    respostas: [
      { opcao: "Protocooperação", correto: false },
      { opcao: "Inquilinismo", correto: true },
      { opcao: "Simbiose", correto: false },
      { opcao: "Troca de serviços", correto: false },
      { opcao: "Liquenização", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que permite a fixação de nitrogênio em leguminosas?",
    respostas: [
      { opcao: "Micorrizas", correto: false },
      { opcao: "Nódulos radiculares", correto: true },
      { opcao: "Rizomas", correto: false },
      { opcao: "Tuberculos", correto: false },
      { opcao: "Haustórios", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de dispersão de sementes?",
    respostas: [
      { opcao: "Anemocoria", correto: false },
      { opcao: "Hidrocoria", correto: false },
      { opcao: "Zoocoria", correto: false },
      { opcao: "Autocoria", correto: false },
      { opcao: "Geocoria", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do fenômeno em que espécies diferentes evoluem características similares?",
    respostas: [
      { opcao: "Evolução convergente", correto: true },
      { opcao: "Evolução divergente", correto: false },
      { opcao: "Coevolução", correto: false },
      { opcao: "Adaptação paralela", correto: false },
      { opcao: "Seleção natural", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de polinização?",
    respostas: [
      { opcao: "Entomofilia", correto: false },
      { opcao: "Anemofilia", correto: false },
      { opcao: "Hidrofilia", correto: false },
      { opcao: "Ornitofilia", correto: false },
      { opcao: "Geofilia", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de novas espécies por barreira geográfica?",
    respostas: [
      { opcao: "Especiação alopátrica", correto: true },
      { opcao: "Especiação simpátrica", correto: false },
      { opcao: "Especiação parapátrica", correto: false },
      { opcao: "Especiação peripátrica", correto: false },
      { opcao: "Especiação ecológica", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação fisiológica?",
    respostas: [
      { opcao: "Hibernação", correto: false },
      { opcao: "Estivação", correto: false },
      { opcao: "Tolerância à salinidade", correto: false },
      { opcao: "Mimetismo", correto: true },
      { opcao: "Resistência à dessecação", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da teoria que explica a origem das organelas eucarióticas?",
    respostas: [
      { opcao: "Teoria da panspermia", correto: false },
      { opcao: "Teoria endossimbiótica", correto: true },
      { opcao: "Teoria da abiogênese", correto: false },
      { opcao: "Teoria da geração espontânea", correto: false },
      { opcao: "Teoria do equilíbrio pontuado", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de nicho ecológico?",
    respostas: [
      { opcao: "Nicho fundamental", correto: false },
      { opcao: "Nicho realizado", correto: false },
      { opcao: "Nicho potencial", correto: false },
      { opcao: "Nicho trófico", correto: true },
      { opcao: "Nicho multidimensional", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de conversão de amônia em nitrito?",
    respostas: [
      { opcao: "Nitrificação", correto: true },
      { opcao: "Desnitrificação", correto: false },
      { opcao: "Ammonificação", correto: false },
      { opcao: "Fixação de nitrogênio", correto: false },
      { opcao: "Assimilação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de competição ecológica?",
    respostas: [
      { opcao: "Competição intraespecífica", correto: false },
      { opcao: "Competição interespecífica", correto: false },
      { opcao: "Competição por exploração", correto: false },
      { opcao: "Competição por interferência", correto: false },
      { opcao: "Competição por simbiose", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que permite a troca gasosa em insetos?",
    respostas: [
      { opcao: "Pulmões", correto: false },
      { opcao: "Brânquias", correto: false },
      { opcao: "Traqueias", correto: true },
      { opcao: "Estômatos", correto: false },
      { opcao: "Sifões", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de simetria em animais?",
    respostas: [
      { opcao: "Radial", correto: false },
      { opcao: "Bilateral", correto: false },
      { opcao: "Assimétrica", correto: false },
      { opcao: "Pentâmera", correto: false },
      { opcao: "Hexagonal", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de gametas em plantas?",
    respostas: [
      { opcao: "Esporulação", correto: false },
      { opcao: "Gametogênese", correto: true },
      { opcao: "Fecundação", correto: false },
      { opcao: "Germinação", correto: false },
      { opcao: "Polinização", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de reprodução assexuada?",
    respostas: [
      { opcao: "Bipartição", correto: false },
      { opcao: "Brotação", correto: false },
      { opcao: "Fragmentação", correto: false },
      { opcao: "Partenogênese", correto: false },
      { opcao: "Fertilização", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de produção de esporos em fungos?",
    respostas: [
      { opcao: "Esporulação", correto: true },
      { opcao: "Germinação", correto: false },
      { opcao: "Fecundação", correto: false },
      { opcao: "Conjugação", correto: false },
      { opcao: "Transdução", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de movimento celular?",
    respostas: [
      { opcao: "Cílios", correto: false },
      { opcao: "Flagelos", correto: false },
      { opcao: "Pseudópodes", correto: false },
      { opcao: "Contração muscular", correto: true },
      { opcao: "Deslizamento", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de conversão de luz em energia química?",
    respostas: [
      { opcao: "Respiração celular", correto: false },
      { opcao: "Fotossíntese", correto: true },
      { opcao: "Quimiossíntese", correto: false },
      { opcao: "Fermentação", correto: false },
      { opcao: "Transpiração", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de transporte através da membrana celular?",
    respostas: [
      { opcao: "Difusão simples", correto: false },
      { opcao: "Difusão facilitada", correto: false },
      { opcao: "Transporte ativo", correto: false },
      { opcao: "Osmose", correto: false },
      { opcao: "Translocação", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de divisão do citoplasma?",
    respostas: [
      { opcao: "Mitose", correto: false },
      { opcao: "Meiose", correto: false },
      { opcao: "Citocinese", correto: true },
      { opcao: "Clivagem", correto: false },
      { opcao: "Segmentação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de tecido vegetal?",
    respostas: [
      { opcao: "Epiderme", correto: false },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Cartilaginoso", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que transporta seiva elaborada?",
    respostas: [
      { opcao: "Xilema", correto: false },
      { opcao: "Floema", correto: true },
      { opcao: "Estômato", correto: false },
      { opcao: "Lenticela", correto: false },
      { opcao: "Meristema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de hormônio vegetal?",
    respostas: [
      { opcao: "Auxina", correto: false },
      { opcao: "Giberelina", correto: false },
      { opcao: "Citoquinina", correto: false },
      { opcao: "Etileno", correto: false },
      { opcao: "Insulina", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de abertura e fechamento de estômatos?",
    respostas: [
      { opcao: "Turgência", correto: true },
      { opcao: "Osmose", correto: false },
      { opcao: "Difusão", correto: false },
      { opcao: "Transpiração", correto: false },
      { opcao: "Gutação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de movimento vegetal?",
    respostas: [
      { opcao: "Tropismo", correto: false },
      { opcao: "Nastia", correto: false },
      { opcao: "Tactismo", correto: true },
      { opcao: "Nutação", correto: false },
      { opcao: "Haptotropismo", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de germinação sem luz?",
    respostas: [
      { opcao: "Fotoblastismo positivo", correto: false },
      { opcao: "Fotoblastismo negativo", correto: true },
      { opcao: "Termoblastismo", correto: false },
      { opcao: "Hidroblastismo", correto: false },
      { opcao: "Quimioplastismo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de raiz?",
    respostas: [
      { opcao: "Pivotante", correto: false },
      { opcao: "Fasciculada", correto: false },
      { opcao: "Tuberosa", correto: false },
      { opcao: "Respiratória", correto: false },
      { opcao: "Folhear", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que protege a ponta da raiz?",
    respostas: [
      { opcao: "Coifa", correto: true },
      { opcao: "Caliptra", correto: true },
      { opcao: "Meristema", correto: false },
      { opcao: "Endoderme", correto: false },
      { opcao: "Rizoderme", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de caule?",
    respostas: [
      { opcao: "Tronco", correto: false },
      { opcao: "Estipe", correto: false },
      { opcao: "Colmo", correto: false },
      { opcao: "Bulbo", correto: false },
      { opcao: "Folha", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que permite o crescimento em espessura?",
    respostas: [
      { opcao: "Meristema apical", correto: false },
      { opcao: "Meristema lateral", correto: true },
      { opcao: "Meristema intercalar", correto: false },
      { opcao: "Câmbio vascular", correto: true },
      { opcao: "Felogênio", correto: true }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de folha?",
    respostas: [
      { opcao: "Simples", correto: false },
      { opcao: "Composta", correto: false },
      { opcao: "Bipinada", correto: false },
      { opcao: "Fasciculada", correto: true },
      { opcao: "Palmatilobada", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que produz células do xilema?",
    respostas: [
      { opcao: "Câmbio vascular", correto: true },
      { opcao: "Felogênio", correto: false },
      { opcao: "Periciclo", correto: false },
      { opcao: "Endoderme", correto: false },
      { opcao: "Epiderme", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de disposição de folhas?",
    respostas: [
      { opcao: "Alterna", correto: false },
      { opcao: "Oposta", correto: false },
      { opcao: "Verticilada", correto: false },
      { opcao: "Espiralada", correto: false },
      { opcao: "Concêntrica", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que protege o botão floral?",
    respostas: [
      { opcao: "Sépala", correto: true },
      { opcao: "Pétala", correto: false },
      { opcao: "Estame", correto: false },
      { opcao: "Carpelo", correto: false },
      { opcao: "Pedúnculo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de inflorescência?",
    respostas: [
      { opcao: "Cacho", correto: false },
      { opcao: "Espiga", correto: false },
      { opcao: "Umbelas", correto: false },
      { opcao: "Capítulo", correto: false },
      { opcao: "Folha", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura masculina da flor?",
    respostas: [
      { opcao: "Carpelo", correto: false },
      { opcao: "Estame", correto: true },
      { opcao: "Pistilo", correto: false },
      { opcao: "Ovário", correto: false },
      { opcao: "Estigma", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de fruto?",
    respostas: [
      { opcao: "Baga", correto: false },
      { opcao: "Drupa", correto: false },
      { opcao: "Pomo", correto: false },
      { opcao: "Cápsula", correto: false },
      { opcao: "Flor", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de formação de frutos sem fertilização?",
    respostas: [
      { opcao: "Partenocarpia", correto: true },
      { opcao: "Apomixia", correto: false },
      { opcao: "Autogamia", correto: false },
      { opcao: "Geitonogamia", correto: false },
      { opcao: "Xenogamia", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de dispersão de frutos?",
    respostas: [
      { opcao: "Anemocoria", correto: false },
      { opcao: "Hidrocoria", correto: false },
      { opcao: "Zoocoria", correto: false },
      { opcao: "Autocoria", correto: false },
      { opcao: "Geocoria", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que protege a semente?",
    respostas: [
      { opcao: "Endocarpo", correto: false },
      { opcao: "Mesocarpo", correto: false },
      { opcao: "Epicarpo", correto: false },
      { opcao: "Tegumento", correto: true },
      { opcao: "Embrião", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de semente?",
    respostas: [
      { opcao: "Albuminosa", correto: false },
      { opcao: "Exalbuminosa", correto: false },
      { opcao: "Monocotiledônea", correto: false },
      { opcao: "Dicotiledônea", correto: false },
      { opcao: "Tricotiledônea", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de quebra de dormência de sementes?",
    respostas: [
      { opcao: "Escarificação", correto: true },
      { opcao: "Estratificação", correto: true },
      { opcao: "Germinação", correto: false },
      { opcao: "Imbibição", correto: false },
      { opcao: "Dessecação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de reprodução vegetativa?",
    respostas: [
      { opcao: "Estolho", correto: false },
      { opcao: "Rizoma", correto: false },
      { opcao: "Tubérculo", correto: false },
      { opcao: "Bulbo", correto: false },
      { opcao: "Flor", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de enxertia entre plantas?",
    respostas: [
      { opcao: "Cruzamento", correto: false },
      { opcao: "Enxertia", correto: true },
      { opcao: "Estaquia", correto: false },
      { opcao: "Mergulhia", correto: false },
      { opcao: "Alporquia", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de cultura de tecidos vegetais?",
    respostas: [
      { opcao: "Calogênese", correto: false },
      { opcao: "Embriogênese somática", correto: false },
      { opcao: "Micropropagação", correto: false },
      { opcao: "Hidroponia", correto: true },
      { opcao: "Organogênese", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do hormônio que estimula o amadurecimento de frutos?",
    respostas: [
      { opcao: "Auxina", correto: false },
      { opcao: "Giberelina", correto: false },
      { opcao: "Citoquinina", correto: false },
      { opcao: "Etileno", correto: true },
      { opcao: "Ácido abscísico", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de movimento vegetal?",
    respostas: [
      { opcao: "Fotonastia", correto: false },
      { opcao: "Termonastia", correto: false },
      { opcao: "Tigmonastia", correto: false },
      { opcao: "Quimionastia", correto: false },
      { opcao: "Geonastia", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de orientação pelo sol em plantas?",
    respostas: [
      { opcao: "Fototropismo", correto: true },
      { opcao: "Heliotropismo", correto: true },
      { opcao: "Gravitropismo", correto: false },
      { opcao: "Tigmotropismo", correto: false },
      { opcao: "Quimiotropismo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de relação ecológica entre plantas?",
    respostas: [
      { opcao: "Alelopatia", correto: false },
      { opcao: "Epifitismo", correto: false },
      { opcao: "Parasitismo", correto: false },
      { opcao: "Comensalismo", correto: false },
      { opcao: "Fotossíntese", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que permite a fixação de plantas trepadeiras?",
    respostas: [
      { opcao: "Espinhos", correto: false },
      { opcao: "Gavinhas", correto: true },
      { opcao: "Acúleos", correto: false },
      { opcao: "Tricomas", correto: false },
      { opcao: "Cerdas", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação de plantas ao frio?",
    respostas: [
      { opcao: "Decíduas", correto: false },
      { opcao: "Perenes", correto: false },
      { opcao: "Xerófitas", correto: true },
      { opcao: "Resinosas", correto: false },
      { opcao: "Criptófitas", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de perda de folhas em estações secas?",
    respostas: [
      { opcao: "Decídua", correto: true },
      { opcao: "Caducifólia", correto: true },
      { opcao: "Perenifólia", correto: false },
      { opcao: "Semi-decídua", correto: false },
      { opcao: "Marcescente", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de planta carnívora?",
    respostas: [
      { opcao: "Dionaea", correto: false },
      { opcao: "Drosera", correto: false },
      { opcao: "Nepenthes", correto: false },
      { opcao: "Utricularia", correto: false },
      { opcao: "Ficus", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de captura de insetos em plantas carnívoras?",
    respostas: [
      { opcao: "Digestão", correto: false },
      { opcao: "Captura ativa", correto: true },
      { opcao: "Captura passiva", correto: true },
      { opcao: "Absorção", correto: false },
      { opcao: "Assimilação", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de armadilha em plantas carnívoras?",
    respostas: [
      { opcao: "Armadilha de jaula", correto: false },
      { opcao: "Armadilha de sucção", correto: false },
      { opcao: "Armadilha de folha colante", correto: false },
      { opcao: "Armadilha de urnas", correto: false },
      { opcao: "Armadilha de rede", correto: true }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que permite a flutuação de plantas aquáticas?",
    respostas: [
      { opcao: "Aerênquima", correto: true },
      { opcao: "Parênquima", correto: false },
      { opcao: "Colênquima", correto: false },
      { opcao: "Esclerênquima", correto: false },
      { opcao: "Xilema", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de adaptação de plantas ao deserto?",
    respostas: [
      { opcao: "Folhas reduzidas", correto: false },
      { opcao: "Cutícula espessa", correto: false },
      { opcao: "Estômatos profundos", correto: false },
      { opcao: "Raízes superficiais", correto: true },
      { opcao: "Metabolismo CAM", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome do processo de abertura de flores à noite?",
    respostas: [
      { opcao: "Nictinastia", correto: true },
      { opcao: "Fotonastia", correto: false },
      { opcao: "Termonastia", correto: false },
      { opcao: "Haptonastia", correto: false },
      { opcao: "Seismonastia", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de polinização especializada?",
    respostas: [
      { opcao: "Ornitofilia", correto: false },
      { opcao: "Quiropterofilia", correto: false },
      { opcao: "Entomofilia", correto: false },
      { opcao: "Anemofilia", correto: true },
      { opcao: "Melitofilia", correto: false }
    ]
  },
  {
    pergunta: "Qual é o nome da estrutura que atrai polinizadores?",
    respostas: [
      { opcao: "Néctar", correto: true },
      { opcao: "Pólen", correto: false },
      { opcao: "Estigma", correto: false },
      { opcao: "Ovário", correto: false },
      { opcao: "Pedúnculo", correto: false }
    ]
  },
  {
    pergunta: "Qual destes não é um tipo de dispersão por animais?",
    respostas: [
      { opcao: "Endozoocoria", correto: false },
      { opcao: "Epizoocoria", correto: false },
      { opcao: "Sinzoocoria", correto: false },
      { opcao: "Mirmecocoria", correto: false },
      { opcao: "Geozoocoria", correto: true }
    ]
  }
  ];
}

// Função para selecionar 50 perguntas aleatórias
function selecionarPerguntasAleatorias() {
  // Embaralha as perguntas e pega as 50 primeiras
  perguntasSelecionadas = [...perguntas]
    .sort(() => 0.5 - Math.random())
    .slice(0, 50);
}

// Função para iniciar o quiz
function iniciarQuiz() {
  selecionarPerguntasAleatorias();
  telaInicio.style.display = 'none';
  conteudoJogo.style.display = 'block';
  indiceAtual = 0;
  pontuacao = 0;
  carregarPerguntaAtual();
}

// Função para carregar a pergunta atual
function carregarPerguntaAtual() {
  const perguntaAtual = perguntasSelecionadas[indiceAtual];
  elementoPergunta.textContent = perguntaAtual.pergunta;
  elementoProgresso.textContent = `${indiceAtual + 1}/${perguntasSelecionadas.length}`;
  elementoPontuacao.textContent = `Pontos: ${pontuacao}`;
  
  elementoRespostas.innerHTML = '';
  
  // Embaralha as respostas para não ficarem sempre na mesma ordem
  const respostasEmbaralhadas = [...perguntaAtual.respostas].sort(() => 0.5 - Math.random());
  
  respostasEmbaralhadas.forEach(resposta => {
    const botao = document.createElement('button');
    botao.classList.add('botao-resposta');
    botao.textContent = resposta.opcao;
    botao.addEventListener('click', () => selecionarResposta(resposta.correto, botao));
    elementoRespostas.appendChild(botao);
  });
}

// Função para processar a resposta selecionada
function selecionarResposta(correto, botao) {
  // Desabilita todos os botões para evitar múltiplos cliques
  const botoes = document.querySelectorAll('.botao-resposta');
  botoes.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === botao.textContent) {
      btn.classList.add(correto ? 'acerto' : 'erro');
    }
  });
  
  // Atualiza a pontuação
  if (correto) {
    pontuacao += 1;
  } else {
    pontuacao -= 1;
  }
  elementoPontuacao.textContent = `Pontos: ${pontuacao}`;
  
  // Avança para a próxima pergunta após um breve delay
  setTimeout(() => {
    indiceAtual++;
    if (indiceAtual < perguntasSelecionadas.length) {
      carregarPerguntaAtual();
    } else {
      finalizarQuiz();
    }
  }, 1500);
}

// Função para finalizar o quiz
function finalizarQuiz() {
  conteudoJogo.style.display = 'none';
  telaFinal.style.display = 'block';
  elementoResultado.textContent = `Você fez ${pontuacao} pontos!`;
  inputNome.focus();
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
  telaFinal.style.display = 'none';
  telaInicio.style.display = 'block';
}

// Função para salvar a pontuação no ranking
function salvarPontuacao() {
  const nome = inputNome.value.trim();
  if (nome === '') {
    alert('Por favor, digite seu nome!');
    return;
  }
  
  ranking.push({ nome, pontuacao });
  
  // Ordena o ranking por pontuação (decrescente)
  ranking.sort((a, b) => b.pontuacao - a.pontuacao);
  
  // Mantém apenas as top 10 pontuações
  if (ranking.length > 10) {
    ranking = ranking.slice(0, 10);
  }
  
  // Salva no localStorage
  localStorage.setItem('rankingQuizCiencias', JSON.stringify(ranking));
  
  // Atualiza a exibição do ranking
  atualizarRanking();
  
  // Feedback ao usuário
  alert(`Pontuação salva com sucesso, ${nome}!`);
  inputNome.value = '';
}

// Função para atualizar a exibição do ranking
function atualizarRanking() {
  elementoRanking.innerHTML = '';
  
  if (ranking.length === 0) {
    elementoRanking.innerHTML = '<p>Nenhuma pontuação registrada ainda.</p>';
    return;
  }
  
  ranking.forEach((jogador, index) => {
    const item = document.createElement('div');
    item.classList.add('ranking-item');
    item.innerHTML = `
      <span>${index + 1}. ${jogador.nome}</span>
      <span>${jogador.pontuacao} pts</span>
    `;
    elementoRanking.appendChild(item);
  });
}