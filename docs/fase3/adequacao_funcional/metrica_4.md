# M4 - Taxa de Correção dos Cálculos Acadêmicos

## 1. Objetivo

Verificar se os indicadores acadêmicos calculados e exibidos pelo **No Fluxo UnB** estão corretos quando comparados aos valores esperados a partir do histórico acadêmico e das regras curriculares usadas como referência.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Definição da Métrica

**Tabela 1: Definição operacional da M4.**

| Campo | Definição |
|---|---|
| **Métrica** | Taxa de correção dos cálculos acadêmicos |
| **Tipo** | Quantitativa |
| **Entrada** | Histórico acadêmico de referência e valores esperados calculados manualmente |
| **Saída** | Percentual de indicadores acadêmicos calculados corretamente |
| **Unidade** | Percentual |
| **Fonte de evidência** | Histórico acadêmico, planilha de cálculo esperada, tela de resultados do sistema e registros de verificação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Indicadores Verificados

Os indicadores devem ser avaliados individualmente. Quando um valor não for exibido pela aplicação, ele deve ser registrado como **não aplicável** apenas se a funcionalidade não estiver prevista no escopo da métrica; caso contrário, deve ser marcado como incorreto.

**Tabela 2: Indicadores acadêmicos avaliados na M4.**

| Indicador | O que deve ser conferido | Critério de acerto |
|---|---|---|
| IRA | Índice de rendimento acadêmico exibido ao estudante | Valor igual ao esperado, respeitando arredondamento definido |
| Média ponderada | Média calculada a partir de menções, créditos ou pesos aplicáveis | Valor igual ao cálculo de referência |
| Carga horária integralizada | Total de horas ou créditos já concluídos | Valor inteiro igual ao esperado |
| Carga horária pendente | Total restante para integralização curricular | Valor inteiro igual ao esperado |
| Progresso do curso | Percentual de integralização exibido na interface | Diferença máxima de 1 ponto percentual, quando houver arredondamento visual |
| Reprovações ou tentativas | Quantidade de reprovações/tentativas por disciplina | Valor inteiro igual ao histórico |
| Trancamentos, suspensões ou interrupções | Eventos acadêmicos identificados no histórico | Quantidade e classificação iguais ao histórico |
| Semestres cursados/restantes | Estimativa de trajetória acadêmica exibida pelo sistema | Valor coerente com histórico e matriz curricular |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico acadêmico em PDF usado como entrada.
2. Transcrição ou extração textual do histórico para conferência.
3. Planilha com os cálculos esperados.
4. Regras de arredondamento adotadas para cada indicador.
5. Pasta para armazenamento das evidências.

A planilha deve conter, no mínimo:

| ID | Indicador | Valor esperado | Valor obtido | Tolerância | Correto? | Evidência |
|---|---|---|---|---|---|---|

---

## 5. Regras de Tolerância

**Tabela 3: Tolerâncias aceitas para a M4.**

| Tipo de valor | Tolerância |
|---|---|
| Contagens inteiras | Sem tolerância: o valor deve ser exatamente igual |
| Carga horária ou créditos | Sem tolerância: o valor deve ser exatamente igual |
| IRA e médias decimais | Diferença máxima de 0,01 por arredondamento |
| Percentual de progresso | Diferença máxima de 1 ponto percentual quando o sistema arredondar o valor exibido |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Passo a Passo da Execução

1. Calcular previamente os valores esperados com base no histórico de referência.
2. Acessar o No Fluxo UnB no ambiente definido para a avaliação.
3. Realizar login, caso necessário.
4. Fazer upload do histórico acadêmico de referência.
5. Aguardar o processamento do histórico.
6. Acessar as telas que exibem resumo acadêmico, progresso, fluxograma e indicadores calculados.
7. Registrar cada valor apresentado pelo sistema.
8. Comparar o valor obtido com o valor esperado e com a tolerância definida.
9. Atribuir **1** para indicador correto e **0** para indicador incorreto.
10. Para cada divergência, registrar descrição, severidade e evidência.

---

## 7. Fórmula de Cálculo

```text
M4 = (Nº de indicadores acadêmicos calculados corretamente
      ÷ Nº total de indicadores acadêmicos verificados) × 100
```

---

## 8. Critério de Julgamento

**Tabela 4: Régua de julgamento da M4.**

| Classificação | Critério |
|---|---|
| Excelente | M4 >= 98% |
| Satisfatório | 95% <= M4 < 98% |
| Insuficiente | M4 < 95% |

O limite mínimo satisfatório de 95% segue a hipótese H2 definida para a Adequação Funcional na Fase 2.

---

## 9. Classificação de Divergências

**Tabela 5: Severidade das divergências da M4.**

| Severidade | Critério |
|---|---|
| Crítica | Cálculo incorreto pode induzir decisão acadêmica errada, como estimar conclusão de curso ou pendência inexistente |
| Alta | Indicador central de progresso, IRA, carga horária ou pendências é exibido incorretamente |
| Média | Indicador secundário está incorreto, mas não altera diretamente o planejamento principal |
| Baixa | Divergência limitada a arredondamento visual ou apresentação sem impacto decisório |

---

## 10. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha com valores esperados e valores obtidos.
- Percentual final da M4.
- Lista de indicadores divergentes.
- Evidências associadas aos cálculos incorretos.
- Classificação final da métrica.

---

## Histórico de Versões

**Tabela 6: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação do plano de avaliação da métrica M4 de Adequação Funcional. | Lucas Guimarães |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
