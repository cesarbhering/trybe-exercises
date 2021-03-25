let gradeCandidate = 97;

if (gradeCandidate >= 80) {
    console.log('Parabéns, você foi aprovada(o)!');
}
else if (gradeCandidate < 80 && gradeCandidate >= 60) {
    console.log('Você está na nossa lista de espera');
}
else if (gradeCandidate < 60) {
    console.log('Você foi reprovada(o)');
}
else {
    console.log('Número digitado inválido');
}