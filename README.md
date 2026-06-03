# MultiStageDockerfile 

Repositório criado para a atividade prática de Docker Multi-Stage Builds da disciplina de Gerência e Configuração de Sistemas para Internet.

### Especificações do Dockerfile

O arquivo Dockerfile foi construído em dois estágios distintos para garantir o menor tamanho possível da imagem final, cumprindo os seguintes pontos:

Estágio 1: Build (builder)

    Imagem base utilizada: node:20-alpine

    Diretório de trabalho configurado: /app

    Otimização de cache: Cópia dos arquivos package.json e package-lock.json realizada antes do restante do código

    Instalação de dependências limpa: Executada através do comando npm ci

    Cópia do restante do código-fonte da aplicação

    Geração dos arquivos de produção: Executado através do comando npm run build

Estágio 2: Produção (production)

    Imagem base utilizada: nginx:stable-alpine

    Transferência de arquivos: Cópia da pasta de build (dist/) do estágio anterior diretamente para o diretório padrão do Nginx (/usr/share/nginx/html)

    Porta exposta: Porta 80

    Comando de inicialização configurado: nginx -g 'daemon off;'


# Como executar: 

## 1. Construir a Imagem Docker (Build)

`docker build -t minha-app-react:latest .

Este comando lê as instruções do Dockerfile, executa o build intermediário do Vite e gera a imagem otimizada com a tag especificada:



Durante a execução desse comando, o progresso do compilador rodou na tela e finalizou com sucesso com as seguintes informações:

```text
[+] Building 25.9s (14/14) FINISHED                                                                                                                docker:default
 => [internal] load build definition from Dockerfile                                                                                                         0.0s
 => => transferring dockerfile: 305B                                                                                                                         0.0s
 => [internal] load metadata for docker.io/library/nginx:stable-alpine                                                                                       2.3s
 => [internal] load metadata for docker.io/library/node:20-alpine                                                                                            2.3s
 => [internal] load .dockerignore                                                                                                                            0.0s
 => => transferring context: 2B                                                                                                                              0.0s
 => [builder 1/6] FROM docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                              4.5s
 => => resolve docker.io/library/node:20-alpine@sha256:fb4cd12c85ee03686f6af5362a0b0d56d50c58a04632e6c0fb8363f609372293                                      0.0s
 => => sha256:fff4e2c1b189bf87d63ad8bd07f7f4eb288d6f2b6a07a8bb44c60e8c075d2096 445B / 445B                                                                   0.2s
 => => sha256:b2cbbfe903b0821005780971ddc5892edcc4ce74c5a48d82e1d2b382edac3122 1.26MB / 1.26MB                                                               0.5s
 => => sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287 43.23MB / 43.23MB                                                             2.2s
 => => extracting sha256:4feea04c154301db6f4a496efa397b3db96603b1c009c797cfdde77bea8b3287                                                                    2.1s
 => => extracting sha256:b2cbbfe903b0821005780971ddc5892edcc4ce74c5a48d82e1d2b382edac3122                                                                    0.1s
 => => extracting sha256:fff4e2c1b189bf87d63ad8bd07f7f4eb288d6f2b6a07a8bb44c60e8c075d2096                                                                    0.0s
 => [production 1/2] FROM docker.io/library/nginx:stable-alpine@sha256:5f979dcfed4ce6461873f087e8c980d6e29b084b9e8776d9704a7e989b5f4898                      3.2s
 => => resolve docker.io/library/nginx:stable-alpine@sha256:5f979dcfed4ce6461873f087e8c980d6e29b084b9e8776d9704a7e989b5f4898                                 0.0s
 => => sha256:b009abd4e3ad8c26f28dac7b863c357bd87148a3eb023e8cdf08403e457ed87b 20.28MB / 20.28MB                                                             1.4s
 => => sha256:9b1872bceaab57004b3b89c6ee3755c3386063852cfc9c5ff68245417047cdd2 1.40kB / 1.40kB                                                               0.6s
 => => sha256:36afaf6978329f60deb48adb5d35635fd89334204776fe93c2f548a178ba6472 1.21kB / 1.21kB                                                               0.3s
 => => sha256:4db114418873157bc8c284b9f6da6dea4c1bc08c80fb4c490f45a12ede8c2ede 404B / 404B                                                                   0.2s
 => => sha256:390b5c71f63d4bdbecf7e4cb43b0241dde98e03b04af058eb54c4e155987d855 954B / 954B                                                                   0.3s
 => => sha256:d591de949fc47baa1d06c6e76fd2e31bb74036616af82eb8f8f1587b3ea79c2f 1.87MB / 1.87MB                                                               0.7s
 => => sha256:43e17fbea4a6e1edc792689241b257ca92f5cc662ffeac9cf227e71357df7ba3 628B / 628B                                                                   0.2s
 => => extracting sha256:d591de949fc47baa1d06c6e76fd2e31bb74036616af82eb8f8f1587b3ea79c2f                                                                    0.3s
 => => extracting sha256:43e17fbea4a6e1edc792689241b257ca92f5cc662ffeac9cf227e71357df7ba3                                                                    0.0s
 => => extracting sha256:390b5c71f63d4bdbecf7e4cb43b0241dde98e03b04af058eb54c4e155987d855                                                                    0.0s
 => => extracting sha256:4db114418873157bc8c284b9f6da6dea4c1bc08c80fb4c490f45a12ede8c2ede                                                                    0.0s
 => => extracting sha256:36afaf6978329f60deb48adb5d35635fd89334204776fe93c2f548a178ba6472                                                                    0.0s
 => => extracting sha256:9b1872bceaab57004b3b89c6ee3755c3386063852cfc9c5ff68245417047cdd2                                                                    0.0s
 => => extracting sha256:b009abd4e3ad8c26f28dac7b863c357bd87148a3eb023e8cdf08403e457ed87b                                                                    1.0s
 => [internal] load build context                                                                                                                            4.2s
 => => transferring context: 207.46MB                                                                                                                        4.1s
 => [builder 2/6] WORKDIR /app                                                                                                                               0.9s
 => [builder 3/6] COPY package.json package-lock.json ./                                                                                                     0.0s
 => [builder 4/6] RUN npm ci                                                                                                                                 8.3s
 => [builder 5/6] COPY . .                                                                                                                                   2.0s
 => [builder 6/6] RUN npm run build                                                                                                                          6.9s
 => [production 2/2] COPY --from=builder /app/dist /usr/share/nginx/html                                                                                     0.0s
 => exporting to image                                                                                                                                       0.3s
 => => exporting layers                                                                                                                                      0.1s
 => => exporting manifest sha256:31511626c641cbbf92bf31f69423fef49735c34e6be9c7357a9f771fc4374570                                                            0.0s
 => => exporting config sha256:084b9ebb537900189264c837cd80fef6e29626c7d5adfdbe93f3105d7ac78c75                                                              0.0s
 => => exporting attestation manifest sha256:ee87a78b719dfac9818378fce021acae7dae64b580dc177c8d15fadbf9a6a518                                                0.0s
 => => exporting manifest list sha256:0293d4434598fc4282c06a5bbf4f641e4db9391eb9ced7c6edb74ba11fa1247b                                                       0.0s
 => => naming to docker.io/library/minha-app-react:latest                                                                                                    0.0s
 => => unpacking to docker.io/library/minha-app-react:latest   

