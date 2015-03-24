# ami-s-conf
Asterisk Manager Interface configured with s-conf

## Usage

```js
var ami = require('ami-s-conf');
//Config is loaded from the config file passed in argv[2]. It looks for an entry named "ami".

ami.DBGet('myFamily', 'myKey')
	.done(function(value){
		console.log('RESULT:', value);
	}, function(err){
		console.error('ERROR:', err.stack||err);
	});
```
