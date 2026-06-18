# M8 - Severidade Média dos Defeitos Funcionais

## 1. Objetivo

Calcular a severidade média dos defeitos funcionais encontrados durante a avaliação de **Adequação Funcional** do **No Fluxo UnB**, permitindo interpretar o impacto agregado das falhas registradas.

Esta métrica responde à questão Q4 de Adequação Funcional: **"Qual é o impacto dos defeitos, lacunas ou inconsistências funcionais encontrados durante a avaliação?"**

---

## 2. Definição da Métrica

**Tabela 92: Definição operacional da M8.**

| Campo | Definição |
|---|---|
| **Métrica** | Severidade média dos defeitos funcionais |
| **Tipo** | Quantitativa ordinal |
| **Entrada** | Registro consolidado de defeitos funcionais com severidade atribuída de 1 a 5 |
| **Saída** | Média aritmética das severidades atribuídas aos defeitos funcionais |
| **Unidade** | Pontos na escala ordinal de severidade 1-5 |
| **Fonte de evidência** | Registro de defeitos funcionais e escala de severidade definida na M7 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Escala Utilizada

A M8 utiliza a mesma escala definida na [M7](metrica_7.md), garantindo consistência entre a contagem de defeitos críticos e o cálculo de impacto médio.

**Tabela 93: Escala de severidade usada na M8.**

| Severidade | Rótulo | Critério resumido |
|---:|---|---|
| 1 | Baixa | Sem impacto sobre decisão acadêmica |
| 2 | Moderada baixa | Limitação secundária com alternativa simples |
| 3 | Média | Função relevante incompleta ou dependente de conferência manual |
| 4 | Alta | Informação central ausente ou incorreta |
| 5 | Crítica | Pode induzir decisão acadêmica incorreta ou impedir função central |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Unidade de Contagem

A M8 calcula a média sobre os mesmos defeitos consolidados da M7. Portanto:

1. Defeitos duplicados entre métricas não devem ser somados duas vezes.
2. Cada defeito consolidado entra uma vez no denominador.
3. Cada defeito deve possuir uma severidade numérica de 1 a 5.
4. Caso nenhum defeito funcional seja encontrado, o resultado deve ser registrado como `0`, com justificativa explícita para evitar divisão por zero.

---

## 5. Recursos e Ambiente de Avaliação

**Tabela 94: Recursos necessários para execução da M8.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, release `qualidade-de-software` |
| Ambiente de uso | Aplicação web disponível em `https://no-fluxo.crianex.com/` e checkout local do repositório para conferência documental |
| Fonte primária | Registro consolidado de defeitos da M7 |
| Fonte secundária | Páginas de execução das métricas de Adequação Funcional, planilhas, vídeos e capturas de tela |
| Instrumento de cálculo | Planilha ou CSV com colunas de severidade numérica |
| Responsável pela consolidação | Gabriel Lopes |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Passo a Passo da Execução

1. Abrir o registro consolidado de defeitos produzido para a M7.
2. Conferir se todos os defeitos possuem severidade numérica entre 1 e 5.
3. Conferir se defeitos duplicados foram consolidados.
4. Somar as severidades de todos os defeitos funcionais registrados.
5. Contar o número total de defeitos funcionais registrados.
6. Dividir a soma das severidades pelo número total de defeitos.
7. Arredondar o resultado para duas casas decimais.
8. Comparar o resultado com a régua de julgamento da M8.
9. Publicar o cálculo e a interpretação na página de execução da Fase 4.

---

## 7. Fórmula de Cálculo

```text
M8 = soma das severidades atribuídas aos defeitos
     ÷ número total de defeitos funcionais encontrados
```

Se `número total de defeitos funcionais encontrados = 0`, registrar:

```text
M8 = 0
```

com a observação de que nenhum defeito funcional foi identificado no escopo avaliado.

---

## 8. Critério de Julgamento

**Tabela 95: Régua de julgamento da M8.**

| Classificação | Critério | Interpretação |
|---|---:|---|
| Excelente | M8 <= 2,00 | Defeitos inexistentes ou predominantemente baixos |
| Satisfatório | 2,00 < M8 <= 3,00 | Defeitos, em média, baixos a moderados |
| Insuficiente | M8 > 3,00 | Defeitos, em média, acima de moderados, exigindo correção prioritária |

A classificação satisfatória exige média igual ou inferior a 3,00, pois a hipótese H4 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md) estabelece que os defeitos funcionais devem ter severidade média baixa ou moderada.

---

## 9. Cronograma de Execução

**Tabela 96: Cronograma específico da M8.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Reunir o registro de defeitos da M7 | Grupo Hedy Lamarr |
| 09/06/2026 | Conferir severidades, somatório e total de defeitos | Gabriel Lopes |
| 10/06/2026 | Calcular M8, publicar resultado e registrar julgamento na Fase 4 | Gabriel Lopes |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 10. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Registro consolidado de defeitos com severidade numérica.
- Soma das severidades.
- Número total de defeitos funcionais.
- Cálculo da média de severidade.
- Distribuição dos defeitos por severidade.
- Julgamento da M8 conforme a régua da Tabela 95.
- Resposta à Q4 e relação com a hipótese H4.

---

## Histórico de Versões

**Tabela 97: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 10/06/2026 | Criação do plano de avaliação da M8 de Adequação Funcional. | [Gabriel Lopes](https://github.com/BrzGab) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
