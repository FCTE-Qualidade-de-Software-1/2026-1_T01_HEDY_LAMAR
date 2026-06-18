# M2 - Acurácia da Extração do Histórico Acadêmico

## 1. Objetivo

Medir a precisão com que o **No Fluxo UnB** extrai e apresenta as informações contidas no histórico acadêmico em PDF do estudante, comparando os dados exibidos pelo sistema com os valores de referência conhecidos do mesmo histórico.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Definição da Métrica

**Tabela 44: Definição operacional da M2.**

| Campo | Definição |
|---|---|
| **Métrica** | Acurácia da extração do histórico acadêmico |
| **Tipo** | Quantitativa |
| **Entrada** | Histórico acadêmico em PDF com gabarito de valores esperados para cada campo verificável |
| **Saída** | Percentual de itens extraídos corretamente pelo sistema em relação ao total verificado |
| **Unidade** | Percentual |
| **Fonte de evidência** | Gabarito de referência, capturas de tela da interface e planilha de verificação item a item |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Itens Verificados

Para esta métrica, cada campo extraído do histórico acadêmico é conferido individualmente contra o gabarito de referência e classificado como correto, incorreto ou ausente.

**Tabela 45: Itens verificáveis da extração do histórico.**

| Categoria | Item verificável |
|---|---|
| Identificação do aluno | Nome completo, matrícula e curso |
| Disciplinas aprovadas | Código, nome, nota e carga horária — para cada disciplina aprovada |
| Disciplinas reprovadas | Código, nome, nota (ou menção) e semestre — para cada reprovação |
| Disciplinas em curso | Identificação de disciplinas que o aluno esteja cursando no momento do histórico |
| Reprovações por disciplina | Contagem de tentativas e reprovações em disciplinas com mais de uma ocorrência |
| Trancamentos | Semestres em que houve trancamento de matrícula |
| Mudança de curso | Identificação de troca de curso e semestre da mudança, quando aplicável |
| IRA / Média ponderada | Valor numérico calculado ou extraído do histórico |
| Carga horária total integralizada | Total de horas cursadas e aprovadas |
| Horas complementares | Quantidade de horas de atividades complementares registradas |
| Semestres cursados | Número de períodos letivos presentes no histórico |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Justificativa e Rastreabilidade

A M2 foi definida para verificar a correção funcional da extração de dados do No Fluxo UnB, que é o núcleo de todas as funcionalidades dependentes — como cálculo do IRA, visualização do fluxograma e detecção de trancamentos. Falhas nessa etapa comprometem a confiabilidade de toda a análise apresentada ao estudante.

O método utiliza comparação item a item entre os dados exibidos pelo sistema e um gabarito externo construído a partir do histórico de referência. Essa escolha garante repetibilidade e rastreabilidade, pois cada item possui valor esperado, valor obtido, resultado binário e evidência associada.

**Tabela 46: Rastreabilidade da M2.**

| Elemento | Definição |
|---|---|
| Questão GQM | Q2 — Precisão na interpretação do histórico e apresentação de informações curriculares |
| Hipótese associada | H2 — Acurácia igual ou superior a 95%, sem defeitos críticos que comprometam a decisão acadêmica |
| Subcaracterística ISO/IEC 25010 | Correção Funcional |
| Objeto medido | Dados extraídos do histórico acadêmico em PDF e exibidos pela interface do sistema |
| Continuidade na Fase 4 | A execução deverá apresentar planilha preenchida, gabarito de referência, cálculo percentual, evidências e julgamento final da M2 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 5. Recursos e Ambiente de Avaliação

**Tabela 47: Recursos necessários para execução da M2.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, versão web disponível no ambiente definido para a avaliação |
| Navegador homologado | Google Chrome em versão estável atual |
| Sistema operacional | Ubuntu 24.04 ou ambiente equivalente com navegador moderno |
| Entrada principal | Histórico(s) acadêmico(s) em PDF de referência (mínimo 1, ideal 3 para maior representatividade) |
| Oráculo de referência | Gabarito em planilha com os valores esperados para cada item verificável de cada histórico |
| Ferramenta de registro | Planilha de verificação com campos: ID, Categoria, Valor esperado, Valor obtido, Resultado, Severidade, Observação e Evidência |
| Evidências | Capturas de tela dos dados exibidos pelo sistema, com destaque nos itens incorretos ou ausentes |
| Massa de dados | Cada campo extraído do histórico (disciplina, nota, semestre, indicador) é tratado como unidade verificável independente |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico(s) acadêmico(s) em PDF identificados com código único (ex.: H01, H02, H03).
2. Gabarito correspondente a cada histórico, com os valores esperados para cada item da Tabela 45.
3. Conta de usuário ativa no sistema para realização do upload.
4. Planilha de verificação com os itens pré-listados por histórico.
5. Pasta de evidências criada no Google Drive do grupo.

