# M3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

## 1. Objetivo

Verificar se o fluxograma apresentado pelo **No Fluxo UnB** representa corretamente as disciplinas, equivalências, dependências e pré-requisitos do curso avaliado.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Definição da Métrica

<a id="tabela-52"></a>
**Tabela 52: Definição operacional da M3.**

| Campo | Definição |
|---|---|
| **Métrica** | Taxa de consistência do fluxograma, equivalências e pré-requisitos |
| **Tipo** | Quantitativa |
| **Entrada** | Itens curriculares esperados no fluxograma do curso avaliado |
| **Saída** | Percentual de itens curriculares exibidos corretamente |
| **Unidade** | Percentual |
| **Fonte de evidência** | Base curricular, documento oficial do fluxograma, tela gerada pelo sistema e planilha de verificação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Itens Verificados

Para esta métrica, cada item curricular conferido deve ser classificado individualmente como correto ou incorreto.

<a id="tabela-53"></a>
**Tabela 53: Itens curriculares avaliados na M3.**

| Tipo de item | O que deve ser conferido | Resultado esperado |
|---|---|---|
| Disciplina | Código, nome, carga horária/créditos e semestre sugerido | A disciplina exibida corresponde à base curricular usada como oráculo |
| Pré-requisito | Relação de dependência entre disciplinas | A dependência exibida é igual à regra curricular esperada |
| Equivalência | Relação entre disciplinas equivalentes ou aproveitáveis | A equivalência exibida corresponde à base curricular |
| Estado no fluxograma | Disciplina cursada, pendente, disponível ou bloqueada | O estado exibido é coerente com o histórico usado no teste |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Justificativa e Rastreabilidade

A M3 foi definida para verificar a parte visual e curricular da questão Q2 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md), que exige acurácia mínima de 95% na apresentação de informações acadêmicas ao estudante.

O método utiliza comparação item a item entre o fluxograma exibido pelo sistema e um oráculo externo composto por histórico acadêmico de referência, base curricular oficial, regras de equivalência e pré-requisitos do curso avaliado. Essa escolha permite repetibilidade porque cada item possui valor esperado, valor obtido, resultado binário e evidência associada.

<a id="tabela-54"></a>
**Tabela 54: Rastreabilidade da M3.**

| Elemento | Definição |
|---|---|
| Questão GQM | Q2 - Precisão na interpretação do histórico e apresentação de informações curriculares |
| Hipótese associada | H2 - Acurácia igual ou superior a 95%, sem defeitos críticos que comprometam a decisão acadêmica |
| Subcaracterística ISO/IEC 25010 | Correção funcional |
| Objeto medido | Fluxograma curricular, disciplinas, equivalências, dependências, pré-requisitos e estados exibidos |
| Continuidade na Fase 4 | A execução deverá apresentar planilha preenchida, cálculo percentual, evidências e julgamento final da M3 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 5. Recursos e Ambiente de Avaliação

<a id="tabela-55"></a>
**Tabela 55: Recursos necessários para execução da M3.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, versão web disponível no ambiente definido para a avaliação |
| Navegador homologado | Google Chrome ou Microsoft Edge em versão estável atual |
| Sistema operacional | Ubuntu 24.04 ou ambiente equivalente com navegador moderno |
| Entrada principal | Histórico acadêmico em PDF do estudante usado como referência |
| Oráculo curricular | Base curricular oficial do curso, incluindo disciplinas, créditos, pré-requisitos e equivalências |
| Ferramenta de registro | Planilha de verificação com campos esperados, obtidos, resultado e evidência |
| Evidências | Capturas de tela, vídeo de execução e link para a planilha preenchida |
| Massa de dados | Conjunto de itens curriculares extraídos do histórico e da matriz oficial; cada disciplina, equivalência, dependência, pré-requisito e estado curricular deve ser tratado como unidade verificável |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Preparação

Antes da execução, o avaliador deve preparar:

1. Histórico acadêmico em PDF usado como entrada.
2. Curso correspondente ao histórico avaliado.
3. Documento oficial ou base curricular de referência.
4. Planilha de verificação dos itens curriculares.
5. Pasta para armazenamento das evidências.

A planilha deve conter, no mínimo:

| ID | Tipo de item | Valor esperado | Valor obtido | Correto? | Severidade | Observação | Evidência |
|---|---|---|---|---|---|---|---|

---

## 7. Passo a Passo da Execução

1. Acessar o No Fluxo UnB no ambiente definido para a avaliação.
2. Realizar login, caso necessário.
3. Fazer upload do histórico acadêmico de referência.
4. Aguardar o processamento do histórico.
5. Abrir a visualização do fluxograma do curso.
6. Conferir cada disciplina exibida contra a base curricular oficial.
7. Conferir cada relação de pré-requisito e dependência contra a regra curricular esperada.
8. Conferir cada equivalência ou aproveitamento identificado no fluxo.
9. Conferir o estado de cada item no fluxograma, como cursado, pendente, disponível ou bloqueado.
10. Registrar **1** para item correto e **0** para item incorreto.
11. Para cada divergência, registrar descrição, severidade e evidência.
12. Salvar capturas de tela ou vídeo seguindo o padrão definido na visão geral da Adequação Funcional.
13. Revisar a planilha ao final da execução para garantir que não existam itens sem classificação.

---

## 8. Fórmula de Cálculo

```text
M3 = (Nº de disciplinas, equivalências, dependências e pré-requisitos exibidos corretamente
      ÷ Nº total de itens curriculares verificados) × 100
```

---

## 9. Critério de Julgamento

<a id="tabela-56"></a>
**Tabela 56: Régua de julgamento da M3.**

| Classificação | Critério |
|---|---|
| Excelente | M3 >= 98% |
| Satisfatório | 95% <= M3 < 98% |
| Insuficiente | M3 < 95% |

O limite mínimo satisfatório de 95% segue a hipótese H2 definida para a Adequação Funcional na Fase 2.

---

## 10. Classificação de Divergências

<a id="tabela-57"></a>
**Tabela 57: Severidade das divergências da M3.**

| Severidade | Critério |
|---|---|
| Crítica | Informação curricular incorreta pode induzir o estudante a planejar matrícula impossível ou academicamente inadequada |
| Alta | Disciplina, pré-requisito ou equivalência central é exibido de forma incorreta |
| Média | Informação secundária está incorreta, mas não bloqueia a interpretação geral do fluxograma |
| Baixa | Problema pontual de apresentação textual sem impacto direto na decisão acadêmica |

---

## 11. Cronograma de Execução

<a id="tabela-58"></a>
**Tabela 58: Cronograma específico da M3.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar histórico acadêmico, base curricular, planilha de verificação e pasta de evidências. | Lucas Guimarães |
| 09/06/2026 | Executar upload do histórico, coletar o fluxograma gerado e preencher a planilha item a item. | Avaliadores |
| 10/06/2026 | Consolidar divergências, calcular a M3, classificar o resultado e publicar a página de execução da Fase 4. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 12. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha preenchida com todos os itens verificados.
- Percentual final da M3.
- Lista de divergências encontradas.
- Evidências visuais associadas aos itens incorretos.
- Classificação final da métrica.
- Registro de rastreabilidade entre cada divergência e o item curricular avaliado.
- Página correspondente na Fase 4 com resultado, julgamento e links para as evidências.

---

## Histórico de Versões

<a id="tabela-59"></a>
**Tabela 59: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Ajuste da métrica M3 aos critérios de excelência da Fase 3, com detalhamento de método, recursos, cronograma e rastreabilidade. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação do plano de avaliação da métrica M3 de Adequação Funcional. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
