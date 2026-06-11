# M7 - Número de Defeitos Funcionais Críticos Encontrados

## 1. Objetivo

Contar quantos defeitos funcionais críticos foram encontrados durante a avaliação de **Adequação Funcional** do **No Fluxo UnB**.

Esta métrica responde à questão Q4 de Adequação Funcional: **"Qual é o impacto dos defeitos, lacunas ou inconsistências funcionais encontrados durante a avaliação?"**

---

## 2. Definição da Métrica

**Tabela 1: Definição operacional da M7.**

| Campo | Definição |
|---|---|
| **Métrica** | Número de defeitos funcionais críticos encontrados |
| **Tipo** | Quantitativa |
| **Entrada** | Registro consolidado de defeitos funcionais identificados nas métricas de Adequação Funcional |
| **Saída** | Quantidade de defeitos classificados como críticos |
| **Unidade** | Número absoluto de defeitos |
| **Fonte de evidência** | Registro de defeitos, páginas de execução das métricas já publicadas na Fase 4, evidências de reprodução e classificação de severidade |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Unidade de Contagem

Para evitar duplicidade, a M7 conta **defeitos funcionais consolidados**, e não cada evidência isolada. Quando a mesma falha aparece em mais de uma métrica, ela deve ser registrada uma única vez no cadastro de defeitos, mantendo a rastreabilidade para todas as métricas e evidências onde apareceu.

**Tabela 2: Critérios para registrar um defeito funcional.**

| Situação | Tratamento na M7 |
|---|---|
| Uma função esperada está ausente, incorreta ou incompleta | Registrar como defeito funcional |
| A mesma falha aparece em mais de uma métrica | Consolidar em um único defeito e listar todas as origens |
| A mesma falha recebe severidades diferentes nas métricas de origem | Usar a maior severidade atribuída, para não subestimar o risco funcional |
| Há divergências diferentes causadas pela mesma regra de negócio | Consolidar se a causa e o efeito funcional forem equivalentes |
| O problema é apenas visual e não afeta a função avaliada | Não registrar na M7 |
| O problema não é reprodutível nem tem evidência associada | Não registrar na M7 até obter evidência suficiente |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Escala de Severidade

A criticidade da M7 é definida pela escala ordinal de severidade usada também pela M8. Um defeito é considerado **crítico** somente quando recebe severidade **5**.

**Tabela 3: Escala de severidade dos defeitos funcionais.**

| Severidade | Rótulo | Critério |
|---:|---|---|
| 1 | Baixa | Problema pontual de apresentação ou conveniência, sem impacto sobre a decisão acadêmica |
| 2 | Moderada baixa | Função secundária apresenta limitação, mas o usuário consegue obter a informação central por caminho simples |
| 3 | Média | Função relevante está incompleta ou exige conferência manual, mas não bloqueia o fluxo principal |
| 4 | Alta | Informação central está ausente ou incorreta, reduzindo a confiança do planejamento acadêmico |
| 5 | Crítica | O defeito pode induzir decisão acadêmica incorreta ou impedir o uso de uma função central do produto |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 4.1 Critérios Práticos para Severidade 5

Um defeito deve receber severidade 5 quando atender a pelo menos uma das condições abaixo:

1. Marcar como cursada uma disciplina que o estudante não cursou, ou o inverso, gerando interpretação curricular incorreta.
2. Informar pré-requisito, equivalência, carga horária ou requisito obrigatório de forma errada a ponto de orientar uma matrícula inadequada.
3. Bloquear o upload ou processamento de histórico válido, impedindo o fluxo principal do produto.
4. Apresentar cálculo acadêmico incorreto que altere uma decisão sobre integralização, pendências ou risco acadêmico.
5. Produzir recomendação acadêmica inválida como se fosse aplicável ao estudante, sem ressalva ou indicação de incerteza.

---

## 5. Recursos e Ambiente de Avaliação

