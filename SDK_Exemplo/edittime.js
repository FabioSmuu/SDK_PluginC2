//function GetBehaviorSettings() {
function GetPluginSettings() {
	return {
		'name':			'Nome visual do plugin',
		'id':			'NomeInternoNaRuntime',
		'version':		'0.1',
		'description':	'Descrição do que o plugin faz.',
		'author':		'DeehLeh',
		'help url':		'https://deehleh.itch.io',
		'category':		'DeehLeh',
		'type':			'object', //world(Plugin grafico, não suportado por behavior) ou object(Plugin interno ou behaviors)
		//'rotatable':	true,
		'flags':		0 // | pf_singleglobal | pf_zorder_aces
		//	| pf_singleglobal		// Torna global para todo o projeto, des de mouses a teclados, mas use type: 'object'
		//	| pf_texture			// Texturização em tiles.
		//	| pf_position_aces		// Padrões de posições X e Y do plugin.
		//	| pf_size_aces			// Padrões de tamanho para largura e altura do plugin.
		//	| pf_angle_aces			// Permite rotação por algulo (habilite 'rotatable').
		//	| pf_appearance_aces	// Compare se o plugin esta visivel ou invisivel.
		//	| pf_tiling				// Editor de tile lado a lado como no plugin tiled background.
		//	| pf_animations			// Habilita animações como no plugin sprite.
		//	| pf_zorder_aces		// Definir sobreposição de camadas/layers.
		//  | pf_nosize				// Evita redimencionamento na engine.
		//	| pf_effects			// Compatibilidade efeitos WebGL.
		//  | pf_predraw			// Permite desenhar em canvas sem ser uma sprite.
	}
}

////////////////////////////////////////
// Tipos de parametros:

// AddNumberParam(Nome, Descrição, 1337)							// Parametro numerico.
// AddStringParam(Nome, Descrição, 'Texto')							// Parametro de escrita.
// AddAnyTypeParam(Nome, Descrição, 'Valor numerico ou texto')		// Parametro numero ou escrita.
// AddAnimationParam(Nome, Descrição)								// Parametro de animação.
// AddLayerParam(Nome, Descrição)									// Parametro de Layer.
// AddObjectParam(Nome, Descrição)									// Parametro para a escolha de Objeto.
// AddKeybParam(Nome, Descrição)									// Parametro para teclado (retorna VK).
// AddCmpParam(Nome, Descrição)										// Comparador de maior, menor, igual....
// AddLayoutParam(Nome, Descrição)									// Listagem de todos os layouts do projeto.
// AddAudioFileParam(Nome, Descrição)								// Listagem para arquivos de audio.

// AddComboParamOption(Descrição)									// Parametos de escolha (use acima de AddComboParam).
// AddComboParam(Nome, Descrição, 0)								// Parametos de escolha.



////////////////////////////////////////
// Actions

/*
AddAction(
	id,
	af_none,// af_deprecated
	Nome,
	Categoria,
	Display,		// Visibilidade na eventsheet, use {0}, {1} para parametros e <b></b>, <i></i> para estilisar.
	Descrição,
	NomeDaAção
)
*/

AddAnyTypeParam('Mensagem', 'Escreva alguma mensagem para teste.', '"Mensagem de exemplo!"')
AddAction(0, af_none, 'Emitir um alert', 'Exemplo', 'Alert({0})', 'Esta ação chamará um alert', 'alertEmit')

AddAction(1, af_none, 'Testar Trigger', 'Trigger', 'Ativar a condição Trigger', 'Esta ação ativa a condição "Testar Trigger"', 'activateTrigger')

AddAction(2, af_none, 'Parar loop', 'Extra', 'Para o loop', 'Pare o loop no meio do ciclo.', 'loopStop')

AddNumberParam('Novo valor', 'Escolha um novo valor para a propriedade "Numero de exemplo"', 7)	
AddAction(3, af_none, 'Mudar valor da prorpiedade', 'Exemplo de prorpiedade', '<i>"Numero de exemplo"</i> = <b>{0}</b>', 'Exemplo de como mudar o valor de uma propriedade usando ação.', 'sertNumberExample')

////////////////////////////////////////
// Conditions

/*
AddCondition(
	id,
	cf_none,// cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible, cf_deprecated, cf_incompatible_with_triggers, cf_looping
	Nome,
	Categoria,
	Display,		// Visibilidade na eventsheet, use {0}, {1} para parametros e <b></b>, <i></i> para estilisar.
	Descrição,
	NomeDaCondição
)
*/

AddObjectParam('Objeto', 'Selecione um objeto.')
AddCondition(0, cf_none, 'Testar Seleção de Objeto', 'Teste', 'Objeto selecionado {0}', 'Apenas um teste do parametro de seleçionar objeto.', 'ObjectTest')

AddCondition(1, cf_trigger, 'Testar Trigger', 'Trigger', 'Quando trigger ativado', 'Está condição sóserá ativada por uma ação.', 'exampleTrigger')

