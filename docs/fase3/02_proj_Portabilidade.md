# Plano de Avaliação (Foco: Portabilidade)

## 1. Introdução Específica

Este documento operacionaliza a execução da avaliação para as métricas da subcaracterística de **Adaptabilidade (Portabilidade)** do sistema **No Fluxo UnB**.

O objetivo é fornecer um roteiro executável e padronizado para que qualquer membro da equipe consiga executar os testes, coletar evidências e aplicar os critérios de julgamento estabelecidos.

---

## 2. Objetivos da Avaliação de Portabilidade

- Garantir a consistência visual da interface do No Fluxo UnB diante da variação de resoluções de tela.
- Validar o comportamento uniforme das três funcionalidades centrais (Upload de Histórico, Visualização do Fluxograma e Chatbot) nos ambientes web homologados.
- Padronizar as saídas e relatórios das execuções para auditoria da disciplina de Qualidade de Software 1.

---

## 3. Método de Avaliação (Resumo Estruturado)

**Tabela 1: Método de avaliação.**

| Etapa | Descrição | Responsável | Evidência |
|--------|------------|-------------|------------|
| Preparação | Dispositivos, navegadores e ferramentas de inspeção conforme a matriz de ambientes. | Equipe | Checklist de ambiente validado |
| Execução | Rodar os roteiros de varredura visual (M1) e os casos de teste funcionais (M2). | Avaliadores | Prints de tela e vídeos |
| Registro | Documentar o resultado de cada ambiente/resolução no documento padrão. | Avaliadores | Linhas preenchidas no documento central |
| Cálculo | Aplicar as fórmulas de taxa de conformidade e índice de equivalência. | Avaliadores | Documento preenchido com os percentuais |
| Julgamento | Confrontar os percentuais obtidos com as réguas de aceitação da Fase 2. | Equipe | Relatório com a classificação e anexos |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*

---

## 4. Preparação (Artefatos, Ferramentas e Ambientes)

### 4.1 Artefatos de Suporte Exigidos

#### Documento de Coleta

O documento de coleta deverá conter, no mínimo, as seguintes colunas:

| Métrica | Cenário/Resolução | Resultado (Sucesso/Falha) | Descrição da Inconsistência | Gravidade | Link da Evidência |
|----------|-------------------|---------------------------|----------------------------|-----------|------------------|

#### Mídia de Evidências

- Vídeos ou capturas de tela armazenados no Google Drive.
- Evidências organizadas por métrica e ambiente avaliado.

### 4.2 Ferramentas Homologadas para Inspeção

Caso o avaliador não possua o dispositivo físico listado na Tabela 7 da Fase 2, fica autorizado o uso das seguintes ferramentas de simulação.

#### DevTools do Google Chrome ou Microsoft Edge

Ativar o modo **Responsive Design Mode**:

1. Abrir a aplicação.
2. Pressionar **F12**.
3. Pressionar **Ctrl + Shift + M**.
4. Configurar manualmente as dimensões informadas na matriz de ambientes.

> Esta abordagem foi utilizada pela equipe para simular o dispositivo iPhone.

#### Arquivo de Teste

Será utilizado o arquivo fictício:

`historico_exemplo_unb.pdf`

Disponível no repositório GitHub da equipe.

---

## 5. Plano por Métrica

### 5.1 M1 — Taxa de Conformidade de Layout Responsivo

#### Objetivo

Verificar se a interface do No Fluxo UnB se adapta visualmente às resoluções críticas sem:

- Quebras de layout;
- Sobreposição de elementos;
- Desaparecimento de componentes essenciais.

### Páginas-Alvo da Inspeção

1. Tela de Login (No Fluxo UnB);
2. Painel do Fluxograma;
3. Interface de Upload de Histórico Escolar;
4. Janela do Chatbot (Assistente de IA).

### Passo a Passo da Execução (M1)

1. Abrir o navegador em um dos ambientes da matriz ou utilizar a ferramenta de simulação correspondente.
2. Configurar a resolução definida para o ambiente em teste.
3. Navegar pelas quatro páginas-alvo.
4. Em cada página verificar:
   - Textos cortados ou sobrepostos;
   - Botões visíveis e clicáveis;
   - Inputs acessíveis;
   - Menus funcionais;
   - Barras de rolagem que prejudiquem a navegação.
