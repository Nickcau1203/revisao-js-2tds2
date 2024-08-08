//Preciso verificar se a idade do aluno é maior que 7 ano 

//Para alunos entre 8 a 12 ano: infantil
//Para alunso entre 13 e 17 ano: adolescente
//Para alunos maiores de 18 anos adulto

let idadeAluno = 23;

if(idadeAluno > 7 && idadeAluno < 13) {
    console.log("Aluno está na categoria INFANTIL!");
} else if (idadeAluno > 12 && idadeAluno < 18) {
    console.log("Aluno está na categoria ADOLESCENTE!");
} else if (idadeAluno > 17) {
    console.log("Aluno está na categoria ADULTO!");
} else{
    console.log("Aluno não pode se matricular");
}