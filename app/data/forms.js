export default
[{
	"id":0,
	"name":"Create New",
	"fields":[
		{"id":1,"name":"Enter label", "value": "", "type": "text", "isDefault": true, "isMandatory": true},
		{"id":2,"name":"Choose type", "value": "",  "type":"enumeration", "isDefault": true, "isMandatory": true,
		"optionsList":[{"id":1,"optName":"text"},{"id":2,"optName":"number"},{"id":3,"optName":"enumeration", "relatedFields":[3]}]},
		{"id":3,"name":"Enter enumeration options", "value": "",  "type": "text", "isDefault": false}
	]
},
{
	"id":1,
	"name":"Contact Form",
	"fields":[
		{"id":1,"name":"Enter Name", "value": "",  "type": "text", "isDefault": true, "isMandatory": true},
		{"id":2,"name":"Enter Email", "value": "",  "type": "text", "isDefault": true, "isMandatory": true},
		{"id":3,"name":"Enter Phone", "value": "",  "type": "number", "isDefault": true, "isMandatory": true},
		{"id":4,"name":"Enter Location", "value": "",  "type":"enumeration", "isDefault": true, "isMandatory": true,
		"optionsList":[{"id":1,"optName":"India"},{"id":2,"optName":"Europe"},{"id":3,"optName":"Americas", "relatedFields":[5]}]},
		{"id":5,"name":"Enter Country", "value": "",  "type": "text", "isDefault": false, "isMandatory": true}
	]
}]