# Função isPositive() – TDD

Este projeto implementa a função `isPositive()` utilizada para validar valores de depósito em uma Fintech.  
O desenvolvimento seguiu o ciclo **TDD (Red → Green → Refactor)**.

---

## ✔ Requisitos atendidos (DoD)

- Código funcional
- Testes automatizados com Jest
- Todos os critérios de aceitação implementados
- Projeto organizado e pronto para rodar
- Instruções incluídas no README

---

# 📌 Como executar o projeto

### 1. Instalar dependências

npm install


### 2. Executar os testes


npm test


# 📌 Função isPositive()

### Critérios de aceitação

1. Retorna `true` para valores maiores que zero  
2. Retorna `false` quando o valor é `0`  
3. Lança `"Valor inválido"` quando o valor é menor que zero  
4. Lança `"A entrada deve ser um número"` para tipos inválidos  

---

# 📁 Estrutura do projeto



fintech-tdd/
├── src/
│ └── isPositive.js
├── tests/
│ └── isPositive.test.js
└── README.md

---

# Autor
Projeto criado para atividade de Test Driven Development (TDD) por Josivaldo Braga jr.
