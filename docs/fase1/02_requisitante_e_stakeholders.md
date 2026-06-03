# 2. Requisitante e Partes Interessadas (Stakeholders)

Esta seção identifica o requisitante da avaliação e as demais partes interessadas (stakeholders) no software **No Fluxo UnB**, descreve seus papéis e necessidades e explicita **como cada parte influenciou as escolhas feitas nesta Fase 1** — em particular a seleção das características de qualidade, a definição do escopo e a priorização dos objetos avaliados.

Como o No Fluxo UnB não publica documentação oficial que liste explicitamente seus stakeholders, o mapeamento abaixo foi construído pelo Grupo Hedy Lamarr a partir do repositório público do projeto ([unb-mds/2025-1-NoFluxoUNB](https://github.com/unb-mds/2025-1-NoFluxoUNB)), do site em produção ([no-fluxo.crianex.com](https://no-fluxo.crianex.com/)) e do contexto institucional da Universidade de Brasília.

---

## 2.1 Requisitante da Avaliação

**Tabela 1: Requisitante da avaliação.**

| Atributo | Descrição |
|---|---|
| **Requisitante** | Profa. Cristiane Ramos — disciplina **FGA0315 — Qualidade de Software 1 (T01 / 2026.1)**, FCTE/UnB |
| **Papel** | Solicita a avaliação como atividade formativa da disciplina e estabelece o método (ISO/IEC 25010 — SQuaRE), os marcos de entrega (EU1, EU2, EU3) e os critérios da rubrica |
| **Necessidades** | Receber um relatório técnico que demonstre domínio do processo de avaliação de qualidade de produto, com rastreabilidade no repositório Git e entrega via Moodle |
| **Influência na avaliação** | Define o **método** (SQuaRE), restringe **o que não pode ser avaliado** (Usabilidade está vedada como característica priorizada) e fixa o **mínimo e o máximo** de características (entre 2 e 4). Essas restrições foram observadas integralmente na [Seção 4](04_selecao_e_priorizacao_de_caracteristicas.md) |
| **Critério de sucesso** | Relatório aderente à rubrica da disciplina, com evidências auditáveis, propósito coerente, modelo de qualidade adaptado e ODS vinculadas |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 2.2 Equipe Avaliadora — Grupo Hedy Lamarr

**Tabela 2: Equipe avaliadora.**

| Atributo | Descrição |
|---|---|
| **Papel** | Conduzir a avaliação de forma independente: definir propósito, modelar a qualidade, priorizar características, executar medições e relatar achados |
| **Necessidades** | Acesso público ao software (atendido via [no-fluxo.crianex.com](https://no-fluxo.crianex.com/)) e ao código-fonte (atendido via repositório público no GitHub) |
| **Influência na avaliação** | Como avaliadora externa, a equipe escolheu **não** ter contato direto com a Squad 03 durante a Fase 1, para preservar a independência do diagnóstico. Essa escolha implica que stakeholders internos ao desenvolvimento foram mapeados a partir de fontes públicas e que entrevistas com a equipe original ficaram fora do escopo desta fase |
| **Critério de sucesso** | Produzir um relatório técnico defensável, com método explícito, dados auditáveis no repositório e conclusões rastreáveis às evidências coletadas |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 2.3 Equipe de Desenvolvimento — Squad 03 (MDS 2025/1, FGA/UnB)

**Tabela 3: Equipe de desenvolvimento do No Fluxo UnB.**

| Atributo | Descrição |
|---|---|
| **Papel** | Desenvolveu e mantém o No Fluxo UnB. Integrantes: Arthur Nogueira Ramalho, Guilherme Gusmão Nepomuceno, Vitor Marconi T. Albuquerque, Gustavo Choueiri, Felipe Lopes Pedroza, Vinícius Pereira Ribeiro, Arthur Fernandes Alencar e Erick Alves dos Santos |
| **Necessidades** | Receber feedback externo, fundamentado em norma, sobre o que funciona bem e o que precisa ser corrigido — especialmente no parser de PDF, no motor de fluxograma e na entrega multiplataforma |
| **Influência na avaliação** | A natureza do produto entregue por essa equipe (aplicação web Svelte/TypeScript no frontend, Python no backend, integração com Supabase e assistente baseado em RAGFlow) define **o que faz sentido avaliar agora**: comportamento funcional observável de fora e comportamento em diferentes ambientes de execução. Características como Manutenibilidade exigiriam acesso a métricas internas do processo de desenvolvimento e foram descartadas desta fase por esse motivo |
| **Critério de sucesso** | Receber achados acionáveis, com severidade e exemplos reprodutíveis, que possam ser convertidos em correções de curto e médio prazo |

*Fonte: Elaborado pelo Grupo Hedy Lamarr com base no repositório público do No Fluxo UnB (2026).*

---

## 2.4 Estudantes de Graduação da UnB (Usuários Finais)

**Tabela 4: Estudantes de graduação da UnB como usuários finais.**

| Atributo | Descrição |
|---|---|
| **Papel** | Público-alvo do No Fluxo UnB. Utilizam o sistema para visualizar seu fluxograma, conferir disciplinas concluídas, planejar matrículas, simular mudança de curso e obter recomendações via assistente de IA |
| **Necessidades** | Que o sistema (a) leia corretamente seu histórico, (b) apresente o progresso acadêmico de forma fiel e (c) esteja acessível no dispositivo e no navegador que o estudante de fato usa — frequentemente o smartphone |
| **Influência na avaliação** | Esta foi a parte de maior peso na priorização. Foi por causa do impacto direto sobre este grupo que **Adequação Funcional** ficou em primeiro lugar na matriz Impacto × Risco (25 pontos) e **Portabilidade** em segundo (16 pontos), conforme [Seção 4](04_selecao_e_priorizacao_de_caracteristicas.md) |
| **Critério de sucesso** | Conseguir planejar a graduação a partir dos dados exibidos no sistema, sem precisar conferir manualmente em outros sistemas da UnB, e fazê-lo a partir de qualquer dispositivo |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 2.5 Instituição (UnB) e Sistemas Acadêmicos de Apoio

**Tabela 5: Instituição e sistemas acadêmicos de apoio.**

| Atributo | Descrição |
|---|---|
| **Papel** | Provê os dados curriculares e os históricos acadêmicos que alimentam o No Fluxo UnB. Não opera o sistema, mas é a fonte autoritativa das informações que o software representa |
| **Necessidades** | Que ferramentas de terceiros que consomem dados da UnB representem corretamente a estrutura curricular oficial — fluxograma, pré-requisitos, equivalências e carga horária complementar |
| **Influência na avaliação** | Reforça o peso da Adequação Funcional: divergências entre o que o sistema mostra e a estrutura curricular oficial são, na prática, defeitos funcionais com impacto institucional. Por isso, parte dos testes de Adequação Funcional usará o fluxograma oficial publicado pela UnB como oráculo |
| **Critério de sucesso** | Que as informações exibidas pelo No Fluxo UnB sejam consistentes com a estrutura curricular oficial dos cursos avaliados |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 2.6 Mapa de Influência → Decisões da Fase 1

A Tabela 6 torna explícita a conexão entre cada stakeholder e as decisões registradas neste relatório, atendendo ao critério de mapeamento consistente com critérios de sucesso e influência real nas escolhas.

**Tabela 6: Mapa de influência dos stakeholders nas decisões da Fase 1.**

| Stakeholder | Decisão da Fase 1 influenciada | Onde a decisão aparece |
|---|---|---|
| Profa. Cristiane Ramos (requisitante) | Adoção da ISO/IEC 25010, exclusão da Usabilidade, limite de 2–4 características | [Seção 4](04_selecao_e_priorizacao_de_caracteristicas.md), [Seção 5](05_modelo_de_qualidade.md) |
| Estudantes de graduação da UnB | Priorização de Adequação Funcional e Portabilidade na matriz Impacto × Risco | [Seção 4](04_selecao_e_priorizacao_de_caracteristicas.md) |
| Squad 03 (desenvolvedores) | Recorte do que é observável de fora (caixa-preta) versus o que exigiria acesso interno | [Seção 6](06_escopo_profundidade_e_objetos_de_avaliacao.md) |
| Universidade de Brasília (UnB) | Uso do fluxograma oficial como oráculo para testes de Adequação Funcional | [Seção 3](03_descricao_produto.md), [Seção 6](06_escopo_profundidade_e_objetos_de_avaliacao.md) |
| Grupo Hedy Lamarr (equipe avaliadora) | Postura de avaliação independente, sem entrevistas com a equipe de desenvolvimento nesta fase | Esta seção (2.2) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Essa rastreabilidade permite verificar, em qualquer momento do projeto, **por que** cada escolha da Fase 1 foi feita e **a quem** ela atende.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.1` | 03/06/2026 | Revisão e ajustes de acordo com a avaliação da Fase 1 feita pelos alunos da disciplina que avaliaram o Grupo Hedy Lamarr | [Lucas Guimarães](https://github.com/lcsgborges) |
