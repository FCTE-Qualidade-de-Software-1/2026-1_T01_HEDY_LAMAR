# M4 - Execução da Taxa de Correção dos Cálculos Acadêmicos

## 1. Objetivo da Execução

Executar a métrica M4 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_4.md), verificando se os indicadores acadêmicos calculados e exibidos pelo **No Fluxo UnB** correspondem aos valores esperados para o histórico acadêmico utilizado na avaliação.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Procedimento Executado

1. Seleção do histórico acadêmico de referência em PDF: [historico_lucas.pdf](../../assets/historico_lucas.pdf), o mesmo utilizado na execução da M3.
2. Definição dos valores esperados para os indicadores acadêmicos avaliados.
3. Upload do histórico no No Fluxo UnB.
4. Acesso às telas de resumo acadêmico, progresso e indicadores calculados.
5. Conferência dos valores exibidos pelo sistema em relação aos valores esperados.
6. Registro de conformidade e divergências em planilha de verificação.
7. Consolidação do percentual final da métrica.

### 2.1 Conformidade com o Plano de Avaliação

<a id="tabela-130"></a>
**Tabela 130: Rastreabilidade entre o plano da Fase 3 e a execução da M4.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Usar histórico acadêmico em PDF como entrada | Foi utilizado o arquivo [historico_lucas.pdf](../../assets/historico_lucas.pdf), o mesmo da M3 | Histórico acadêmico armazenado em `docs/assets` |
| Definir valores esperados para os indicadores acadêmicos | Os valores esperados foram registrados na planilha de verificação da M4 | Planilha de verificação da M4 |
| Conferir valores exibidos pelo sistema | Foram verificados 15 indicadores acadêmicos aplicáveis | Resumo da verificação e planilha de conferência |
| Aplicar tolerâncias definidas no plano | Os indicadores foram comparados com as regras de tolerância previstas na Fase 3 | Planilha de conferência |
| Aplicar fórmula e régua de julgamento | Foi calculado M4 = 100,00%, classificado como Excelente | Seções de cálculo e julgamento desta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

