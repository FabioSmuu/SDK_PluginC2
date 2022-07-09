"use strict";

/*

	- Caso queira criar behavior, procure por cr.plugins_ e troque por cr.behaviors_

	- Procure por 'NomeInternoNaRuntime' para inserir alterar o id do plugin para o mesmo configurado na edittime.

	- O uso de this esta bem visivel.
	Dentro da class Type, a this retornará os metodos e variaveis da class Type.
	Já a class Instance e as const Actions, Conditions e Expressions mdua this para a class Instance.
	Você pode facilmente criar uma variavel de instancia global em qualquer um destes campos.

	- A linha: this.runtime.trigger(Conditions.cndsExampleName, this)
    pode ser ser usado em qualquer campo do plugin.

    - Para pegar as propriedades criadas na edittime, use this.properties[index]
    Onde index tem de ser a posição correta da propriedade, podendo ser atribuida a variaveis.
    Exemplo:		this.vidas = this.properties[0]

    - Propriedades não podem ser editadas usando this.properties[0] = valor,então atribua ela em alguma variavel.

    - Explore a cr, pois ela é global e fornece todos recursos da engine, inclusive a system.js

    - Os nomes das ACEs devem ser o mesmo usado na edittime,
    assim como os parametros devem ser inseridos de forma correta.

*/

