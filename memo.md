- 쇼핑몰 파트2 이벤트 고급제어
- MV 만들기
- 효과적인 이벤트 제어 debounce, throttling


Object.assign()
Object.create()

foreach / for..in.. / for..of.. 차이?


[MouseEvent Properties and Methods](https://www.w3schools.com/jsref/obj_mouseevent.asp) : 표로 정리되어 있어 보기좋다.
[MouseEvent(mdn)](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) : 내용이 한번에 보기 좋게 있지는 않다.

### Symbol 
> Standard built-in objects

Symbol is a built-in object whose constructor returns a symbol primitive - also called a Symbol value or just a Symbol - that's guaranteed to be unique. ECMAScript 새 버전에서 추가된 원시타입이다.

- unique property keys to an object... won't collide with other..
- hidden.. enables a form of weak encapsulation, or a weak form of information hiding. encapsulation이 뭐지??


### Class

자바스크립트에서 클래스는 장식인가?
https://stackoverflow.com/questions/36419713/are-es6-classes-just-syntactic-sugar-for-the-prototypal-pattern-in-javascript

### JavaScript Hoisting

**Hoisting**

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

Hoisting allows functions to be safely used in code before they are declared.

### TDZ(Temporal Dead Zone)

Error 참고 : controller.js:62 Uncaught ReferenceError: Cannot access 'searchInput' // TDZ(Temporal Dead Zone)의 영향 문제??

### 참고링크

mvc 패턴 참고1 : https://www.taniarascia.com/javascript-mvc-todo-app/

call a class method with addeventlistener : https://stackoverflow.com/questions/21298918/is-it-possible-to-call-a-class-method-with-addeventlistener