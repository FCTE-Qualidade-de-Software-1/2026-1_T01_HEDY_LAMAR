# Execução e Resultados da Avaliação (Portabilidade - M1)

## 1. Introdução

Nesta fase, foram executados os procedimentos definidos no Plano de Avaliação para a Portabilidade, focando especificamente na métrica **M1 - Taxa de Conformidade de Layout Responsivo** do sistema **No Fluxo UnB**.

O foco da execução foi validar a capacidade da interface de se adaptar visualmente a diferentes sistemas operacionais, navegadores e resoluções críticas (Desktop e Mobile), sem apresentar quebras de layout, sobreposição de elementos ou perda de legibilidade e navegabilidade.

---

## 2. Ambiente de Execução

Os testes de portabilidade visual foram consolidados em uma matriz de ambientes controlados, avaliando quatro páginas-alvo:

- Tela de Login;
- Painel do Fluxograma;
- Interface de Upload;
- Janela do Chatbot.

As avaliações foram realizadas conforme as configurações apresentadas na Tabela 1.

### Tabela 1 – Matriz de Ambientes e Resultados Brutos da M1

| ID Ambiente | Categoria | Sistema Operacional Base | Navegador Alvo | Resolução de Referência | Resultado do Teste |
|------------|------------|--------------------------|----------------|-------------------------|-------------------|
| ENV-01 | Desktop | Windows 11 (25H2) | Google Chrome v148 | 1920 × 1080 | Sucesso |
| ENV-02 | Desktop | Windows 11 (25H2) | Microsoft Edge v148 | 1920 × 1080 | Sucesso |
| ENV-03 | Desktop | Linux Ubuntu 24.04 LTS | Mozilla Firefox v148.x | 1920 × 1080 | Sucesso |
| ENV-04 | Desktop | Linux Ubuntu 24.04 LTS | Google Chrome v148 | 1920 × 1080 | Sucesso |
| ENV-05 | Mobile | Android 16 | Google Chrome v148 | 2712 × 1220 | Falha |
| ENV-06 | Mobile | iOS 15 (iPhone SE 1ª Geração) | Safari Mobile v15 | 1136 × 640 | Falha |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

### 2.1 Dados Brutos e Evidências Consolidadas

Os dados de entrada e saída foram armazenados em um repositório no [Google Drive](https://drive.google.com/drive/folders/16Rx9M1ijRTBGD_JeQYjL-t-EpIURQula?usp=drive_link). Para cada ambiente avaliado foi gerado um vídeo de execução. Os ambientes que apresentaram falhas também possuem capturas de tela (prints) complementares, além dos respectivos vídeos de evidência.

---

## 3. Resultados por Métrica

### 3.1 M1 – Taxa de Conformidade de Layout Responsivo

**Objetivo:** Verificar se a interface do No Fluxo UnB se adapta visualmente às resoluções críticas sem apresentar quebras de layout, sobreposição de elementos ou perda de componentes essenciais.

#### Resultado Consolidado da Métrica

| Métrica | Ambientes Testados | Ambientes Corretos | Divergências/Falhas | Resultado | Classificação | Detalhamento |
|----------|-------------------|--------------------|---------------------|------------|----------------|--------------|
| M1 | 6 | 4 | 2 | 66,67% | Insuficiente | Layout Responsivo |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

#### Cálculo da Métrica

**Fórmula:**

> M1 = (Número de resoluções sem quebra / Número total de resoluções testadas) × 100

**Aplicação:**

> M1 = (4 / 6) × 100 = 66,67%

#### Julgamento da M1

**Classificação:** Insuficiente

O resultado obtido foi de **66,67%**, considerando que 4 dos 6 ambientes de referência exibiram as páginas-alvo com total integridade visual. Esse percentual não atingiu o limite mínimo de aceitação definido na régua de julgamento, que exige **M1 ≥ 80%** para uma classificação satisfatória.

As falhas concentraram-se exclusivamente nos ambientes Mobile (**ENV-05** e **ENV-06**).

No ambiente **ENV-05 (Android 16)** foi identificada uma sobreposição de ícones no painel do fluxograma em modo tela cheia, na qual o botão de reporte de bugs fica posicionado sobre o botão de saída do modo tela cheia.

Já no ambiente **ENV-06 (iOS 15 – iPhone SE 1ª Geração)** foi observada uma falha crítica no processo de upload do histórico, impossibilitando a utilização adequada dessa funcionalidade.

---

## 4. Conclusão Parcial da Portabilidade

A avaliação da subcaracterística de **Portabilidade** evidenciou que o sistema apresentou **100% de conformidade nos ambientes Desktop**, abrangendo Windows e Linux com os navegadores Chrome, Edge e Firefox.

Entretanto, a experiência Mobile apresentou limitações. Em Android, foi identificada uma falha de interface de baixo impacto, relacionada ao posicionamento de elementos na tela. Já em dispositivos iOS mais antigos, foi observada uma falha crítica que impede a realização do upload de arquivos.

Dessa forma, embora o sistema demonstre elevada estabilidade em ambientes Desktop, ainda necessita de ajustes para garantir uma experiência consistente em dispositivos móveis.

---

## 5. Análise GQM e Coerência com o Propósito

A métrica **M1** responde diretamente à questão central de Portabilidade:

> "A interface do sistema é capaz de manter sua integridade e usabilidade quando acessada a partir de diferentes dispositivos e navegadores utilizados pelos estudantes?"

### Tabela 2 – Resposta Consolidada às Questões de Portabilidade

| Métrica | Resultado | Relação com a Hipótese | Interpretação |
|----------|------------|------------------------|---------------|
| M1 | 66,67% | Não confirma a hipótese de conformidade mínima de 90%. | O sistema apresentou desempenho satisfatório na maior parte dos ambientes avaliados. Entretanto, como a amostra de ambientes é reduzida, uma única falha crítica e uma falha leve impactaram significativamente o resultado final da métrica. |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

Em relação ao propósito da avaliação de software definido na Fase 1, os resultados demonstram que o No Fluxo UnB atende adequadamente aos estudantes na maior parte dos cenários de uso avaliados, embora existam oportunidades de melhoria para ampliar sua compatibilidade em dispositivos móveis.

---

## 6. Julgamento Final e Sugestões de Melhoria

O julgamento consolidado da subcaracterística de **Portabilidade**, considerando exclusivamente a métrica **M1**, é **Insuficiente**.

Para solucionar os problemas identificados durante a avaliação, são recomendadas as seguintes melhorias técnicas:

### Refatoração do Painel do Fluxograma para Dispositivos Móveis

- Reposicionar o botão de reporte de bugs quando o fluxograma estiver em modo tela cheia;
- Ajustar o comportamento responsivo dos elementos de interface para evitar sobreposição de componentes;
- Realizar novos testes de usabilidade em diferentes resoluções móveis.

### Correção da Funcionalidade de Upload em iOS

- Investigar incompatibilidades do componente de upload com versões mais antigas do Safari Mobile;
- Validar o comportamento do envio de arquivos em diferentes versões do iOS;
- Implementar mecanismos de fallback para navegadores com suporte parcial às APIs utilizadas.

A implementação dessas melhorias poderá elevar significativamente a taxa de conformidade de layout responsivo e contribuir para uma melhor experiência dos usuários em dispositivos móveis.