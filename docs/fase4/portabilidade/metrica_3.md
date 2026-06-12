# Execução e Resultados da Avaliação (Portabilidade - M4)

## 1. Objetivo da Execução

Executar a métrica M3 definidas na [Fase 3](../../fase3/portabilidade/metrica_3.md), procurando defeitos que inviabilizam totalmente o uso das funcionalidades principais entre os ambientes.

A métrica em questão é usada para responder a questão Q3 de Portabilidade: **"Qual é o impacto e a gravidade dos defeitos de portabilidade ou incompatibilidade de ambiente encontrados durante a avaliação?"**.

## 2. Ambientes

Como tanto Chrome, Edge e firefox quanto Linux Ubuntu 24.04 LTS e Windows 11 (25H2) conseguiram desempenho semelhante, serão unificados como um caso base.

| ID | Categoria | Sistema Operacional | Navegador | Resolução |
|---|---|---|---|---|
| ENV-01 | Desktop | Caso Base | Caso Base | 1920 × 1080 |
| ENV-02 | Mobile | Android 16 | Google Chrome v148.0.7778.217 | 2712 × 1220 |
| ENV-03 | Mobile | iOS 15 (iPhone SE geração 1) | Safari Mobile v15 | 1136 × 640 |

---

## 3. Fluxos Críticos a Testar

| ID Fluxo | Nome do Fluxo | Descrição resumida |
|---|---|---|
| FL-01 | Home | Landpage com efeitos visuais, disposição de blocos em grid, navbar |
| FL-02 | Login | Login básico, Oauth do Google, criar conta, opção de visitante |
| FL-03 | Fluxograma | Pesquisar curso, navegar em curso, ver matéria, adicionar optativa |
| FL-04 | ImportarHistorico | Enviar histórico, dados do histórico, meu fluxograma, screenshot |
| FL-05 | ChatBot | sugestão de disciplinas |

---

## 5. Execução por Ambiente

---

### ENV-01 — Caso Base — Desktop

| ID Fluxo | Resultado | O usuário completa o fluxo?
|---|---|---|
| FL-01 | ✓ | Sim |
| FL-02 | ✓ | Sim |
| FL-03 | ✓ | Sim |
| FL-04 | ✓ | Sim |
| FL-05 | ✓ | Sim |

### ENV-02 — Chrome — Android 16 — Mobile

| ID Fluxo | Resultado | O usuário completa o fluxo? | Observação |
|---|---|---|---|
| FL-01 | ✓ | Sim | De acordo com o caso base |
| FL-02 | ✓ | Sim | De acordo com o caso base |
| FL-03 | ✓ | Com dificuldade | Botão de bug impede saída do modo tela cheia |
| FL-04 | ✓ | Sim | De acordo com o caso base |
| FL-05 | ✓ | Sim | De acordo com o caso base |

## ENV-03 — Safari Mobile — iOS 15 — Mobile

| ID Fluxo | Resultado | O usuário completa o fluxo? | Observação |
|---|---|---|---|
| FL-01 | ✓ | Sim | Distribuição de grid é viável |
| FL-02 | ✓ | Sim | Login está como esperado |
| FL-03 | ✗ | Não | Janela do fluxograma é minúscula e inviável de navegar |
| FL-04 | ✗ | Não | Bibliotecas não suportadas por versão do safari, envio é bloqueado |
| FL-05 | ✓ | Sim | Chamada de API e leitura de mensagens é viável |

## 6. Registro de Defeitos Encontrados

| ID | Ambiente | Ano  | Fluxo | Descrição                                                                                              | Severidade | Reprodutível | Print |
| --- | -------- | ---- | ----- | ------------------------------------------------------------------------------------------------------ | ---------- | ------------ | ----- |
| 01 | ENV-03   | 2016 | FL-03 | Janela de visão do fluxograma é minúscula e não funcional                                              | Crítico    | Sim          | Sim   |
| 02 | ENV-03   | 2016 | FL-04 | Promise.withResolvers não é disponível para o uso no ambiente, logo não é possível enviar o histórico. | Crítico    | Sim          | Sim   |

## 7. Consolidação Final

### Resultado por Ambiente

| ID Ambiente | Descrição | Quantidade de Defeitos |
|---|---|---|
| ENV-01 | Caso base | 0 |
| ENV-02 | Chrome — Android 16 — Mobile | 0 |
| ENV-03 | Safari Mobile — iOS 15 — Mobile | 2 |
| **Total** | | 2 |

## 8. Resultado da avaliação

| | |
|---|---|
| **Total M3** | 2|
| **H3 confirmada?** | Não ((M3 ≥ 1) == 2) |
| **Ambientes afetados** | ENV-03 |
| **Fluxos afetados** | FL-03, FL-04 |

---


## 9. Conclusão (Q3)
O software, de fato, possui falhas que podem impedir o funcionamento principal, porém tais falhas se limitam apenas ao ambiente 3, do ano de 2016, e naturalmente, não acompanhou a evolução exigida pelo software.

Ainda que o foco em plataformas atuais faça sentido, a adaptação razoável entre novas versões das bibliotecas com sistemas anteriores promoveria longevidade de uso e confiança a longo prazo.