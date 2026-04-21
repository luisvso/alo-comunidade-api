# alo-comunidade-api

## Estrutura de pastas

```
src/
├── config/        # Variáveis de ambiente e configurações globais
├── controllers/   # Recebe a requisição HTTP, chama o service e devolve a resposta
├── db/            # Instância do Prisma Client
├── middlewares/   # Middleare (autenticação, tratamento de erros)
├── routes/        # Define os endpoints e mapeia para os controllers
├── services/      # Lógica de negócio, sem dependência do Express
├── types/         # Tipagens e extensões de tipos globais
└── utils/         # Funções auxiliares reutilizáveis (hash, jwt, etc)
```

## Como rodar

```bash
# Primeira vez (após clonar)
cp .env.example .env   # configure as variáveis de ambiente
bun install
bunx prisma generate
bun dev

# Demais vezes
bun dev
```

## Passos para criar o ambiente
```bash
# Cria arquvo arquivos com cofiguração padrão
bun init -y

# Runtime deps
bun add express @prisma/client jsonwebtoken bcryptjs dotenv

# Dev deps (Não é necessário ts-node-dev, bun roda TS direto)
bun add -d typescript @types/node @types/express @types jsonwebtoken @types/bcryptjs prisma

# Prisma (configura o ORM pela 1º vez)
bunx prisma init

```
