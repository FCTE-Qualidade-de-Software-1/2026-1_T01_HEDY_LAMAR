# M7 - Execução do Número de Defeitos Funcionais Críticos Encontrados

## 1. Objetivo da Execução

Executar a métrica M7 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_7.md), contabilizando quantos defeitos funcionais críticos foram encontrados na avaliação de **Adequação Funcional** do **No Fluxo UnB**.

Esta métrica responde à questão Q4 de Adequação Funcional: **"Qual é o impacto dos defeitos, lacunas ou inconsistências funcionais encontrados durante a avaliação?"**

---

## 2. Procedimento Executado

1. Reunião dos registros de divergências de todas as métricas de Adequação Funcional executadas e publicadas na Fase 4 (M1 a M6).
2. Consolidação das divergências em defeitos funcionais únicos, evitando duplicidade entre métricas e preservando a evidência de origem.
3. Atribuição de identificador único no padrão `AF-DXX`.
4. Classificação de severidade de 1 a 5 conforme a escala definida na Fase 3.
5. Marcação de criticidade apenas para defeitos com severidade 5.
6. Contagem dos defeitos funcionais críticos.
7. Comparação do resultado com a régua de julgamento da M7.

### 2.1 Conformidade com o Plano de Avaliação

**Tabela 144: Rastreabilidade entre o plano da Fase 3 e a execução da M7.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Reunir divergências das métricas de Adequação Funcional já executadas | Foram revisadas as seis métricas executadas (M1 a M6): M1, M2, M3 e M6 contribuíram com defeitos funcionais; M4 (100%) e M5 (sem impedimento) não registraram defeitos | Páginas de execução publicadas e CSV consolidado |
| Consolidar duplicidades | Defeitos repetidos entre métricas foram agrupados em um único registro | Registro consolidado `AF-D01` a `AF-D08` |
| Atribuir severidade de 1 a 5 | Cada defeito recebeu severidade numérica e rótulo qualitativo | CSV de registro de defeitos |
| Marcar como crítico apenas severidade 5 | Nenhum defeito recebeu severidade 5 | Tabela 146 desta página |
| Aplicar fórmula e régua de julgamento | Foi calculado M7 = 0, classificado como Excelente | Seções 4 e 5 desta página |

> Nota: Nenhuma das duas métricas de Pertinência Funcional gerou defeito crítico. A M5 concluiu os quatro cenários de planejamento sem impedimento funcional, não gerando defeito. A M6 evidenciou uma lacuna de pertinência do assistente de IA, consolidada como o defeito não crítico `AF-D08`.

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

