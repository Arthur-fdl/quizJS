
const questions = [
  {
    question: "VOCÊ SE CONSIDERA ATEU?",
    options: [
      { text: "SIM", scores: { A: 3, B: 1, C: 1 } },
      { text: "NÃO", scores: { A: 1, B: 3, C: 3 } },
      { text: "TALVEZ", scores: { A: 1, B: 1, C: 1 } }
    ]
  },
  {
    question: "VOCÊ É DO GUETO?",
    options: [
      { text: "SIM", scores: { A: 1, B: 3, C: 1 } },
      { text: "NÃO", scores: { A: 3, B: 1, C: 1 } },
      { text: "TALVEZ", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "O QUE VOCÊ PREFERE SER?",
    options: [
      { text: "Viver de forma solitaria", scores: { A: 1, B: 3, C: 1 } },
      { text: "Ser ", scores: { A: 4, B: 1, C: 1 } },
      { text: "Viver em harmonia com os animais", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "VOCÊ SE CONSIDERA:",
    options: [
      { text: "Inteligente", scores: { A: 3, B: 1, C: 3 } },
      { text: "Agressivo ", scores: { A: 3, B: 2, C: 1 } },
      { text: "Companheiro", scores: { A: 1, B: 2, C: 3 } },
      { text: "Outro", scores: { A: 1, B: 1, C: 1 } }
    ]
  },
  {
    question: "QUAL É O SEU MAIOR PESADELO?",
    options: [
      { text: "Perder as asas", scores: { A: 3, B: 1, C: 1 } },
      { text: "Perder as mãos", scores: { A: 1, B: 3, C: 1 } },
      { text: "Perder suas orelhas", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "QUAL SERIA O SEU HOBBY?",
    options: [
      { text: "Pular de paraquedas", scores: { A: 3, B: 1, C: 1 } },
      { text: "Criar coisas do zero", scores: { A: 1, B: 3, C: 1 } },
      { text: "Passear com o seu animal", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "COMO VOCÊ LIDA COM SITUAÇÕES DE PERIGO?",
    options: [
      { text: "Protege aos outros em primeiro lugar", scores: { A: 1, B: 3, C: 2 } },
      { text: "Pensa numa estratégia para salvar todos: você e os demais", scores: { A: 1, B: 2, C: 3 } },
      { text: "O instinto fala mais forte: você tenta se proteger", scores: { A: 3, B: 2, C: 1 } },
      { text: "Enfrenta o perigo de frente e seja o que Deus quiser", scores: { A: 2, B: 3, C: 1 } }
    ]
  },
  {
    question: "COMO VOCÊ SE COMPORTA DURANTE UMA VIAGEM?",
    options: [
      { text: "Adoro viajar, então sou a pessoa divertida do grupo", scores: { A: 3, B: 1, C: 1 } },
      { text: "Até se diverte, mas vai na onda dos amigos", scores: { A: 1, B: 3, C: 1 } },
      { text: "Sou aquele que se preocupa em cuidar de todos", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "VOCÊ SE CONSIDERA UMA PESSOA:",
    options: [
      { text: "Rabugenta", scores: { A: 1, B: 3, C: 1 } },
      { text: "Sabia", scores: { A: 3, B: 1, C: 1 } },
      { text: "Amigável", scores: { A: 1, B: 1, C: 3 } }
    ]
  },
  {
    question: "O QUE VOCÊ USARIA COMO ARMA:",
    options: [
      { text: "Um arco", scores: { A: 1, B: 1, C: 3 } },
      { text: "Força bruta", scores: { A: 3, B: 1, C: 1 } },
      { text: "Um martelo", scores: { A: 1, B: 3, C: 1 } }
    ]
  },

];

let currentQuestionIndex = 0;
let scores = { A: 0, B: 0, C: 0 };

document.getElementById('startQuiz').addEventListener('click', startQuiz);

function startQuiz() {
  document.querySelector('.container').innerHTML = '';
  showQuestion();
}

// Função para mostrar a perguntar 
function showQuestion() {
  const question = questions[currentQuestionIndex];
  const container = document.querySelector('.container');

  container.innerHTML = ''; // Para limpar o container e seguir para a próxima pergunta

  const questionElement = document.createElement('h2');
  questionElement.textContent = question.question;
  container.appendChild(questionElement);

  // Renderizar opções
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const button = document.createElement('button');
    button.textContent = option.text;
    button.addEventListener('click', () => selectOption(option.scores));
    container.appendChild(button);
  }
}

// Selecionar a opção e atualizar a pontuação
function selectOption(scoresForOption) {
  // Usar if-else para atribuir pontuação
  if (scoresForOption.A) {
    scores.A += scoresForOption.A;
  }
  if (scoresForOption.B) {
    scores.B += scoresForOption.B;
  }
  if (scoresForOption.C) {
    scores.C += scoresForOption.C;
  }

  currentQuestionIndex++;

  // ver se ainda tem perguntas
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Resultado final com switch case
function showResult() {
  const container = document.querySelector('.container');
  container.innerHTML = ''; // Limpa o container

  let character;

  // Switch-case para determinar o personagem
  switch (true) {
    case (scores.A > scores.B && scores.A > scores.C):
      character = 'Grindli Godoy';
      break;
    case (scores.B > scores.A && scores.B > scores.C):
      character = 'Kodouak Fideliz';
      break;
    case (scores.C > scores.A && scores.C > scores.B):
      character = 'Weron Seidii';
      break;
    case (scores.A == scores.B):
      character = 'Grindli Godoy & Kodouak Fideliz';
      break;
    case (scores.A == scores.C):
      character = 'Grindli Godoy & Weron Seidii';
      break;
    case (scores.B == scores.C):
      character = 'Kodouak Fideliz & Weron Seidii';
      break;
    default:
      character = 'Empate! Você possui traços de todos os personagens.';
  }

  const resultElement = document.createElement('h2');
  resultElement.textContent = `Você seria o ${character}!`;
  container.appendChild(resultElement);



  const imgElement = document.createElement('img');
  const imgElement2 = document.createElement('img');
  if (character === "Grindli Godoy") {

    const descricao = document.createElement("p");
    descricao.textContent = "Grindli Godoy é um dragão descrente e solitário, mas é muito inteligente e forte";
    container.appendChild(descricao);
    imgElement.src = 'img\\urano.png';
    container.appendChild(imgElement);
  } else if (character === "Kodouak Fideliz") {
    const descricao = document.createElement("p");
    descricao.textContent = "Kodouak Fideliz é um anão crente e pouco amigável, porém é muito trabalhador e guerreiro.";
    container.appendChild(descricao);
    imgElement.src = 'img\\maconheirofantasma.png';
    container.appendChild(imgElement);
  } else if (character === "Weron Seidii") {
    const descricao = document.createElement("p");
    descricao.textContent = "Weron Seidii é um elfo amigável e que acredita no poder da naturaza, defendendo ao maximo os animais e seus colegas";
    container.appendChild(descricao);
    imgElement.src = 'img\\charrado.png';
    container.appendChild(imgElement);
  } else if (character === 'Grindli Godoy & Kodouak Fideliz') {
    imgElement.src = 'img\\urano.png';
    imgElement2.src = 'img\\maconheirofantasma.png';
    container.appendChild(imgElement);
    container.appendChild(imgElement2);   
  } else if (character === 'Grindli Godoy & Weron Seidii') {
    imgElement.src = 'img\\urano.png';
    imgElement2.src = 'img\\charrado.png';
    container.appendChild(imgElement);
    container.appendChild(imgElement2);   
  } else if (character === 'Kodouak Fideliz & Weron Seidii') {
    imgElement.src = 'img\\maconheirofantasma.png';
    imgElement2.src = 'img\\charrado.png';
    container.appendChild(imgElement);
    container.appendChild(imgElement2);  
  }

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Refazer o questionário';
  resetButton.addEventListener('click', () => location.reload());
  container.appendChild(resetButton);
}
