# Submissao para Zeedhi Store

Fonte oficial: https://docs.zeedhi.com/vue/create-component

A propria documentacao da Zeedhi orienta registrar componentes na Zeedhi Store pelo formulario:
https://forms.gle/LUwn6pWqNE7udTCG9

Depois do envio, a Zeedhi analisa o componente para conferir aderencia aos padroes e entra em contato com aprovacao ou ajustes.

## Dados sugeridos para o formulario

Nome do componente: `ZdSignatureInput`

Pacotes:

- `@marcelodl49/zd-signature-input-common`
- `@marcelodl49/zd-signature-input-vue`
- `@marcelodl49/zd-signature-input`

Descricao:

Campo Zeedhi para captura de assinatura por desenho em canvas com mouse, touch ou caneta, ou por upload de imagem `.png`, `.jpg` e `.jpeg`. O valor final sempre e normalizado para `data:image/png;base64,...`.

Metadata de exemplo:

```json
{
  "name": "assinatura",
  "component": "ZdSignatureInput",
  "label": "Assinatura",
  "height": 220,
  "showUpload": true,
  "validations": {
    "required": {}
  }
}
```

Eventos:

- `input`
- `change`
- `clear`
- `upload`
- `error`

Dependencia externa:

- `signature_pad@^5.1.3`

Checklist antes do envio:

- `npm run lint`
- `npm run build`
- `npm run publish:dry-run`
- publicar os tres pacotes com usuario autorizado no escopo `@zeedhi`
- anexar o link do repositorio/pacote no formulario oficial