5. Capturar uma imagem da tela inteira.
6. Salvar utilizando o padrão:

```text
M1_ENV[ID]_[PAGINA]_[RESOLUCAO].png
```

7. Repetir o procedimento para todas as resoluções previstas.
8. Registrar:
   - **Sucesso**, caso nenhuma anomalia seja encontrada;
   - **Falha**, caso seja observada qualquer inconsistência visual.

### Entrada

- Universo das resoluções críticas definidas na matriz de ambientes.
- Quatro páginas-alvo da inspeção.

### Saída

Número de resoluções que mantiveram integridade visual total.

### Fórmula de Cálculo

```text
M1 = (Nº de resoluções sem quebra ÷ Nº total de resoluções testadas) × 100
```

### Critério de Julgamento

| Classificação | Critério |
|--------------|-----------|
| Excelente | M1 > 95% das resoluções testadas sem quebras visuais |
| Satisfatório | M1 entre 90% e 95% das resoluções testadas |
| Insuficiente | M1 < 90% das resoluções testadas |

---

### 5.2 M2 — Índice de Equivalência Funcional por Navegador

#### Objetivo

Garantir que as três funcionalidades essenciais da aplicação funcionam com equivalência técnica em todos os navegadores homologados.

### Casos de Teste

#### CT-01 — Leitura de Histórico

Realizar o upload de um histórico acadêmico da UnB em PDF e verificar se os dados são extraídos corretamente.

#### CT-02 — Visualização do Fluxograma

Interagir com o fluxograma verificando:

- Seleção de disciplinas;
- Dependências;
- Equivalências;
- Renderização gráfica.

#### CT-03 — Chatbot

1. Abrir o assistente de IA.
2. Enviar uma mensagem de teste.

    Exemplo: Quais matérias faltam para me formar?


3. Verificar se uma resposta textual consistente é retornada.

### Passo a Passo da Execução (M2)

1. Acessar o sistema utilizando o ambiente definido na matriz.
2. Executar o CT-01.
3. Registrar evidência.
4. Executar o CT-02.
5. Registrar evidência.
6. Executar o CT-03.
7. Registrar evidência.
8. Para cada caso de teste:
   - Atribuir **1** para sucesso;
   - Atribuir **0** para falha.
9. Repetir o processo para todos os ambientes da matriz.

### Entrada

Três casos de teste padronizados aplicados aos sete ambientes homologados.

### Saída

Nota de funcionamento por funcionalidade dentro de cada ambiente.

### Fórmula de Cálculo

 **O cálculo deve ser realizado individualmente para cada ambiente.**

```text
M2_Ambiente = (Nº de funcionalidades operantes ÷ 3) × 100
```

### Critério de Julgamento Consolidado

| Classificação | Critério |
|--------------|-----------|
| Excelente | M2 = 100% em todos os ambientes |
| Satisfatório | M2 < 100% em apenas um ambiente |
| Insuficiente | M2 < 100% em mais de um ambiente |

---

## 6. Cronograma e Atividades da Subequipe

As atividades abaixo estão distribuídas para os responsáveis pela avaliação de Portabilidade.

### Responsáveis do Grupo Hedy Lamarr 

- Guilherme 
- Vinícius 

### Até 08/06/2026 — Preparação da Infraestrutura

- Montagem do documento centralizado de registros de portabilidade.
- Distribuição dos ambientes físicos entre os membros da equipe.

### Até 09/06/2026 — Execução dos Testes

#### Execução de M1 (Responsividade)

- Inspeção visual sistemática das resoluções.
- Coleta dos prints.
- Organização das evidências no Google Drive.

#### Execução de M2 (Equivalência por Navegador)

- Testes dos fluxos de Upload.
- Testes do Fluxograma.
- Testes do Chatbot.
- Execução nos sete ambientes homologados.

### Até 10/06/2026 — Consolidação dos Resultados

- Aplicação das fórmulas de cálculo.
- Consolidação das evidências.
- Classificação dos resultados.
- Elaboração do relatório final do Grupo Hedy Lamarr.

---

## Histórico de Versões

**Tabela 2: Histórico de versões.**

| Versão | Data | Descrição | Autor |
|---------|---------|------------|---------|
| `1.0` | 07/06/2026 | Projeção das métricas M1 e M2. | Guilherme |

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026).*