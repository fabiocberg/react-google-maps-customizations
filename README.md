# React Google Maps Customizations

## Descrição

Este projeto demonstra como customizar mapas do Google Maps em aplicações React, indo além da simples exibição do mapa padrão. O objetivo é prover exemplos e utilitários para personalizar marcadores, estilos, camadas, eventos e controles, tornando a experiência do usuário mais rica e adaptada a diferentes necessidades.

## Tecnologias Utilizadas

- **React** (Create React App ou Vite)
- **@react-google-maps/api** (ou outra biblioteca Google Maps para React)
- **Google Maps JavaScript API**
- **Styled Components** ou CSS Modules (opcional)
- Gerenciamento de estado para interatividade com o mapa

## Funcionalidades

- Renderização de mapas com múltiplas opções de customização
- Adição de marcadores customizados (icones, popups, info windows)
- Customização de estilos do mapa (cores, elementos, temas claros/escuros)
- Eventos de clique e interação com marcadores e áreas do mapa
- Camadas customizadas (ex: rotas, polígonos, heatmaps)
- Adição de controles personalizados (botões, filtros, busca)
- Exemplo de integração com dados externos (GeoJSON, APIs)

## Como usar

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/fabiocberg/react-google-maps-customizations.git
    cd react-google-maps-customizations
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3. **Forneça sua chave da Google Maps API:**
    - Crie um arquivo `.env` na raiz do projeto:
      ```
      REACT_APP_GOOGLE_MAPS_API_KEY=SuaChaveAqui
      ```
    - Ou edite o local apropriado no código.

4. **Rode o app:**
    ```bash
    npm start
    # ou
    yarn start
    ```
    O app estará disponível em `http://localhost:3000`.

## Exemplos de Customização

- Mapa estilizado com tema escuro
- Marcadores com ícones próprios e popups informativos
- Polígonos e linhas desenhados pelo usuário
- Heatmap de pontos de interesse
- Controle customizado para filtrar locais exibidos

## Estrutura de Pastas

```
src/
├── components/        # Componentes de mapa, marcadores e controles
├── hooks/             # Hooks personalizados para mapas e eventos
├── utils/             # Funções utilitárias e helpers
├── App.js             # Componente principal
└── index.js           # Inicialização da aplicação
```

## Personalização

- Implemente novos estilos ou temas facilmente
- Adicione novos tipos de marcadores ou camadas
- Integre com qualquer API para exibir pontos dinâmicos
- Modifique controles e interações conforme seu fluxo

## Licença

MIT

---

> Este projeto serve como base para customizações avançadas do Google Maps em aplicações React, facilitando a criação de experiências interativas e modernas.