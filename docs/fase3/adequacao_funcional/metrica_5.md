# M5 - Taxa de Sucesso em Cenários de Planejamento Acadêmico

## 1. Objetivo

Verificar se as funcionalidades do **No Fluxo UnB** permitem ao estudante concluir, sem impedimentos funcionais, os principais cenários de planejamento acadêmico disponíveis na plataforma.

Esta métrica responde à questão Q3 de Adequação Funcional: **"Em que grau as funcionalidades do sistema são apropriadas para executar tarefas reais de planejamento acadêmico?"**

---

## 2. Definição da Métrica

**Tabela 1: Definição operacional da M5.**

| Campo                  | Definição                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------- |
| **Métrica**            | Taxa de sucesso em cenários de planejamento acadêmico                                              |
| **Tipo**               | Quantitativa                                                                                       |
| **Entrada**            | Roteiros de teste elaborados para cada cenário de planejamento acadêmico                           |
| **Saída**              | Percentual de cenários concluídos sem impedimento funcional                                        |
| **Unidade**            | Percentual                                                                                         |
| **Fonte de evidência** | Roteiros de teste, evidências de execução (capturas de tela ou gravações) e registros de sucesso e falha |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Cenários Avaliados

Os cenários foram definidos com base nas funcionalidades centrais do No Fluxo UnB identificadas na Fase 1 e nos requisitos funcionais essenciais listados na Fase 2. Cada cenário representa uma tarefa real que um estudante da UnB poderia executar na plataforma.

**Tabela 2: Cenários de planejamento acadêmico avaliados na M5.**

| Código | Cenário                                                                                   | Funcionalidade associada                        |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------- |
| C1     | Upload de histórico em PDF e visualização do fluxograma com disciplinas destacadas        | F1, F2, F4 — Leitura do histórico e fluxograma  |
| C2     | Consulta de pré-requisitos e equivalências de uma disciplina                              | F5 — Exibição de equivalências e dependências   |
| C3     | Verificação de progresso acadêmico (IRA, carga horária, semestres restantes)              | F7, F13 — Cálculos e indicadores acadêmicos     |
| C4     | Simulação de troca de curso com aproveitamento de disciplinas                             | F11 — Simulação de mudança de curso             |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Preparação

Antes da execução, o avaliador deve preparar:

1. Roteiro de teste detalhado para cada cenário (C1–C4), com os passos a seguir e o critério de conclusão esperado.
2. Histórico acadêmico em PDF de referência para os cenários que exigem upload.
3. Usuário de teste autenticado ou credenciais de acesso à plataforma.
4. Pasta para armazenamento das evidências de execução.
5. Planilha de registro de execução com a estrutura mínima abaixo.

A planilha deve conter, no mínimo:

| ID | Cenário | Resultado (Sucesso / Falha) | Descrição do impedimento (se falha) | Evidência |
| -- | ------- | --------------------------- | ----------------------------------- | --------- |
|    |         |                             |                                     |           |

---

## 5. Passo a Passo da Execução

1. Selecionar o roteiro de teste correspondente ao cenário a ser executado.
2. Acessar o No Fluxo UnB em `https://no-fluxo.crianex.com/` com o usuário de teste previamente configurado.
3. Executar o cenário seguindo exatamente as etapas descritas no roteiro.
4. Durante a execução, observar e registrar:
   - Falhas que impeçam a conclusão do fluxo (erros de sistema, ausência de funcionalidade, travamento de interface);
   - Comportamentos inesperados que desviem o usuário do objetivo principal do cenário.
5. Ao término de cada cenário, classificar o resultado como:
   - **Sucesso**: o cenário foi concluído integralmente, sem nenhum impedimento funcional;
   - **Falha**: o cenário não pôde ser concluído por impedimento funcional identificado.
6. Capturar evidências (capturas de tela ou gravação de tela) para cada cenário executado, salvas com o padrão:
   `M5_C[ID]_[RESULTADO]_[DATA].png`
7. Repetir o procedimento para todos os cenários da Tabela 2.
8. Consolidar os resultados na planilha de registro de execução.

> **Nota:** Um "impedimento funcional" é qualquer falha que impeça o usuário de atingir o objetivo do cenário. Lentidão de carregamento ou problemas visuais menores que não interrompam o fluxo principal **não** configuram impedimento funcional para fins desta métrica.

