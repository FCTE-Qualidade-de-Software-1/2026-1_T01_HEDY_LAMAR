# M1 - Execução do Percentual de Requisitos Funcionais Essenciais Disponíveis

## 1. Objetivo da Execução

Executar a métrica M1 definida na [Fase 3](../../fase3/adequacao_funcional/metrica_1.md), verificando se o **No Fluxo UnB** disponibiliza e permite o acesso aos requisitos funcionais essenciais por um estudante da UnB em uso normal da aplicação.

Esta métrica responde à questão Q1 de Adequação Funcional: **"Em que medida o No Fluxo UnB disponibiliza os requisitos funcionais essenciais para apoiar o planejamento acadêmico do estudante?"**

---

## 2. Procedimento Executado

1. Acesso à aplicação em [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/) com login.
2. Inspeção dos requisitos acessíveis com autenticação (F1, F3, F4), com navegação até cada função e confirmação de resposta à interação básica.
3. Login com as credenciais de conta de teste.
4. Inspeção dos requisitos dependentes de autenticação (F9, F11, F12, F13, F15).
5. Upload do histórico acadêmico de referência em PDF: [historico_lucas.pdf](../../assets/historico_lucas.pdf).
6. Inspeção dos requisitos dependentes do upload (F2, F4, F6, F7, F8, F13, F14).
7. Classificação de cada requisito como `Disponível`, `Parcialmente disponível` ou `Ausente`.
8. Registro de evidências (capturas de tela com URL visível) para cada requisito.
9. Consolidação do percentual final da métrica.

### 2.1 Conformidade com o Plano de Avaliação

**Tabela 116: Rastreabilidade entre o plano da Fase 3 e a execução da M1.**

| Instrução definida na Fase 3 | Execução realizada na Fase 4 | Evidência |
|---|---|---|
| Usar histórico acadêmico em PDF como entrada | Foi utilizado o arquivo [historico_lucas.pdf](../../assets/historico_lucas.pdf) | Histórico acadêmico armazenado em `docs/assets` |
| Usar credenciais de conta de teste ativas | Login realizado com conta de teste para verificação dos requisitos autenticados | Captura de tela do login |
| Inspecionar os 15 requisitos (F1–F15) individualmente | Foram verificados os 15 requisitos com critério binário por item | Planilha de verificação da M1 |
| Registrar caminho de navegação, observação e evidência por item | Cada requisito foi registrado com caminho/menu, resultado e screenshot | Planilha e pasta de evidências |
| Aplicar fórmula e régua de julgamento | Foi calculado M1 conforme definido na Fase 3, com classificação final | Seções de cálculo e julgamento desta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.2 Dados Brutos e Evidências

**Tabela 117: Dados brutos e evidências da M1.**

