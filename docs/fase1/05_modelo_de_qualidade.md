# 5. Modelo de Qualidade - No Fluxo UnB

As características de qualidade de software escolhidas para esta avaliação, com base na norma **ISO/IEC 25010 (SQuaRE)**, são:
- **Adequação Funcional**
- **Portabilidade**

---

## 5.1 Modelo de Qualidade Adaptado

A Figura 1 apresenta o modelo de qualidade adaptado ao contexto do No Fluxo UnB, conectando as características priorizadas, suas subcaracterísticas, métricas, evidências e rastreabilidade GQM.

**Figura 1: Modelo de qualidade adaptado ao No Fluxo UnB.**

```mermaid
flowchart TD
    A["Modelo de Qualidade Adaptado<br/>No Fluxo UnB<br/>ISO/IEC 25010 + Matriz Impacto × Risco + GQM"]

    A --> AF["1ª Prioridade<br/>Adequação Funcional<br/>Impacto 5 × Risco 5 = 25"]
    A --> PO["2ª Prioridade<br/>Portabilidade<br/>Impacto 4 × Risco 4 = 16"]

    %% Adequação Funcional
    AF --> AF1["Completude Funcional"]
    AF --> AF2["Correção Funcional"]
    AF --> AF3["Pertinência Funcional"]

    AF1 --> AFM["Métricas / Indicadores<br/>• Cobertura das funções essenciais<br/>• Presença das funcionalidades prometidas<br/>• Apoio ao planejamento acadêmico"]

    AF2 --> AFM2["Métricas / Indicadores<br/>• Correção da leitura do histórico<br/>• Consistência dos dados curriculares<br/>• Ausência de recomendações incorretas"]

    AF3 --> AFM3["Métricas / Indicadores<br/>• Utilidade para o estudante<br/>• Aderência às necessidades de orientação acadêmica<br/>• Apoio à tomada de decisão"]

    AFM --> AFO["Itens priorizados / evidências<br/>• Leitura correta do PDF de histórico escolar<br/>• Visualização de fluxos curriculares<br/>• Leitura e processamento do histórico acadêmico<br/>• Identificação de pré-requisitos<br/>• Orientação via chatbot<br/>• Busca, filtros e exportação"]

    AFM2 --> AFO
    AFM3 --> AFO

    %% Portabilidade
    PO --> PO1["Adaptabilidade"]
    PO --> PO2["Instalabilidade"]
    PO --> PO3["Substituibilidade"]

    PO1 --> POM["Métricas / Indicadores<br/>• Funcionamento em diferentes dispositivos<br/>• Adaptação a resoluções de tela<br/>• Uso em desktop e mobile"]

    PO2 --> POM2["Métricas / Indicadores<br/>• Execução em ambientes controlados<br/>• Funcionamento em diferentes sistemas operacionais<br/>• Facilidade de disponibilização como aplicação web"]

    PO3 --> POM3["Métricas / Indicadores<br/>• Compatibilidade com diferentes navegadores<br/>• Possibilidade de evolução/migração tecnológica<br/>• Continuidade de uso em ambientes variados"]

    POM --> POO["Itens priorizados / evidências<br/>• Chrome, Firefox, Safari e Edge<br/>• Windows, macOS, Linux, iOS e Android<br/>• Desktop, notebook, tablet e smartphone<br/>• Ambiente web acessível a estudantes da UnB"]

    POM2 --> POO
    POM3 --> POO

    %% Rastreabilidade
    AFO --> GQM["Rastreabilidade GQM<br/>Objetivo → Questões → Métricas → Evidências"]
    POO --> GQM

    GQM --> OBJ["Objetivo da avaliação<br/>Avaliar a qualidade do No Fluxo UnB quanto à<br/>Adequação Funcional e Portabilidade"]

    OBJ --> Q1["Questões de avaliação<br/>• O sistema executa corretamente suas funções acadêmicas?<br/>• O sistema funciona em diferentes ambientes de acesso?"]

    Q1 --> M1["Métricas verificáveis<br/>• Completude e correção das funcionalidades<br/>• Consistência das informações acadêmicas<br/>• Compatibilidade entre navegadores, dispositivos e sistemas"]

    M1 --> E1["Evidências coletadas<br/>• Testes no sistema No Fluxo UnB<br/>• Validação da leitura do PDF de histórico escolar<br/>• Validação da leitura do histórico acadêmico<br/>• Validação do fluxograma curricular<br/>• Testes em navegadores e dispositivos definidos"]

    %% Características secundárias
    A --> SEC["Características consideradas, mas não priorizadas<br/>Compatibilidade = 12<br/>Segurança = 12<br/>Confiabilidade = 9<br/>Eficiência de Desempenho = 6<br/>Manutenibilidade = 4"]

    SEC --> FORA["Fora do foco principal nesta etapa<br/>Segurança da informação<br/>Desempenho<br/>Usabilidade da interface"]

    %% Estilos
    classDef main fill:#003b5c,color:#ffffff,stroke:#00263a,stroke-width:2px;
    classDef priority fill:#e8f3f8,color:#00263a,stroke:#005f86,stroke-width:2px;
    classDef sub fill:#f4f8fb,color:#00263a,stroke:#5d8aa8,stroke-width:1.5px;
    classDef metric fill:#ffffff,color:#111111,stroke:#8aaec2,stroke-width:1.5px;
    classDef evidence fill:#fff7e6,color:#111111,stroke:#d49b2a,stroke-width:1.5px;
    classDef secondary fill:#eeeeee,color:#222222,stroke:#777777,stroke-width:1.5px;

    class A main;
    class AF,PO priority;
    class AF1,AF2,AF3,PO1,PO2,PO3 sub;
    class AFM,AFM2,AFM3,POM,POM2,POM3,Q1,M1 metric;
    class AFO,POO,GQM,OBJ,E1 evidence;
    class SEC,FORA secondary;
```