---

### 5.1 Roteiro de teste cenário 1

**Tabela 3: Passos de execução do roteiro C1.**

| Passo | Ação do avaliador                                                                                                  | Resultado esperado                                                                                        |
| ----- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 1     | Abrir o navegador e acessar `https://no-fluxo.crianex.com/`.                                                       | A página inicial da plataforma é carregada sem erros.                                                     |
| 2     | Realizar login com as credenciais do usuário de teste.                                                             | O sistema autentica o usuário e redireciona para a área logada.                                           |
| 3     | Localizar o botão ou área de upload de histórico acadêmico na interface.                                           | O componente de upload está visível e acessível.                                                          |
| 4     | Selecionar o arquivo `historico_referencia.pdf` e confirmar o upload.                                              | O sistema aceita o arquivo e exibe indicador de processamento (carregando, progresso ou mensagem similar). |
| 5     | Aguardar a conclusão do processamento do histórico.                                                                | O sistema conclui o processamento sem exibir mensagem de erro.                                            |
| 6     | Verificar se o fluxograma do curso é exibido na interface após o processamento.                                    | O fluxograma é exibido com as disciplinas organizadas por semestre.                                       |
| 7     | Verificar se as disciplinas aprovadas no histórico estão visualmente destacadas no fluxograma (cor, ícone ou rótulo diferenciado). | Disciplinas aprovadas são distinguíveis das demais visualmente.                                  |
| 8     | Verificar se as disciplinas reprovadas ou com situação de falha estão indicadas de forma diferente das aprovadas.  | Disciplinas reprovadas possuem indicação visual distinta das aprovadas.                                   |
| 9     | Verificar se as disciplinas ainda não cursadas (pendentes) aparecem no fluxograma sem qualquer destaque de cursado. | Disciplinas pendentes são exibidas no fluxograma sem marcação de concluídas.                             |
| 10    | Capturar uma imagem da tela completa do fluxograma exibido.                                                        | Evidência salva em `/evidencias/M5/C1/` com nome `M5_C1_SUCESSO_[DATA].png` ou `M5_C1_FALHA_[DATA].png`. |


**Critério de Conclusão do Cenário**

O cenário C1 é considerado **concluído com sucesso** quando:

- O upload do arquivo PDF é aceito pelo sistema sem erro;
- O processamento do histórico é concluído sem mensagem de falha;
- O fluxograma do curso é exibido na interface;
- As disciplinas aprovadas estão visualmente diferenciadas das demais;
- Nenhum dos passos 1 a 9 é interrompido por impedimento funcional.

O cenário C1 é considerado **falha** quando qualquer um dos seguintes eventos ocorrer:

- O sistema recusa o arquivo PDF ou exibe erro durante o upload;
- O processamento trava ou expira sem apresentar o fluxograma;
- O fluxograma não é exibido após o processamento;
- As disciplinas não possuem qualquer diferenciação visual por situação acadêmica.


### 5.2 Roteiro de teste cenário 2

**Tabela 4: Passos de execução do roteiro C2.**

| Passo | Ação do avaliador                                                                                                              | Resultado esperado                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 1     | Verificar que o fluxograma do curso está visível com o histórico carregado.                                                    | Fluxograma exibido corretamente.                                                                                    |
| 2     | Localizar a disciplina-alvo primária no fluxograma (uma disciplina pendente com pré-requisitos conhecidos).                    | Disciplina identificada e visível no fluxograma.                                                                    |
| 3     | Interagir com a disciplina-alvo primária para acessar seus detalhes (clique, hover ou botão de detalhes).                      | A interface apresenta informações detalhadas sobre a disciplina (painel, modal ou tooltip).                         |
| 4     | Verificar se os pré-requisitos da disciplina-alvo primária são exibidos.                                                       | Os pré-requisitos listados correspondem aos da matriz curricular de referência.                                     |
| 5     | Verificar se as equivalências da disciplina-alvo primária são exibidas.                                                        | As equivalências listadas correspondem às da matriz curricular de referência.                                       |
| 6     | Fechar o painel de detalhes e localizar a disciplina-alvo secundária (uma disciplina aprovada no histórico).                   | Disciplina aprovada identificada e visível no fluxograma.                                                           |
| 7     | Interagir com a disciplina-alvo secundária para acessar seus detalhes.                                                         | A interface apresenta informações detalhadas sobre a disciplina aprovada.                                           |
| 8     | Verificar se as equivalências da disciplina aprovada são exibidas e coerentes com a base de referência.                        | Equivalências exibidas estão alinhadas à matriz curricular.                                                         |
| 9     | Capturar uma imagem da tela com o painel de detalhes de cada disciplina aberto.                                                | Evidências salvas em `/evidencias/M5/C3/` com nomes `M5_C3_DISC1_[RESULTADO]_[DATA].png` e `M5_C3_DISC2_[RESULTADO]_[DATA].png`. |


