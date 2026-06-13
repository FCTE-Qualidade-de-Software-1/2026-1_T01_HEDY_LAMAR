# Execução e Resultados da Avaliação (Portabilidade - M4)

## 1. Objetivo da Execução

Executar a métrica M4 definidas na [Fase 3](../../fase3/portabilidade/metrica_4.md), procurando inconsistências visuais e de navegação. 

A métricas em questão é usada para responder a questão Q3 de Portabilidade: **"Qual é o impacto e a gravidade dos defeitos de portabilidade ou incompatibilidade de ambiente encontrados durante a avaliação?"**

## 2. Ambientes

Como tanto Chrome, Edge e firefox quanto Linux Ubuntu 24.04 LTS e Windows 11 (25H2) conseguiram desempenho semelhante, serão unificados como um caso base.

| ID | Categoria | Sistema Operacional | Navegador | Resolução |
|---|---|---|---|---|
| ENV-01 | Desktop | Caso Base | Caso Base | 1920 × 1080 |
| ENV-02 | Mobile | Android 16 | Google Chrome v148.0.7778.217 | 2712 × 1220 |
| ENV-03 | Mobile | iOS 15 (iPhone SE geração 1) | Safari Mobile v15 | 1136 × 640 |

---

### 2.1 Dados Brutos e Evidências Consolidadas

Os dados de entrada e saída foram armazenados em um repositório no [Google Drive](https://drive.google.com/drive/folders/16Rx9M1ijRTBGD_JeQYjL-t-EpIURQula?usp=drive_link). Para cada ambiente avaliado foi gerado um vídeo de execução. Os ambientes que apresentaram falhas também possuem capturas de tela (prints) complementares, além dos respectivos vídeos de evidência.

## 3. Telas a Avaliar (M4)

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

## 4. Execução por Ambiente

---

### ENV-01 — Caso Base — Desktop

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

## 5. Registro de Defeitos Encontrados

| ID | Ambiente | Ano | Tela | Descrição                                                                                              | Severidade | Reprodutível | Print |
| --- | -------- | ---- | ----- |------------------------------------------------------------------------------------------------------ | ---------- | ------------ | ----- |
| 03 | ENV-03   | 2016 | T-04 | Botão de Feedback sobrepõe botão de modo Tela Cheia e botões inferiores ocultos.               | Alto       | Sim          | Sim   |
| 04 | ENV-02   | 2022 | T-04 | --                                                                                                     | Alto       | Sim          | Sim   |

## 6. Consolidação Final

### Resultado M4 por Tela e Ambiente

| Tela | ENV-01 | ENV-02 | ENV-03 | Total |
|---|---|---|---|---|
| T-01 | 0 | 0 | 0 | 0 |
| T-02 | 0 | 0 | 0 | 0 |
| T-03 | 0 | 0 | 0 | 0 |
| T-04 | 0 | 2 | 2 | 4 |
| T-05 | 0 | 0 | 0 | 0 |
| **Total** | 0 | 2 | 2 | 4 |

## 7. Resultado da avaliação

| | |
|---|---|
| **Total M4** | 4 |
| **H3 confirmada?** | Não ((M4 ≥ 1) == 4) |
| **Avaliação** | Satisfatório (3 ≤ total ≤ 5) |
| **Ambientes afetados** | ENV-02, ENV-03,|
| **Telas afetadas** | T-04 |


## 8. Conclusão (Q3)

É visível a necessidade de um cuidado em relação à adaptação para ambientes móveis que, em boa parte, lida muito bem com o layout dos elementos, apesar de falhas que mostram que o software foi pensado genericamente para a web.

O app seria beneficiado ao considerar uma implementação própria aos layouts mobile, trazendo uma opção coerente ao público já estabelecido.

---

## Histórico de Versões

**Tabela: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 11/06/2026 | Execução da M4 de Portabilidade. | Vinícius |