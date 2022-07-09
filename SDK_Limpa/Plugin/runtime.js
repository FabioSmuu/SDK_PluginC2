"use strict";

(function () {
	assert2(cr, 'cr namespace not created')
	assert2(cr.plugins_, 'cr.plugins_ not created')

	const pluginId = 'SDK_Limpa_p'

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
	class Actions {}

	//////////////////////////////////////
	// Conditions
	class Conditions {}

	//////////////////////////////////////
	// Expressions
	class Expressions {}

	Object.setPrototypeOf(plugin.prototype, {
		acts: new Actions,
		cnds: new Conditions,
		exps: new Expressions
	})
}())
