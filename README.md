# Projeto de formação Cinetag
Trata-se de projeto que foi implementado durante formação na Alura, com o objetivo de praticar conhecimento em React.

## Linguagens, técnicas, módulos e componentes
- Javascript
- Módulos CSS
- React Routes
- Hooks
  - useState
  - useContext (ContextAPI)
  - useEffect
- Fetch
  - Fake API [json-server](https://www.npmjs.com/package/json-server)

## Para rodar o projeto
Após clone, `npm install`.

Como há o consumo de API, inicie o json-server na porta 3001:
```
npx json-server ./src/db.json -p 3001
```

Isso iniciará a API fake baseada no arquivo json do projeto.

Rodando o json-server, `npm start`.