**Critério de Conclusão do Cenário**

O cenário C2 é considerado **concluído com sucesso** quando:

- A interface apresenta detalhes acessíveis para ao menos duas disciplinas diferentes;
- Os pré-requisitos da disciplina-alvo primária são exibidos;
- As equivalências de ao menos uma disciplina são exibidas;
- Nenhum dos passos 1 a 8 é interrompido por impedimento funcional.

O cenário C2 é considerado **falha** quando qualquer um dos seguintes eventos ocorrer:

- Não há mecanismo identificável para acessar detalhes de uma disciplina no fluxograma;
- A interface exibe um erro ao tentar acessar os detalhes de uma disciplina;
- Os detalhes são exibidos, mas os campos de pré-requisitos e equivalências estão ausentes ou em branco sem justificativa.



### 5.3 Roteiro de teste cenário 3

**Tabela 5: Passos de execução do roteiro C3.**

| Passo | Ação do avaliador                                                                                                               | Resultado esperado                                                                                              |
| ----- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1     | Verificar que o fluxograma ou painel principal está visível com o histórico carregado.                                          | Interface carregada sem erros.                                                                                  |
| 2     | Localizar a área ou painel de indicadores de progresso acadêmico na interface (resumo acadêmico, dashboard ou painel lateral).  | A área de indicadores é identificada e está acessível.                                                          |
| 3     | Verificar se o IRA (Índice de Rendimento Acadêmico) está exibido na interface.                                                  | O IRA é exibido como valor numérico ou equivalente.                                                             |
| 4     | Verificar se a carga horária integralizada (concluída) está exibida.                                                            | A carga horária concluída é exibida como valor numérico (horas ou créditos).                                    |
| 5     | Verificar se a carga horária pendente (restante para conclusão) está exibida.                                                   | A carga horária pendente é exibida como valor numérico.                                                         |
| 6     | Verificar se o percentual de progresso do curso está exibido.                                                                   | O progresso é exibido como percentual ou barra de progresso.                                                    |
| 7     | Verificar se o número de semestres cursados ou a estimativa de semestres restantes está exibido.                                | A informação de semestres está exibida de alguma forma (número, estimativa ou gráfico de trajetória).            |
| 8     | Anotar os valores exibidos pela plataforma para cada indicador na planilha de resultado.                                        | Valores registrados para posterior conferência com os valores esperados (avaliação da M4).                      |
| 9     | Capturar uma imagem da tela com o painel de indicadores visível.                                                                | Evidência salva em `/evidencias/M5/C4/` com nome `M5_C4_SUCESSO_[DATA].png` ou `M5_C4_FALHA_[DATA].png`.      |

---

**Critério de Conclusão do Cenário**

O cenário C3 é considerado **concluído com sucesso** quando:

- Ao menos três dos cinco indicadores listados (IRA, carga horária integralizada, carga horária pendente, progresso percentual, semestres) são exibidos na interface;
- Os valores são exibidos como dados numéricos ou visuais interpretáveis;
- Nenhum dos passos 1 a 8 é interrompido por impedimento funcional.

O cenário C3 é considerado **falha** quando qualquer um dos seguintes eventos ocorrer:

- Não há seção ou painel de indicadores acessível na interface;
- A interface exibe erro ao tentar acessar os indicadores;
- Menos de três dos cinco indicadores listados estão presentes na interface.


### 5.4 Roteiro de teste cenário 4

**Tabela 6: Passos de execução do roteiro C4.**

