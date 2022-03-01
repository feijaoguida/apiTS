### Desafio Skalena

- Criar um micro serviço capaz de aceitar requisições RESTful recebendo como parâmetro o nome da cidade ou as coordenadas longitudinais e retorna uma sugestão de playlist (somente nomes de faixas é bom) de acordo com a temperatura atual.

# Tecnologias

**Table of contents**


# Regras de negócio



## Regras de negócio

- Se a temperatura (célsius) estiver acima de 30 graus, sugira faixas para festa
- Caso a temperatura esteja entre 15 e 30 graus, sugira faixas de música pop
- Se estiver um pouco frio (entre 10 e 14 graus), sugira faixas de rock
- Caso contrário, se estiver congelando lá fora, sugere faixas de música clássica

## Api's para consulta

-  [https://openweathermap.org](https://openweathermap.org)

-- Para facilitar a integração, utilize essa chave de API:

>b77e07f479efe92156376a8b07640ced
- [https://developer.spotify.com](https://developer.spotify.com)

-- Para facilitar a integração, utilize este conjunto de informações:
>Client Id: 4d8f63b3e1894c73a9d6fa0e7085e60f

>Client secret: 6dd251a17f9a422b9ba04175438ad8ab

# Solução


## Tecnologias Utilizadas.

* NodeJs - Com TypeScript
* ExpressJs
* <abbr title="Para desenvolvimento dos Testes">Jest</abbr>
* <abbr title="Para documentação da Api">Swagger</abbr>
* <abbr title="Biblioteca para facilitar a consulta node.">spotify-web-api-node</abbr>
* <abbr title="Para consumo das Api's">axios</abbr>

## Como Acessar.

Atualmente a Api esta hospedada no Cloud do [Heroku](heroku.com) para acessar use o link [https://api-skalena.herokuapp.com/docs](https://api-skalena.herokuapp.com/docs) onde será possível testa on-line.

## Acessando Local

Primeiro passo faça o Clone do Projeto para uma pasta local 
> git clone git@github.com:feijaoguida/apiTS.git

Renomei o arquivo .env.example para .env e altere as informações da chaves conforme sua necessidade.

execulte o comando **yarn** ou **npm install** para instalar todas as dependencias localmente 
> yarn
> npm install

Feito todos esses passo execute:
- Para iniciar a aplicação na **porta 3333**
> yarn start

- Para iniciar a aplicação como desenvolvedor.
> yarn dev

- Para buildar a aplicação e gerar os arquivos JavaScript na pasta dist
> yarn build

- Para rodar os tests.
> yarn test
