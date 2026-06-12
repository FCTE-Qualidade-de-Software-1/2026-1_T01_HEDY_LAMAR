# Plano de Execução — M3 e M4

## 1. Objetivo da Execução

Executar a métrica M3 e M4 definidas na [Fase 3](../../fase3/portabilidade/metrica_3_4.md), procurando defeitos no fluxos entre diferentes ambientes em que ocorrem as funcionalidades principais e separando eles entre funcionais críticos(M3) e inconsistenências visuais e de navegação(M4). 

As métricas em questão respondem à questão Q3 de Portabilidade: **"Qual é o impacto e a gravidade dos defeitos de portabilidade ou incompatibilidade de ambiente encontrados durante a avaliação?"**

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

## 4. Telas a Avaliar (M4)

| ID Tela | Nome da Tela |
|---|---|
| T-01 | Home |
| T-02 | Login |
| T-03 | Criar Conta |
| T-04 | Fluxograma |
| T-05 | Importar Histórico |
| T-06 | Dados do meu Fluxograma |
| T-07 | Chatbot |
| T-08 | Disciplinas |
| T-09 | Adicionar Optativa |

---

## 5. Execução por Ambiente

---

### ENV-01 — Caso Base — Desktop

#### Fluxos Críticos (M3)

| ID Fluxo | Resultado | O usuário completa o fluxo?
|---|---|---|
| FL-01 | ✓ | Sim |
| FL-02 | ✓ | Sim |
| FL-03 | ✓ | Sim |
| FL-04 | ✓ | Sim |
| FL-05 | ✓ | Sim |

#### Checklist Visual por Tela (M4)

| Tela | Textos legíveis? | Botões no grid? | Imagens ok? | Sem scroll horiz. indesejado? | Sem sobreposição? | Layout responsivo? |
|---|---|---|---|---|---|---|
| T-01 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-02 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-03 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-04 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-05 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-06 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-07 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-08 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-09 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

### ENV-02 — Chrome — Android 16 — Mobile

#### Fluxos Críticos (M3)

| ID Fluxo | Resultado | O usuário completa o fluxo? | Observação |
|---|---|---|---|
| FL-01 | ✓ | Sim | De acordo com o caso base |
| FL-02 | ✓ | Sim | De acordo com o caso base |
| FL-03 | ✓ | Com dificuldade | Botão de bug impede saída do modo tela cheia |
| FL-04 | ✓ | Sim | De acordo com o caso base |
| FL-05 | ✓ | Sim | De acordo com o caso base |

#### Checklist Visual por Tela (M4)

| Tela | Textos legíveis? | Botões no grid? | Imagens ok? | Sem scroll horiz. indesejado? | Sem sobreposição? | Layout responsivo? |
|---|---|---|---|---|---|---|
| T-01 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-02 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-03 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-04 | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| T-05 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-06 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-07 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-08 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-09 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

### ENV-03 — Safari Mobile — iOS 15 — Mobile

#### Fluxos Críticos (M3)

| ID Fluxo | Resultado | O usuário completa o fluxo? | Observação |
|---|---|---|---|
| FL-01 | ✓ | Sim | Distribuição de grid é viável |
| FL-02 | ✓ | Sim | Login está como esperado |
| FL-03 | ✗ | Não | Janela do fluxograma é minúscula e inviável de navegar |
| FL-04 | ✗ | Não | Bibliotecas não suportadas por versão do safari, envio é bloqueado |
| FL-05 | ✓ | Sim | Chamada de API e leitura de mensagens é viável |

#### Checklist Visual por Tela (M4)

| Tela | Textos legíveis? | Botões no grid? | Imagens ok? | Sem scroll horiz. indesejado? | Sem sobreposição? | Layout responsivo? |
|---|---|---|---|---|---|---|
| T-01 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-02 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-03 | ✓ | ✓ | N/A | ✓ | ✓ | ✓ |
| T-04 | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| T-05 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-06 | N/A | N/A | N/A | N/A | N/A | N/A |
| T-07 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-08 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| T-09 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 6. Registro de Defeitos Encontrados

| ID  | Métrica | Ambiente | Ano  | Fluxo | Tela | Descrição                                                                                              | Severidade | Reprodutível | Print |
| --- | ------- | -------- | ---- | ----- | ---- | ------------------------------------------------------------------------------------------------------ | ---------- | ------------ | ----- |
| 01  | M3      | ENV-03   | 2016 | FL-03 | T-04 | Janela de visão do fluxograma é minúscula e não funcional                                              | Crítico    | Sim          | Sim   |
| 02  | M3      | ENV-03   | 2016 | FL-04 | T-05 | Promise.withResolvers não é disponível para o uso no ambiente, logo não é possível enviar o histórico. | Crítico    | Sim          | Sim   |
| 03  | M4      | ENV-03   | 2016 | FL-03 | T-04 | Botão de Feedback sobrepõe botão de modo Tela Cheia, dificultando retorno ao fluxograma, e botões inferiores estão ocultos na barra de navegação do celular.               | Alto       | Sim          | Sim   |
| --  | --      | ENV-02   | 2022 | --    | --   | --                                                                                                     | Alto       | Sim          | Sim   |

**Severidade:** Crítico / Alto / Médio / Baixo  
**Reprodutível:** Sim / Não  
**Print:** Sim / Não

---

## 7. Consolidação Final

### Resultado M3 por Ambiente

| ID Ambiente | Descrição | Defeitos M3 |
|---|---|---|
| ENV-01 | Caso base | 0 |
| ENV-02 | Chrome — Android 16 — Mobile | 0 |
| ENV-03 | Safari Mobile — iOS 15 — Mobile | 2 |
| **Total** | | 2 |

### Resultado M4 por Tela e Ambiente

| Tela | ENV-01 | ENV-02 | ENV-03 | Total |
|---|---|---|---|---|
| T-01 | 0 | 0 | 0 | 0 |
| T-02 | 0 | 0 | 0 | 0 |
| T-03 | 0 | 0 | 0 | 0 |
| T-04 | 0 | 2 | 2 | 4 |
| T-05 | 0 | 0 | 0 | 0 |
| **Total** | 0 | 2 | 2 | 4 |

---

## 8. Verificação de H3

| | |
|---|---|
| **Total M3** | |
| **H3 confirmada?** | Não ((M3 ≥ 1) == 2) |
| **Ambientes afetados** | ENV-03 |
| **Fluxos afetados** | FL-03, FL-04 |

---

## 9. Conclusão (Q3)
O software, de fato, possui falhas que podem impedir o funcionamento principal, porém tais falhas se limitam apenas ao ambiente 3, do ano de 2016, e naturalmente, não acompanhou a evolução exigida pelo software.

Enquanto o sucesso do ambiente se dá pela escolha natural por plataformas atuais, é visível a necessidade de um cuidado em relação a adaptação para ambientes móveis que, em boa parte, lida muito bem com o layout dos elementos, apesar de falhas que mostram que o software foi pensado genericamente para a web.

O app seria beneficiado ao considerar uma implementação própria aos layouts mobile, trazendo uma opção coerênte ao público já estabelecido.

Ainda que o foco em plataformas atuais faça sentido, a adaptação razoável entre novas versões das bibliotecas com sistemas anteriores promoveria longevidade de uso e confiança a longo prazo.

## 10. Histórico de Versões