function calculate() {
  const g1 = parseFloat(document.getElementById('grade1').value);
  const g2 = parseFloat(document.getElementById('grade2').value);
  const g3 = parseFloat(document.getElementById('grade3').value);

  if (isNaN(g1) || isNaN(g2) || isNaN(g3)) {
    alert("Por favor, preencha todas as avaliações com valores válidos.");
    return;
  }

  const average = (g1 + g2 + g3) / 3;
  const formattedAverage = average.toFixed(2);

  const resultCard = document.getElementById('resultCard');
  const finalScore = document.getElementById('finalScore');
  const statusBadge = document.getElementById('statusBadge');
  const resultMessage = document.getElementById('resultMessage');

  finalScore.textContent = formattedAverage;
  resultCard.classList.remove('hidden');

  // Regras de negócio / Avaliação de desempenho
  if (average >= 7.0) {
    statusBadge.textContent = "Aprovado / Meta Atingida";
    statusBadge.className = "badge badge-approved";
    resultMessage.textContent = "Desempenho satisfatório. Meta corporativa alcançada com sucesso.";
  } else if (average >= 5.0) {
    statusBadge.textContent = "Atenção / Recuperação";
    statusBadge.className = "badge badge-warning";
    resultMessage.textContent = "Média mediana. Recomendada revisão de pontos críticos para melhoria.";
  } else {
    statusBadge.textContent = "Abaixo da Meta";
    statusBadge.className = "badge badge-failed";
    resultMessage.textContent = "Resultado insuficiente. Necessário plano de ação corretivo.";
  }
}

function resetForm() {
  document.getElementById('grade1').value = '';
  document.getElementById('grade2').value = '';
  document.getElementById('grade3').value = '';
  
  const resultCard = document.getElementById('resultCard');
  resultCard.classList.add('hidden');
}