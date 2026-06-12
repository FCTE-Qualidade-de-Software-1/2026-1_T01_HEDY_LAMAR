# M8 - Execução da Severidade Média dos Defeitos Funcionais

## 1. Objetivo da Execução

Executar a métrica M8 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_8.md), calculando a severidade média dos defeitos funcionais encontrados na avaliação de **Adequação Funcional** do **No Fluxo UnB**.

Esta métrica responde à questão Q4 de Adequação Funcional: **"Qual é o impacto dos defeitos, lacunas ou inconsistências funcionais encontrados durante a avaliação?"**

---

## 2. Procedimento Executado

1. Uso do mesmo registro consolidado de defeitos produzido para a M7.
2. Conferência de que cada defeito possui severidade numérica entre 1 e 5.
3. Soma das severidades dos defeitos funcionais consolidados.
4. Contagem do total de defeitos funcionais.
5. Cálculo da média aritmética das severidades.
6. Comparação do resultado com a régua de julgamento da M8.

### 2.1 Conformidade com o Plano de Avaliação

**Tabela 1: Rastreabilidade entre o plano da Fase 3 e a execução da M8.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Usar o registro consolidado de defeitos da M7 | Foi usado o arquivo `registro_defeitos_m7_m8.csv`, com os oito defeitos consolidados das seis métricas executadas | [Registro de defeitos](../../assets/dados/adequacao_funcional/registro_defeitos_m7_m8.csv) |
| Conferir severidades entre 1 e 5 | Todos os 8 defeitos possuem severidade válida | Tabela 3 desta página |
| Somar severidades | A soma das severidades foi 29 | [Resultado M7/M8](../../assets/dados/adequacao_funcional/resultado_m7_m8.csv) |
| Dividir pelo total de defeitos | Foram considerados 8 defeitos funcionais consolidados | Tabela 4 desta página |
| Aplicar régua de julgamento | Foi calculado M8 = 3,63, classificado como Insuficiente | Seções 4 e 5 desta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

**Tabela 2: Dados brutos e evidências da M8.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Registro consolidado de defeitos | Fonte primária das severidades usadas na média | [registro_defeitos_m7_m8.csv](../../assets/dados/adequacao_funcional/registro_defeitos_m7_m8.csv) |
| Resultado processado | Total de defeitos, soma de severidades, total de críticos e classificação | [resultado_m7_m8.csv](../../assets/dados/adequacao_funcional/resultado_m7_m8.csv) |
| Execução M7 | Registro da criticidade dos defeitos | [M7 - Defeitos funcionais críticos](metrica_7.md) |
| Execução M6 | Origem do defeito `AF-D08` (pertinência do assistente de IA) incluído na média | [M6 - Recomendações academicamente válidas](metrica_6.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Severidades

**Tabela 3: Severidades usadas no cálculo da M8.**

| ID | Defeito funcional consolidado | Severidade |
|---|---|---:|
| AF-D01 | O sistema sinaliza reprovação, mas não exibe a quantidade de tentativas ou reprovações por disciplina. | 4 |
| AF-D02 | O sistema não exibe o total de horas complementares integralizadas nem o saldo pendente. | 4 |
| AF-D03 | A exportação do fluxograma gera imagem, mas não gera arquivo PDF conforme o requisito definido. | 3 |
| AF-D04 | O sistema exibe o semestre atual, mas não apresenta semestres cursados nem estimativa de semestres restantes. | 4 |
| AF-D05 | O sistema não identifica trancamentos nem mudança de curso presentes no histórico acadêmico. | 4 |
| AF-D06 | Nome completo e matrícula do estudante não são exibidos após o processamento do histórico. | 4 |
| AF-D07 | Monitorias não foram contabilizadas como atividades complementares no recorte avaliado. | 3 |
| AF-D08 | O assistente de IA responde de forma genérica e não integra o histórico acadêmico carregado, produzindo orientações não verificáveis. | 3 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Distribuição por Severidade

**Tabela 4: Distribuição dos defeitos por severidade.**

| Severidade | Rótulo | Quantidade | Percentual |
|---:|---|---:|---:|
| 1 | Baixa | 0 | 0,00% |
| 2 | Moderada baixa | 0 | 0,00% |
| 3 | Média | 3 | 37,50% |
| 4 | Alta | 5 | 62,50% |
| 5 | Crítica | 0 | 0,00% |
| **Total** |  | **8** | **100,00%** |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na Fase 3:

```text
M8 = soma das severidades atribuídas aos defeitos
     ÷ número total de defeitos funcionais encontrados
```

Substituindo os valores obtidos:

```text
M8 = 29 ÷ 8 = 3,625 ≈ 3,63
```

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_8.md):

- **Excelente:** M8 <= 2,00
- **Satisfatório:** 2,00 < M8 <= 3,00
- **Insuficiente:** M8 > 3,00

**Resultado obtido:** **M8 = 3,63**

**Classificação:** **Insuficiente**

---

## 6. Análise e Resposta GQM

A M8 responde à Q4 ao medir o impacto médio dos defeitos funcionais encontrados. Embora a M7 tenha indicado ausência de defeitos críticos, a M8 mostra que a maioria dos defeitos consolidados possui severidade alta.

O resultado de 3,63 fica acima do limite máximo satisfatório de 3,00. Portanto, a hipótese H4 definida na [Fase 2](../../fase2/01_obj_adequacao_funcional.md) **não é plenamente confirmada**, pois os defeitos não são, em média, baixos ou moderados.

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), esse resultado indica que o produto ainda exige correções importantes antes de ser tratado como apoio confiável ao planejamento acadêmico. As falhas não bloqueiam completamente o uso central, mas reduzem a completude e a confiança das informações exibidas ao estudante.

---

## 7. Julgamento e Sugestões de Melhoria

A classificação **Insuficiente** da M8 exige priorização dos defeitos de severidade alta. A correção deve começar pelos defeitos que afetam diretamente a interpretação do histórico e da trajetória acadêmica.

Sugestões de melhoria:

- Corrigir primeiro `AF-D02`, `AF-D05` e `AF-D04`, pois horas complementares, trancamentos, mudança de curso e semestres restantes são informações decisivas para planejamento.
- Em seguida, corrigir `AF-D01` e `AF-D06`, melhorando identificação do estudante e contagem de reprovações.
- Tratar `AF-D07` com teste de regressão específico para monitorias e atividades complementares.
- Tratar `AF-D08` integrando o histórico acadêmico e a matriz curricular ao assistente de IA, para que as orientações deixem de ser genéricas e passem a ser verificáveis.
- Reexecutar M1, M2, M3, M6, M7 e M8 após as correções para verificar redução da média de severidade para 3,00 ou menos.
- Manter o CSV de defeitos como artefato vivo, atualizando severidade e status em futuras releases.

---

## 8. Conclusão da Métrica M8

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados por meio da média aritmética das severidades e comparados com a régua de julgamento previamente definida. A classificação final da M8 é **Insuficiente**, com severidade média **3,63**, indicando que os defeitos funcionais encontrados têm impacto médio acima do nível moderado.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 12/06/2026 | Inclusão do defeito `AF-D08` (M6) na consolidação e recálculo da média: 29 ÷ 8 = 3,63. Classificação mantida como Insuficiente. | [Gabriel Lopes](https://github.com/BrzGab) |
| `1.0` | 10/06/2026 | Criação da página de execução da M8, com cálculo da severidade média dos defeitos funcionais. | [Gabriel Lopes](https://github.com/BrzGab) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