| Artefato | Finalidade | Disponibilidade |
|---|---|---|
| Histórico acadêmico | Entrada usada no upload e no processamento do sistema | [historico_lucas.pdf](../../assets/historico_lucas.pdf) |
| Tabela de verificação M1 | Registro dos 15 requisitos, resultado por item, caminho de navegação, observação e evidência | [panilha](https://drive.google.com/file/d/1OkI3PN5ec6Pv7zREHppnVFM0C5IqlIZ7/view?usp=drive_link) | |
| Vídeo de execução M1 | Registro audiovisual do processo de inspeção dos requisitos | [videos](https://drive.google.com/drive/folders/1urag_Mo7k0a_ZOM_Z4EJNVYxTJXco-xw?usp=drive_link)|
| Resultado processado | Cálculo percentual, classificação e conclusão da métrica | Esta página |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Registro de Execução

**Tabela 118: Resumo da verificação da M1.**

| Categoria verificada | Quantidade | Disponíveis | Parcialmente disponíveis | Ausentes |
|---|---|--|--|--|
| Requisitos funcionais essenciais (F1–F15) | 15 | 10 | 1 | 3 |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.1 Checklist de Requisitos

A tabela abaixo registra o resultado da inspeção de cada requisito funcional essencial. A coluna **Resultado** deve ser preenchida com `Disponível`, `Parcialmente disponível` ou `Ausente`. Os campos marcados com _(preencher)_ devem ser completados após a execução.

**Tabela 119: Checklist de inspeção dos requisitos funcionais essenciais.**

| Código | Requisito funcional | Resultado | Caminho / Menu | Observação | Evidência |
|---|---|---|---|---|---|
| F1 | Upload de histórico em PDF | Disponível | Tela inicial → campo de upload do histórico em PDF. | O campo de upload foi localizado na tela inicial com a necessidade de login. O arquivo `historico_lucas.pdf` foi aceito sem mensagem de erro, e o sistema avançou para o processamento automaticamente. | [Evidência F1](https://drive.google.com/file/d/1qtg3PCTxkHgeg7vcFkCORqRtnA8IFV3B/view?usp=drive_link) |
| F2 | Extração de disciplinas cursadas, aprovadas e reprovadas | Disponível | Na mesma interface após a extração do histórico. | É exibida uma visualização em dashboard de matérias aprovadas e reprovadas. | [Evidência F2](https://drive.google.com/file/d/1GlWp24yYPoWADxN206Fr5Lkd1EA8mFLt/view?usp=drive_link) |
| F3 | Consulta ao banco de fluxograma e equivalências | Disponível | Na seção "Fluxograma" é possível pesquisar e selecionar os fluxogramas disponíveis. | O fluxograma pesquisado foi selecionado e o sistema exibiu o curso com estrutura de disciplinas e semestres visíveis. O processo pode ser feito sem autenticação. | [Evidência F3](https://drive.google.com/file/d/1knDzl6RQIvUoz_-fNyKdcohVJUT9CMPK/view?usp=drive_link) |
| F4 | Visualização do fluxograma com disciplinas cursadas destacadas | Disponível | Na mesma seção, existe um botão "Visualizar Fluxograma" ao final do resumo das informações sobre o histórico acadêmico. | As disciplinas do histórico aparecem visivelmente diferenciadas das não cursadas. | [Evidência F4](https://drive.google.com/file/d/1GWPiupFETYI8sJQlpbeSE0YE95OQCYGf/view?usp=drive_link) |
| F5 | Exibição de equivalências e dependências curriculares | Disponível | Em "Meu Fluxograma" é possível clicar sobre uma disciplina no quadro. | Ao interagir com uma disciplina (hover ou clique), equivalências ou pré-requisitos são exibidos. | [Evidência F5](https://drive.google.com/file/d/1hEGdYqXnqi46v94fc0N_0k0JcTMTFgos/view?usp=drive_link) |
| F6 | Indicação do número de reprovações ou tentativas por disciplina | Parcialmente disponível | Em "Meu Fluxograma" existe uma tag com o nome "Reprovado"; se o aluno tiver reprovado, a matéria ficará com a cor vermelha. | O sistema não indica quantas vezes o estudante cursou ou reprovou em uma disciplina, porém exibe quais matérias estão com status de reprovação. | [Evidência F6](https://drive.google.com/file/d/1LHjOz5Ia3u-uIqsa2kUiEsQ2Ehd_q9jw/view?usp=drive_link) |
| F7 | Cálculo de progresso, IRA, média ponderada e carga horária | Disponível | Na seção de Upload de Histórico, após a extração. | Os quatro indicadores são exibidos em um Dashboard. | [Evidência F7](https://drive.google.com/file/d/1SIIFNEpiBjsQ7X1ZG5vEatKotMyRDwJ0/view?usp=drive_link) |
| F8 | Identificação de horas complementares cumpridas e pendentes | Indisponível | Na seção de Upload não foi encontrada essa informação; na seção "Meu Fluxograma" também não está presente. | O sistema não informa o total de horas complementares integralizado e o saldo pendente, apenas das disciplinas Obrigatórias e Optativas. | [Evidência F8](https://drive.google.com/file/d/1RcNvGw66m5_qL-emBaO7XKFplseO1ssk/view?usp=drive_link) |
| F9 | Planejamento ou simulação de disciplinas futuras | Disponível | Na seção "Assistente" é possível pedir através do chat para a IA listar disciplinas; ainda no chat é possível selecionar disciplinas dessa lista e adicioná-las à grade. | Existe função que permite incluir disciplinas futuras e visualizá-las no fluxo. | [Evidência F9](https://drive.google.com/file/d/1FVKcoxxrRk-Nkgio4vPWuXSuI47g5hdk/view?usp=drive_link) |
| F10 | Exportação em PDF da simulação do fluxograma | Parcialmente disponível | Na seção "Meu Fluxograma", em baixo na opção Ferramentas → "Mudança de Curso". | Existe opção de exportar o fluxograma como screenshot e o download é gerado, porém não em formato PDF. | [Evidência F10](https://drive.google.com/file/d/1Bp44h75aQ4UuosxPRE8CmyOtPTbe4gbf/view?usp=drive_link) |
| F11 | Simulação de troca de curso e aproveitamento de disciplinas | Disponível | Na seção "Meu Fluxograma", em baixo na opção Ferramentas → "Mudança de Curso". | Existe opção de selecionar outro curso e o sistema exibe disciplinas que seriam aproveitadas. | [Evidência F11](https://drive.google.com/file/d/1Wp70akpbsHJRg2i1ltSNF1m-fpxbQfA-/view?usp=drive_link) |
| F12 | Persistência de dados e simulações para usuário logado | Disponível | No canto superior direito existe um ícone; clicando nele e em "Sair" é possível encerrar a sessão atual. | Ao retomar a sessão, o sistema recupera simulações e dados anteriores do usuário logado. | [Evidência F12](https://drive.google.com/file/d/1pnFQqVZyS4kwRemK048uYd9xYlMirTeW/view?usp=drive_link) |
| F13 | Cálculo de semestres cursados e restantes | Indisponível | Na seção de Upload não foi encontrada essa informação; na seção "Meu Fluxograma" também não está presente. | O sistema exibe quantos semestres foram cursados, porém só mostra o semestre atual e não apresenta nenhuma estimativa de quantos restam. | [Evidência F13](https://drive.google.com/file/d/1UasHzg9U5YO14-ewMt6Ca9ummTqEZ0aC/view?usp=drive_link) |
| F14 | Identificação de trancamentos e mudanças de curso no histórico | Indisponível | Na seção de Upload não foi encontrada essa informação; na seção "Meu Fluxograma" também não está presente. | O sistema não exibe nenhuma informação sobre trancamento. | [Evidência F14](https://drive.google.com/file/d/1UasHzg9U5YO14-ewMt6Ca9ummTqEZ0aC/view?usp=drive_link) |
| F15 | Assistente de IA para apoio à escolha de cursos e disciplinas | Disponível | Na seção "Assistente" é possível pedir através do chat para a IA sugestões de disciplinas e cursos. | Existe interface de assistente conversacional com recomendações acessível ao estudante. | [Evidência F15](https://drive.google.com/file/d/1oMgKQNqY_I8BNEiu1tPYlXAWQaCV_6xn/view?usp=drive_link) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 3.2 Divergências Identificadas

As divergências foram registradas na planilha de verificação, com indicação do que era esperado, o que foi encontrado e a severidade atribuída conforme a Tabela 41 do plano da M1.

**Tabela 120: Registro consolidado de divergências da M1.**

| ID | Requisito | Tipo de resultado | Descrição da divergência | Severidade | Evidência |
|---|---|---|---|---|---|
| AF-M1-01 | F6 — Indicação do número de reprovações ou tentativas por disciplina | Parcialmente disponível | O sistema exibe o status de reprovação por cor e tag, mas não informa quantas vezes o estudante cursou ou reprovou em cada disciplina, o que era o critério de aceitação definido. | Média | [Evidência F6](https://drive.google.com/file/d/1LHjOz5Ia3u-uIqsa2kUiEsQ2Ehd_q9jw/view?usp=drive_link) |
| AF-M1-02 | F8 — Identificação de horas complementares cumpridas e pendentes | Indisponível | O sistema não exibe o total de horas complementares integralizadas nem o saldo pendente. Apenas disciplinas obrigatórias e optativas são contabilizadas. | Alta | [Evidência F8](https://drive.google.com/file/d/1RcNvGw66m5_qL-emBaO7XKFplseO1ssk/view?usp=drive_link) |
| AF-M1-03 | F10 — Exportação em PDF da simulação do fluxograma | Parcialmente disponível | O sistema gera um download do fluxograma, porém no formato de screenshot (imagem), e não como arquivo PDF conforme o critério de aceitação definido. | Média | [Evidência F10](https://drive.google.com/file/d/1Bp44h75aQ4UuosxPRE8CmyOtPTbe4gbf/view?usp=drive_link) |
| AF-M1-04 | F13 — Cálculo de semestres cursados e restantes | Indisponível | O sistema exibe o semestre atual do estudante, mas não apresenta o total de semestres cursados nem a estimativa de semestres restantes para a integralização do curso. | Alta | [Evidência F13](https://drive.google.com/file/d/1UasHzg9U5YO14-ewMt6Ca9ummTqEZ0aC/view?usp=drive_link) |
| AF-M1-05 | F14 — Identificação de trancamentos e mudanças de curso no histórico | Indisponível | O sistema não sinaliza nem exibe qualquer informação referente a trancamentos ou mudanças de curso presentes no histórico acadêmico do estudante. | Alta | [Evidência F14](https://drive.google.com/file/d/1UasHzg9U5YO14-ewMt6Ca9ummTqEZ0aC/view?usp=drive_link) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

### 3.3 Cálculo da Métrica

Aplicando a fórmula definida na Fase 2:

```text
M1 = (Nº de requisitos classificados como Disponível ÷ 15) × 100
```

Substituindo os valores obtidos na execução:

```text
M1 = (10 / 15) × 100 = 66,67%
```

> **Atenção:** Requisitos classificados como `Parcialmente disponível` (F6 e F10) **não** são contados no numerador. Foram registrados e analisados separadamente na Tabela 120.

---

## 4. Julgamento da Métrica

Conforme a régua de aceitação definida na [Fase 3](../../fase3/adequacao_funcional/metrica_1.md):

- **Excelente:** M1 ≥ 90% (≥ 13 de 15 requisitos disponíveis)
- **Boa:** 75% ≤ M1 < 90% (11–12 de 15)
- **Regular:** 50% ≤ M1 < 75% (8–10 de 15)
- **Insatisfatória:** M1 < 50% (≤ 7 de 15)

**Resultado obtido:** **M1 = 66,67%**

**Classificação:** **Regular**

---

## 5. Análise e Resposta GQM

A M1 responde à questão Q1 de Adequação Funcional ao medir se os requisitos funcionais essenciais (F1–F15) estão presentes e acessíveis ao estudante em uso normal da aplicação.

O resultado de 66,67% ficou abaixo do limite mínimo de 90% definido na hipótese H1 da [Fase 2](../../fase2/01_obj_adequacao_funcional.md). Portanto, a hipótese de completude funcional **não foi confirmada** para este recorte de avaliação.

Em relação ao propósito da avaliação definido na [Fase 1](../../fase1/01_proposito_da_avaliacao.md), o resultado indica risco moderado para o uso do sistema como ferramenta principal de planejamento acadêmico. As funcionalidades ausentes — em especial o acompanhamento de horas complementares (F8), a estimativa de semestres restantes (F13) e a identificação de trancamentos (F14) — são informações relevantes para a tomada de decisão do estudante sobre sua trajetória curricular, e sua ausência pode levar a uma visão incompleta da integralização do curso.

---

## 6. Julgamento e Sugestões de Melhoria

A execução da métrica M1 indica que o **No Fluxo UnB** disponibiliza 10 dos 15 requisitos funcionais essenciais avaliados, com 2 requisitos parcialmente disponíveis (F6 e F10) e 3 ausentes (F8, F13 e F14).

O núcleo funcional da aplicação — upload de histórico, visualização do fluxograma, exibição de equivalências e pré-requisitos, cálculo de indicadores acadêmicos e assistente de IA — está operacional e acessível ao estudante. No entanto, as lacunas identificadas comprometem a completude da análise curricular, pois impedem que o estudante visualize informações importantes para o planejamento de semestres futuros e para a verificação do cumprimento de requisitos complementares.

Sugestões de melhoria:

- Implementar a contabilização e exibição de horas complementares cumpridas e pendentes (F8), diferenciando as categorias de atividades reconhecidas pelo curso.
- Adicionar o cálculo e a exibição da estimativa de semestres restantes para a integralização, com base nas disciplinas pendentes e na carga semestral média do estudante (F13).
- Implementar a identificação e sinalização de trancamentos e mudanças de curso presentes no histórico acadêmico, com exibição dos detalhes correspondentes no fluxograma (F14).
- Evoluir o indicador de reprovações (F6) para exibir o número de tentativas por disciplina, e não apenas o status de reprovação.
- Evoluir a exportação do fluxograma (F10) para gerar arquivo em formato PDF, em vez de screenshot.
- Reexecutar a M1 após as correções para verificar se o percentual de disponibilidade atinge o mínimo de 90% exigido pela hipótese H1.

---

## 7. Conclusão da Métrica M1

Os dados brutos foram obtidos conforme o método definido na Fase 3, processados pela fórmula da métrica e comparados com a régua de julgamento definida previamente. A classificação final da M1 é **Regular**, com recomendação de implementação prioritária dos requisitos ausentes F8, F13 e F14, por serem os de maior impacto sobre a completude do planejamento acadêmico, e de evolução dos requisitos parcialmente disponíveis F6 e F10 para atendimento integral aos critérios de aceitação definidos.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 08/06/2026 | Criação da estrutura da página de execução da métrica M1 na Fase 4 | [Paulo Cerqueira](https://github.com/paulocerqr) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
