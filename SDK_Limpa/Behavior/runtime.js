"use strict";

(function () {
	assert2(cr, 'cr namespace not created')
	assert2(cr.behaviors, 'cr.behaviors not created')

	const behaviorId = 'SDK_Limpa_b'

	class behavior {
		constructor(runtime) {
			this.runtime = runtime
			this.Type = Type
			this.Instance = Instance
		}
	}

	cr.behaviors[behaviorId] = behavior

	class Type {
		constructor(behavior, objtype) {
			this.behavior = behavior
			this.objtype = objtype
			this.runtime = behavior.runtime
		}

		onCreate() {
			//
		}
	}

	class Instance {
		constructor(type, inst) {
			this.type = type
			this.behavior = type.behavior
			this.inst = inst
			this.runtime = type.runtime
		}

		onCreate() {
			//
		}
		
		onDestroy() {
			//
		}

		tick() {
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

	Object.setPrototypeOf(behavior.prototype, {
		acts: new Actions,
		cnds: new Conditions,
		exps: new Expressions
	})
}())
