# Atividade – useEffect (React Native + Expo)

App com três exercícios usando `useState` e `useEffect`.

| Exercício | Arquivo | O que faz |
|---|---|---|
| 1 – Boas-vindas | `components/BoasVindas.js` | Mostra o alerta "Bem-vindo ao sistema!" uma única vez (`useEffect` com `[]`) |
| 2 – Contador | `components/Contador.js` | Botões de aumentar/diminuir; a cada mudança exibe "O contador foi alterado!" no console (`useEffect` com `[contador]`) |
| 3 – Título | `components/AlterarTitulo.js` | Campo de nome; o título muda para "Olá, Nome!" sempre que o nome muda (`useEffect` com `[nome]`) |

## Como executar

```bash
npm install
npx expo install --fix
npx expo start
```

Abra no celular com o app **Expo Go** (lendo o QR Code) ou pressione `w` para abrir no navegador.
