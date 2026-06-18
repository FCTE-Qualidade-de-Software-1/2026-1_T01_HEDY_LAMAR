# M5 - Execução da Taxa de Sucesso em Cenários de Planejamento Acadêmico

## 1. Objetivo da Execução

Executar a métrica M5 definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_5/), verificando se o **No Fluxo UnB** permite ao estudante concluir, sem impedimentos funcionais, os principais cenários de planejamento acadêmico disponíveis na plataforma.

Esta métrica responde à questão Q3 de Adequação Funcional: **"Em que grau as funcionalidades do sistema são apropriadas para executar tarefas reais de planejamento acadêmico?"**

---

## 2. Procedimento Executado

1. Acesso à plataforma No Fluxo UnB em `https://no-fluxo.crianex.com/` com usuário de teste autenticado.
2. Upload do histórico acadêmico de referência (`historico_andre.pdf`) para viabilizar os cenários dependentes de histórico.
3. Execução sequencial dos quatro cenários definidos na Fase 3 (C1–C4), seguindo os roteiros de teste correspondentes.
4. Registro do resultado de cada cenário como Sucesso ou Falha, com captura de evidência em vídeo.
5. Consolidação do percentual final da métrica.

### 2.1 Conformidade com o Plano de Avaliação

**Tabela 133: Rastreabilidade entre o plano da Fase 3 e a execução da M5.**

| Instrução definida na Fase 3                                                        | Execução realizada na Fase 4                                                                               | Evidência                              |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Usar histórico acadêmico em PDF como entrada para cenários dependentes de histórico | Foi utilizado o arquivo [historico_andre.pdf](../../assets/dados/adequacao_funcional/metrica5e6/historico_andre.pdf)                                                              | Vídeos de execução por cenário         |
| Executar os quatro cenários (C1–C4) seguindo os roteiros de teste                  | Todos os quatro cenários foram executados integralmente conforme os roteiros da Fase 3                    | Vídeos de execução por cenário         |
| Classificar cada cenário como Sucesso ou Falha                                      | Os quatro cenários foram classificados como Sucesso                                                        | Tabela 134 desta página                  |
| Registrar evidência de cada execução                                                | Gravações em vídeo realizadas para cada cenário                                                            | Links de evidência na Tabela 134         |
| Aplicar fórmula e régua de julgamento                                               | Foi calculado M5 = 100%, classificado como Excelente                                                       | Seções 4 e 5 desta página              |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

**Tabela 134: Resultado da execução dos cenários da M5.**

| Código | Cenário                                                                            | Funcionalidade | Resultado  | Impedimento identificado | Evidência                       |
| ------ | ---------------------------------------------------------------------------------- | -------------- | ---------- | ------------------------ | ------------------------------- |
| C1     | Upload de histórico em PDF e visualização do fluxograma com disciplinas destacadas | F1, F2, F4     | **Sucesso** | Nenhum                  | [Vídeo C1](../../assets/dados/adequacao_funcional/metrica5e6/C1.mkv) |
| C2     | Consulta de pré-requisitos e equivalências de uma disciplina                       | F5             | **Sucesso** | Nenhum                  | [Vídeo C2](../../assets/dados/adequacao_funcional/metrica5e6/C2.mkv) |
| C3     | Verificação de progresso acadêmico (IRA, carga horária, semestres restantes)       | F7, F13        | **Sucesso** | Nenhum                  | [Vídeo C3](../../assets/dados/adequacao_funcional/metrica5e6/C3.mkv)  |
| C4     | Simulação de troca de curso com aproveitamento de disciplinas                      | F11            | **Sucesso** | Nenhum                  | [Vídeo C4](../../assets/dados/adequacao_funcional/metrica5e6/C4.mkv)  |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Resumo da Verificação

**Tabela 135: Resumo quantitativo da execução da M5.**

| Categoria                                | Quantidade |
| ---------------------------------------- | ---------- |
| Cenários executados                      | 4          |
| Cenários concluídos com sucesso          | 4          |
| Cenários com impedimento funcional       | 0          |
| Impedimentos críticos identificados      | 0          |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.2 Impedimentos Identificados

Nenhum impedimento funcional foi identificado na execução dos cenários C1 a C4. Todos os fluxos foram concluídos integralmente, sem erros de sistema, ausência de funcionalidade ou travamento de interface.

---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_5/):