*Fonte: Elaborado pelo Grupo Hedy Lamarr (2026), com base na ISO/IEC 25010, na Matriz Impacto × Risco e na abordagem GQM.*

---

## 5.2 Adequação Funcional

### Motivação

Garantir que o No Fluxo UnB execute todas as suas funções essenciais de forma correta e completa. A utilidade da plataforma para os alunos da UnB depende diretamente da capacidade do sistema de:

- **Visualizar Fluxos Curriculares**: Apresentar com precisão a estrutura curricular de cada curso, incluindo disciplinas obrigatórias, optativas, pré-requisitos e sequência de oferecimento.
- **Orientação via Chatbot**: Fornecer recomendações apropriadas sobre escolha de disciplinas com base no histórico acadêmico do aluno e suas metas.
- **Integração com Dados Acadêmicos**: Manter sincronização correta com o banco de dados da UnB para obter informações atualizadas sobre as estruturas curriculares de cada curso.
- **Exportação**: Permitir que os alunos gerem relatórios.
- **Busca e Filtros**: Possibilitar buscas eficazes por disciplinas, cursos e pré-requisitos.

A confiança dos alunos no sistema é construída sobre a premissa de que cada recurso prometido funcionará como esperado, ajudando de fato na visualização e na tomada de decisão.

## 5.3 Portabilidade

### Motivação

Possibilitar que o No Fluxo UnB seja acessado e utilizado em uma ampla gama de dispositivos, navegadores e ambientes operacionais. Os alunos da UnB acessam a plataforma de:

- **Diferentes Dispositivos**: Desktops, laptops, tablets e smartphones.
- **Diversos Navegadores**: Chrome, Firefox, Safari, Edge em suas versões mais recentes.
- **Múltiplos Sistemas Operacionais**: Windows, macOS, Linux, iOS, Android.

## 5.4 Critérios de Priorização

Os critérios adotados para a escolha destas características foram:

### Impacto no Usuário Final

As características selecionadas têm um impacto direto e crítico na experiência do aluno:

- **Adequação Funcional**: Uma falha funcional (ex: recomendação incorreta de pré-requisito, dados desatualizados) pode resultar no planejamento errado do aluno em disciplinas, comprometendo seu progresso acadêmico.
- **Portabilidade**: Um aluno que acessa a plataforma via smartphone não conseguir visualizar o fluxograma ou interagir com o chatbot é excluído completamente do uso.

### Relevância para a Proposta de Valor do No Fluxo UnB

A reputação do No Fluxo UnB como ferramenta essencial para orientação acadêmica da UnB depende diretamente de:

- **Qualidade Funcional**: Recomendações confiáveis são o ponto chave da proposta de valor. Um aluno que recebe orientações incorretas não retornará à plataforma.
- **Ampla Portabilidade**: Ser acessível em qualquer dispositivo aumenta o alcance da ferramenta. Isso maximiza o impacto do software na escolha de disciplinas de mais alunos.
