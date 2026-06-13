# M6 - Percentual de Recomendações ou Orientações Academicamente Válidas

## 1. Objetivo

Verificar se o assistente de IA do **No Fluxo UnB** produz recomendações e orientações que sejam academicamente válidas, ou seja, coerentes com o histórico acadêmico do estudante, com a matriz curricular do curso e com as regras acadêmicas aplicáveis da Universidade de Brasília.

Esta métrica responde à questão Q3 de Adequação Funcional: **"Em que grau as funcionalidades do sistema são apropriadas para executar tarefas reais de planejamento acadêmico?"**

---

## 2. Definição da Métrica

**Tabela 1: Definição operacional da M6.**

| Campo                  | Definição                                                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métrica**            | Percentual de recomendações ou orientações academicamente válidas                                                                                          |
| **Tipo**               | Quantitativa                                                                                                                                               |
| **Entrada**            | Perguntas ou solicitações submetidas ao assistente de IA e fontes de referência para validação                                                             |
| **Saída**              | Percentual de recomendações classificadas como academicamente válidas                                                                                      |
| **Unidade**            | Percentual                                                                                                                                                 |
| **Fonte de evidência** | Respostas do assistente de IA, histórico acadêmico de referência, ementas ou informações curriculares disponíveis e regras acadêmicas aplicáveis da UnB |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Perguntas-Alvo Avaliadas

As perguntas foram definidas para cobrir os principais cenários de uso do assistente de IA no contexto de planejamento acadêmico. Cada pergunta é submetida de forma isolada, com o histórico do estudante de teste previamente carregado na plataforma.

**Tabela 2: Perguntas-alvo submetidas ao assistente de IA na M6.**

| Código | Pergunta ou solicitação submetida ao assistente                                       | Aspecto avaliado                              |
| ------ | ------------------------------------------------------------------------------------- | --------------------------------------------- |
| P1     | "Tenho algum pré-requisito pendente para cursar [disciplina X]?"                      | Precisão na leitura de dependências           |
| P2     | "Quantos semestres ainda me faltam para concluir o curso?"                            | Correção do cálculo de trajetória acadêmica   |
| P3     | "Estou em risco de jubilamento? O que devo fazer?"                                    | Alinhamento com regras acadêmicas da UnB      |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico acadêmico em PDF de referência com valores conhecidos, carregado na plataforma antes do início dos testes.
2. Matriz curricular do curso utilizado no teste (base de dados do No Fluxo ou documento oficial do SIGAA).
3. Regras acadêmicas da UnB aplicáveis aos cenários das perguntas (Regimento Geral, resoluções de graduação vigentes).
4. Transcrição ou extração textual do histórico para conferência cruzada das respostas.
5. Pasta para armazenamento das evidências.
6. Planilha de registro de validação com a estrutura mínima abaixo.

A planilha deve conter, no mínimo:

| ID | Pergunta | Resposta do assistente | Classificação (Válida / Inválida / Não verificável) | Justificativa | Evidência |
| -- | -------- | ---------------------- | --------------------------------------------------- | ------------- | --------- |
|    |          |                        |                                                     |               |           |

---

## 5. Regras de Classificação

Cada recomendação ou orientação obtida do assistente de IA deve ser classificada em uma das três categorias abaixo.

**Tabela 3: Categorias de classificação das recomendações da M6.**

| Classificação      | Critério                                                                                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Válida**         | A informação é factualmente correta, coerente com o histórico acadêmico do estudante e alinhada às regras da UnB e à matriz curricular do curso                            |
| **Inválida**       | A informação apresenta erro factual, contradiz o histórico acadêmico ou viola regras acadêmicas aplicáveis; recomendações parcialmente corretas com erro relevante são inválidas |
| **Não verificável** | A resposta é genérica ou vaga a ponto de não ser passível de validação objetiva com as fontes de referência disponíveis                                                     |

> **Nota:** Recomendações classificadas como "não verificáveis" são excluídas tanto do numerador quanto do denominador da fórmula de cálculo. Devem ser registradas separadamente na planilha e reportadas como observação qualitativa.

Uma recomendação é considerada **válida** somente quando satisfaz simultaneamente as três condições abaixo:

1. Não contradiz o histórico acadêmico do estudante;
2. Respeita os pré-requisitos e equivalências curriculares do curso;
3. Está alinhada às regras acadêmicas vigentes da UnB.

---

## 6. Passo a Passo da Execução

1. Acessar o No Fluxo UnB com o usuário de teste que possua histórico acadêmico previamente carregado na plataforma.
2. Abrir a janela do Assistente de IA (Chatbot).
3. Submeter cada pergunta-alvo listada na Tabela 2 de forma isolada, uma por vez, conforme redigida na tabela, sem adaptações no enunciado.
4. Aguardar a resposta completa do assistente antes de registrá-la.
5. Transcrever integralmente a resposta do assistente na planilha de registro.
6. Realizar a validação cruzada de cada resposta com as fontes de referência definidas na seção de Preparação.
7. Classificar cada recomendação ou orientação conforme as categorias da Tabela 3.
8. Registrar a justificativa da classificação atribuída.
9. Salvar as evidências (capturas de tela das respostas) com o padrão:
   `M6_P[ID]_[CLASSIFICACAO]_[DATA].png`
10. Repetir o procedimento para todas as perguntas-alvo.
11. Consolidar os resultados na planilha de registro de validação.

---

## 7. Fórmula de Cálculo

```
M6 = (Nº de recomendações válidas
      ÷ Nº total de recomendações avaliadas) × 100
```

> O denominador exclui as recomendações classificadas como "não verificáveis".

---

## 8. Critério de Julgamento

**Tabela 4: Régua de julgamento da M6.**

| Classificação  | Critério         |
| -------------- | ---------------- |
| Excelente      | M6 >= 90%        |
| Satisfatório   | 75% <= M6 < 90%  |
| Insuficiente   | M6 < 75%         |

O limiar de 90% para a classificação "Excelente" considera a natureza probabilística de respostas de modelos de linguagem e o caráter crítico das orientações acadêmicas, em que erros podem impactar diretamente a trajetória do estudante. O limiar mínimo satisfatório de 75% reconhece que o assistente de IA é uma funcionalidade complementar de apoio à decisão, e não um sistema de informação oficial.

---

## 9. Classificação de Divergências

**Tabela 5: Severidade das divergências da M6.**

| Severidade | Critério                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Crítica    | A recomendação inválida pode induzir o estudante a uma decisão acadêmica incorreta com consequências diretas na sua trajetória |
| Alta       | A recomendação contradiz claramente o histórico ou regras curriculares e comprometeria o planejamento do semestre              |
| Média      | A recomendação é parcialmente incorreta ou incompleta, mas não compromete a decisão acadêmica central                         |
| Baixa      | A recomendação contém imprecisão terminológica ou informação secundária incorreta sem impacto direto no planejamento           |

---

## 10. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha com transcrição das respostas, classificação e justificativa por pergunta avaliada.
- Percentual final da M6.
- Lista de recomendações inválidas com descrição do erro e severidade.
- Lista de recomendações não verificáveis registradas como observação qualitativa.
- Evidências (capturas de tela) de cada resposta do assistente.
- Classificação final da métrica conforme a régua da Tabela 4.

---

## Histórico de Versões

**Tabela 6: Histórico de versões.**

| Versão | Data       | Descrição                                                           | Autor |
| ------ | ---------- | ------------------------------------------------------------------- | ----- |
| `1.0`  | 08/06/2026 | Criação do plano de avaliação da métrica M6 de Adequação Funcional. | [André Gustavo](https://github.com/AndreGustavoRN) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