**Tabela 4: Recursos necessários para execução da M7.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, release `qualidade-de-software` |
| Ambiente de uso | Aplicação web disponível em `https://no-fluxo.crianex.com/` e checkout local do repositório para conferência documental |
| Navegador homologado | Google Chrome ou Microsoft Edge em versão estável atual |
| Sistema operacional | Ubuntu 24.04 ou ambiente equivalente com navegador moderno |
| Entradas | Páginas de execução das métricas M1 a M6, planilhas, vídeos, capturas de tela e histórico acadêmico de referência |
| Instrumento de coleta | Registro consolidado de defeitos em CSV ou planilha |
| Responsável pela consolidação | Gabriel Lopes |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Estrutura do Registro de Defeitos

O registro de defeitos usado na M7 deve conter, no mínimo, os campos abaixo.

**Tabela 5: Campos mínimos do registro de defeitos.**

| Campo | Descrição |
|---|---|
| ID do defeito | Identificador único no padrão `AF-DXX` |
| Origem | Métrica(s) em que o defeito foi observado |
| Requisito ou item afetado | Requisito funcional, item de histórico, item curricular ou cenário afetado |
| Descrição | Explicação objetiva do defeito |
| Severidade numérica | Valor de 1 a 5 conforme a Tabela 3 |
| Rótulo de severidade | Baixa, moderada baixa, média, alta ou crítica |
| Crítico? | Sim quando severidade = 5; não nos demais casos |
| Evidência | Link para planilha, vídeo, screenshot ou página de execução |
| Ação recomendada | Correção sugerida para a equipe mantenedora |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 7. Passo a Passo da Execução

1. Reunir os registros de divergências das métricas de Adequação Funcional executadas.
2. Ler cada divergência e verificar se ela representa defeito funcional segundo a Tabela 2.
3. Consolidar duplicidades, preservando a origem de todas as métricas afetadas.
4. Atribuir ID único no formato `AF-DXX`.
5. Atribuir severidade de 1 a 5 conforme a Tabela 3.
6. Marcar como crítico apenas defeitos com severidade 5.
7. Conferir se cada defeito possui evidência rastreável.
8. Contar o número de defeitos críticos.
9. Aplicar a régua de julgamento da M7.
10. Publicar o registro consolidado e o cálculo na página de execução da Fase 4.

---

## 8. Fórmula de Cálculo

```text
M7 = número de defeitos funcionais com severidade 5
```

---

## 9. Critério de Julgamento

**Tabela 6: Régua de julgamento da M7.**

| Classificação | Critério | Interpretação |
|---|---:|---|
| Excelente | M7 = 0 | Nenhum defeito crítico foi encontrado |
| Satisfatório | M7 = 1 | Há um defeito crítico isolado, exigindo correção prioritária |
| Insuficiente | M7 >= 2 | Há recorrência de defeitos críticos, indicando risco alto para uso acadêmico |

O limite satisfatório deriva da hipótese H4 definida na [Fase 2](../../fase2/01_obj_adequacao_funcional.md), que admite no máximo um defeito crítico.

---

## 10. Cronograma de Execução

**Tabela 7: Cronograma específico da M7.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Reunir divergências registradas nas métricas de Adequação Funcional | Grupo Hedy Lamarr |
| 09/06/2026 | Consolidar duplicidades, atribuir severidades e identificar criticidade | Gabriel Lopes |
| 10/06/2026 | Calcular M7, publicar registro de defeitos e registrar julgamento na Fase 4 | Gabriel Lopes |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 11. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Registro consolidado de defeitos funcionais.
- Classificação de severidade de cada defeito.
- Evidência rastreável para cada defeito.
- Contagem de defeitos críticos.
- Julgamento da M7 conforme a régua da Tabela 6.
- Resposta à Q4 e relação com a hipótese H4.

---

## Histórico de Versões

**Tabela 8: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 10/06/2026 | Criação do plano de avaliação da M7 de Adequação Funcional. | [Gabriel Lopes](https://github.com/BrzGab) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
