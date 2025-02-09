# Exibição de CV Interativo com Efeito 3D

Esta aplicação React cria uma exibição interativa de CV com um suave efeito de rotação 3D que responde ao movimento do mouse. O conteúdo do CV é exibido em um container estilo cartão que inclina com base na posição do cursor, criando uma experiência de usuário envolvente.

## Funcionalidades

- Efeito de rotação 3D ao passar o mouse
- Transições suaves entre rotações
- Design responsivo
- Interface limpa e minimalista
- Reinicialização automática quando o mouse sai do container

## Implementação Técnica

A aplicação utiliza:
- React com Hooks (useState, useEffect, useRef)
- Transformações CSS com perspectiva para efeitos 3D
- Tailwind CSS para estilização
- Event listeners para rastreamento do mouse
- Cálculos dinâmicos de estilo baseados na posição do cursor

## Estrutura de Componentes

- `App.js`: Componente container principal com lógica do efeito 3D
- `Cv_web.js`: Componente de conteúdo do CV (precisa ser implementado separadamente)

## Como Funciona

O efeito 3D é alcançado através de:
1. Rastreamento da posição do mouse em relação ao container
2. Cálculo dos ângulos de rotação baseado na posição do cursor
3. Aplicação de transformações CSS com perspectiva
4. Transições suaves usando transições CSS

## Instalação

```bash
# Clone o repositório
git clone [url-do-seu-repositório]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

## Personalização

Você pode personalizar o efeito modificando estes parâmetros em `App.js`:

- Sensibilidade da rotação: Altere o multiplicador (atualmente definido como 5) nos cálculos de rotação
- Velocidade de transição: Modifique a duração da transição em `transformStyle`
- Profundidade da perspectiva: Ajuste o valor da perspectiva (atualmente 1000px)
- Estilização do container: Modifique as classes do Tailwind CSS

## Dependências

- React
- Tailwind CSS

## Contribuindo

Sinta-se à vontade para submeter issues e solicitações de melhorias.