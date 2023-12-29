### What is Conditional Statements ?
A statement which will trigger / execute additional code only if a certain requirement is triggered 

#### Pseudo Code Example
-  `If there are no eggs in my fridge, get some`
	- The action is triggered only when you don't have any egg in the fridge. 

- `If tommorow is Monday, go to the gym in the morning. If tomorrow is Tuesday, then go to the gym in the afternoon`
	- The logic provides alternative action if it does not meet the first condition.

- `If my Phone battery is below 10%, charge it for 30 minutes. If it is between 11% to 50%, then charge it for 10 minutes. For anything else, don't charge my phone.`
	- The logic provides safety-net logic which gets triggered if the condition did not meet any requirement.  In this case, if the phone has 60% of battery left, then the safety-net condition will get triggered . 

#### Implementing the actual code

- Standard IF statement
```js

var egg = 0

if(egg ==0){
	console.log('No Eggs. Buy some from the supermarket')
}

```

- IF / ELSE IS statement
```js

var day = 'Monday';

if(day =='Monday'){
	console.log("Go to the gym in the morning");
}else if(day =='Tuesday'){
	console.log("Go to the gym in the afternoon")
}

```

- IF / ELSE IF / ELSE statement 
```js

var phone_battery = 70;

if (phone_battery >0 && phone_battery <=10){
	console.log("Battery Low. Charging for 30 minugtes")
}else if (phone_battery >10 && phone_battery <=50){
	console.log("Battery medium. Charging for 10 minutes")
}else{
	console.log("Battery relatively high. Not charging")
}

```

#### Additional logic operator to remember 

1. `==`  : Return `true` if both conditions are the same. If not, return `false`
2. `!=` : Return `true` if both conditions are not the same. If it is , return `true`
3. `&&` : if both sides are `true` , then return `true` . If either side is `false` then return `false`
4. `||` : If either one side is `true`, then return true. If both sides are `false` then return `false`

#### Debugger Mindset
- Coder spend more time in debugging than developing (In most cases)
- Development is creative mode, debugging is investigator mode. 

##### Here are some debugging basics
1. Check the console error code
2.  Check syntax, variables and values. Any spelling mistakes ? Did you declare functions objects correctly ? Any missing brackets ?
3. Add comments from top to bottom to explain what you are doing. 