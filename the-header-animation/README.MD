# KEYFRAMES CSS

## Definção de uso
A @keyframes regra especifica o código da animação. 
A animação é criada mudando gradualmente de um conjunto de estilo CSS para outro. 
Durante a animação, você pode alterar o conjunto de estilos CSS várias vezes. 
Especifique quando a mudanças de estilo acontecerá em porcentagem, ou com as palavras-chave "de" e "para", que é igual a 0% e 100% é o início da animação, 100% é quando a animaaõ está completa. 
DicaÇ Para obter o melhor suporte ao navegador, você deve sempre definir os seletores 0% e 100%
Nota: Use as propriedades da animação para controlar a aprência da animação e também para vincular a animação a seletores. 
A regra !Important é ignorada em um quadro-chave. 

Valores de propriedade 

> animationname -> Required. Defines the name of the animation
> keyframes-selector -> Required. Percentage of the animation duration, legal values 0 - 100%
> css-styles -> Required. One or more legal CSS style properties

Exemplo 
Adicione muitos seletores de quadro-cahve em uma animação: 

```
@keyframes mymove {
  0%   {top: 0px;}
  25%  {top: 200px;}
  50%  {top: 100px;}
  75%  {top: 200px;}
  100% {top: 0px;}
}
```