# Como configurar o projeto

> Guia interno destinado ao desenvolvimento e manutenção do projeto pela equipe.

## Configurando o ambiente

Clone o repositório e entre na pasta do projeto:

```bash
git clone git@github.com:FCTE-Qualidade-de-Software-1/2026-1_T01_HEDY_LAMAR.git hedy_lamarr_2026_1_t01

cd hedy_lamarr_2026_1_t01
```

Crie um ambiente virtual e instale as dependências:

```bash
python3 -m venv .venv

source .venv/bin/activate

pip install -r requirements.txt
```

Para rodar o projeto localmente, rode o seguinte comando:

```bash
mkdocs serve --livereload
```

Para mais informações, leia a documentação oficial [aqui](https://squidfunk.github.io/mkdocs-material/).
