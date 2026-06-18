# M4 - Taxa de Correção dos Cálculos Acadêmicos

## 1. Objetivo

Verificar se os indicadores acadêmicos calculados e exibidos pelo **No Fluxo UnB** estão corretos quando comparados aos valores esperados a partir do histórico acadêmico e das regras curriculares usadas como referência.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Definição da Métrica

**Tabela 60: Definição operacional da M4.**

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

**Tabela 61: Indicadores acadêmicos avaliados na M4.**

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

## 4. Justificativa e Rastreabilidade

A M4 foi definida para verificar a parte quantitativa da questão Q2 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md), avaliando se os cálculos acadêmicos exibidos pelo No Fluxo UnB correspondem aos valores esperados a partir do histórico acadêmico e das regras curriculares.

O método utiliza comparação controlada entre indicadores calculados manualmente ou em planilha de referência e os valores apresentados pela aplicação. Essa abordagem garante repetibilidade porque cada indicador possui fórmula ou regra de cálculo, valor esperado, tolerância definida, valor obtido, resultado binário e evidência associada.

**Tabela 62: Rastreabilidade da M4.**

| Elemento | Definição |
|---|---|
| Questão GQM | Q2 - Precisão na interpretação do histórico e apresentação de informações curriculares |
| Hipótese associada | H2 - Acurácia igual ou superior a 95%, sem defeitos críticos que comprometam a decisão acadêmica |
| Subcaracterística ISO/IEC 25010 | Correção funcional |
| Objeto medido | Indicadores acadêmicos calculados e exibidos pela aplicação |
| Continuidade na Fase 4 | A execução deverá apresentar planilha preenchida, cálculo percentual, evidências e julgamento final da M4 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 5. Recursos e Ambiente de Avaliação

**Tabela 63: Recursos necessários para execução da M4.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, versão web disponível no ambiente definido para a avaliação |
| Navegador homologado | Google Chrome ou Microsoft Edge em versão estável atual |
| Sistema operacional | Ubuntu 24.04 ou ambiente equivalente com navegador moderno |
| Entrada principal | Histórico acadêmico em PDF do estudante usado como referência |
| Oráculo de cálculo | Planilha com valores esperados calculados a partir do histórico, da base curricular e das regras acadêmicas aplicáveis |
| Ferramenta de registro | Planilha de verificação com indicador, valor esperado, valor obtido, tolerância, resultado e evidência |
| Evidências | Capturas de tela, vídeo de execução e link para a planilha preenchida |
| Massa de dados | Conjunto de indicadores acadêmicos aplicáveis ao histórico avaliado; indicadores não aplicáveis devem ser justificados e excluídos do denominador |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico acadêmico em PDF usado como entrada.
2. Transcrição ou extração textual do histórico para conferência.
3. Planilha com os cálculos esperados.
4. Regras de arredondamento adotadas para cada indicador.
5. Pasta para armazenamento das evidências.

A planilha deve conter, no mínimo:

| ID | Indicador | Fórmula/regra de referência | Valor esperado | Valor obtido | Tolerância | Correto? | Observação | Evidência |
|---|---|---|---|---|---|---|---|---|

---

## 7. Regras de Tolerância

**Tabela 64: Tolerâncias aceitas para a M4.**

| Tipo de valor | Tolerância |
|---|---|
| Contagens inteiras | Sem tolerância: o valor deve ser exatamente igual |
| Carga horária ou créditos | Sem tolerância: o valor deve ser exatamente igual |
| IRA e médias decimais | Diferença máxima de 0,01 por arredondamento |
| Percentual de progresso | Diferença máxima de 1 ponto percentual quando o sistema arredondar o valor exibido |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 8. Passo a Passo da Execução

1. Calcular previamente os valores esperados com base no histórico de referência.
2. Registrar na planilha a fórmula ou regra usada para obter cada valor esperado.
3. Acessar o No Fluxo UnB no ambiente definido para a avaliação.
4. Realizar login, caso necessário.
5. Fazer upload do histórico acadêmico de referência.
6. Aguardar o processamento do histórico.
7. Acessar as telas que exibem resumo acadêmico, progresso, fluxograma e indicadores calculados.
8. Registrar cada valor apresentado pelo sistema.
9. Comparar o valor obtido com o valor esperado e com a tolerância definida.
10. Atribuir **1** para indicador correto e **0** para indicador incorreto.
11. Marcar como **NA** apenas indicadores não aplicáveis ao histórico ou não previstos no escopo da métrica, justificando a exclusão do denominador.
12. Para cada divergência, registrar descrição, severidade e evidência.
13. Revisar a planilha ao final da execução para garantir que todos os indicadores aplicáveis tenham resultado, evidência e critério de cálculo.

---

## 9. Fórmula de Cálculo

```text
M4 = (Nº de indicadores acadêmicos calculados corretamente
      ÷ Nº total de indicadores acadêmicos verificados) × 100
```

---

## 10. Critério de Julgamento

**Tabela 65: Régua de julgamento da M4.**

| Classificação | Critério |
|---|---|
| Excelente | M4 >= 98% |
| Satisfatório | 95% <= M4 < 98% |
| Insuficiente | M4 < 95% |

O limite mínimo satisfatório de 95% segue a hipótese H2 definida para a Adequação Funcional na Fase 2.

---

## 11. Classificação de Divergências

**Tabela 66: Severidade das divergências da M4.**

| Severidade | Critério |
|---|---|
| Crítica | Cálculo incorreto pode induzir decisão acadêmica errada, como estimar conclusão de curso ou pendência inexistente |
| Alta | Indicador central de progresso, IRA, carga horária ou pendências é exibido incorretamente |
| Média | Indicador secundário está incorreto, mas não altera diretamente o planejamento principal |
| Baixa | Divergência limitada a arredondamento visual ou apresentação sem impacto decisório |

---

## 12. Cronograma de Execução

**Tabela 67: Cronograma específico da M4.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar histórico acadêmico, planilha de cálculo esperado, regras de tolerância e pasta de evidências. | Lucas Guimarães |
| 09/06/2026 | Executar upload do histórico, coletar indicadores exibidos e preencher a planilha de verificação. | Avaliadores |
| 10/06/2026 | Consolidar divergências, calcular a M4, classificar o resultado e publicar a página de execução da Fase 4. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 13. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha com valores esperados e valores obtidos.
- Percentual final da M4.
- Lista de indicadores divergentes.
- Evidências associadas aos cálculos incorretos.
- Classificação final da métrica.
- Registro da fórmula ou regra usada para calcular cada valor esperado.
- Justificativa para indicadores marcados como não aplicáveis, quando existirem.
- Página correspondente na Fase 4 com resultado, julgamento e links para as evidências.

---

## Histórico de Versões

**Tabela 68: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Ajuste da métrica M4 aos critérios de excelência da Fase 3, com detalhamento de método, recursos, cronograma e rastreabilidade. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação do plano de avaliação da métrica M4 de Adequação Funcional. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
