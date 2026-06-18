# Fase 4 - Execução e Resultados da Avaliação (Adequação Funcional)

## 1. Introdução

Nesta fase, foram executados os procedimentos definidos no [Plano de Avaliação da Fase 3](../../fase3/adequacao_funcional/index.md) para a característica **Adequação Funcional** do **No Fluxo UnB**.

O foco da execução foi validar, com base em evidências objetivas, a consistência das informações curriculares exibidas na aplicação, a correção dos cálculos acadêmicos e o impacto dos defeitos funcionais encontrados.

---

## 2. Ambiente de Execução

Os testes das métricas executadas nesta etapa foram consolidados em ambiente controlado, com os seguintes parâmetros.

| Item                          | Detalhe                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Versão do software avaliado** | No Fluxo UnB - release `qualidade-de-software` |
| **URL da aplicação** | [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) |
| **Navegador principal** | Google Chrome (versão 149.0.7827.53) |
| **Sistema operacional** | Ubuntu 24.04 |
| **Artefatos de apoio** | Histórico acadêmico utilizado nas métricas já publicadas ([historico_lucas.pdf](../../assets/historico_lucas.pdf)), base curricular oficial, capturas de tela, planilhas e registro consolidado de defeitos |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.1 Dados Brutos e Evidências Consolidadas

<a id="tabela-114"></a>
**Tabela 114: Evidências utilizadas na execução das métricas da Adequação Funcional.**

