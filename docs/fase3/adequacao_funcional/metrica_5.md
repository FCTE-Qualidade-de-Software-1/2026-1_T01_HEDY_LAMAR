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

1. Roteiro de teste detalhado para cada cenário (C1–C6), com os passos a seguir e o critério de conclusão esperado.
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




### 5.2 Roteiro de teste cenário 2



### 5.3 Roteiro de teste cenário 3




### 5.4 Roteiro de teste cenário 4




---

## 6. Fórmula de Cálculo

```
M5 = (Nº de cenários concluídos sem impedimento funcional
      ÷ Nº total de cenários executados) × 100
```

---

## 7. Critério de Julgamento

**Tabela 3: Régua de julgamento da M5.**

| Classificação  | Critério         |
| -------------- | ---------------- |
| Excelente      | M5 >= 95%        |
| Satisfatório   | 90% <= M5 < 95%  |
| Insuficiente   | M5 < 90%         |

O limiar mínimo satisfatório de 90% é derivado diretamente da hipótese H3 estabelecida na Fase 2: *"Os cenários principais de planejamento podem ser concluídos com sucesso em pelo menos 90% das execuções avaliadas."*

---

## 8. Classificação de Impedimentos

**Tabela 4: Severidade dos impedimentos funcionais da M5.**

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

**Tabela 5: Histórico de versões.**

| Versão | Data       | Descrição                                                           | Autor |
| ------ | ---------- | ------------------------------------------------------------------- | ----- |
| `1.0`  | 08/06/2026 | Criação do plano de avaliação da métrica M5 de Adequação Funcional. |       |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*