AddNumberParam('Numero de exemplo', 'Insira um numero qualquer para comparar.', 6)
AddCmpParam('Compare', 'Escolha o operador de comparação.')
AddNumberParam('Outro numero', 'Insira outro numero qualquer para comparar.', 7)
AddCondition(2, cf_none, 'Comparar valores', 'Compare', '{0} {1} {2}', 'Explore mais a cr com esta condição.', 'compareValues')

AddNumberParam('Conte até', 'Escolha um numero para contar.', 10)
AddCondition(3, cf_looping, 'Exemplo de loop', 'Extra', 'Conte até {0}', 'Exemplo de como usar uma condição de looping.', 'loopExample')

AddNumberParam('Dividir por', 'Escolha um numero para dividir pela porpriedade "Numero de exemplo".', 2)
AddCondition(4, cf_none, 'Propriedade divisivel', 'Exemplo de prorpiedade', '<i>"Numero de exemplo"</i> é divisivel por <b>{0}</b>', 'Compara se o valor da propriedade "Numero de exemplo" é divisivel pelo parametro.', 'cmpNumberExample')

////////////////////////////////////////
// Expressions

/*
AddExpression(
	id,
	ef_none,// ef_deprecated, ef_return_number, ef_return_string, ef_return_any, ef_variadic_parameters
	'Este campo não é usado.',
	Categoria,
	NomeDaExpressão,
	Descrição
)
*/

AddExpression(0, ef_return_number, '{0}', 'Exemplo', 'randomNumber', 'Retorne um numero aleatorio.')

AddExpression(1, ef_return_string, '{0}', 'Exemplo', 'getExample', 'Retorne o valor de this.exemplo.a')

AddNumberParam('1,7,8,6,2,...', 'Insira alguns numeros para soma-los.')
AddExpression(2, ef_variadic_parameters, '{0}', 'Somatoria', 'somar', 'Retorne a soma de varios numeros.')

AddExpression(3, ef_return_number, '{0}', 'Extra', 'getLoopCount', 'Retorne o valor atual de this.loopCount.')

AddExpression(4, ef_return_number, '{0}', 'Exemplo de prorpiedade', 'getNumeberExample', 'Retorne o valor da propriedade "Numero de exemplo".')



////////////////////////////////////////
ACESDone()

const property_list = [
	// new cr.Property(ept_integer,		'Nome',	VALOR_INICIAL,	'Descrição'),
	// new cr.Property(ept_float,		'Nome',	VALOR_INICIAL,	'Descrição'),
	// new cr.Property(ept_text,		'Nome',	'VALOR_INICIAL','Descrição'),
	// new cr.Property(ept_color,		'Nome',	VALOR_INICIAL,	'Descrição'),
	// new cr.Property(ept_font,		'Nome',	'Arial,-16', 	'Descrição'),
	// new cr.Property(ept_combo,		'Nome',	'Item 1',		'Descrição', 'Item 1|Item 2|Item 3'),
	// new cr.Property(ept_link,		'Nome',	link_text,		'Descrição', 'escolha entre firstonly ou worldundo'),
	// new cr.Property(ept_section,		'Nome',	'',				'Descrição'),

	/* 0 */ new cr.Property(ept_integer,		'Numero de exemplo',	13,	'Apenas um exemplo de propriedade numeria.'),
	/* 1 */ new cr.Property(ept_link,		'DeehLeh',	'Click aqui',		'Entre na itch da DeehLeh.', 'firstonly')
]

function CreateIDEObjectType() {
	return new IDEObjectType()
}

function IDEObjectType() {
	assert2(this instanceof arguments.callee, 'Constructor called as a function')
	
	return {
		CreateInstance: function(instance)
		{
			return new IDEInstance(instance)
		}
	}
}

function IDEInstance(instance, type) {
	assert2(this instanceof arguments.callee, 'Constructor called as a function')

	this.instance = instance
	this.type = type
	this.properties = {}

	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value
}

IDEInstance.prototype = {
	OnCreate: function () {
		// Chamado quando criado na engine.
		//this.instance.SetHotspot(new cr.vector2(0, 0))
	},
	
	OnInserted: function() 	{
		// Chamado quando inserido através da caixa de diálogo 'Inserir Objeto' pela primeira vez.
		//this.instance.SetSize(new cr.vector2(72, 24))
	},

	OnDoubleClicked: function() {
		// Chamado quando clicado duas vezes no layout.
	},

	OnPropertyChanged: function(property_name) {
		// Chamado depois que uma propriedade foi alterada na barra de propriedades.
		if (property_name == 'DeehLeh') alert('https://deehleh.itch.io')
	},

	OnRendererInit: function(renderer) {
		// Usado para objetos renderizados, carregar fontes e/ou texturas.
	},

	Draw: function(renderer) {
		// Chamado para desenhar a si mesmo no editor de um objeto de layout.
	/*
		const q = this.instance.GetBoundingQuad()
		renderer.Quad(q, 100)
		renderer.Outline(q, cr.RGB(0,0,0))
	*/
	},

	OnRendererReleased: function(renderer) {
		// Usado para 'liberar' objetos renderizados, carregar fontes e/ou texturas.
	}
}