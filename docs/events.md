# Eventos do ZdSignatureInput

O componente mantem os eventos padrao de input Zeedhi e adiciona eventos especificos para assinatura.

## `input`

Disparado quando o valor muda.

Payload principal:

- `component`: instancia do model `SignatureInput`;
- `element`: elemento raiz do componente;
- `event`: evento original do navegador, quando existir;
- `value`: Data URL PNG atual.

## `change`

Disparado apos confirmacao de mudanca do valor.

Payload principal:

- `component`;
- `element`;
- `event`;
- `value`.

## `clear`

Disparado quando a assinatura e limpa pelo botao de lixeira.

Payload principal:

- `component`;
- `element`;
- `event`;
- `source`: `clear`;
- `value`: string vazia.

## `upload`

Disparado quando uma imagem valida e enviada e normalizada para PNG.

Payload principal:

- `component`;
- `element`;
- `event`;
- `file`: arquivo original selecionado;
- `source`: `upload`;
- `value`: Data URL PNG normalizado.

## `error`

Disparado quando ocorre erro de leitura, formato, tamanho ou renderizacao de imagem.

Payload principal:

- `component`;
- `element`;
- `event`;
- `error`: erro capturado;
- `value`: valor atual do componente.

## Exemplo em metadata

```json
{
  "name": "assinatura",
  "component": "ZdSignatureInput",
  "label": "Assinatura",
  "height": 220,
  "showUpload": true,
  "events": {
    "change": "assinaturaController.onChange",
    "clear": "assinaturaController.onClear",
    "upload": "assinaturaController.onUpload",
    "error": "assinaturaController.onError"
  }
}
```
