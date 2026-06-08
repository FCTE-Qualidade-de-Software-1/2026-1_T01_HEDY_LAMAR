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

---

## 3. Registro de Execução

**Tabela 1: Resumo da verificação da M3.**

| Categoria verificada | Quantidade | Itens corretos | Itens com divergência |
|---|---:|---:|---:|
| Disciplinas | 12 | 12 | 0 |
| Pré-requisitos | 7 | 7 | 0 |
| Equivalências | 3 | 2 | 1 |
| Estado no fluxograma | 3 | 3 | 0 |
| **Total** | **25** | **24** | **1** |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Divergência Identificada

**Tabela 2: Registro de divergência da M3.**

| ID | Tipo | Descrição | Severidade | Evidência |
|---|---|---|---|---|
| AF-M3-01 | Equivalência | Regra de equivalência exibida de forma incompleta para disciplina optativa do curso avaliado. | Média | Captura de tela da tela de fluxograma e planilha de conferência |

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

$$
M3 = \left(\frac{\text{itens curriculares corretos}}{\text{itens curriculares verificados}}\right) \times 100
$$

Substituindo os valores obtidos na execução:

$$
M3 = \left(\frac{24}{25}\right) \times 100 = 96\%
$$

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_3.md):

- **Excelente:** M3 >= 98%
- **Satisfatório:** 95% <= M3 < 98%
- **Insuficiente:** M3 < 95%

**Resultado obtido:** **M3 = 96%**

**Classificação:** **Satisfatório**

---

## 6. Conclusão da Métrica M3

A execução da métrica M3 indica que o **No Fluxo UnB** apresenta **alta consistência** na exibição de disciplinas, pré-requisitos e estados curriculares, com apenas uma inconsistência pontual relacionada a equivalência.

Mesmo com a divergência registrada, o resultado permanece acima do limite mínimo de aceitação, sustentando a confiabilidade funcional da visualização curricular para uso no planejamento acadêmico.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação da página de execução da métrica M3 na Fase 4, com registro, cálculo e julgamento. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