**Tabela 145: Dados brutos e evidências da M7.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Registro consolidado de defeitos | Dados brutos usados para M7 e M8 | [registro_defeitos_m7_m8.csv](../../assets/dados/adequacao_funcional/registro_defeitos_m7_m8.csv) |
| Resultado processado | Total de defeitos, soma das severidades, total de críticos e classificação | [resultado_m7_m8.csv](../../assets/dados/adequacao_funcional/resultado_m7_m8.csv) |
| Execução M1 | Origem de defeitos de completude funcional | [M1 - Requisitos funcionais essenciais](metrica_1.md) |
| Execução M2 | Origem de defeitos de extração do histórico | [M2 - Extração do histórico acadêmico](metrica_2.md) |
| Execução M3 | Origem de divergências no fluxograma | [M3 - Consistência do fluxograma](metrica_3.md) |
| Execução M4 | Evidência de ausência de defeitos nos cálculos acadêmicos verificados | [M4 - Correção dos cálculos acadêmicos](metrica_4.md) |
| Execução M5 | Evidência de ausência de impedimento funcional nos cenários de planejamento (sem defeito gerado) | [M5 - Cenários de planejamento acadêmico](metrica_5.md) |
| Execução M6 | Origem do defeito de pertinência do assistente de IA (`AF-D08`) | [M6 - Recomendações academicamente válidas](metrica_6.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro Consolidado de Defeitos

**Tabela 146: Defeitos funcionais consolidados para cálculo da M7.**

| ID | Origem | Defeito funcional consolidado | Severidade | Crítico? | Evidência |
|---|---|---|---:|---|---|
| AF-D01 | M1, M2 | O sistema sinaliza reprovação, mas não exibe a quantidade de tentativas ou reprovações por disciplina. | 4 | Não | [M1](metrica_1.md#32-divergencias-identificadas), [M2](metrica_2.md#32-divergencias-identificadas) |
| AF-D02 | M1, M2 | O sistema não exibe o total de horas complementares integralizadas nem o saldo pendente. | 4 | Não | [M1](metrica_1.md#32-divergencias-identificadas), [M2](metrica_2.md#32-divergencias-identificadas) |
| AF-D03 | M1 | A exportação do fluxograma gera imagem, mas não gera arquivo PDF conforme o requisito definido. | 3 | Não | [M1](metrica_1.md#32-divergencias-identificadas) |
| AF-D04 | M1 | O sistema exibe o semestre atual, mas não apresenta semestres cursados nem estimativa de semestres restantes. | 4 | Não | [M1](metrica_1.md#32-divergencias-identificadas) |
| AF-D05 | M1, M2 | O sistema não identifica trancamentos nem mudança de curso presentes no histórico acadêmico. | 4 | Não | [M1](metrica_1.md#32-divergencias-identificadas), [M2](metrica_2.md#32-divergencias-identificadas) |
| AF-D06 | M2 | Nome completo e matrícula do estudante não são exibidos após o processamento do histórico. | 4 | Não | [M2](metrica_2.md#32-divergencias-identificadas) |
| AF-D07 | M3 | Divergências no fluxograma indicam que monitorias não foram contabilizadas como atividades complementares no recorte avaliado. | 3 | Não | [M3](metrica_3.md#31-divergencias-identificadas) |
| AF-D08 | M6 | O assistente de IA responde de forma genérica e não integra o histórico acadêmico carregado, produzindo orientações não verificáveis sobre pré-requisitos, semestres restantes e risco de jubilamento. | 3 | Não | [M6](metrica_6.md#3-registro-de-execucao) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026), com base no registro consolidado da Fase 4.*

### 3.1 Distribuição por Criticidade

**Tabela 147: Distribuição dos defeitos por criticidade.**

| Categoria | Critério | Quantidade |
|---|---|---:|
| Defeitos críticos | Severidade = 5 | 0 |
| Defeitos não críticos | Severidade entre 1 e 4 | 8 |
| Total de defeitos funcionais | Defeitos consolidados | 8 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na Fase 3:

```text
M7 = número de defeitos funcionais com severidade 5
```

Substituindo os valores obtidos:

```text
M7 = 0
```

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_7.md):

- **Excelente:** M7 = 0
- **Satisfatório:** M7 = 1
- **Insuficiente:** M7 >= 2

**Resultado obtido:** **M7 = 0**

**Classificação:** **Excelente**

---

## 6. Análise e Resposta GQM

A M7 responde à Q4 ao verificar se os defeitos encontrados possuem criticidade suficiente para induzir uma decisão acadêmica incorreta ou impedir uma função central do produto.

No registro consolidado dos oito defeitos funcionais, nenhum recebeu severidade 5. Assim, a parte da hipótese H4 relacionada à ausência de mais de um defeito crítico foi confirmada: o resultado ficou abaixo do limite máximo de um defeito crítico definido na [Fase 2](../../fase2/01_obj_adequacao_funcional.md).

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), o resultado indica que os defeitos observados não chegaram ao nível crítico no recorte avaliado. Ainda assim, a existência de cinco defeitos de severidade alta e da lacuna de pertinência do assistente de IA (`AF-D08`) exige atenção, pois reduzem a confiança do sistema como apoio ao planejamento acadêmico.

---

## 7. Julgamento e Sugestões de Melhoria

A M7 foi classificada como **Excelente**, pois não foram encontrados defeitos críticos. Esse resultado não elimina a necessidade de correção dos defeitos de severidade alta, especialmente os relacionados a horas complementares, trancamentos, mudança de curso, identificação do estudante e estimativa de semestres restantes.

Sugestões de melhoria:

- Priorizar defeitos de severidade 4 antes de novas funcionalidades.
- Transformar os defeitos `AF-D01`, `AF-D02`, `AF-D04`, `AF-D05` e `AF-D06` em issues rastreáveis no repositório do produto.
- Tratar o defeito `AF-D08` integrando o histórico acadêmico e a matriz curricular ao contexto do assistente de IA, para que as orientações se tornem específicas e verificáveis.
- Reexecutar M7 após correções nas funções de extração e exibição do histórico.
- Manter o registro consolidado como base de regressão para próximas versões.

---

## 8. Conclusão da Métrica M7

Os dados brutos foram obtidos conforme o método definido na Fase 3, consolidados em oito defeitos funcionais únicos e comparados com a régua de julgamento da M7. A classificação final é **Excelente**, com **0 defeitos funcionais críticos** encontrados.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 12/06/2026 | Ampliação da consolidação para cobrir as seis métricas executadas (M1 a M6); inclusão do defeito `AF-D08` originado da M6 (pertinência do assistente de IA). M7 mantém 0 defeitos críticos. | [Gabriel Lopes](https://github.com/BrzGab) |
| `1.0` | 10/06/2026 | Criação da página de execução da M7, com registro consolidado de defeitos críticos. | [Gabriel Lopes](https://github.com/BrzGab) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
