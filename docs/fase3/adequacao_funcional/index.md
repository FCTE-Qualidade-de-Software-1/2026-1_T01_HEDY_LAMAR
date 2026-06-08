# Plano de Avaliação - Adequação Funcional

## 1. Introdução

Esta seção operacionaliza a avaliação da característica **Adequação Funcional** do sistema **No Fluxo UnB**, com foco nas métricas M3 e M4 definidas na [Fase 2](../../fase2/01_obj_adequacao_funcional.md).

As métricas tratadas nesta etapa verificam se o sistema apresenta informações curriculares corretas e se os cálculos acadêmicos exibidos ao estudante estão coerentes com o histórico acadêmico e com a base curricular utilizada como referência.

---

## 2. Métricas Projetadas

**Tabela 1: Métricas de Adequação Funcional projetadas na Fase 3.**

| Código | Métrica | Questão GQM | Página |
|---|---|---|---|
| **M3** | Taxa de consistência do fluxograma, equivalências e pré-requisitos | Q2 | [M3 - Consistência do fluxograma](metrica_3.md) |
| **M4** | Taxa de correção dos cálculos acadêmicos | Q2 | [M4 - Correção dos cálculos acadêmicos](metrica_4.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Método Geral de Avaliação

As duas métricas seguem o mesmo fluxo básico de avaliação:

1. Definir o histórico acadêmico de referência.
2. Definir a base curricular ou documento oficial usado como oráculo.
3. Executar o fluxo de upload e processamento no No Fluxo UnB.
4. Coletar os valores exibidos pela aplicação.
5. Comparar os resultados obtidos com os valores esperados.
6. Registrar evidências, inconsistências e severidade.
7. Aplicar a fórmula da métrica e classificar o resultado.

**Tabela 2: Método geral de avaliação.**

| Etapa | Descrição | Evidência |
|---|---|---|
| Preparação | Separar histórico de referência, curso avaliado, base curricular e planilha de conferência. | Lista de artefatos usados |
| Execução | Realizar upload do histórico e acessar as telas de fluxograma e resumo acadêmico. | Capturas de tela ou vídeo |
| Conferência | Comparar cada item observado com o valor esperado. | Planilha de verificação preenchida |
| Cálculo | Aplicar a fórmula da métrica M3 ou M4. | Percentual calculado |
| Julgamento | Classificar o resultado conforme a régua de aceitação. | Registro de classificação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Artefatos de Coleta

O documento de coleta das métricas M3 e M4 deve conter, no mínimo, as seguintes colunas:

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

**Tabela 3: Cronograma de execução das métricas M3 e M4.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar histórico de referência, base curricular e planilha de conferência. | Equipe de Adequação Funcional |
| 09/06/2026 | Executar a coleta das métricas M3 e M4. | Avaliadores |
| 10/06/2026 | Consolidar resultados, evidências e classificação final. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## Histórico de Versões

**Tabela 4: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação da projeção da avaliação de Adequação Funcional para as métricas M3 e M4. | Lucas Guimarães |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
