# Respositorio de arquivos para o desenvolvimento de um plugin para a game engine [Construct 2](https://www.construct.net/en/construct-2/download).

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/smuu)

Desenvolvi esta SDK com o intuito de facilitar o meu desenvolvimento em relação a plugin e como quase que diariamente me perguntam como desenvolvo, resolvi deixar uma base atualizada com algumas explicações, para que ajude estas pessoas a iniciar um addon próprio.

### Como configurar um behavior:
> Embora esta SDK seja para desenvolver plugin, se torna possível desenvolver behaviors seguindo estes passos.
- No arquivo [*edittime.js*](/SDK_Exemplo/edittime.js#L2), Altere **GetPluginSettings** por **GetBehaviorSettings**.
- Mantenha o [*type*](/SDK_Exemplo/edittime.js#L11) com o valor **'object'**, para evitar bugs.
- Evite [*flags*](/SDK_Exemplo/edittime.js#L13) com modificações graficas.
- Altere **cr.plugins_** para **cr.behaviors** nas linhas [**33**](/SDK_Exemplo/runtime.js#L33) e [**43**](/SDK_Exemplo/runtime.js#L43)

### Primeiros passos:
> Você primeiro deve informar a engine, as configurações do seu plugin, para isso você irá configurar a [edittime.js](/SDK_Exemplo/edittime.js)
- Na [*linha 4*](/SDK_Exemplo/edittime.js#L4) dev ser informado o nome do plugin
- O id para o plugin deve ser o mesmo tanto na [*linha 5 da edittime.js*](/SDK_Exemplo/edittime.js#L5) quanto na [*linha 35 da runtime.js*](/SDK_Exemplo/runtime.js#L35)
- Defina também uma versão na [*linha 6 da edittime.js*](/SDK_Exemplo/edittime.js#L6)
- Defina uma descrição na [*linha 7 da edittime.js*](/SDK_Exemplo/edittime.js#L7) para ser exibida ao inserir o plugin.
- A categoria irá definir onde visualmente seu plugin estará antes de ser colocado no projeto, defina na [*linha 10 da edittime.js*](/SDK_Exemplo/edittime.js#L10).
- O tipo de plugin poderá ser **object** *(apenas código)* ou **world** *(plugin visual/gráfico)* na [*linha 11 da edittime.js*](/SDK_Exemplo/edittime.js#L11)
- A opção [*rotatable na linha 12*](/SDK_Exemplo/edittime.js#L12) só deve ser ativa, caso o plugin possua edição de rotação na engine.
