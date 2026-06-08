# Fase 4 - Execução e Resultados da Avaliação (Adequação Funcional)

## 1. Introdução

Nesta fase, foram executados os procedimentos definidos no [Plano de Avaliação da Fase 3](../../fase3/adequacao_funcional/index.md) para a característica **Adequação Funcional** do **No Fluxo UnB**.

O foco da execução foi validar, com base em evidências objetivas, a consistência das informações curriculares exibidas na aplicação e a confiabilidade dos resultados apresentados ao estudante durante o planejamento acadêmico.

---

## 2. Ambiente de Execução

Os testes das métricas **M3** e **M4** foram executados em ambiente controlado, com os seguintes parâmetros. Os ambientes e artefatos das demais métricas serão especificados posteriormente em suas respectivas páginas de execução.

| Item                          | Detalhe                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Versão do software avaliado** | No Fluxo UnB - release `qualidade-de-software` |
| **URL da aplicação** | [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) |
| **Navegador principal** | Google Chrome (versão 149.0.7827.53) |
| **Sistema operacional** | Ubuntu 24.04 |
| **Artefatos de apoio** | Histórico acadêmico utilizado nas métricas M3 e M4 ([historico_lucas.pdf](../../assets/historico_lucas.pdf)), base curricular oficial, capturas de tela e planilha de conferência |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.1 Dados Brutos e Evidências Consolidadas

**Tabela 1: Evidências utilizadas na execução das métricas M3 e M4.**

| Métrica | Dados brutos e evidências | Finalidade |
|---|---|---|
| M3 | [historico_lucas.pdf](../../assets/historico_lucas.pdf), [planilha de verificação M3](https://docs.google.com/spreadsheets/d/e/2PACX-1vS_9MoW9IL9oxwtR-dSK3rLv5Gyxs0zuZ4sMwrn4jYN349TyZR32XatXlxa-sOwlsS-T3_-SNZlGCbs/pubhtml?widget=true&amp;headers=false) e [vídeo de execução M3](https://www.youtube.com/watch?v=hSteyK7RSoM) | Conferir fluxograma, equivalências, pré-requisitos e estados curriculares |
| M4 | [historico_lucas.pdf](../../assets/historico_lucas.pdf), [planilha de verificação M4](https://docs.google.com/spreadsheets/d/e/2PACX-1vSlQF8WXUxLo_YCMk32xhxnmEkGlJ51YnO5LqvYqdhaROyGa8Gz1e1u7FLB-F0wXHZlqQVWkhBwqKVs/pubhtml?widget=true&amp;headers=false) e [vídeo de execução M4](https://www.youtube.com/watch?v=u64lvJq27Mw) | Conferir indicadores acadêmicos calculados pelo sistema |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Resultados por Métrica

### 3.1 M3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

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

### 3.2 M4 - Taxa de Correção dos Cálculos Acadêmicos

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

## 4. Conclusão Parcial da Adequação Funcional

Com base nas métricas executadas nesta etapa, o **No Fluxo UnB** apresentou resultados distintos para os aspectos avaliados de Adequação Funcional.

A M3 indicou inconsistências na visualização curricular, com 6 divergências em 62 itens verificados, o que aponta necessidade de ajustes no fluxograma gerado pelo sistema. Por outro lado, a M4 apresentou 100,00% de correção nos cálculos acadêmicos verificados, indicando aderência dos indicadores calculados aos valores esperados.

---

## 5. Análise GQM e Coerência com o Propósito

As métricas M3 e M4 respondem à Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

**Tabela 2: Resposta consolidada à Q2.**

| Métrica | Resultado | Relação com H2 | Interpretação |
|---|---:|---|---|
| M3 | 90,32% | Não confirma a hipótese de acurácia mínima de 95% | A visualização curricular ainda apresenta divergências relevantes, principalmente pela não contabilização de monitorias como horas complementares |
| M4 | 100,00% | Confirma a hipótese de acurácia mínima de 95% | Os cálculos acadêmicos avaliados foram exibidos corretamente para o histórico usado como referência |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), os resultados mostram que o sistema possui comportamento confiável nos cálculos acadêmicos avaliados, mas ainda precisa de correções na interpretação curricular exibida no fluxograma para apoiar decisões acadêmicas com maior segurança.

---

## 6. Julgamento Final e Sugestões de Melhoria

O julgamento consolidado da Adequação Funcional para as métricas executadas é **parcialmente satisfatório**: a M4 atingiu nível excelente, mas a M3 ficou abaixo do limite mínimo de aceitação definido no plano de avaliação.

Sugestões de melhoria:

- Corrigir a regra que deixa de considerar monitorias como atividades contabilizáveis em horas complementares.
- Garantir que cada monitoria identificada no histórico some 30 horas ou 2 créditos ao progresso acadêmico correspondente.
- Criar testes de regressão com o histórico usado nesta avaliação e com novos históricos contendo monitorias, equivalências e atividades complementares.
- Manter as planilhas M3 e M4 como dados brutos rastreáveis para novas execuções da avaliação.
- Reexecutar a M3 após os ajustes e comparar o novo resultado com o limite mínimo de 95%.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
| ------ | ---- | --------- | ----- |
| `1.1` | 08/06/2026 | Ajuste da visão geral da Fase 4 aos critérios de excelência, com dados brutos, análise GQM e sugestões de melhoria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação da página de execução da Fase 4 para Adequação Funcional, com consolidação inicial da métrica M3. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
