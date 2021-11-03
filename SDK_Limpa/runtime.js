"use strict";

(function () {
	assert2(cr, 'cr namespace not created')
	assert2(cr.plugins_, 'cr.plugins_ not created')

	const pluginId = 'SDK_Limpa'

	class plugin {
		constructor(runtime) {
			this.runtime = runtime
		}
	}

	cr.plugins_[pluginId] = plugin

	class Type {
		constructor(plugin) {
			this.plugin = plugin
			this.runtime = plugin.runtime
		}

		onCreate() {
			//
		}
	}

	class Instance {
		constructor(type) {
			this.type = type
			this.runtime = type.runtime
		}

		onCreate() {
			//
		}
		
		onDestroy() {
			//
		}
	}

	//////////////////////////////////////
	// Actions
	const Actions = {}

	//////////////////////////////////////
	// Conditions
	const Conditions = {}

	//////////////////////////////////////
	// Expressions
	const Expressions = {}

	Object.setPrototypeOf(plugin.prototype, { Type, Instance, acts: Actions, cnds: Conditions, exps: Expressions })
}())
