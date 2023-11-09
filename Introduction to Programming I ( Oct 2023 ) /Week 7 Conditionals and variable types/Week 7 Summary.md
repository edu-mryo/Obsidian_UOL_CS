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

if (phone_battery <-)

```