# M1 - Percentual de Requisitos Funcionais Essenciais Disponíveis

## 1. Objetivo

Verificar a presença e a acessibilidade dos requisitos funcionais essenciais do **No Fluxo UnB**, confirmando se cada função pode ser encontrada e acessada por um estudante da UnB em uso normal da aplicação.

Esta métrica responde à questão Q1 de Adequação Funcional: **"Em que medida o No Fluxo UnB disponibiliza os requisitos funcionais essenciais para apoiar o planejamento acadêmico do estudante?"**

---

## 2. Definição da Métrica

<a id="tabela-36"></a>
**Tabela 36: Definição operacional da M1.**

| Campo | Definição |
|---|---|
| **Métrica** | Percentual de requisitos funcionais essenciais disponíveis |
| **Tipo** | Quantitativa |
| **Entrada** | Lista de 15 requisitos funcionais essenciais definidos na Fase 2 (F1–F15) |
| **Saída** | Percentual de requisitos classificados como disponíveis na aplicação |
| **Unidade** | Percentual |
| **Fonte de evidência** | Inspeção direta na aplicação, capturas de tela e registro do caminho de navegação |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Itens Verificados

Para esta métrica, cada requisito funcional essencial é inspecionado individualmente e classificado conforme sua disponibilidade na aplicação.

<a id="tabela-37"></a>
**Tabela 37: Requisitos funcionais essenciais avaliados na M1.**

| Código | Requisito funcional | Critério para classificar como "Disponível" |
|---|---|---|
| F1 | Upload de histórico em PDF | Existe campo ou botão de upload funcional; o arquivo é aceito pelo sistema sem erro |
| F2 | Extração de disciplinas cursadas, aprovadas e reprovadas | Após o upload, o sistema exibe visualização distinguindo aprovadas e reprovadas |
| F3 | Consulta ao banco de fluxograma e equivalências | O fluxograma do curso é exibido com estrutura de disciplinas e semestres visíveis |
| F4 | Visualização do fluxograma com disciplinas cursadas destacadas | As disciplinas do histórico aparecem visivelmente diferenciadas das não cursadas |
| F5 | Exibição de equivalências e dependências curriculares | Ao interagir com uma disciplina (hover ou clique), equivalências ou pré-requisitos são exibidos |
| F6 | Indicação do número de reprovações ou tentativas por disciplina | O sistema indica quantas vezes o estudante cursou ou reprovou em uma disciplina |
| F7 | Cálculo de progresso, IRA, média ponderada e carga horária | Os quatro indicadores são exibidos em algum painel ou tela do sistema |
| F8 | Identificação de horas complementares cumpridas e pendentes | O sistema informa o total de horas complementares integralizado e o saldo pendente |
| F9 | Planejamento ou simulação de disciplinas futuras | Existe função que permita incluir disciplinas futuras e visualizá-las no fluxo |
| F10 | Exportação em PDF da simulação do fluxograma | Existe opção de exportar o fluxograma como PDF e o download é gerado |
| F11 | Simulação de troca de curso e aproveitamento de disciplinas | Existe opção de selecionar outro curso e o sistema exibe disciplinas que seriam aproveitadas |
| F12 | Persistência de dados e simulações para usuário logado | Ao retomar a sessão, o sistema recupera simulações e dados anteriores do usuário logado |
| F13 | Cálculo de semestres cursados e restantes | O sistema exibe quantos semestres foram cursados e a estimativa dos que restam |
| F14 | Identificação de trancamentos e mudanças de curso no histórico | O sistema sinaliza trancamentos e mudanças de curso com base no histórico, com detalhes |
| F15 | Assistente de IA para apoio à escolha de cursos e disciplinas | Existe interface de assistente conversacional ou de recomendações acessível ao estudante |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Justificativa e Rastreabilidade

A M1 foi definida para verificar a completude funcional do No Fluxo UnB em relação aos requisitos essenciais levantados na Fase 1 e consolidados na Fase 2. A avaliação por inspeção direta foi escolhida por permitir verificação objetiva e reproduzível: cada requisito tem um critério binário de aceitação que pode ser confirmado independentemente por qualquer avaliador com acesso à aplicação.

A métrica é aplicada por inspeção navegacional, sem necessidade de execução de scripts ou ferramentas externas, o que a torna adequada ao contexto de avaliação da disciplina.

<a id="tabela-38"></a>
**Tabela 38: Rastreabilidade da M1.**

| Elemento | Definição |
|---|---|
| Questão GQM | Q1 — Disponibilização dos requisitos funcionais essenciais |
| Hipótese associada | H1 — O sistema disponibiliza pelo menos 90% dos requisitos funcionais essenciais identificados |
| Subcaracterística ISO/IEC 25010 | Completude Funcional |
| Objeto medido | Funcionalidades acessíveis ao usuário na aplicação web do No Fluxo UnB |
| Continuidade na Fase 4 | A execução deverá apresentar checklist preenchido, cálculo percentual, evidências por requisito e julgamento final da M1 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 5. Recursos e Ambiente de Avaliação

<a id="tabela-39"></a>
**Tabela 39: Recursos necessários para execução da M1.**

