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

---

## 3. Registro de Execução

**Tabela 1: Resumo da verificação da M4.**

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

## 6. Conclusão da Métrica M4

A execução da métrica M4 indica que o **No Fluxo UnB** apresentou correção total nos indicadores acadêmicos verificados, com 15 indicadores corretos em um total de 15 indicadores avaliados.

Como o resultado atingiu 100,00%, a métrica foi classificada como **Excelente**, indicando que os cálculos acadêmicos avaliados estão aderentes aos valores esperados para o histórico acadêmico utilizado.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação da página de execução da métrica M4 na Fase 4, com registro, cálculo e julgamento. | [Lucas Guimarães](https://github.com/lcsgborges) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
