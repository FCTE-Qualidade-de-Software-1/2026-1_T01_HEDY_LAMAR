# M2 - Execução da Acurácia da Extração do Histórico Acadêmico

## 1. Objetivo da Execução

Executar a métrica M2 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_2.md), verificando com que precisão o **No Fluxo UnB** extrai e apresenta as informações contidas no histórico acadêmico em PDF, comparando os dados exibidos pelo sistema com os valores de referência do gabarito construído a partir do mesmo histórico.

Esta métrica responde à questão Q2 de Adequação Funcional: **"Com que precisão o sistema interpreta o histórico acadêmico e apresenta informações curriculares corretas ao estudante?"**

---

## 2. Procedimento Executado

1. Acesso à aplicação em [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) com login ativo.
2. Upload do histórico acadêmico de referência: [historico_lucas.pdf](../../assets/historico_lucas.pdf).
3. Aguardo da conclusão do processamento pelo sistema.
4. Captura de screenshot completo da tela resultante com URL visível.
5. Conferência item a item entre os valores exibidos pelo sistema e o gabarito de referência.
6. Registro binário por item: **1** para correto e **0** para incorreto ou ausente.
7. Registro de divergências com descrição, severidade e evidência associada.
8. Consolidação do percentual final da métrica.

### 2.1 Conformidade com o Plano de Avaliação

**Tabela 1: Rastreabilidade entre o plano da Fase 3 e a execução da M2.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Usar histórico acadêmico em PDF como entrada | Foi utilizado o arquivo [historico_lucas.pdf](../../assets/historico_lucas.pdf) | Histórico acadêmico armazenado em `docs/assets` |
| Construir gabarito com valores esperados para cada item verificável | Gabarito preenchido com os 11 itens das categorias definidas na Tabela 2 do plano | Planilha de verificação da M2 |
| Conferir cada item com resultado binário (correto/incorreto) | Foram verificados 11 itens com marcação binária 1 (correto) ou 0 (incorreto/ausente) | Planilha de verificação e resumo da M2 |
| Registrar divergências com severidade e evidência | Foram registradas 4 divergências, documentadas na planilha e com evidências visuais | Tabela 5 desta página |
| Aplicar fórmula e régua de julgamento | Foi calculado M2 = 63,64%, classificado como Insatisfatória | Seções de cálculo e julgamento desta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

