# teste_NG_Cash

## Doc API
https://ng-cash-api-docs-1vfef4sgy-lucascortesc.vercel.app/

## Instale as dependências

Tanto no Front quanto no Back, rode o comando yarn para instalar as dependências

>
> yarn
>

## Rodando com docker

Primeiramente, no docker-compose.yml, altere as variáveis de ambiente com os seus dados do postgress

>
>    api:
>
>      - DB_HOST=db
>      - DB_USER=[seu usuário postgres]
>      - DB_PASSWORD=[sua senha postgres]
>      - DB=ng_cash
>      - SECRET_KEY=ng_cash
>
>    db:
>
>      - POSTGRES_USER=[seu usuário postgres]
>      - POSTGRES_PASSWORD=[sua senha postgres]
>      - POSTGRES_DB=ng_cash
>
>    healthcheck:
>
>      test: ["CMD-SHELL", "pg_isready -U [seu usuário postgres] -d ng_cash"]
>


Utilize o comando a seguir para buildar e rodar os containers

>
> docker compose up --build
>

Caso tenha algum erro no build em relação ao arquivo entrypoint.sh (exec /entrypoint.sh: no such file or directory), tente alterar o End of Line Sequence do mesmo (de CRLF para LF)

Espera a confirmação de que o front e a api estejam rodando

> front  |   ➜  Local:   http://localhost:3000/
>
> front  |   ➜  Network: http://172.21.0.3:3000/
>
> api    | CONNECTION STABLISHED WITH DATABASE
>
> api    | Application running on port: 8080

Com os contâiners ativos, entre na pasta Back e rode o comando a seguir para rodar as migrations

>
> yarn dockerRunMigrations
>

## Rodando sem docker

### Back

Na pasta Back, crie o arquivo .env e preencha as variáveis de ambiente de acordo com o exemplo no .env.example

> DB_HOST=localhost
>
> DB_USER=[seu usuário postgres]
>
> DB_PASSWORD=[sua senha postgres]
>
> DB=[nome do banco]
>
> SECRET_KEY=NG_CASH

Em seguida crie o banco de dados com o mesmo nome passado na variável DB

Rode as migrations com o comando a seguir

>
> yarn runMigration
>

Roder o seguinte comando para rodar o back

>
> yarn dev
>

### Front

Na pasta Front, apenas rode o seguinte comando para rodar o Front

>
> yarn dev
>
