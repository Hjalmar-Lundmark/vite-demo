import './style.css'
import { test } from './test.js'

document.querySelector('#app').innerHTML = `
  <p id="help"></p>
  <input id="msg" name="msg" type="text">
  <button id="send">Send</button>  
  <ul id="msglist"></ul>
`

test(document.querySelector('#app'))
