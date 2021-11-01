function GetPluginSettings() {
	return {
		'name':			'SDK limpa',
		'id':			'SDK_Limpa ',
		'version':		'0.1',
		'description':	'Esta SDK é limpa para uso',
		'author':		'DeehLeh',
		'help url':		'https://deehleh.itch.io',
		'category':		'DeehLeh',
		'type':			'object',
		'flags':		0
	}
}



////////////////////////////////////////
// Actions



////////////////////////////////////////
// Conditions



////////////////////////////////////////
// Expressions



////////////////////////////////////////
ACESDone()

const property_list = []

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
		//
	}
}