```
M5 = (Nº de cenários concluídos sem impedimento funcional
      ÷ Nº total de cenários executados) × 100
```

Substituindo os valores obtidos na execução:

```
M5 = (4 / 4) × 100 = 100%
```

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_5/):

- **Excelente:** M5 >= 95%
- **Satisfatório:** 90% <= M5 < 95%
- **Insuficiente:** M5 < 90%

**Resultado obtido:** **M5 = 100%**

**Classificação:** **Excelente**

---

## 6. Análise e Resposta GQM

A M5 responde à questão Q3 de Adequação Funcional ao verificar se as funcionalidades centrais do No Fluxo UnB são pertinentes o suficiente para que o estudante conclua tarefas reais de planejamento acadêmico sem impedimento funcional.

O resultado de 100% confirma a hipótese H3 da [Fase 2](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase2/01_obj_adequacao_funcional/): *"Os cenários principais de planejamento podem ser concluídos com sucesso em pelo menos 90% das execuções avaliadas."* O sistema superou o limiar mínimo com margem, indicando que todos os fluxos centrais avaliados estão operantes e acessíveis ao estudante.

**Tabela 136: Resposta à hipótese H3 da Fase 2.**

| Hipótese | Limiar definido | Resultado obtido | Confirmada? |
| -------- | --------------- | ---------------- | ----------- |
| H3 — Os cenários principais de planejamento podem ser concluídos com sucesso em pelo menos 90% das execuções avaliadas | 90% | 100% | **Sim** |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Em relação ao propósito da avaliação definido na [Fase 1](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase1/01_proposito_da_avaliacao/), o resultado indica que o No Fluxo UnB é funcionalmente pertinente para as tarefas avaliadas: o estudante consegue visualizar o fluxograma com o histórico carregado, consultar pré-requisitos e equivalências de disciplinas, verificar seus indicadores de progresso acadêmico e simular uma troca de curso, sem bloqueio funcional em nenhum desses fluxos.

É importante contextualizar, no entanto, que a avaliação da M5 mede a **conclusão dos fluxos** — isto é, a pertinência funcional —, e não a correção das informações exibidas. Divergências de conteúdo, como as identificadas nas métricas M3 (consistência do fluxograma) e M4 (cálculos acadêmicos), são tratadas separadamente e não configuram impedimento funcional para a M5.

---

## 7. Julgamento e Sugestões de Melhoria

A execução da métrica M5 indica que o **No Fluxo UnB** permite a conclusão de todos os cenários avaliados sem impedimento funcional, com resultado classificado como **Excelente**.

Embora a M5 não tenha registrado falhas, a análise integrada com as demais métricas de adequação funcional aponta oportunidades de aprimoramento na qualidade do conteúdo exibido ao longo desses fluxos:

- O cenário C3 (verificação de progresso) expõe indicadores que, conforme a M1, incluem ausências relevantes — como a estimativa de semestres restantes (F13) e a contabilização de horas complementares (F8). Embora o cenário tenha sido concluído com sucesso (os indicadores disponíveis foram exibidos), a completude da informação ainda é limitada.
- O cenário C4 (troca de curso) depende da consistência das equivalências exibidas, objeto de avaliação da M3, cujo resultado foi classificado como Insuficiente. A pertinência funcional está presente, mas a confiabilidade do conteúdo da simulação requer correção.

Sugestões de melhoria:

- Implementar a exibição da estimativa de semestres restantes e da carga de horas complementares no painel de progresso, para que o cenário C3 entregue informação completa ao estudante.
- Corrigir as divergências de equivalências no fluxograma identificadas na M3, para que o cenário C4 produza uma simulação de troca de curso confiável.
- Manter os roteiros de teste dos cenários C1–C4 como base de regressão para verificações futuras após atualizações da plataforma.

---

## 8. Conclusão da Métrica M5

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados pela fórmula da métrica e comparados com a régua de julgamento definida previamente. A classificação final da M5 é **Excelente**, com **4 cenários concluídos com sucesso em 4 executados (100%)** e nenhum impedimento funcional registrado.

---

## Histórico de Versões

**Tabela 137: Histórico de versões.**

| Versão | Data       | Descrição                                                                   | Autor |
| ------ | ---------- | --------------------------------------------------------------------------- | ----- |
| `1.0`  | 08/06/2026 | Criação da página de execução da métrica M5 na Fase 4, com resultados reais. | [André Gustavo](https://github.com/AndreGustavoRN) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
