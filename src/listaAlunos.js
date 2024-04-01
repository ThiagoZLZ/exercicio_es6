
let listaAlunos = [
    {nome: "Thiago", nota: 10},
    {nome: "Marcos", nota: 4},
    {nome: "João", nota: 5},
    {nome: "Júlia", nota: 7},
    {nome: "Ana", nota: 8},
]


console.log("Lista de Alunos:");

listaAlunos.forEach(aluno => {
    if(aluno.nota >= 6){
        console.log(`Nome: ${aluno.nome}______Nota: ${aluno.nota} - Aprovado`);
    }else{
        console.log(`Nome: ${aluno.nome}______Nota: ${aluno.nota} - REPROVADO`);
    }
});

console.log("###################################################################")

function alunosAprovados(){
    console.log("Alunos Aprovados:")
    listaAlunos.forEach(aluno => {
        if(aluno.nota >= 6){
            console.log(`Nome: ${aluno.nome} `);
        }
    });
}

alunosAprovados()

