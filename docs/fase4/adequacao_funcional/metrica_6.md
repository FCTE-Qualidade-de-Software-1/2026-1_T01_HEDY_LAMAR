# M6 - Execução do Percentual de Recomendações ou Orientações Academicamente Válidas

## 1. Objetivo da Execução

Executar a métrica M6 definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_6/), verificando se o assistente de IA do **No Fluxo UnB** produz recomendações e orientações academicamente válidas — coerentes com o histórico acadêmico do estudante, com a matriz curricular do curso e com as regras acadêmicas aplicáveis da Universidade de Brasília.

Esta métrica responde à questão Q3 de Adequação Funcional: **"Em que grau as funcionalidades do sistema são apropriadas para executar tarefas reais de planejamento acadêmico?"**

---

## 2. Procedimento Executado

1. Acesso à plataforma No Fluxo UnB em `https://no-fluxo.crianex.com/` com usuário de teste autenticado e histórico acadêmico de referência já carregado.
2. Abertura da janela do Assistente de IA (Chatbot).
3. Submissão das três perguntas-alvo definidas na Fase 3 (P1–P3), de forma isolada, uma por vez, conforme os enunciados exatos da Tabela 79 da Fase 3.
4. Registro da resposta completa do assistente para cada pergunta.
5. Validação cruzada de cada resposta com as fontes de referência: histórico acadêmico, matriz curricular e regras acadêmicas da UnB.
6. Classificação de cada resposta como Válida, Inválida ou Não verificável.
7. Captura de screenshot de cada resposta como evidência.
8. Consolidação dos resultados e cálculo da métrica.

### 2.1 Conformidade com o Plano de Avaliação

<a id="tabela-138"></a>
**Tabela 138: Rastreabilidade entre o plano da Fase 3 e a execução da M6.**

| Instrução definida na Fase 3                                                              | Execução realizada na Fase 4                                                                                        | Evidência                              |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Submeter as três perguntas-alvo de forma isolada e sem adaptação no enunciado             | As três perguntas foram enviadas ao assistente exatamente como definidas na Tabela 79 da Fase 3                     | Screenshots das perguntas e respostas  |
| Registrar a resposta completa do assistente para cada pergunta                            | Respostas transcritas integralmente na planilha de registro                                                         | Tabela 140 desta página                  |
| Realizar validação cruzada com histórico, matriz curricular e regras acadêmicas da UnB   | Validação realizada para cada resposta, verificando conformidade com as três fontes de referência                  | Tabela 140 desta página                  |
| Classificar cada resposta como Válida, Inválida ou Não verificável                       | As três respostas foram classificadas como Não verificável                                                          | Tabela 140 desta página                  |
| Registrar evidências no padrão `M6_P[ID]_[CLASSIFICACAO]_[DATA].png`                    | Screenshots salvos para cada resposta                                                                               | Links de evidência na Tabela 140         |
| Calcular M6 excluindo do denominador as respostas Não verificáveis                       | Com denominador igual a zero, a M6 não pode ser calculada; resultado registrado como observação qualitativa         | Seção 4 desta página                   |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

<a id="tabela-139"></a>
**Tabela 139: Dados brutos e evidências da M6.**

| Artefato                      | Finalidade                                                                    | Disponibilidade                          |
| ----------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| Histórico acadêmico           | Referência para validação cruzada das respostas do assistente                 | [historico_andre.pdf](../../assets/dados/adequacao_funcional/metrica5e6/historico_andre.pdf)                    |
| Screenshot — P1               | Evidência da pergunta enviada e resposta do assistente para P1                | [M6_P[1]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[1]_[CLASSIFICACAO]_[2026-06-11].png)      |
| Screenshot — P2               | Evidência da pergunta enviada e resposta do assistente para P2                | [M6_P[2]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[2]_[CLASSIFICACAO]_[2026-06-11].png)      |
| Screenshot — P3               | Evidência da pergunta enviada e resposta do assistente para P3                | [M6_P[3]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[3]_[CLASSIFICACAO]_[2026-06-11].png)      |
| Resultado processado          | Classificação das respostas, análise qualitativa e conclusão da métrica       | Esta página                              |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

<a id="tabela-140"></a>
**Tabela 140: Resultado da validação das respostas do assistente de IA na M6.**

