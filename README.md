# javascript library for SnLOg

### Instalation:


npm:
``` 
 npm install --save sn_log
```

usage:

```javascript
  import sn_log from 'sn_log'
  new sn_log('API_KEY')
         .log('groupName','message', options, (error, result) =>{
		    // check error or result
         });
```


options:
* label : (String) => the name of label created in the group ("warning", "success")