<a id="tabela-131"></a>
**Tabela 131: Dados brutos e evidências da M4.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Histórico acadêmico | Entrada usada no upload e no processamento do sistema | [historico_lucas.pdf](../../assets/historico_lucas.pdf) |
| Planilha de verificação M4 | Registro dos indicadores esperados, indicadores obtidos, resultado e cálculo da métrica | [Planilha M4](https://docs.google.com/spreadsheets/d/e/2PACX-1vSlQF8WXUxLo_YCMk32xhxnmEkGlJ51YnO5LqvYqdhaROyGa8Gz1e1u7FLB-F0wXHZlqQVWkhBwqKVs/pubhtml?widget=true&amp;headers=false) |
| Vídeo de execução M4 | Registro audiovisual do processo de conferência | [Vídeo M4](https://www.youtube.com/watch?v=u64lvJq27Mw) |
| Resultado processado | Cálculo percentual, classificação e conclusão da métrica | Esta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

<a id="tabela-132"></a>
**Tabela 132: Resumo da verificação da M4.**

| Campo | Valor | Fórmula/critério | Observação |
|---|---:|---|---|
| Total de indicadores verificados | 15 | Corretos + divergentes | NA e campos em branco não entram no cálculo |
| Indicadores corretos | 15 | COUNTIF(Correto?;1) | Preenchido na aba M4_Verificacao |
| Indicadores divergentes | 0 | COUNTIF(Correto?;0) | Preenchido na aba M4_Verificacao |
| M4 | 100,00% | Corretos ÷ Verificados x 100 | Unidade percentual |
| Classificação | Excelente | Excelente >= 98%; Satisfatório >= 95%; Insuficiente < 95% | Régua definida no plano de avaliação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Divergências Identificadas

Não foram identificadas divergências nos indicadores acadêmicos verificados. Todos os 15 indicadores avaliados foram classificados como corretos em relação aos valores esperados.

---

### 3.2 Planilha de Verificação

A planilha abaixo registra a conferência dos indicadores acadêmicos avaliados na execução da M4.

<iframe
src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlQF8WXUxLo_YCMk32xhxnmEkGlJ51YnO5LqvYqdhaROyGa8Gz1e1u7FLB-F0wXHZlqQVWkhBwqKVs/pubhtml?widget=true&amp;headers=false"
width="100%"
height="700"
frameborder="0">
</iframe>

---

### 3.3 Evidência em Vídeo

Como evidência complementar da avaliação da Métrica 4 - Taxa de Correção dos Cálculos Acadêmicos, foi registrado um vídeo demonstrando a execução do processo de verificação no software No Fluxo UnB.

O vídeo apresenta o uso do histórico acadêmico de referência e a conferência dos indicadores calculados pelo sistema em relação aos valores esperados registrados na planilha de verificação.

<iframe
width="100%"
height="500"
src="https://www.youtube.com/embed/u64lvJq27Mw?si=IArcBHEp-dmT8DNO"
title="Evidência da Avaliação M4 - No Fluxo UnB"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen>
</iframe>

---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na Fase 2:

```text
M4 = (indicadores acadêmicos calculados corretamente / indicadores acadêmicos verificados) x 100
```

Substituindo os valores obtidos na execução:

```text
M4 = (15 / 15) x 100 = 100,00%
```

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_4.md):

- **Excelente:** M4 >= 98%
- **Satisfatório:** 95% <= M4 < 98%
- **Insuficiente:** M4 < 95%

**Resultado obtido:** **M4 = 100,00%**

**Classificação:** **Excelente**

---

## 6. Análise e Resposta GQM

A M4 responde à questão Q2 de Adequação Funcional ao verificar se os cálculos acadêmicos exibidos pelo sistema correspondem aos valores esperados para o histórico acadêmico usado na avaliação.

O resultado de 100,00% superou o critério de excelência de 98% e confirmou, para os indicadores acadêmicos avaliados, a hipótese H2 definida na [Fase 2](../../fase2/01_obj_adequacao_funcional.md). Assim, no recorte de cálculos acadêmicos, os dados obtidos sustentam que o sistema apresentou correção funcional adequada.

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), o resultado indica que os indicadores acadêmicos avaliados podem apoiar o estudante no acompanhamento de progresso, carga horária e situação acadêmica para o histórico usado como referência.

---

## 7. Julgamento e Sugestões de Melhoria

A execução da métrica M4 indica que o **No Fluxo UnB** apresentou correção total nos indicadores acadêmicos verificados, com 15 indicadores corretos em um total de 15 indicadores avaliados.

Como o resultado atingiu 100,00%, a métrica foi classificada como **Excelente**, indicando que os cálculos acadêmicos avaliados estão aderentes aos valores esperados para o histórico acadêmico utilizado.

Sugestões de melhoria:

- Manter a planilha de verificação da M4 como massa de regressão para futuras versões do sistema.
- Documentar explicitamente no produto ou na documentação técnica as fórmulas usadas para cada indicador acadêmico.
- Expandir a validação para históricos com reprovações, trancamentos, interrupções e múltiplos tipos de atividade complementar.
- Automatizar testes de cálculo para evitar regressões em IRA, progresso, carga horária e indicadores derivados.
- Reexecutar a M4 sempre que houver alteração no parser de histórico ou nas regras curriculares usadas pelo sistema.

---

## 8. Conclusão da Métrica M4

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados pela fórmula da métrica e comparados com a régua de julgamento previamente definida. A classificação final da M4 é **Excelente**, com recomendação de manter os dados coletados como referência para testes de regressão e ampliar a cobertura de históricos em avaliações futuras.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 08/06/2026 | Ajuste da execução da M4 aos critérios de excelência da Fase 4, com rastreabilidade dos dados brutos, análise GQM e sugestões de melhoria. | [Lucas Guimarães](https://github.com/lcsgborges) |
| `1.0` | 08/06/2026 | Criação da página de execução da métrica M4 na Fase 4, com registro, cálculo e julgamento. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
