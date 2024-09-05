# Modelo de Plugin - SDk para a game engine [Construct 2](https://www.construct.net/en/construct-2/download).

Desenvolvi esta SDK com o intuito de facilitar o meu desenvolvimento em relação a plugin e como quase que diariamente me perguntam como desenvolvo, resolvi deixar uma base atualizada com algumas explicações, para que ajude estas pessoas a iniciar um addon próprio.

### Informações básicas:
- Todo os metodos dos plugin tanto na [*edittime.js*](/SDK_Exemplo/edittime.js) quanto na [*runtime.js*](/SDK_Exemplo/runtime.js) estão repletos de comentarios.
- A *runtime.js* foi rescrita usando classes, apenas para que suas prototypes funcionem como uma instância única.
- Cuidado ao desenvolver um plugin direto no construct, pois, qualquer erro bobo pode corromper sua engine.
- Os arquivos de exemplos contem algumas ACEs exatamente, por exemplo, então use a [*SDK_Limpa*](/SDK_Limpa) em seus projetos.
- Você pode se aventurar tanto com uma SDK Limpa de [*Plugin*](/SDK_Limpa/Plugin) ou [*Behavior*](/SDK_Limpa/Behavior).

### Como configurar um behavior:
> Embora esta SDK seja para desenvolver plugin, se torna possível desenvolver behaviors seguindo estes passos.
- No arquivo [*edittime.js*](/SDK_Exemplo/edittime.js#L2), Altere **GetPluginSettings** por **GetBehaviorSettings**.
- Mantenha o [*type*](/SDK_Exemplo/edittime.js#L11) com o valor **'object'**, para evitar bugs.
- Evite [*flags*](/SDK_Exemplo/edittime.js#L13) com modificações graficas.
- Na [*linha 152 da edittime.js*](/SDK_Exemplo/edittime.js#L152) altere **CreateIDEObjectType** para **CreateIDEBehaviorType**.
- Finalizando a edittime, altere **IDEObjectType** por **IDEBehaviorType** na [*linha 153*](/SDK_Exemplo/edittime.js#L153) e [*156 da edittime.js*](/SDK_Exemplo/edittime.js#L156)

- A edição na runtime será trocar de **cr.plugins_** para **cr.behaviors** nas linhas [**33**](/SDK_Exemplo/runtime.js#L33) e [**45**](/SDK_Exemplo/runtime.js#L45).
- Busque na runtime qualquer referência com a palavra plugin e a substitua por behavior.
- Edite a class **type**, colocando o parametro o **objtype** na constructor e tribundo a this:
```js
class Type {
		constructor(behavior, objtype) {
			this.behavior = behavior
			this.runtime = behavior.runtime
			this.objtype = objtype
		}
...
```

- Também edite a class **Instance** e adicione o metodo **tick()** (um exemplo comentadno na [*linha 78 da runtime.js*](/SDK_Exemplo/runtime.js#L78)) e sua crontrutor inserindo o prametro inst, atribuindo a this, alem de atribuir a type do behavior.
```js
class Instance {
		constructor(type, inst) {
			this.type = type
			this.behavior = type.behavior
			this.inst = inst
			this.runtime = type.runtime
		}

		tick() {
			//
		}
		...
```



### Primeiros passos:
> Você primeiro deve informar a engine, as configurações do seu plugin, para isso você irá configurar a [edittime.js](/SDK_Exemplo/edittime.js)
- Na [*linha 4*](/SDK_Exemplo/edittime.js#L4) dev ser informado o nome do plugin
- O id para o plugin deve ser o mesmo tanto na [*linha 5 da edittime.js*](/SDK_Exemplo/edittime.js#L5) quanto na [*linha 35 da runtime.js*](/SDK_Exemplo/runtime.js#L35)
- Defina também uma versão na [*linha 6 da edittime.js*](/SDK_Exemplo/edittime.js#L6)
- Defina uma descrição na [*linha 7 da edittime.js*](/SDK_Exemplo/edittime.js#L7) para ser exibida ao inserir o plugin.
- A categoria irá definir onde visualmente seu plugin estará antes de ser colocado no projeto, defina na [*linha 10 da edittime.js*](/SDK_Exemplo/edittime.js#L10).
- O tipo de plugin poderá ser **object** *(apenas código)* ou **world** *(plugin visual/gráfico)* na [*linha 11 da edittime.js*](/SDK_Exemplo/edittime.js#L11)
- A opção [*rotatable na linha 12 da edittime.js*](/SDK_Exemplo/edittime.js#L12) só deve ser ativa, caso o plugin possua edição de rotação na engine.
```js
'name':			'Nome visual do plugin',
'id':			'NomeInternoNaRuntime',
'version':		'0.1',
'description':		'Descrição do que o plugin faz.',
'author':		'DeehLeh',
'help url':		'https://deehleh.itch.io',
'category':		'DeehLeh',
'type':			'object',
``` 

### Ativando os ticks do plugin:
- Descomente o metodo tick na [*linha 78 na runtime.js*](/SDK_Exemplo/runtime.js#L78) ou crie-o na class  **Instance**.
- Para ativar o tick, você deve descomentar a [*linha 101 na runtime.js*](/SDK_Exemplo/runtime.js#L101) ou inserir a seguinte linha no metodo **OnCreate** da class **Instance**:
```js
this.runtime.tickMe(this)
``` 

### Exemplos para fins didatísticos:
Emitir um alert:
- Esta ação usa o parametro da [*linha 63 da edittime.js*](/SDK_Exemplo/edittime.js#L63) como argumento em um alert.
- A ação de alert se encontra na [*linha 64 da edittime.js*](/SDK_Exemplo/edittime.js#L64) e seu metodo na [*linha 137 da runtime.js*](/SDK_Exemplo/runtime.js#L137)

Ententendo oque são Trigger's:
> Os trigger são condições que serão ativas por alguma função/metodo ou até mesmo ações, como no caso deste exemplo.
- Na [*linha 66 da edittime.js*](/SDK_Exemplo/edittime.js#L66) esta configurada a ação que chamará o trigger.
- Já na [*linha 95 da edittime.js*](/SDK_Exemplo/edittime.js#L95) es encontra a condição que será acionada, note que a flag usada se chama **cf_trigger**.
- A ação de ativar o triger é feito na [*linha 141 da runtime.js*](/SDK_Exemplo/runtime.js#L141) chamado a condição **exampleTrigger()** na [*linha 179 da runtime.js*](/SDK_Exemplo/runtime.js#L179)

Manipulação de loop:
> A manipulação de loop ocorre em toda ACE, ação, condição e expressão.

A condição irá pegar uma quantia de vezes que deverá acionar as ações no mesmo tick.
- Esta quantia para este exemplo pode ser visivel na [*linha 102 da edittime.js*](/SDK_Exemplo/edittime.js#L102)
- A condição em si, esta localizada na [*linha 103 da edittime.js*](/SDK_Exemplo/edittime.js#L103). note que a flag usada se chama **cf_looping**.
- Agora na [*linha 213 da runtime.js*](/SDK_Exemplo/runtime.js#L213) se encontra toda a estrutura do loop com pausas de eventos e comentarios.

A ação da qual um loop precisa é a de para-lo, pois, nem sempre queremos um loop que percorra até o final.
- Na [*linha 68 da edititime.js*](/SDK_Exemplo/edittime.js#L68) se encontra a ação de parar o loop independente de seu tick.
- Já seu metodo se encontra na [*linha 146 da runtime.js*](/SDK_Exemplo/runtime.js#L146), sem nenhum mistério ou novidade.

Por último temos a expressão que retorna em qual index o loop se encontra.
- Sem nenhum parâmetro ou flags próprias a expressão se encontra na [*linha 129 da edittime.js*](/SDK_Exemplo/edittime.js#L129)
- Seu metodo, também simples, se encontra na [*linha 294 da runtime.js*](/SDK_Exemplo/runtime.js#L294), deixando claro que qualquer expressão deve retornar dentro da função **ret**, que é um parâmetro obrigatório em todas as expressões.

Manipular objetos:
> A manipulação de objetos ocorre apos a detecção do sol, então é separado um array de instância para o objeto selecionado.

- Teremos um parâmetro na [*linha 73 da edittime.js*](/SDK_Exemplo/edittime.js#L73) responsável pela seleção do objeto.
- Enquanto na [*linha 74 da edittime.js*](/SDK_Exemplo/edittime.js#L74) um parâmetro define o angulo.
- A ação de mudança do angulo se encontra na [*linha 75 da edittime.js*](/SDK_Exemplo/edittime.js#L75) e seu metodo na [*linha 156 da runtime.js*](/SDK_Exemplo/runtime.js#L156).



Outros exemplos você pode observar dentro na pasta [*SDK_Exemplo*](/SDK_Exemplo)

**Obrigado pela sua atenção!**
