// Sistema simples de gerenciamento agro
class Plantacao {
    constructor(nome, areaHectares, producaoPorHectare) {
        this.nome = nome;
        this.areaHectares = areaHectares;
        this.producaoPorHectare = producaoPorHectare; // em toneladas
    }

    producaoTotal() {
        return this.areaHectares * this.producaoPorHectare;
    }

    mostrarInfo() {
        console.log(`Plantação: ${this.nome}`);
        console.log(`Área: ${this.areaHectares} hectares`);
        console.log(`Produção por hectare: ${this.producaoPorHectare} toneladas`);
        console.log(`Produção total estimada: ${this.producaoTotal()} toneladas`);
        console.log('----------------------------');
    }
}

// Criando algumas plantações
const soja = new Plantacao('Soja', 50, 3.2);
const milho = new Plantacao('Milho', 30, 4.5);
const algodao = new Plantacao('Algodão', 20, 2.1);

// Lista de plantações
const listaDePlantacoes = [soja, milho, algodao];

// Mostrando informações de todas as plantações
listaDePlantacoes.forEach(plantacao => plantacao.mostrarInfo());

// Função para calcular a produção total de todas as plantações
function producaoTotalAgro(plantacoes) {
    return plantacoes.reduce((total, plantacao) => total + plantacao.producaoTotal(), 0);
}

console.log(`Produção total do agro: ${producaoTotalAgro(listaDePlantacoes)} toneladas`);