**Tabela 2: Dados brutos e evidências da M2.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Histórico acadêmico | Entrada usada no upload e no processamento do sistema | [historico_lucas.pdf](../../assets/historico_lucas.pdf) |
| Vídeo de execução M2 | Registro audiovisual do processo de conferência item a item | [video](https://youtu.be/UgvsXyO5GLk?si=6YJXu47S-hbEeKME) |
| Resultado processado | Cálculo percentual, classificação e conclusão da métrica | Esta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

**Tabela 3: Resumo da verificação da M2.**

| Categoria verificada | Total de itens | Itens corretos | Itens incorretos ou ausentes |
|---|---:|---:|---:|
| Itens da extração do histórico acadêmico | 11 | 7 | 4 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Planilha de Verificação Item a Item

**Tabela 4: Resultado da conferência item a item da M2.**

| ID | Categoria | Item verificado | Valor esperado | Valor obtido | Correto? |
|---|---|---|---|---|---|
| M2-01 | Identificação do aluno | Nome completo | Nome completo do estudante | Não exibido | 0 |
| M2-02 | Identificação do aluno | Matrícula | Número de matrícula do estudante | Não exibido | 0 |
| M2-03 | Identificação do aluno | Curso | Nome do curso do estudante | ENGENHARIA DE SOFTWARE | 1 |
| M2-04 | Disciplinas aprovadas | Código, nome e carga horária | Código, nome, nota e carga horária por disciplina | Código, nome e carga horária exibidos; nota não exibida | 1 |
| M2-05 | Disciplinas reprovadas | Código, nome e semestre | Código, nome, nota e semestre por reprovação | Código, nome e semestre exibidos; nota não exibida | 1 |
| M2-06 | Disciplinas em curso | Identificação das disciplinas em andamento | Listagem das disciplinas cursadas no período atual | 3 disciplinas identificadas corretamente | 1 |
| M2-07 | Reprovações por disciplina | Contagem de tentativas e reprovações | Número de tentativas e reprovações por disciplina com múltiplas ocorrências | Nenhum valor exibido | 0 |
| M2-08 | Trancamentos | Semestres com trancamento de matrícula | Identificação dos semestres em que houve trancamento | Nenhum valor exibido | 0 |
| M2-09 | Mudança de curso | Identificação de troca de curso e semestre | Indicação do curso de origem e semestre da mudança | Nenhum valor exibido | 0 |
| M2-10 | IRA / Média ponderada | Valor numérico do IRA | Valor numérico calculado ou extraído do histórico | 4,4114 | 1 |
| M2-11 | Carga horária total integralizada | Total de horas cursadas e aprovadas | Total de horas cursadas e aprovadas | 2.130h | 1 |
| M2-12 | Horas complementares | Total de horas de atividades complementares | Quantidade de horas de atividades complementares registradas | Nenhum valor exibido | 0 |
| M2-13 | Semestres cursados | Número de períodos letivos no histórico | Número de semestres cursados | "Semestre Atual: 2026.1" | 1 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.2 Divergências Identificadas

**Tabela 5: Registro consolidado de divergências da M2.**

| ID | Categoria | Valor esperado | Valor obtido | Severidade | Observação |
|---|---|---|---|---|---|
| AF-M2-01 | Identificação do aluno | Nome completo e matrícula do estudante | Não exibidos | Alta | O sistema exibe apenas o curso; nome e matrícula não são apresentados em nenhuma tela após o processamento do histórico. A ausência do nome não impede o planejamento, mas compromete a identificação do usuário no contexto do sistema. |
| AF-M2-02 | Reprovações por disciplina | Contagem de tentativas e reprovações por disciplina | Nenhum valor exibido | Alta | O sistema não computa nem exibe o número de vezes que o estudante cursou ou reprovou em cada disciplina. Essa informação é relevante para identificar disciplinas críticas na trajetória acadêmica. |
| AF-M2-03 | Trancamentos e mudança de curso | Semestres com trancamento e identificação de mudança de curso | Nenhum valor exibido | Alta | O sistema não detecta nem sinaliza trancamentos de matrícula nem mudanças de curso presentes no histórico. A ausência dessas informações pode distorcer o cálculo de semestres cursados e a interpretação da trajetória do estudante. |
| AF-M2-04 | Horas complementares | Quantidade de horas de atividades complementares registradas | Nenhum valor exibido | Alta | O sistema não exibe as horas de atividades complementares integralizadas. Trata-se de requisito curricular obrigatório para a formatura, e sua ausência impede o estudante de verificar sua situação nesse quesito diretamente pelo sistema. |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*


---

### 3.3 Evidência em Vídeo

Como evidência complementar da avaliação da Métrica 2 — Acurácia da Extração do Histórico Acadêmico, foi registrado um vídeo demonstrando o processo de upload do histórico e a conferência dos dados exibidos pelo sistema em relação ao gabarito de referência.

<!-- Substituir o src pelo link do vídeo no YouTube após a execução -->
<iframe
width="100%"
height="500"
src="https://www.youtube.com/embed/UgvsXyO5GLk?si=6YJXu47S-hbEeKME"
title="Evidência da Avaliação M2 - No Fluxo UnB"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen>
</iframe>



---

## 4. Cálculo da Métrica

Aplicando a fórmula definida na Fase 2:

```text
M2 = (Nº de itens extraídos corretamente pelo sistema ÷ Nº total de itens verificados) × 100
```

Substituindo os valores obtidos na execução:

```text
M2 = (7 / 11) × 100 = 63,64%
```

> **Nota:** Diferenças de formatação sem impacto no conteúdo não foram contadas como erro. Campos com valor parcialmente correto (ex.: disciplinas aprovadas sem nota) foram contados como corretos quando os campos centrais estavam presentes e corretos. Campos inteiramente ausentes foram contados como incorretos.

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_2.md):

