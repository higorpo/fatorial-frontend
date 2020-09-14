<h3 align="center">
	<img src=".github/logo.png" alt="Fatorial Logo"/>
  <br/>
	<span>
		Faça seus cálculos de fatorial de maneira simples e rápida.
	</span>
</h3>

# Indice 
- [Sobre](#sobre)
    - [Repositório do backend em Node.js](https://github.com/higorpo/fatorial-backend-node)
    - [Repositório do backend em Java](https://github.com/higorpo/fatorial-backend-java)
- [Tecnologias usadas](#tecnologias)
- [Resultados](#resultados)
- [Como usar?](#comousar)

<a id="sobre"></a>
## :bookmark: Sobre
<p>
Esta aplicação foi criada com base no desafio proposto no processo seletivo do <a href="http://bridge.ufsc.br/" target="_blank">Laboratório Bridge</a>. A ideia era criar uma interface web que pudesse ser usada para desenvolver cálculos fatoriais usando um backend.
</p>
<p>
O frontend desta aplicação foi desenvolvido utilizando React.js com TypeScript e SASS. Já o backend possuí duas versões: uma feita em <a href="https://github.com/higorpo/fatorial-backend-node"><strong>Node.js</strong></a> com Express e outra feita em <a href="https://github.com/higorpo/fatorial-backend-java"><strong>Java</strong></a> utilizando o framework Spring. Isto foi feito devido a minha maior proximidade com o universo JavaScript, neste caso, com o Node.js quando comparado com o Java.
</p>

<a id="tecnologias"></a>
## :rocket: Tecnologias
<p>
Para o frontend desta aplicação utilizou-se das seguintes tecnologias:
</p>

- ReactJS
- TypeScript
- React Router Dom
- React Icons
- SASS

<a id="resultados"></a>
## :heavy_check_mark: Resultados
<p>
O site foi construído com base na minha prototipagem no Figma, que pode ser conferida <a href="" target="_blank">clicando aqui</a>.
</p>
<p>Do desenvolvimento desse, chegou-se ao seguinte resultado:</p>

Clique na foto abaixo para ver o vídeo de demonstração do site:
[![Assista ao video](https://lh6.googleusercontent.com/Q5lMf3oBeZ6QT5qX3Z4z9uYr5VgMcI8GMYY8Kh44N0Kz1QqLSG0l7-AYBqYNHwWj2N20BxLU-q6k0RAGJJwK=w1280-h720-k-rw-pd)](https://drive.google.com/file/d/1xHrablhJW5Jk2HBlKEkrrTGFNX5wgXO0/view)


<p>Você pode testar a aplicação agora mesmo através <a href="https://fatorial.vercel.app/" target="_blank">deste link</a>, uma versão do site hospedada na <b>Vercel</b>.</p>


<a id="comousar"></a>
## :fire: Como executar?
<p>Para executar este projeto em sua máquina local existem alguns requisitos básicos. Você deve ter o Node.js instalado na sua versão mais recente e um gerenciador de pacotes Yarn ou NPM, além disso, se for utilizar o Java como backend precisa ter todas as dependências instaladas (Java 11).</p>


### Baixando o frontend
Clone este repositório
```sh 
git clone https://github.com/higorpo/fatorial-frontend frontend
```

Instale as dependências do projeto
```sh 
cd frontend
yarn
```
### Baixando o backend
Volte uma pasta utilizando ```cd ..``` e escolha um dos dois backends abaixo, siga as instruções
#####Node.js
Clone o repositório
```sh 
git clone https://github.com/higorpo/fatorial-backend-node backend
```

Instale as dependências do projeto
```sh 
cd backend
yarn
```

Depois de executado o comando acima, execute ```cd ..```

---

#####Java

Clone o repositório
```sh 
git clone https://github.com/higorpo/fatorial-backend-java backend
```

### Executando o backend
Siga o tutorial do backend que você baixou acima (Node.js ou Java)

#####Node.js
```sh 
cd backend
yarn dev
```
Depois de executado o comando acima, execute ```cd ..```

---

#####Java

```sh 
cd backend
./gradlew bootRun
```
Depois de executado o comando acima, execute ```cd ..```

### Configurando o frontend
Antes de executarmos o frontend precisamos configurar a URL do nosso servidor, seja ele Node ou Java. 

Para isso entre na seguinte pasta:
```sh 
cd ./frontend/src/config
```
Edite o arquivo ```api.ts``` colocando a URL do seu backend (normalmente ```http://localhost:8000```). Se você não fizer isto você estará rodando com o um backend Node.js previamente hospedado no Heroku.

Para finalizar, volte para pasta inicial com
```sh 
cd ../../../
```
### Executando o frontend
Após ter completado o passo acima, inicie o servidor web
```sh 
cd frontend
yarn start
```
Um servidor web deve começar a rodar na porta 3000, acesse-o usando ```http://localhost:3000```