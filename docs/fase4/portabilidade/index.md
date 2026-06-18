# Fase 4 - Execução e Resultados da Avaliação (Portabilidade)

## 1. Introdução

Nesta fase, foram executados os procedimentos definidos no Plano de Avaliação da Fase 3 para a característica **Portabilidade** do **No Fluxo UnB**.

O foco da execução foi validar, com base em evidências objetivas, a capacidade da aplicação de operar corretamente em diferentes sistemas operacionais, navegadores e resoluções de tela, medindo a conformidade visual do layout responsivo, a equivalência funcional entre ambientes, e o impacto dos defeitos de portabilidade encontrados.

---

## 2. Ambiente de Execução

Os testes das métricas executadas nesta etapa foram consolidados em ambiente controlado, com os seguintes parâmetros.

| Item                            | Detalhe                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Versão do software avaliado** | No Fluxo UnB - release `qualidade-de-software`                                                   |
| **URL da aplicação**            | [https://no-fluxo.crianex.com/](https://no-fluxo.crianex.com/)                                  |
| **Navegadores testados**        | Google Chrome v148, Microsoft Edge v148, Mozilla Firefox v148.x, Safari Mobile v15              |
| **Sistemas operacionais**       | Windows 11 (25H2), Linux Ubuntu 24.04 LTS, Android 16, iOS 15 (iPhone SE 1ª Geração)           |
| **Artefatos de apoio**          | Vídeos de execução por ambiente, capturas de tela dos defeitos encontrados, repositório Google Drive |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

### 2.1 Dados Brutos e Evidências Consolidadas

<a id="tabela-152"></a>
**Tabela 152: Evidências utilizadas na execução das métricas da Portabilidade.**

| Métrica | Dados brutos e evidências | Finalidade |
|---|---|---|
| M1 | Matriz de ambientes, vídeos de execução e capturas de tela dos defeitos | Verificar conformidade do layout responsivo em diferentes resoluções |
| M2 | Registro de coleta por ambiente e vídeos de execução | Medir equivalência funcional das funcionalidades essenciais por navegador |
| M3 | Registro de defeitos e vídeos de execução por fluxo/ambiente | Identificar defeitos que inviabilizam o uso das funcionalidades principais |
| M4 | Registro de defeitos e vídeos de execução por tela/ambiente | Verificar impacto e gravidade dos defeitos de portabilidade encontrados |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 3. Resultados por Métrica

### 3.1 M1 - Taxa de Conformidade de Layout Responsivo

**Objetivo:** Verificar se a interface do No Fluxo UnB se adapta visualmente às resoluções críticas sem apresentar quebras de layout, sobreposição de elementos ou perda de componentes essenciais.

**Resultado consolidado da métrica:**

| Métrica | Ambientes testados | Ambientes corretos | Divergências | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---:|---|---|
| M1 | 6 | 4 | 2 | 66,67% | Insuficiente | [M1 - Conformidade de Layout Responsivo](metrica_1.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
M1 = (4 / 6) × 100 = 66,67%
```

**Julgamento M1:** **Insuficiente**

O resultado obtido foi de 66,67%, considerando que 4 dos 6 ambientes exibiram as páginas-alvo com total integridade visual. Esse percentual não atingiu o limite mínimo de aceitação definido para a métrica, que exige M1 ≥ 80%.

As falhas concentraram-se exclusivamente nos ambientes Mobile: em ENV-05 (Android 16) foi identificada sobreposição de ícones no painel do fluxograma em modo tela cheia; em ENV-06 (iOS 15) foi observada falha crítica no processo de upload do histórico.

Para o detalhamento completo da execução, incluindo matriz de ambientes e evidências em vídeo, consulte: [M1 - Conformidade de Layout Responsivo](metrica_1.md).

---

### 3.2 M2 - Índice de Equivalência Funcional por Navegador

**Objetivo:** Verificar se as funcionalidades essenciais (Leitura de Histórico, Visualização do Fluxograma e Chatbot) operam com o mesmo comportamento em múltiplos navegadores e plataformas.

**Resultado consolidado da métrica:**

| Métrica | Ambientes avaliados | Ambientes com 100% de sucesso | Ambientes com falha | Resultado | Classificação | Detalhamento |
|---|---:|---:|---:|---|---|---|
| M2 | 6 | 5 | 1 | Satisfatório | Satisfatório | [M2 - Equivalência Funcional por Navegador](metrica_2.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

```text
ENV-01 a ENV-05: (3 / 3) × 100 = 100,00%
ENV-06:          (1 / 3) × 100 = 33,34%
```

**Julgamento M2:** **Satisfatório**

O sistema obteve 100% de sucesso em cinco dos seis ambientes avaliados, demonstrando elevada estabilidade em Desktop e Android. A única falha foi registrada em ENV-06 (Safari Mobile, iOS 15), onde o upload do histórico acadêmico não pôde ser realizado, impedindo a execução das demais funcionalidades dependentes dessa etapa.

Para o detalhamento completo da execução, incluindo registro de coleta e evidências em vídeo, consulte: [M2 - Equivalência Funcional por Navegador](metrica_2.md).

---

### 3.3 M3 - Defeitos que Inviabilizam Funcionalidades Principais

**Objetivo:** Identificar defeitos que impedem totalmente o uso das funcionalidades principais entre os ambientes avaliados.

**Resultado consolidado da métrica:**

| Métrica | Defeitos encontrados | Ambientes afetados | Fluxos afetados | H3 confirmada? | Detalhamento |
|---|---:|---|---|---|---|
| M3 | 2 | ENV-03 | FL-03, FL-04 | Não | [M3 - Defeitos que Inviabilizam Funcionalidades](metrica_3.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

**Julgamento M3:** Os dois defeitos críticos encontrados limitam-se ao ambiente ENV-03 (Safari Mobile, iOS 15): a janela do fluxograma é minúscula e não funcional (FL-03), e a API `Promise.withResolvers` não é suportada, bloqueando o envio do histórico (FL-04). Nos demais ambientes, todos os fluxos críticos foram concluídos com sucesso.

Para o detalhamento completo da execução, incluindo registro de defeitos e evidências, consulte: [M3 - Defeitos que Inviabilizam Funcionalidades](metrica_3.md).

---

### 3.4 M4 - Impacto e Gravidade dos Defeitos de Portabilidade

**Objetivo:** Verificar o impacto e a gravidade dos defeitos de portabilidade ou incompatibilidade de ambiente encontrados durante a avaliação.

**Resultado consolidado da métrica:**

| Métrica | Defeitos encontrados | Ambientes afetados | Telas afetadas | Avaliação | Detalhamento |
|---|---:|---|---|---|---|
| M4 | 4 | ENV-02, ENV-03 | T-04 | Satisfatório | [M4 - Impacto e Gravidade dos Defeitos](metrica_4.md) |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

**Julgamento M4:** **Satisfatório**

Foram encontrados 4 defeitos no total, todos concentrados na tela T-04 (Fluxograma) nos ambientes móveis. Em ENV-02 (Android 16) e ENV-03 (iOS 15) foram identificadas sobreposições de botões que prejudicam a navegação, com severidade alta. O resultado ficou dentro do limite satisfatório definido (total ≤ 5).

Para o detalhamento completo da execução, incluindo registro de defeitos por tela e ambiente, consulte: [M4 - Impacto e Gravidade dos Defeitos](metrica_4.md).

---

## 4. Conclusão Parcial da Portabilidade

Com base nas métricas executadas nesta etapa, o **No Fluxo UnB** apresentou resultados distintos para os aspectos avaliados de Portabilidade.

A M1 indicou falhas de layout responsivo nos ambientes móveis, com conformidade abaixo do mínimo exigido de 80%. A M2 classificou a equivalência funcional como satisfatória, com falha restrita ao ecossistema iOS/Safari antigo. A M3 identificou dois defeitos críticos que inviabilizam o uso do fluxograma e o envio do histórico exclusivamente no ENV-03 (iOS 15). A M4 registrou 4 defeitos de portabilidade, todos na tela do Fluxograma em dispositivos móveis, com avaliação satisfatória dentro do limite definido.

Em síntese, o sistema demonstra alta estabilidade nos ambientes Desktop e Android, mas apresenta limitações relevantes em dispositivos iOS mais antigos.

---

## 5. Análise GQM e Coerência com o Propósito

As métricas M1, M2, M3 e M4 respondem à questão central de Portabilidade: **"A interface do sistema é capaz de manter sua integridade e usabilidade quando acessada a partir de diferentes dispositivos e navegadores utilizados pelos estudantes?"**

<a id="tabela-153"></a>
**Tabela 153: Resposta consolidada às questões da Portabilidade.**

| Métrica | Resultado | Relação com a Hipótese | Interpretação |
|---|---|---|---|
| M1 | 66,67% | Não confirma a hipótese de conformidade mínima de 90% | Falhas de layout concentradas nos ambientes móveis, especialmente no painel do fluxograma |
| M2 | Satisfatório (5/6 ambientes com 100%) | Não confirma a hipótese de excelência, que exigia funcionamento integral em todos os ambientes | Alta equivalência funcional na maioria das plataformas, com exclusão de usuários iOS antigos |
| M3 | 2 defeitos críticos | Não confirma H3 (M3 ≥ 1 == 2) | Defeitos críticos restringem o uso funcional do sistema no ecossistema iOS 15 |
| M4 | 4 defeitos, avaliação satisfatória | Não confirma H3 (M4 ≥ 1 == 4) | Defeitos de portabilidade concentrados na tela do fluxograma em dispositivos móveis |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

Em relação ao propósito da avaliação definido na Fase 1, os resultados mostram que o sistema atende adequadamente à maioria dos estudantes em ambientes Desktop e Android, mas ainda requer correções para garantir compatibilidade em dispositivos iOS mais antigos e melhorar a responsividade do painel do fluxograma em telas móveis.

---

## 6. Julgamento Final e Sugestões de Melhoria

O julgamento consolidado da Portabilidade para as métricas executadas é **parcialmente satisfatório**: a M2 e a M4 atingiram nível satisfatório, mas a M1 ficou abaixo do limite mínimo de aceitação e a M3 identificou defeitos críticos que inviabilizam funcionalidades essenciais no ambiente iOS 15.

Sugestões de melhoria:

- Reposicionar o botão de reporte de bugs no painel do fluxograma para evitar sobreposição com o botão de saída do modo tela cheia em dispositivos móveis.
- Investigar a incompatibilidade do componente de upload com versões mais antigas do Safari Mobile e implementar mecanismos de fallback para APIs não suportadas, como `Promise.withResolvers`.
- Avaliar a viabilidade de manter suporte a dispositivos iOS legados, considerando o impacto sobre a base de usuários.
- Implementar uma versão responsiva dedicada do painel do fluxograma para layouts mobile, em vez de depender apenas da adaptação genérica da versão web.
- Criar uma bateria de testes de regressão de portabilidade cobrindo os fluxos FL-03 e FL-04 nos ambientes móveis após as correções.
- Reexecutar M1 e M3 após os ajustes e comparar os novos resultados com os limites definidos no plano de avaliação.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor |
| ------ | ---- | --------- | ----- |
| `1.0` | 12/06/2026 | Criação da página de execução da Fase 4 para Portabilidade, consolidando as métricas M1, M2, M3 e M4. | Grupo Hedy Lamarr |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*