# Execução e Resultados da Avaliação (Portabilidade - M2)

## 1. Introdução

Nesta fase, foram consolidados os resultados da execução dos testes relativos à métrica **M2 – Índice de Equivalência Funcional por Navegador**, pertencente à subcaracterística de **Portabilidade** do sistema **No Fluxo UnB**.

O objetivo principal foi garantir que as três funcionalidades essenciais da aplicação — **Leitura de Histórico**, **Visualização do Fluxograma** e **Chatbot** — operassem sem perda de comportamento funcional nos navegadores e sistemas operacionais definidos para a avaliação.

---

## 2. Ambiente de Execução e Registro de Coleta

Os testes foram executados seguindo rigorosamente os três casos de teste padronizados no Plano de Avaliação:

* **CT-01:** Leitura de Histórico;
* **CT-02:** Visualização do Fluxograma;
* **CT-03:** Utilização do Chatbot.

Para cada caso de teste executado com sucesso foi atribuída a nota **1**, enquanto falhas receberam a nota **0**.

<a id="tabela-157"></a>
### Tabela 157 – Registro de Coleta e Resultados Brutos da M2

| ID Ambiente | Sistema Operacional           | Navegador Alvo         | Resolução   | CT-01 | CT-02 | CT-03 | Percentual |
| ----------- | ----------------------------- | ---------------------- | ----------- | ----- | ----- | ----- | ---------- |
| ENV-01      | Windows 11 (25H2)             | Google Chrome v148     | 1920 × 1080 | 1     | 1     | 1     | 100,00%    |
| ENV-02      | Windows 11 (25H2)             | Microsoft Edge v148    | 1920 × 1080 | 1     | 1     | 1     | 100,00%    |
| ENV-03      | Linux Ubuntu 24.04 LTS        | Mozilla Firefox v148.x | 1920 × 1080 | 1     | 1     | 1     | 100,00%    |
| ENV-04      | Linux Ubuntu 24.04 LTS        | Google Chrome v148     | 1920 × 1080 | 1     | 1     | 1     | 100,00%    |
| ENV-05      | Android 16                    | Google Chrome v148     | 2712 × 1220 | 1     | 1     | 1     | 100,00%    |
| ENV-06      | iOS 15 (iPhone SE 1ª Geração) | Safari Mobile v15      | 1136 × 640  | 0     | 0     | 1     | 33,34%      |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

### 2.1 Detalhamento das Evidências Coletadas

Os vídeos de execução dos testes e o arquivo PDF utilizado para os testes de upload encontram-se armazenados no repositório de evidências disponibilizado no [Google Drive](https://drive.google.com/drive/folders/16Rx9M1ijRTBGD_JeQYjL-t-EpIURQula?usp=drive_link).

---

## 3. Resultados por Métrica

### 3.1 M2 – Índice de Equivalência Funcional por Navegador

**Objetivo:** Verificar se as funcionalidades essenciais operam com o mesmo comportamento em múltiplos navegadores e plataformas.

### Resultado Consolidado da Métrica

| Métrica | Ambientes Avaliados | Ambientes com 100% de Sucesso | Ambientes com Falha | Classificação | Detalhamento                                       |
| ------- | ------------------- | ----------------------------- | ------------------- | ------------- | -------------------------------------------------- |
| M2      | 6                   | 5                             | 1                   | Satisfatório | Falha funcional no ecossistema iOS (Safari Mobile) |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

### Cálculo da Métrica por Ambiente

O cálculo da M2 avalia individualmente cada ambiente testado:

* **ENV-01 a ENV-05:**

> (3 funcionalidades operantes / 3 funcionalidades testadas) × 100 = 100%

* **ENV-06:**

> (1 funcionalidades operantes / 3 funcionalidades testadas) × 100 = 33,34%

### Julgamento da M2

**Classificação:** Satisfatório

Embora o sistema tenha obtido sucesso total (**100%**) em cinco dos seis ambientes avaliados, demonstrando excelente estabilidade em computadores e dispositivos Android, foi registrada uma falha impeditiva no ambiente **ENV-06 (Safari Mobile em iPhone SE 1ª Geração)**.

Nesse ambiente, o sistema não conseguiu realizar o upload do histórico acadêmico, impedindo a execução das demais funcionalidades dependentes dessa etapa inicial. Como consequência, nenhuma das três funcionalidades avaliadas pôde ser utilizada adequadamente.

Dessa forma, a métrica não atingiu o nível máximo esperado de equivalência funcional entre os ambientes avaliados.

---

## 4. Conclusão Parcial da Portabilidade (M2)

A execução da métrica M2 demonstrou que os componentes centrais do sistema — incluindo o mecanismo de extração de texto, geração do fluxograma e integração com o chatbot — funcionam corretamente na ampla maioria dos sistemas operacionais e navegadores testados.

Os resultados evidenciam elevada consistência funcional entre plataformas Desktop e Android. Entretanto, a incompatibilidade observada no ambiente iOS mais antigo representa uma limitação relevante da portabilidade funcional do sistema.

---

## 5. Análise GQM e Coerência com o Propósito

A métrica M2 responde diretamente à seguinte questão de qualidade:

> "As funcionalidades centrais do sistema mantêm o mesmo comportamento técnico e nível de serviço, independentemente do navegador ou sistema operacional escolhido pelo usuário?"

<a id="tabela-158"></a>
### Tabela 158 – Resposta Consolidada às Questões de Equivalência Funcional

| Métrica | Resultado                                      | Relação com a Hipótese                                                                                    | Interpretação                                                                                                                                                               |
| ------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| M2      | Existência de um ambiente com falha (33,34%) | Não confirma a hipótese de excelência, que exigia funcionamento integral em todos os ambientes avaliados. | O sistema apresenta alta equivalência funcional na maioria das plataformas, porém exclui usuários de dispositivos iOS mais antigos devido à incompatibilidade identificada. |

**Fonte:** Elaborado pelo Grupo Hedy Lamarr (2026).

Em relação ao propósito da avaliação definido na Fase 1, os resultados demonstram que o sistema oferece comportamento funcional consistente para a maioria dos estudantes, mas ainda requer melhorias para garantir acessibilidade universal entre os dispositivos suportados.

---

## 6. Julgamento Final e Sugestões de Melhoria

O julgamento consolidado da Portabilidade, considerando a métrica **M2**, é **Satisfatório**, devido à falha crítica observada no ecossistema iOS/Safari.

Para mitigar o problema identificado, recomenda-se a seguinte ação corretiva:

### Compatibilidade com Dispositivos iOS Antigos

* Investigar as causas da incompatibilidade do componente de upload com versões mais antigas do Safari Mobile;
* Avaliar a viabilidade técnica e econômica de manter suporte para dispositivos iOS legados;
* Implementar mecanismos alternativos de upload compatíveis com navegadores que possuam suporte limitado às APIs utilizadas;
* Realizar uma nova rodada de testes específicos em dispositivos Apple para validar as correções implementadas.

A adoção dessas melhorias contribuirá para aumentar a equivalência funcional entre plataformas e elevar o nível geral de portabilidade do sistema.

## Histórico de Versões

<a id="tabela-159"></a>
**Tabela 159: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---|---|---|---|
| `1.0` | 11/06/2026 | execução da M2 | Guilherme |