| Código | Pergunta submetida                                             | Classificação       | Justificativa da classificação                                                                                          | Evidência                              |
| ------ | -------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| P1     | "Tenho algum pré-requisito pendente para cursar [disciplina X]?" | **Não verificável** | O assistente forneceu resposta genérica sobre como consultar pré-requisitos, sem acessar ou referenciar o histórico carregado do estudante. A resposta não permitiu validação objetiva contra a base curricular de referência. | [M6_P[1]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[1]_[CLASSIFICACAO]_[2026-06-11].png)  |
| P2     | "Quantos semestres ainda me faltam para concluir o curso?"     | **Não verificável** | O assistente não forneceu estimativa numérica de semestres. A resposta foi orientativa, sugerindo que o estudante consulte o SIGAA ou o coordenador, sem utilizar os dados do histórico carregado para produzir um cálculo concreto. | [M6_P[2]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[2]_[CLASSIFICACAO]_[2026-06-11].png)  |
| P3     | "Estou em risco de jubilamento? O que devo fazer?"             | **Não verificável** | O assistente respondeu com informações gerais sobre jubilamento na UnB, sem avaliar a situação específica do estudante com base no histórico carregado. A resposta não permitiu validação objetiva contra as regras acadêmicas aplicáveis ao perfil do histórico de referência. | [M6_P[3]_[Nao verificável]_[2026-06-11].png](../../assets/dados/adequacao_funcional/metrica5e6/M6_P[3]_[CLASSIFICACAO]_[2026-06-11].png)  |

Obs.: A resposta a tais perguntas foram classificadas como "Não verificável" devido ao fato do assistente de IA ter sido incapaz de responder às perguntas de forma personalizada, pois ele não possui acesso ao histórico do aluno. Deste modo, não se pode obter respostas customizadas.

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Resumo da Verificação

<a id="tabela-141"></a>
**Tabela 141: Resumo quantitativo da execução da M6.**

| Categoria                              | Quantidade |
| -------------------------------------- | ---------- |
| Perguntas submetidas                   | 3          |
| Respostas classificadas como Válida    | 0          |
| Respostas classificadas como Inválida  | 0          |
| Respostas classificadas como Não verificável | 3     |
| Respostas incluídas no denominador da fórmula | 0   |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.2 Caracterização do Padrão de Resposta Observado

Em todas as três perguntas submetidas, o assistente de IA produziu respostas orientativas e genéricas, sem referenciar ou processar os dados do histórico acadêmico carregado na plataforma. O comportamento observado indica que, no escopo avaliado, o assistente opera de forma desacoplada do histórico do estudante: ele responde às perguntas com base em conhecimento geral sobre a UnB e sobre o funcionamento acadêmico, mas não integra as informações do histórico carregado para produzir respostas personalizadas e verificáveis.

Esse padrão é consistente nas três perguntas e sugere uma limitação estrutural da funcionalidade de assistente de IA no contexto avaliado: o chatbot não utiliza o histórico do estudante como contexto para gerar respostas específicas.

---

## 4. Cálculo da Métrica

Conforme a regra definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_6/), recomendações classificadas como Não verificável são excluídas tanto do numerador quanto do denominador da fórmula:

```
M6 = (Nº de recomendações válidas ÷ Nº total de recomendações avaliadas) × 100
```

Substituindo os valores obtidos na execução:

```
M6 = (0 ÷ 0) × 100 = incalculável
```

> **Nota:** Com as três respostas classificadas como Não verificável, o denominador da fórmula é igual a zero, tornando o cálculo da M6 matematicamente indefinido. Conforme a regra da Fase 3, esse resultado deve ser **registrado como observação qualitativa** e não compõe o resultado numérico da métrica.

---

## 5. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase3/adequacao_funcional/metrica_6/):

- **Excelente:** M6 >= 90%
- **Satisfatório:** 75% <= M6 < 90%
- **Insuficiente:** M6 < 75%

**Resultado obtido:** **M6 = incalculável (denominador = 0)**

**Classificação:** **Não aplicável** — nenhuma das respostas do assistente permitiu validação objetiva com as fontes de referência disponíveis. O resultado é registrado como **observação qualitativa** e não contribui para o cálculo de um percentual classificável.

