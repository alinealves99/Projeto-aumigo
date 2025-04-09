# 🐶 Aumigo - Guia de Cuidados com Cachorros

**Aumigo** é um site informativo desenvolvido com o objetivo de auxiliar tutores de cães no dia a dia. A plataforma oferece dicas úteis sobre cuidados básicos, informações sobre raças populares, uma galeria de imagens, e até um conversor de medidas para ração — tudo de forma simples e acessível.

---

## Funcionalidades

- **Dicas de Cuidados**: Alimentação, higiene, saúde, exercícios e consultas veterinárias.
- **Informações sobre Raças**: Conheça as características de raças populares com imagens ilustrativas.
- **Galeria Interativa**: Visualização em tela cheia com efeito modal ao clicar nas imagens.
- **Conversor de Medidas de Ração**: Converta xícaras ou colheres para gramas com base em uma densidade estimada.

---

## Estrutura de Arquivos

```
aumigo/
│
├── index.html             # Página inicial com navegação
├── item2.html             # Página de Cuidados Básicos
├── item3.html             # Página de Raças de Cachorros
├── item4.html             # Página do Conversor de Ração
├── item5.html             # Página de Contato
│
├── style.css              # Estilos do site
├── index.js               # Scripts para interatividade
│
├── img/
│   └── logo.png           # Logotipo
│   └── icone.ico          # Ícone da aba
│
└── README.md              # Documentação do projeto
```

---

## Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**  
- **Google Fonts** – Fonte utilizada: [Questrial](https://fonts.google.com/specimen/Questrial)  
- **Pixabay** – Imagens utilizadas são de domínio público

---

## Detalhes Técnicos

- O modal da galeria é ativado por clique nas imagens.
- O conversor de medidas usa uma densidade padrão de 100g por xícara.
- Cada `details` é fechado automaticamente ao abrir outro, para melhor navegação.

