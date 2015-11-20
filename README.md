# Installation

~~~
$ npm install express --save
$ npm install express-generator -g --save
$ npm install serve-favicon -g --save
$ npm install cookie-parser --save
$ npm install body-parser --save
$ npm install debug --save
$ npm install jade --save
    ...
$ express myapp
$ npm install
    ...
$ npm start
    ... then visit http://127.0.0.1:3000/testing/sample01.js
    ... then visit http://127.0.0.1:3000/testing/sample01.css
    ... then visit http://127.0.0.1:3000/
~~~

# Result

- 在 readyState Complete 之前會觸發 DOMContentLoaded！
- 並且所有 Blocking JavaScript 包含 CSS 載入與 JavaScript 載入 From Server 後才執行的都會完成！
- 但是唯獨 Callback 類型的 JavaScript 可能會在 Complete 後才執行完畢！
- 如果要確保都在 Complete 後才執行請加到 $(document).ready 後就可以確保該 Callback 會在之後才執行！
- (*)從底下的觸發流程來看畫面讀取 Render 完成可能要設定在 $(window).load 事件下(即readyState=complete)！

![Alt text](https://raw.githubusercontent.com/scott1028/HTML-JavaScript-CSS-Loaded-Exected-Testing/master/sample01.jpg "Sample01 View")

# Reference

- http://jade-lang.com/reference/includes/
- http://stackoverflow.com/questions/5858218/how-can-i-render-inline-javascript-with-jade