```

## 2. Executar o Container

Após o término do build, o container foi inicializado mapeando a porta interna 80 do Nginx para a porta 8080 do computador local:

`docker run -d -p 8080:80 --name container-react minha-app-react:latest`

A aplicação ficou disponível para acesso no navegador de internet através do endereço:
 *http://localhost:8080

 ## 3. Parar e Remover o Container

Para interromper o funcionamento do container e removê-lo da memória, foi utilizado o comando integrado:

`docker stop container-react && docker rm container-react`

## Perguntas 

### 1. Qual é o benefício de copiar package.json e package-lock.json antes do restante do código-fonte? Como isso se relaciona com o sistema de cache de camadas do Docker?
**Resposta:** O Docker salva cada comando em camadas de cache. Como o código muda muito e as dependências mudam raramente, copiar os arquivos de configuração primeiro garante que o comando pesado `npm ci` seja reaproveitado do cache. Isso evita reinstalar todas as dependências do zero a cada alteração simples no código, acelerando o build.

### 2. O que aconteceria com o tamanho final da imagem se utilizássemos um único estágio com node:20 e simplesmente copiássemos os arquivos estáticos para a pasta do Nginx dentro da mesma imagem?
**Resposta:** A imagem final ficaria gigante (geralmente maior que 1 GB). Ela guardaria desnecessariamente todo o ambiente do Node.js, códigos originais e a pasta `node_modules`, que são inúteis em produção, onde apenas os arquivos compilados são necessários.

### 3. O Nginx precisa do Node.js instalado para servir os arquivos estáticos da aplicação React? Justifique sua resposta em relação ao conceito de multi-stage build.
**Resposta:** Não precisa, pois o React roda direto no navegador do cliente. O Node.js serve apenas na etapa inicial para gerar os arquivos estáticos. Com o **multi-stage build**, usamos o Node.js como uma "fábrica" temporária no primeiro estágio e copiamos apenas o resultado final (`HTML`, `CSS`, `JS`) para o Nginx, descartando o Node.js completamente da imagem de produção.