- **Excelente:** M2 ≥ 95%
- **Boa:** 85% ≤ M2 < 95%
- **Regular:** 70% ≤ M2 < 85%
- **Insatisfatória:** M2 < 70%

**Resultado obtido:** **M2 = 63,64%**

**Classificação:** **Insatisfatória**

---

## 6. Análise e Resposta GQM

A M2 responde à questão Q2 de Adequação Funcional ao medir com que precisão o sistema extrai e apresenta os dados do histórico acadêmico em relação a um gabarito de referência.

O resultado de 63,64% ficou abaixo do limite mínimo de 95% definido na hipótese H2 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md). Portanto, a hipótese de acurácia mínima **não foi confirmada** para este recorte de avaliação.

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), o resultado indica risco relevante para o uso do sistema como ferramenta confiável de planejamento acadêmico. As lacunas identificadas — em especial a ausência de trancamentos (M2-03), horas complementares (M2-04) e contagem de reprovações por disciplina (M2-02) — comprometem a integridade da visão que o estudante tem de sua própria trajetória. Nenhuma das divergências identificadas foi classificada como crítica no sentido de induzir diretamente uma decisão acadêmica errada, porém todas as quatro receberam severidade **Alta**, o que indica necessidade de correção antes que o sistema possa ser utilizado com plena confiança.

---

## 7. Julgamento e Sugestões de Melhoria

A execução da métrica M2 indica que o **No Fluxo UnB** extrai corretamente 7 dos 11 itens verificados do histórico acadêmico, com 4 itens ausentes, todos de severidade Alta.

O núcleo quantitativo da extração — curso, IRA, carga horária total, disciplinas aprovadas, reprovadas e em curso — está presente e com valores coerentes com o gabarito. No entanto, dados relevantes para a completude da análise curricular não são extraídos nem exibidos: nome e matrícula do estudante, contagem de tentativas por disciplina, trancamentos, mudança de curso e horas complementares. Essa combinação de ausências reduz significativamente a utilidade do sistema para estudantes com históricos mais complexos, tornando a ferramenta pouco confiável para cenários que envolvam reprovações recorrentes, trancamentos ou integralização de atividades complementares.

Sugestões de melhoria:

- Implementar a exibição de nome completo e matrícula do estudante após o processamento do histórico, garantindo identificação inequívoca dos dados apresentados.
- Adicionar a contagem de tentativas e reprovações por disciplina, destacando as disciplinas com múltiplas ocorrências no histórico.
- Implementar a detecção e sinalização de semestres com trancamento de matrícula, exibindo essa informação no fluxograma ou no painel de resumo.
- Implementar a identificação de mudança de curso, com exibição do curso de origem e do semestre em que a mudança ocorreu.
- Implementar a extração e exibição das horas de atividades complementares registradas no histórico, com indicação do total integralizado e do saldo pendente.
- Reexecutar a M2 após as correções para verificar se a acurácia atinge o mínimo de 95% exigido pela hipótese H2.

---

## 8. Conclusão da Métrica M2

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados pela fórmula da métrica e comparados com a régua de julgamento definida previamente. A classificação final da M2 é **Insatisfatória**, com recomendação de correção prioritária dos quatro itens ausentes — todos com severidade Alta — antes de considerar a extração do histórico suficientemente confiável para apoiar o planejamento acadêmico do estudante.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação da página de execução da métrica M2 na Fase 4 | [Paulo Cerqueira](https://github.com/paulocerqr) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*