| Passo | Ação do avaliador                                                                                                                   | Resultado esperado                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1     | Verificar que o fluxograma do curso de origem está visível com o histórico carregado.                                               | Interface carregada sem erros, fluxograma do curso atual exibido.                                                |
| 2     | Localizar o mecanismo de simulação de troca de curso na interface (botão, menu ou opção específica).                                | O mecanismo de troca de curso é identificado e acessível.                                                        |
| 3     | Acionar o mecanismo de simulação de troca de curso.                                                                                 | A interface apresenta opção para selecionar o curso de destino (lista, campo de busca ou seletor).               |
| 4     | Selecionar o curso de destino definido para o teste.                                                                                | O sistema aceita a seleção do curso de destino.                                                                  |
| 5     | Confirmar ou acionar a simulação de troca de curso.                                                                                 | O sistema processa a simulação e exibe resultado relacionado ao aproveitamento das disciplinas.                   |
| 6     | Verificar se o sistema exibe quais disciplinas do curso de origem seriam aproveitadas no curso de destino.                          | Uma lista, tabela ou visualização de disciplinas aproveitáveis é exibida.                                        |
| 7     | Verificar se o sistema exibe o fluxograma do curso de destino com as disciplinas aproveitadas destacadas (ou informação equivalente). | O fluxograma do curso de destino é exibido com indicação das disciplinas aproveitadas.                           |
| 8     | Anotar as disciplinas listadas como aproveitáveis pelo sistema para conferência posterior com a base de referência.                  | Dados registrados para validação de correção (responsabilidade da M3).                                           |
| 9     | Capturar imagens das telas que mostram o resultado da simulação de troca de curso.                                                  | Evidências salvas em `/evidencias/M5/C5/` com nome `M5_C5_SUCESSO_[DATA].png` ou `M5_C5_FALHA_[DATA].png`.     |


**Critério de Conclusão do Cenário**

O cenário C4 é considerado **concluído com sucesso** quando:

- O mecanismo de simulação de troca de curso é acessível na interface;
- É possível selecionar um curso de destino;
- O sistema exibe algum resultado sobre o aproveitamento de disciplinas após a simulação;
- Nenhum dos passos 1 a 8 é interrompido por impedimento funcional.

O cenário C4 é considerado **falha** quando qualquer um dos seguintes eventos ocorrer:

- Não há mecanismo identificável de simulação de troca de curso na interface;
- O sistema exibe erro ao tentar selecionar o curso de destino ou ao processar a simulação;
- A simulação é processada, mas nenhum resultado sobre aproveitamento é exibido.



---

## 6. Fórmula de Cálculo

```
M5 = (Nº de cenários concluídos sem impedimento funcional
      ÷ Nº total de cenários executados) × 100
```

---

## 7. Critério de Julgamento

**Tabela 7: Régua de julgamento da M5.**

| Classificação  | Critério         |
| -------------- | ---------------- |
| Excelente      | M5 >= 95%        |
| Satisfatório   | 90% <= M5 < 95%  |
| Insuficiente   | M5 < 90%         |

O limiar mínimo satisfatório de 90% é derivado diretamente da hipótese H3 estabelecida na Fase 2: *"Os cenários principais de planejamento podem ser concluídos com sucesso em pelo menos 90% das execuções avaliadas."*

---

## 8. Classificação de Impedimentos

**Tabela 8: Severidade dos impedimentos funcionais da M5.**

| Severidade | Critério                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Crítica    | O impedimento impede completamente a conclusão do cenário e pode induzir o estudante a uma decisão acadêmica incorreta |
| Alta       | O impedimento bloqueia uma funcionalidade central do cenário, exigindo abandono do fluxo                              |
| Média      | O impedimento dificulta a execução, mas o cenário pode ser concluído por caminho alternativo                          |
| Baixa      | O impedimento gera inconveniência pontual sem impedir a conclusão do objetivo principal                               |

---

## 9. Saída Esperada

Ao final da execução, devem estar disponíveis:

- Planilha preenchida com todos os cenários executados e seus resultados.
- Percentual final da M5.
- Lista de cenários que resultaram em falha, com descrição do impedimento e severidade.
- Evidências visuais associadas a cada execução.
- Classificação final da métrica conforme a régua da Tabela 3.

---

## Histórico de Versões

**Tabela 9: Histórico de versões.**

| Versão | Data       | Descrição                                                           | Autor |
| ------ | ---------- | ------------------------------------------------------------------- | ----- |
| `1.0`  | 08/06/2026 | Criação do plano de avaliação da métrica M5 de Adequação Funcional. |       |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
