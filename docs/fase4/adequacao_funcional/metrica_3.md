# M3 - Execução da Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos

## 1. Objetivo da Execução

Executar a métrica M3 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_3.md), verificando se o **No Fluxo UnB** exibe corretamente os itens curriculares esperados para o histórico acadêmico utilizado na avaliação.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Procedimento Executado

1. Seleção do histórico acadêmico de referência em PDF: [historico_lucas.pdf](../../assets/historico_lucas.pdf), utilizado como entrada na avaliação.
2. Definição da base curricular oficial utilizada como oráculo.
3. Upload do histórico no No Fluxo UnB.
4. Abertura do fluxograma gerado pela aplicação.
5. Conferência item a item (disciplina, pré-requisito, equivalência e estado).
6. Registro de conformidade e divergências em planilha de verificação.
7. Consolidação do percentual final da métrica.

### 2.1 Conformidade com o Plano de Avaliação

<a id="tabela-126"></a>
**Tabela 126: Rastreabilidade entre o plano da Fase 3 e a execução da M3.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Usar histórico acadêmico em PDF como entrada | Foi utilizado o arquivo [historico_lucas.pdf](../../assets/historico_lucas.pdf) | Histórico acadêmico armazenado em `docs/assets` |
| Definir base curricular oficial como oráculo | A conferência foi feita comparando os itens exibidos pelo sistema com os valores esperados registrados na planilha | Planilha de verificação da M3 |
| Conferir disciplinas, equivalências, pré-requisitos e estados do fluxograma | Foram verificados 62 itens curriculares, com marcação binária de correto ou divergente | Resumo da verificação e planilha de conferência |
| Registrar divergências, severidade e evidência | Foram registradas 6 divergências, consolidadas na planilha e documentadas em vídeo | Planilha de conferência e vídeo de execução |
| Aplicar fórmula e régua de julgamento | Foi calculado M3 = 90,32%, classificado como Insuficiente | Seções de cálculo e julgamento desta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

