# Plano de Avaliação - Adequação Funcional

## 1. Introdução

Esta seção apresenta a projeção da avaliação da característica **Adequação Funcional** do sistema **No Fluxo UnB**, transformando as questões e hipóteses definidas na [Fase 2](../../fase2/01_obj_adequacao_funcional.md) em métricas executáveis.

O conjunto de métricas cobre a completude das funções essenciais, a correção da extração e interpretação do histórico acadêmico, a consistência das informações curriculares, a utilidade das funcionalidades de planejamento e o impacto dos defeitos funcionais encontrados. Esta página consolida a visão geral do plano; os critérios, fórmulas, entradas e procedimentos específicos estão detalhados nas páginas individuais de cada métrica.

---

## 2. Métricas Projetadas

**Tabela 1: Métricas de Adequação Funcional projetadas na Fase 3.**

| Código | Métrica | Questão GQM | Página |
|---|---|---|---|
| **M1** | Percentual de requisitos funcionais essenciais disponíveis | Q1 | [M1 - Cobertura dos requisitos funcionais](metrica_1.md) |
| **M2** | Acurácia da extração do histórico acadêmico | Q2 | [M2 - Acurácia da extração do histórico acadêmico](metrica_2.md) |
| **M3** | Taxa de consistência do fluxograma, equivalências e pré-requisitos | Q2 | [M3 - Consistência do fluxograma](metrica_3.md) |
| **M4** | Taxa de correção dos cálculos acadêmicos | Q2 | [M4 - Correção dos cálculos acadêmicos](metrica_4.md) |
| **M5** | Taxa de Sucesso em Cenários de Planejamento Acadêmico | Q3 | [M5 - Cenários de Planejamento Acadêmico](metrica_5.md) |
| **M6** | Percentual de Recomendações ou Orientações Academicamente Válidas | Q3 | [M6 - Recomendações academicamente válidas](metrica_6.md) |
| **M7** | Número de defeitos funcionais críticos encontrados | Q4 | [M7 - Defeitos funcionais críticos](metrica_7.md) |
| **M8** | Severidade média dos defeitos funcionais | Q4 | [M8 - Severidade média dos defeitos funcionais](metrica_8.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Método Geral de Avaliação

As métricas seguem um fluxo comum de avaliação, alinhado aos critérios definidos na [Fase 2](../../fase2/01_obj_adequacao_funcional.md). Como esta é uma visão geral, as etapas abaixo sintetizam o processo compartilhado entre as métricas:

1. Relacionar cada métrica à questão GQM, hipótese e subcaracterística correspondente.
2. Preparar os insumos necessários, como requisitos funcionais, histórico acadêmico, base curricular, cenários de planejamento, recomendações avaliadas ou registro de defeitos.
3. Executar a inspeção, o cenário de uso ou a coleta definida para a métrica.
4. Registrar os resultados observados e as evidências correspondentes.
5. Comparar os resultados com o valor esperado, critério de aceitação ou oráculo definido.
6. Consolidar inconsistências e defeitos funcionais, quando aplicável.
7. Aplicar a fórmula ou forma de medição e classificar o resultado.

**Tabela 2: Método geral de avaliação.**

| Etapa | Descrição | Evidência |
|---|---|---|
| Preparação | Separar os insumos exigidos pela métrica e definir o oráculo ou critério de aceitação. | Lista de artefatos usados |
| Execução | Realizar a inspeção, cenário de uso ou coleta prevista para a métrica. | Capturas de tela, vídeo, planilha ou registro de execução |
| Conferência | Comparar cada item observado com o valor esperado ou critério definido. | Planilha de verificação preenchida |
| Consolidação | Agrupar divergências em defeitos funcionais únicos, quando aplicável. | CSV/planilha consolidada |
| Cálculo | Aplicar a fórmula ou forma de medição correspondente. | Resultado calculado |
| Julgamento | Classificar o resultado conforme a régua de aceitação. | Registro de classificação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Artefatos de Coleta

O documento de coleta deverá conter, no mínimo, as seguintes colunas:

| Métrica | Item verificado | Valor esperado | Valor obtido | Resultado | Severidade | Link da evidência |
|---|---|---|---|---|---|---|

Para manter rastreabilidade, as evidências devem seguir o padrão:

```text
AF_M[NUMERO]_[ITEM]_[DATA].png
```

Exemplo:

```text
AF_M3_PRE_REQUISITO_CIC0004_2026-06-08.png
```

---

## 5. Responsáveis e Cronograma

### 5.1 Cronograma

**Tabela 3: Cronograma de execução das métricas de Adequação Funcional.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar histórico de referência, base curricular, planilha de conferência e registro de defeitos. | Lucas Guimarães, André, Gabriel e Paulo |
| 11/06/2026 | Executar a coleta das métricas de Adequação Funcional. | Avaliadores |
| 12/06/2026 | Consolidar resultados, evidências, defeitos e classificação final. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 5.2 Ambiente e Ferramentas Homologadas para Inspeção

As métricas de Adequação Funcional serão executadas no navegador **Google Chrome**, usado como ambiente principal para testar as funcionalidades da aplicação web.

Durante a execução, fica autorizado o uso das seguintes ferramentas de apoio do próprio navegador:

- DevTools do Google Chrome.
- Capturas de tela ou gravação de tela para registrar evidências.
- Inspeção visual da interface e dos dados exibidos pela aplicação.

### 5.3 Arquivo de Teste

Será utilizado o histórico acadêmico de referência disponível nos assets do projeto:

[historico_lucas.pdf](../../assets/historico_lucas.pdf)

---

## Histórico de Versões

**Tabela 4: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.3` | 12/06/2026 | Registro do histórico acadêmico usado na avaliação e do Google Chrome como ambiente principal de teste. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.2` | 12/06/2026 | Ajuste da visão geral da projeção para contemplar todas as métricas de Adequação Funcional. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.1` | 10/06/2026 | Atualização da projeção de Adequação Funcional para incluir as métricas M7 e M8 e a consolidação de defeitos funcionais. | [Gabriel Lopes](https://github.com/BrzGab) |
| `1.0` | 08/06/2026 | Criação da projeção da avaliação de Adequação Funcional para as métricas M3 e M4. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