| Métrica | Dados brutos e evidências | Finalidade |
|---|---|---|
| M1 | Checklist de requisitos, capturas e vídeo de execução | Verificar disponibilidade dos requisitos funcionais essenciais |
| M2 | [historico_lucas.pdf](../../assets/historico_lucas.pdf), gabarito de conferência e vídeo de execução | Medir acurácia da extração do histórico acadêmico |
| M3 | [historico_lucas.pdf](../../assets/historico_lucas.pdf), [planilha de verificação M3](https://docs.google.com/spreadsheets/d/e/2PACX-1vS_9MoW9IL9oxwtR-dSK3rLv5Gyxs0zuZ4sMwrn4jYN349TyZR32XatXlxa-sOwlsS-T3_-SNZlGCbs/pubhtml?widget=true&amp;headers=false) e [vídeo de execução M3](https://www.youtube.com/watch?v=hSteyK7RSoM) | Conferir fluxograma, equivalências, pré-requisitos e estados curriculares |
| M4 | [historico_lucas.pdf](../../assets/historico_lucas.pdf), [planilha de verificação M4](https://docs.google.com/spreadsheets/d/e/2PACX-1vSlQF8WXUxLo_YCMk32xhxnmEkGlJ51YnO5LqvYqdhaROyGa8Gz1e1u7FLB-F0wXHZlqQVWkhBwqKVs/pubhtml?widget=true&amp;headers=false) e [vídeo de execução M4](https://www.youtube.com/watch?v=u64lvJq27Mw) | Conferir indicadores acadêmicos calculados pelo sistema |
| M5 | [historico_andre.pdf](../../assets/dados/adequacao_funcional/metrica5e6/historico_andre.pdf) e vídeos de execução dos cenários C1–C4 | Verificar a conclusão dos cenários de planejamento acadêmico |
| M6 | [historico_andre.pdf](../../assets/dados/adequacao_funcional/metrica5e6/historico_andre.pdf) e capturas das respostas do assistente de IA (P1–P3) | Validar as recomendações do assistente de IA |
| M7 | [registro_defeitos_m7_m8.csv](../../assets/dados/adequacao_funcional/registro_defeitos_m7_m8.csv) | Contar defeitos funcionais críticos |
| M8 | [resultado_m7_m8.csv](../../assets/dados/adequacao_funcional/resultado_m7_m8.csv) | Calcular severidade média dos defeitos funcionais |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Resultados por Métrica

### 3.1 M1 - Percentual de Requisitos Funcionais Essenciais Disponíveis

**Objetivo:** Verificar se o sistema disponibiliza e permite o acesso aos requisitos funcionais essenciais (F1–F15) em uso normal da aplicação.

**Resultado consolidado da métrica:**

| Métrica | Requisitos verificados | Disponíveis | Parciais/Ausentes | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M1 | 15 | 10 | 5 | 66,67% | Regular | [M1 - Cobertura dos Requisitos Funcionais](metrica_1.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M1 = (10 / 15) × 100 = 66,67%
```

**Julgamento M1:** **Regular**

Dos 15 requisitos funcionais essenciais, 10 estão disponíveis, 2 estão parcialmente disponíveis (F6 e F10) e 3 ausentes (F8, F13 e F14). O resultado de 66,67% ficou abaixo do mínimo de 90% definido na hipótese H1, indicando lacunas de completude funcional no acompanhamento de horas complementares, estimativa de semestres restantes e identificação de trancamentos.

Para o detalhamento completo, consulte: [M1 - Cobertura dos Requisitos Funcionais](metrica_1.md).

### 3.2 M2 - Acurácia da Extração do Histórico Acadêmico

**Objetivo:** Medir a precisão com que o sistema extrai e apresenta as informações do histórico acadêmico em PDF em relação a um gabarito de referência.

**Resultado consolidado da métrica:**

| Métrica | Itens verificados | Itens corretos | Divergências | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M2 | 11 | 7 | 4 | 63,64% | Insatisfatória | [M2 - Validação de extração do Histórico Acadêmico](metrica_2.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M2 = (7 / 11) × 100 = 63,64%
```

**Julgamento M2:** **Insatisfatória**

O resultado de 63,64% ficou abaixo do mínimo de 95% definido na hipótese H2. As quatro divergências — todas de severidade Alta — referem-se à ausência de nome e matrícula, contagem de reprovações por disciplina, trancamentos/mudança de curso e horas complementares.

Para o detalhamento completo, consulte: [M2 - Validação de extração do Histórico Acadêmico](metrica_2.md).

### 3.3 M3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

**Objetivo:** Verificar se o fluxograma do curso exibido pelo sistema representa corretamente disciplinas, dependências e equivalências em relação à base curricular de referência.

**Resultado consolidado da métrica:**

| Métrica | Itens verificados | Itens corretos | Divergências | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M3 | 62 | 56 | 6 | 90,32% | Insuficiente | [M3 - Consistência do Fluxograma](metrica_3.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M3 = (56 / 62) x 100 = 90,32%
```

**Julgamento M3:** **Insuficiente**

O resultado obtido foi de 90,32%, considerando 56 itens exibidos corretamente em um total de 62 itens curriculares verificados. Esse percentual não atende ao limite mínimo definido para aceitação da métrica, que exige M3 >= 95%.

Dessa forma, a métrica M3 foi classificada como **Insuficiente**, indicando que ainda existem divergências relevantes no fluxograma gerado pelo sistema em relação ao oráculo utilizado na avaliação.

Para o detalhamento completo da execução, incluindo planilha de verificação e evidência em vídeo, consulte: [M3 - Consistência do Fluxograma](metrica_3.md).

### 3.4 M4 - Taxa de Correção dos Cálculos Acadêmicos

**Objetivo:** Verificar se os indicadores acadêmicos calculados e exibidos pelo sistema correspondem aos valores esperados a partir do histórico acadêmico e das regras curriculares usadas como referência.

**Resultado consolidado da métrica:**

| Métrica | Indicadores verificados | Indicadores corretos | Divergências | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M4 | 15 | 15 | 0 | 100,00% | Excelente | [M4 - Correção dos Cálculos Acadêmicos](metrica_4.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M4 = (15 / 15) x 100 = 100,00%
```

**Julgamento M4:** **Excelente**

O resultado obtido foi de 100,00%, considerando 15 indicadores acadêmicos calculados corretamente em um total de 15 indicadores verificados. Esse percentual atende ao critério de excelência definido para a métrica, que exige M4 >= 98%.

Dessa forma, a métrica M4 foi classificada como **Excelente**, indicando aderência dos cálculos acadêmicos avaliados aos valores esperados para o histórico utilizado.

Para o detalhamento completo da execução, incluindo planilha de verificação e evidência em vídeo, consulte: [M4 - Correção dos Cálculos Acadêmicos](metrica_4.md).

### 3.5 M5 - Taxa de Sucesso em Cenários de Planejamento Acadêmico

**Objetivo:** Verificar se o sistema permite ao estudante concluir, sem impedimentos funcionais, os principais cenários de planejamento acadêmico (C1–C4).

**Resultado consolidado da métrica:**

| Métrica | Cenários executados | Cenários com sucesso | Impedimentos | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M5 | 4 | 4 | 0 | 100,00% | Excelente | [M5 - Cenários de Planejamento Acadêmico](metrica_5.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M5 = (4 / 4) × 100 = 100,00%
```

**Julgamento M5:** **Excelente**

Os quatro cenários (upload e fluxograma, consulta de pré-requisitos e equivalências, verificação de progresso e simulação de troca de curso) foram concluídos sem impedimento funcional, confirmando a hipótese H3. A M5 mede a conclusão dos fluxos (pertinência funcional), não a correção do conteúdo exibido — tratada nas M3 e M4.

Para o detalhamento completo da execução, consulte: [M5 - Cenários de Planejamento Acadêmico](metrica_5.md).

### 3.6 M6 - Percentual de Recomendações ou Orientações Academicamente Válidas

**Objetivo:** Verificar se o assistente de IA produz recomendações academicamente válidas, coerentes com o histórico, a matriz curricular e as regras da UnB.

**Resultado consolidado da métrica:**

| Métrica | Perguntas avaliadas | Válidas | Inválidas | Não verificáveis | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|---|
| M6 | 3 | 0 | 0 | 3 | Incalculável (denominador = 0) | Não aplicável | [M6 - Recomendações academicamente válidas](metrica_6.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

**Julgamento M6:** **Não aplicável**

As três respostas do assistente de IA foram classificadas como Não verificáveis, pois foram genéricas e não integraram o histórico carregado. Com denominador igual a zero, a métrica é matematicamente indefinida e registrada como observação qualitativa: o assistente opera desacoplado do histórico do estudante, o que representa uma lacuna de pertinência funcional relevante (defeito `AF-D08`).

Para o detalhamento completo da execução, consulte: [M6 - Recomendações academicamente válidas](metrica_6.md).

### 3.7 M7 - Número de Defeitos Funcionais Críticos Encontrados

**Objetivo:** Verificar quantos defeitos funcionais críticos foram encontrados a partir da consolidação das divergências publicadas na Fase 4.

**Resultado consolidado da métrica:**

| Métrica | Defeitos críticos | Resultado | Classificação | Detalhamento |
|---|---:|---:|---|---|
| M7 | 0 | 0 defeitos críticos | Excelente | [M7 - Defeitos funcionais críticos](metrica_7.md) |

**Julgamento M7:** **Excelente**

Não foram identificados defeitos com severidade crítica no conjunto consolidado utilizado na avaliação.

Para o detalhamento completo da execução, consulte: [M7 - Defeitos funcionais críticos](metrica_7.md).

### 3.8 M8 - Severidade Média dos Defeitos Funcionais

**Objetivo:** Calcular a severidade média dos defeitos funcionais consolidados a partir das divergências publicadas.

**Resultado consolidado da métrica:**

| Métrica | Defeitos verificados | Soma das severidades | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---|---|
| M8 | 8 | 29 | 3,63 | Insuficiente | [M8 - Severidade média dos defeitos](metrica_8.md) |

**Julgamento M8:** **Insuficiente**

A média de severidade ficou acima do limite satisfatório definido para a métrica.

Para o detalhamento completo da execução, consulte: [M8 - Severidade média dos defeitos](metrica_8.md).

## 4. Conclusão Parcial da Adequação Funcional

Com base nas oito métricas executadas nesta etapa, o **No Fluxo UnB** apresentou resultados distintos para os aspectos avaliados de Adequação Funcional.

Na **Completude Funcional (Q1)**, a M1 atingiu 66,67% (Regular), com 3 requisitos ausentes e 2 parciais. Na **Correção Funcional (Q2)**, a M2 (extração do histórico) ficou em 63,64% (Insatisfatória) e a M3 (consistência do fluxograma) em 90,32% (Insuficiente), ambas abaixo do mínimo de 95%; já a M4 (cálculos acadêmicos) atingiu 100,00% (Excelente). Na **Pertinência Funcional (Q3)**, a M5 concluiu todos os cenários de planejamento (100%, Excelente), mas a M6 evidenciou que o assistente de IA opera desacoplado do histórico (resultado Não aplicável). No **impacto consolidado dos defeitos (Q4)**, a M7 não encontrou defeitos críticos (Excelente), porém a M8 apresentou severidade média de 3,63 (Insuficiente), acima do nível satisfatório.

Em síntese, o núcleo de cálculo e a execução dos fluxos centrais estão sólidos, mas a extração de dados do histórico, a consistência curricular, a completude de requisitos e a pertinência do assistente de IA exigem correções antes de o sistema ser considerado plenamente confiável.

---

## 5. Análise GQM e Coerência com o Propósito

As oito métricas executadas respondem às quatro questões de Adequação Funcional definidas na Fase 2: Q1 (Completude), Q2 (Correção), Q3 (Pertinência) e Q4 (impacto dos defeitos).

<a id="tabela-115"></a>
**Tabela 115: Resposta consolidada às questões da Adequação Funcional.**

| Questão | Métrica | Resultado | Relação com a hipótese | Interpretação |
|---|---|---:|---|---|
| Q1 | M1 | 66,67% | Não confirma H1 (mínimo de 90%) | Requisitos de horas complementares, semestres restantes e trancamentos ausentes reduzem a completude funcional |
| Q2 | M2 | 63,64% | Não confirma H2 (mínimo de 95%) | A extração do histórico omite nome/matrícula, reprovações, trancamentos e horas complementares |
| Q2 | M3 | 90,32% | Não confirma H2 (mínimo de 95%) | A visualização curricular apresenta divergências, principalmente pela não contabilização de monitorias |
| Q2 | M4 | 100,00% | Confirma H2 | Os cálculos acadêmicos foram exibidos corretamente para o histórico de referência |
| Q3 | M5 | 100,00% | Confirma H3 (mínimo de 90%) | Todos os cenários de planejamento foram concluídos sem impedimento funcional |
| Q3 | M6 | Não aplicável | Não determinável | O assistente de IA não integra o histórico carregado, impedindo validação objetiva das respostas |
| Q4 | M7 | 0 defeitos críticos | Confirma o limite de criticidade de H4 | Nenhum defeito crítico foi identificado no conjunto consolidado |
| Q4 | M8 | 3,63 | Não confirma a severidade média baixa/moderada de H4 | A média de severidade aponta impacto funcional relevante, acima do nível satisfatório |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), os resultados mostram que o sistema possui comportamento confiável nos cálculos acadêmicos (M4) e na execução dos fluxos centrais (M5), mas ainda precisa de correções na extração do histórico (M2), na consistência curricular exibida no fluxograma (M3), na completude de requisitos (M1) e na pertinência do assistente de IA (M6) para apoiar decisões acadêmicas com maior segurança.

---

## 6. Julgamento Final e Sugestões de Melhoria

O julgamento consolidado da Adequação Funcional para as oito métricas executadas é **parcialmente satisfatório**: a M4 (cálculos) e a M5 (cenários de planejamento) atingiram nível excelente e a M7 não encontrou defeitos críticos, mas a M1 (completude), a M2 (extração) e a M3 (consistência do fluxograma) ficaram abaixo dos limites mínimos de aceitação, a M6 evidenciou lacuna de pertinência do assistente de IA e a M8 apresentou severidade média acima do nível satisfatório.

Sugestões de melhoria:

- Implementar a extração e exibição de horas complementares, estimativa de semestres restantes, trancamentos, mudança de curso, nome/matrícula e contagem de reprovações, requisitos ausentes ou parciais identificados nas M1 e M2.
- Corrigir a regra que deixa de considerar monitorias como atividades contabilizáveis em horas complementares, garantindo que cada monitoria some 30 horas ou 2 créditos ao progresso acadêmico correspondente (M3).
- Integrar o histórico acadêmico carregado e a matriz curricular ao contexto do assistente de IA, para que as respostas se tornem específicas e verificáveis (M6, defeito `AF-D08`).
- Priorizar a correção dos defeitos de severidade alta (`AF-D01`, `AF-D02`, `AF-D04`, `AF-D05` e `AF-D06`) para reduzir a severidade média da M8 a 3,00 ou menos.
- Criar testes de regressão com o histórico usado nesta avaliação e com novos históricos contendo monitorias, equivalências e atividades complementares.
- Manter as planilhas das M1 a M4 e o registro consolidado das M7 e M8 como dados brutos rastreáveis para novas execuções da avaliação.
- Reexecutar as métricas afetadas após os ajustes e comparar os novos resultados com os limites definidos no plano de avaliação.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
| ------ | ---- | --------- | ----- |
| `1.2` | 12/06/2026 | Consolidação da visão geral com todas as oito métricas executadas (M1–M8), incluindo M1, M2, M5 e M6 nos resultados, na análise GQM (Q1–Q4) e nas conclusões. | Grupo Hedy Lamarr |
| `1.1` | 08/06/2026 | Ajuste da visão geral da Fase 4 aos critérios de excelência, com dados brutos, análise GQM e sugestões de melhoria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação da página de execução da Fase 4 para Adequação Funcional, com consolidação inicial da métrica M3. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