<a id="tabela-127"></a>
**Tabela 127: Dados brutos e evidências da M3.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Histórico acadêmico | Entrada usada no upload e no processamento do sistema | [historico_lucas.pdf](../../assets/historico_lucas.pdf) |
| Planilha de verificação M3 | Registro dos itens esperados, itens obtidos, resultado e divergências | [Planilha M3](https://docs.google.com/spreadsheets/d/e/2PACX-1vS_9MoW9IL9oxwtR-dSK3rLv5Gyxs0zuZ4sMwrn4jYN349TyZR32XatXlxa-sOwlsS-T3_-SNZlGCbs/pubhtml?widget=true&amp;headers=false) |
| Vídeo de execução M3 | Registro audiovisual do processo de conferência | [Vídeo M3](https://www.youtube.com/watch?v=hSteyK7RSoM) |
| Resultado processado | Cálculo percentual, classificação e conclusão da métrica | Esta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

<a id="tabela-128"></a>
**Tabela 128: Resumo da verificação da M3.**

| Categoria verificada | Quantidade | Itens corretos | Itens com divergência |
|---|---:|---:|---:|
| Itens curriculares verificados | 62 | 56 | 6 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Divergências Identificadas

As divergências foram registradas na planilha de verificação, com indicação do valor esperado, valor obtido e evidência correspondente.

<a id="tabela-129"></a>
**Tabela 129: Registro consolidado de divergências da M3.**

| ID | Tipo | Descrição | Severidade | Evidência |
|---|---|---|---|---|
| AF-M3-01 a AF-M3-06 | Itens curriculares | Divergências entre o fluxograma exibido pelo sistema e a base curricular utilizada como oráculo. | Média | Planilha de conferência e evidência em vídeo |

---

### 3.2 Planilha de Verificação

A planilha abaixo registra a conferência dos itens curriculares avaliados na execução da M3.

<iframe
src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS_9MoW9IL9oxwtR-dSK3rLv5Gyxs0zuZ4sMwrn4jYN349TyZR32XatXlxa-sOwlsS-T3_-SNZlGCbs/pubhtml?widget=true&amp;headers=false"
width="100%"
height="700"
frameborder="0">
</iframe>

---

### 3.3 Evidência em Vídeo

Como evidência complementar da avaliação da Métrica 3 - Taxa de Consistência do Fluxograma, Equivalências e Pré-requisitos, foi registrado um vídeo demonstrando a execução do processo de verificação no software No Fluxo UnB.

O vídeo apresenta o histórico acadêmico utilizado como entrada na avaliação e, em seguida, a visualização do fluxograma curricular gerado pelo sistema. A partir dessa comparação, foi possível verificar se as disciplinas cursadas, disciplinas pendentes, equivalências e estados exibidos no fluxo estavam coerentes com o oráculo utilizado.

<iframe
width="100%"
height="500"
src="https://www.youtube.com/embed/hSteyK7RSoM?si=5hhzmO2SpIAYBEUz"
title="Evidência da Avaliação M3 - No Fluxo UnB"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen>
</iframe>

---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na Fase 2:

```text
M3 = (itens curriculares corretos / itens curriculares verificados) x 100
```

Substituindo os valores obtidos na execução:

```text
M3 = (56 / 62) x 100 = 90,32%
```

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_3.md):

- **Excelente:** M3 >= 98%
- **Satisfatório:** 95% <= M3 < 98%
- **Insuficiente:** M3 < 95%

**Resultado obtido:** **M3 = 90,32%**

**Classificação:** **Insuficiente**

---

## 6. Análise e Resposta GQM

A M3 responde à questão Q2 de Adequação Funcional ao medir se o fluxograma, as equivalências, os pré-requisitos e os estados curriculares exibidos pelo sistema estão corretos em relação ao histórico acadêmico e ao oráculo curricular.

O resultado de 90,32% ficou abaixo do limite mínimo de 95% definido na hipótese H2 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md). Portanto, para o recorte de visualização curricular avaliado pela M3, a hipótese de acurácia mínima não foi confirmada.

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), o resultado indica risco para o uso do sistema como apoio ao planejamento acadêmico, pois divergências no fluxograma podem induzir o estudante a interpretar de forma incompleta sua integralização curricular.

---

## 7. Julgamento e Sugestões de Melhoria

A execução da métrica M3 indica que o **No Fluxo UnB** apresenta inconsistências na exibição de informações curriculares, com 56 itens corretos em um total de 62 itens verificados.

Como o resultado ficou abaixo do limite mínimo de aceitação de 95%, a métrica foi classificada como **Insuficiente**, indicando necessidade de correção das divergências registradas antes de considerar a visualização curricular plenamente confiável para uso no planejamento acadêmico.

A maior parte das inconsistências identificadas ocorreu porque o sistema não considerou as monitorias como disciplinas cursadas. No contexto da avaliação, essas atividades devem ser contabilizadas, pois compõem as horas complementares do estudante; cada monitoria equivale a 30 horas ou 2 créditos.

Sugestões de melhoria:

- Ajustar a regra de interpretação do histórico para reconhecer monitorias como atividades contabilizáveis em horas complementares.
- Mapear cada monitoria identificada para 30 horas ou 2 créditos, conforme o critério utilizado na avaliação.
- Adicionar testes de regressão com históricos que contenham monitorias, equivalências e atividades complementares.
- Reexecutar a M3 após a correção para confirmar se a taxa de consistência atinge pelo menos 95%.
- Manter a planilha de verificação como massa de teste de referência para futuras avaliações.

---

## 8. Conclusão da Métrica M3

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados pela fórmula da métrica e comparados com a régua de julgamento definida previamente. A classificação final da M3 é **Insuficiente**, com recomendação de correção prioritária das regras de contabilização de monitorias e atividades complementares.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Ajuste da execução da M3 aos critérios de excelência da Fase 4, com rastreabilidade dos dados brutos, análise GQM e sugestões de melhoria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação da página de execução da métrica M3 na Fase 4, com registro, cálculo e julgamento. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