---

## 6. Análise e Resposta GQM

A M6 responde à questão Q3 de Adequação Funcional ao verificar se as recomendações do assistente de IA são pertinentes e academicamente válidas para o contexto do estudante.

O resultado da execução não confirma nem refuta a hipótese H3 no que diz respeito à pertinência do assistente de IA: a impossibilidade de classificar as respostas como Válidas ou Inválidas revela que o assistente, no escopo avaliado, não produz orientações específicas o suficiente para serem verificadas objetivamente.

<a id="tabela-142"></a>
**Tabela 142: Resposta à hipótese H3 da Fase 2 no contexto da M6.**

| Hipótese | Limiar definido | Resultado obtido | Confirmada? |
| -------- | --------------- | ---------------- | ----------- |
| H3 — O assistente de IA produz recomendações válidas em pelo menos 90% das avaliadas | 90% | Incalculável (0 respostas avaliáveis) | **Não determinável** |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Em relação ao propósito da avaliação definido na [Fase 1](https://fcte-qualidade-de-software-1.github.io/2026-1_T01_HEDY_LAMAR/fase1/01_proposito_da_avaliacao/), o resultado indica que o assistente de IA, conforme utilizado na avaliação, não está funcionando como uma ferramenta de apoio personalizado ao planejamento acadêmico. O fato de o assistente não referenciar o histórico carregado ao responder perguntas diretamente relacionadas à trajetória do estudante representa uma lacuna de pertinência funcional relevante para o escopo declarado da plataforma.

---

## 7. Julgamento e Sugestões de Melhoria

A execução da métrica M6 revelou que o assistente de IA do **No Fluxo UnB**, no escopo das três perguntas avaliadas, não integra o histórico acadêmico do estudante às suas respostas. As orientações fornecidas foram genéricas e não verificáveis, o que impediu o cálculo do percentual de validade e resultou em classificação **Não aplicável**.

Esse resultado aponta uma lacuna funcional de alta relevância para a pertinência do produto: a proposta central do assistente de IA é apoiar o planejamento acadêmico personalizado, mas o comportamento observado indica que o chatbot opera desacoplado do histórico carregado — entregando, na prática, informações que poderiam ser obtidas em qualquer outra fonte de informação geral sobre a UnB.

Sugestões de melhoria:

- Integrar o contexto do histórico acadêmico carregado ao prompt do assistente de IA, de forma que as respostas sejam geradas com base nas disciplinas cursadas, aprovadas e reprovadas do estudante específico.
- Implementar a capacidade do assistente de calcular e informar a estimativa de semestres restantes com base nos dados do histórico e da matriz curricular do curso.
- Garantir que perguntas sobre pré-requisitos pendentes resultem em uma verificação automática das dependências curriculares do histórico carregado, com resposta objetiva e rastreável.
- Reexecutar a M6 após os ajustes de integração do contexto do histórico e comparar os resultados com o limiar de 90% definido na Fase 3.
- Transformar a limitação identificada em issue rastreável no repositório do produto, com prioridade alta dado o impacto na proposta de valor central da plataforma.

---

## 8. Conclusão da Métrica M6

Os dados brutos foram obtidos conforme o método definido na Fase 3. As três respostas do assistente de IA foram avaliadas e classificadas como Não verificável, pois nenhuma delas permitiu validação objetiva com as fontes de referência disponíveis. Como resultado, a fórmula da M6 resultou em denominador igual a zero, tornando o cálculo matematicamente indefinido.

A classificação final da M6 é **Não aplicável**, com a observação qualitativa de que o assistente de IA opera de forma desacoplada do histórico acadêmico do estudante no escopo avaliado, o que representa uma limitação funcional relevante frente à proposta de valor da plataforma.

---

## Histórico de Versões

<a id="tabela-143"></a>
**Tabela 143: Histórico de versões.**

| Versão | Data       | Descrição                                                                   | Autor |
| ------ | ---------- | --------------------------------------------------------------------------- | ----- |
| `1.0`  | 08/06/2026 | Criação da página de execução da métrica M6 na Fase 4, com resultados reais. | [André Gustavo](https://github.com/AndreGustavoRN) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