| Recurso | Especificação |
|---|---|
| Produto avaliado | No Fluxo UnB, versão web disponível no ambiente definido para a avaliação |
| Navegador homologado | Google Chrome em versão estável atual |
| Sistema operacional | Ubuntu 24.04 ou ambiente equivalente com navegador moderno |
| Entrada principal | Histórico acadêmico em PDF de referência (necessário para F1, F2, F4, F6, F7, F8, F13 e F14) |
| Credenciais de teste | Conta de usuário ativa no sistema (necessária para F9, F11, F12, F13 e F15) |
| Ferramenta de registro | Planilha de verificação com campos: Código, Resultado, Caminho/Menu, Observação e Evidência |
| Evidências | Capturas de tela com URL visível para cada requisito classificado como Disponível ou Parcialmente disponível |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 6. Preparação

Antes da execução, o avaliador deve preparar:

1. Acesso confirmado à aplicação em [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/).
2. Credenciais de conta de teste ativas.
3. Arquivo de histórico acadêmico em PDF de referência.
4. Tabela 22 da Fase 2 (lista de requisitos F1–F15) aberta para consulta.
5. Planilha de verificação com os 15 requisitos pré-listados.
6. Pasta de evidências criada no Google Drive do grupo.

A planilha deve conter, no mínimo:

| Código | Descrição | Resultado | Caminho/Menu | Observação | Evidência |
|---|---|---|---|---|---|

---

## 7. Passo a Passo da Execução

1. Acessar [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) com login.
2. Para cada requisito acessível com autenticação (F1, F3, F4), navegar até a função e confirmar resposta a interação básica do usuário.
3. Capturar screenshot da tela com a URL visível e anotar o caminho percorrido.
4. Registrar na planilha: `Disponível`, `Parcialmente disponível` ou `Ausente`.
5. Realizar login com as credenciais de conta de teste.
6. Para cada requisito dependente de autenticação (F9, F11, F12, F13, F15), repetir os passos 2 a 4.
7. Para F12, verificar se uma simulação salva em sessão anterior é recuperada ao retomar a sessão.
8. Realizar o upload do arquivo de histórico acadêmico de referência.
9. Aguardar o processamento pelo sistema.
10. Para cada requisito dependente do upload (F2, F4, F6, F7, F8, F13, F14), verificar presença e comportamento e repetir os passos 2 a 4.
11. Para cada requisito classificado como `Ausente` ou `Parcialmente disponível`, registrar na coluna Observação: o que era esperado, o que foi encontrado e se há elemento de UI que sugira função planejada mas não implementada.
12. Contar o total de requisitos classificados como `Disponível` e registrar como N_disp.
13. Aplicar a fórmula de cálculo e registrar o resultado final na planilha.

---

## 8. Fórmula de Cálculo

```text
M1 = (Nº de requisitos classificados como Disponível ÷ 15) × 100
```

> Requisitos classificados como `Parcialmente disponível` **não** são contados no numerador, mas devem ser registrados e analisados separadamente.

---

## 9. Critério de Julgamento

<a id="tabela-40"></a>
**Tabela 40: Régua de julgamento da M1.**

| Classificação | Critério |
|---|---|
| Excelente | M1 ≥ 90% (≥ 13 de 15 requisitos disponíveis) |
| Boa | 75% ≤ M1 < 90% (11–12 de 15) |
| Regular | 50% ≤ M1 < 75% (8–10 de 15) |
| Insatisfatória | M1 < 50% (≤ 7 de 15) |

O limite mínimo de 90% segue a hipótese H1 definida para a Adequação Funcional na Fase 2.

---

## 10. Classificação de Divergências

<a id="tabela-41"></a>
**Tabela 41: Severidade das divergências da M1.**

| Severidade | Critério |
|---|---|
| Crítica | Requisito ausente impede o uso do fluxo principal da aplicação ou inviabiliza a análise acadêmica do estudante |
| Alta | Requisito central ao produto está ausente ou com funcionamento parcial que compromete a proposta do sistema |
| Média | Requisito secundário está ausente ou parcialmente disponível, mas não bloqueia o uso principal |
| Baixa | Requisito complementar ausente com baixo impacto sobre a experiência geral do estudante |

---

## 11. Cronograma de Execução

<a id="tabela-42"></a>
**Tabela 42: Cronograma específico da M1.**

| Data limite | Atividade | Responsável |
|---|---|---|
| 08/06/2026 | Preparar planilha de verificação, histórico de referência, credenciais de teste e pasta de evidências | Paulo Cerqueira |
| 09/06/2026 | Executar inspeção dos 15 requisitos, capturar evidências e preencher a planilha | Avaliadores |
| 10/06/2026 | Consolidar resultados, calcular M1, classificar o resultado e publicar a página de execução da Fase 4 | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 12. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha preenchida com resultado de cada um dos 15 requisitos.
- Conjunto de screenshots com caminhos de navegação anotados.
- Lista de requisitos ausentes ou parcialmente disponíveis com descrição de divergência.
- Percentual final da M1.
- Classificação final da métrica.
- Página correspondente na Fase 4 com resultado, julgamento e links para as evidências.

---

## Histórico de Versões

<a id="tabela-43"></a>
**Tabela 43: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação do plano de avaliação da M1 | [Paulo Cerqueira](https://github.com/paulocerqr) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*