// O uso desta function é para a compatibilidade de export da engine.
(function() {
	assert2(cr, 'cr namespace not created')
	assert2(cr.plugins_, 'cr.plugins_ not created')

	const pluginId = 'NomeInternoNaRuntime'

	class plugin {
		constructor(runtime) {
			this.runtime = runtime
			this.Type = Type
			this.Instance = Instance
		}
	}

	cr.plugins_[pluginId] = plugin

	class Type {
		constructor(plugin) {
			this.plugin = plugin
			this.runtime = plugin.runtime
		}

/*
		updateAllCurrentTexture() {}
		onLostWebGLContext() {}
		onRestoreWebGLContext() {}
		loadTextures() {}
		unloadTextures() {}
		preloadCanvas2D(ctx) {}
		finish(do_pick) {}
*/
		onCreate() {
			if (this.is_family) return
		}
	}

	//Exemplo do uso de promises proposto por https://github.com/DutraGames
	const examplePromise = new Promise((resolve, reject) => resolve('example!!!'))

	class Instance {
		constructor(type) {
			this.type = type
			this.runtime = type.runtime
		}
/*
		animationFinish(reverse) {}
		getNowTime() {}
		tick() {}
		getAnimationByName(name) {}
		getAnimationBySid(sid) {}
		doChangeAnim() {}
		doChangeAnimFrame() {}
		OnFrameChanged(prev_frame, next_frame) {}
		draw(ctx) {}
		drawGL_earlyZPass(glw) {}
		drawGL(glw) {}
		getImagePointIndexByName(name) {}
		getImagePoint(imgpt, getX) {}
*/
		async onCreate() {
			//Criar a propriedades numero de exemplo.
			//this.numeroExemplo = this.properties[0]

			//crie variaveis internas aqui.
			this.exemplo = {a:'b'}

			//Exemplo do uso de promises    
			const promise = await examplePromise
			console.log(promise)

			//this.runtime.tickMe(this) //ative para usar o metodo tick()
		}
		
		onDestroy() {
			//
		}
		
		saveToJSON() {
			return {
				'exemplo': this.exemplo
			}
		}
		
		loadFromJSON(o) {
			this.exemplo = o.exemplo
		}

		getDebuggerValues(info) {
			info.push({
				title: 'Exemplo!',
				properties: [
					//{name: 'Estrutura', value: 'exemplo...'},
					{ name: 'Estrutura', value: JSON.stringify(this.exemplo) },
					{ name: 'Exemplo', value: this.numeroExemplo }
				]
			})
		}
		
		onDebugValueEdited(header, name, value) {
			if (name === 'Estrutura') this.exemplo = JSON.parse(value)
		}
	}

	//////////////////////////////////////
	// Actions
	class Actions {
		alertEmit(mensage) {
			alert(mensage)
		}

		activateTrigger() {
			this.runtime.trigger(Conditions.exampleTrigger, this)
			console.log('A condição "exampleTrigger" foi ativada.')
		}

		loopStop() {
			//Criei esta variavel apenas para parar o loop.
			this.stoopLoop = true
		}

		sertNumberExample(number) {
			//Muda o valor da variavel que representa a propriedade "Numero de exemplo"
			this.numeroExemplo = number
		}

/*
		exampleName(parametros, parametros, parametros, ...parametros) {
			//Qualquer ação, condição ou expressão pode usar este codigo, mas achei viavel colocar em ações.
			//Ative uma condição que tenha a flag cf_trigger na edittime, apenas inserindo o nome interno.
			this.runtime.trigger(Conditions.cndsExampleName, this)
		}
*/
	}

	//////////////////////////////////////
	// Conditions
	class Conditions {
		exampleTrigger() {
			console.log('Condição ativada!')
			return true
		}

		ObjectTest(object) {
			//Manipula objeto por instancia.
			console.log('object', object)

			//Separa o objeto para o uso de multiplas intancias.
			const sol = object.getCurrentSol()
			console.log('sol', sol)

			//Determina se será pego um objeto especifico ou todo.
			const instances = sol.select_all ? sol.type.instances : sol.instances
			console.log('instances', instances)

			//Retorna true ou false, caso tenha ou não o objeto selecionado.
			const boolean = instances.some(instance => {
				//Indica a runtime que o objeto selecionado, será manipulado.
				sol.pick_one(instance)
				console.log('instance', instance)
			})

			console.log('boolean', boolean)

			//Apenas o retorno se o objeto foi encontrado ou não.
			return boolean
		}

		compareValues(primeiroNumero, cmp, segundoNumero) {
			return cr.do_cmp(primeiroNumero, cmp, segundoNumero)	
		}

		loopExample(count) {
			//Esta variavel poderia ser criada na onCreate da class Instance, mas criei aqui para exemplo.
			this.loopCount = 0

			//Pega o evento atual que esta no tick.
			const currentEvent = this.runtime.getCurrentEventStack().current_event

			//Coloquei em uma funçãosó para chamar dentro do forEach.
			const loop = currentEvent => {
				//Armazena as moridicações para uso.
				const modifyEvent = currentEvent.solModifiers

				//Indica a runtime que o evento será modificado.
				this.runtime.pushCopySol(modifyEvent)

				//Fz a nova chamada para o evento.
				currentEvent.retrigger()

				//Atualiza informações do evento.
				this.runtime.popSol(modifyEvent)
			}

			//Variavel criada apenas usar "some", pois o "return true" quebra o loop.
			const example = Array(count).fill(0)
			example.some((_, value) => {
				//Verifica se a ação loopStop deixou a variavel stoopLoop como true. 
				if (this.stoopLoop) return true

				//Chama a função que irá ativar o evento a cada loop.
				loop(currentEvent)

				//Atribui +1 ao valor da variavel.
				this.loopCount = value+1
			})
		}

		cmpNumberExample(number) {
			//Compara se o valor da variavel que representa a propriedade "Numero de exemplo"
			return !!this.numeroExemplo%number
		}

/*
		exampleName(parametros, parametros, parametros, ...parametros) {
			//cr significa Construct Runtime, e é responsavel por tudo oque tem no arquivo system.js
			console.log(cr)

			//Abaixo podemos ver que a runtime esta comparando se o parametro1 é maior, menor ou igual... ao parametro2
			//Isso retornará true ou false. 
			return cr.do_cmp(parametro1, parametro, parametro2)	

			//Uma condição sempre deve retornar um boolean, ou sejá se a saida é verdadeira ou falsa.
			//Isso faz a engine entender que uma condição foi ativa.
			//No caso da everytick, ela é sempre true.
			return true

			//Uma condição que possua a flag cf_trigger na edittime, sempre deve retornar true, mas não é regra.
		}
*/
	}

	//////////////////////////////////////
	// Expressions
	class Expressions {
		randomNumber() {
			const number = Math.floor(Math.random())
			ret.set_int(number)
		}

		getExample(ret) {
			ret.set_any(JSON.stringify(this.exemplo.a))
		}

		somar(ret, ...numeros) {
			console.log(numeros)

			const calculo = (somatoria, numero) => somatoria + numero
			const resultado = numeros.reduce(calculo)

			ret.set_float(resultado)
		}

		getLoopCount(ret) {
			//Retorna a variavel loopCount criada na condição loopExample.
			ret.set_int(this.loopCount || 0)
		}

		getNumeberExample(ret) {
			//Retorna o valor da variavel que representa a propriedade "Numero de exemplo".
			ret.set_int(this.numeroExemplo)
		}
		
		mudarAngulo(objeto, angulo) {
			const sol = objeto.getCurrentSol() //separa todas as instancias do objeto selecionado.
			const instances = sol.select_all ? sol.type.instances : sol.instances //seleciona todas as copias da instancia que são existentes.
			const [inst] = instances //pega a primeira instancia criada.

			console.log(instances)

			inst.angulo = cr.to_radians(angulo) //tive de usar o metodo "to radians" para que o valor inserido no parametro será convertido na forma correta do angulo.
			inst.set_bbox_changed() //a função "set bbox changed" é usada para levar as alterações da instancia ao canvas.
		}

/*
		exampleName(ret, parametros, parametros, parametros, ...parametros) {
			//ret é usado como o return, mas você define o valor de saida para a engine.
			console.log(ret)

			ret.set_int(1337) //numero
			ret.set_float(0.7) //numero separados por pontos
			ret.set_string('Texto') //texto
			ret.set_any('Numero ou Texto') //qualquer valor
		}
*/
	}

	Object.setPrototypeOf(plugin.prototype, {
		acts: new Actions,
		cnds: new Conditions,
		exps: new Expressions
	})
}())