A planilha deve conter, no mínimo:

| ID | Categoria | Valor esperado | Valor obtido | Correto? | Severidade | Observação | Evidência |
|---|---|---|---|---|---|---|---|

---

## 7. Passo a Passo da Execução

1. Acessar [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) com login ativo.
2. Realizar o upload do histórico H01.
3. Aguardar a conclusão do processamento pelo sistema.
4. Capturar screenshot completo da tela resultante (fluxograma gerado e painéis de indicadores) com a URL visível.
5. Para cada item do gabarito do histórico H01, localizar o valor correspondente exibido pelo sistema.
6. Comparar o valor exibido com o valor esperado do gabarito.
7. Registrar **1** para item correto e **0** para item incorreto ou ausente, conforme os critérios da Tabela 49.
8. Para cada divergência, registrar descrição, severidade e capturar evidência visual.
9. Repetir os passos 2 a 8 para cada histórico de referência adicional (H02, H03).
10. Para cada item incorreto ou ausente, avaliar se o erro é crítico, ou seja, se poderia induzir uma decisão acadêmica errada.
11. Registrar defeitos críticos separadamente com: identificador, histórico, item afetado, valor esperado, valor encontrado, severidade e reprodutibilidade.
12. Somar todos os itens corretos em todos os históricos testados (N_correto).
13. Somar todos os itens verificados — corretos, incorretos e ausentes (N_total).
14. Aplicar a fórmula de cálculo e registrar o resultado final na planilha.
15. Revisar a planilha ao final da execução para garantir que não existam itens sem classificação.

---

## 8. Fórmula de Cálculo

```text
M2 = (Nº de itens extraídos corretamente pelo sistema
      ÷ Nº total de itens verificados) × 100
```

> Diferenças de formatação sem impacto no conteúdo (ex.: caixa do texto, espaços extras) **não** são contadas como erro. Divergências de valor, semestre incorreto ou campo não exibido **são** contadas.

---

## 9. Critério de Julgamento

**Tabela 48: Régua de julgamento da M2.**

| Classificação | Critério |
|---|---|
| Excelente | M2 ≥ 95% |
| Boa | 85% ≤ M2 < 95% |
| Regular | 70% ≤ M2 < 85% |
| Insatisfatória | M2 < 70% |

O limite mínimo satisfatório de 95% segue o requisito não funcional de acurácia mínima definido na Fase 1 e a hipótese H2 da Adequação Funcional. A ocorrência de **qualquer defeito crítico** deve ser reportada independentemente do percentual obtido.

---

## 10. Classificação de Divergências

**Tabela 49: Severidade das divergências da M2.**

| Severidade | Critério |
|---|---|
| Crítica | Dado incorreto pode induzir o estudante a tomar uma decisão acadêmica errada (ex.: disciplina aprovada registrada como reprovada, IRA incorreto, trancamento não detectado) |
| Alta | Campo central ao planejamento acadêmico exibido com valor errado ou ausente, mas sem induzir diretamente a uma decisão incorreta |
| Média | Dado secundário incorreto que não bloqueia a interpretação geral, mas reduz a confiabilidade do sistema |
| Baixa | Problema pontual de apresentação textual sem impacto sobre os valores ou a decisão acadêmica |

---

## 11. Cronograma de Execução

**Tabela 50: Cronograma específico da M2.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar histórico(s) de referência, gabarito(s), planilha de verificação e pasta de evidências | Paulo Cerqueira |
| 09/06/2026 | Executar upload dos históricos, conferir itens item a item e preencher a planilha | Avaliadores |
| 10/06/2026 | Consolidar divergências, calcular M2, classificar o resultado e publicar a página de execução da Fase 4 | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 12. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Gabarito(s) preenchido(s) com os valores esperados de cada histórico de referência.
- Planilha de verificação com todos os itens avaliados, classificados e com evidências associadas.
- Lista de defeitos encontrados com severidade e flag de criticidade.
- Percentual final da M2.
- Classificação final da métrica.
- Registro de rastreabilidade entre cada divergência e o item do histórico avaliado.
- Página correspondente na Fase 4 com resultado, julgamento e links para as evidências.

---

## Histórico de Versões

**Tabela 51: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação do plano de avaliação da M2 | [Paulo Cerqueira](https://github.com/paulocerqr) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*