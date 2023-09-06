export function test(element) {
    //TODO
    //en meddelande historik
    
    //DONE
    //max 10 meddelanden
    //inte skicka tomma meddelanden
    //lyssna på enter
    //töm fältet
    //slashcommando. /h för hjälp
    
    let history = []
    const input = element.querySelector('#msg')
    const send = element.querySelector('#send')
    send.addEventListener('click', (e) => {
        e.preventDefault()
        sendMsg();
    })

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMsg();
        }
    })


    function sendMsg() {
        const msg = element.querySelector('#msg').value;
        const msglist = element.querySelector('#msglist')
        const li = document.createElement('li')
        li.textContent = msg
        if (msg === '/h' || msg === '/help') {
            element.querySelector("#help").textContent = "Du får ingen hjälp, sorry"
        } else if (msg !== '') {
            msglist.appendChild(li)
            history.push({
                meddelande: msg, 
                datum: Date.now,
            })
            console.log(history)
        } else {
            //maybe pop-up or something
        }

        if (msglist.children.length > 10) {
            msglist.removeChild(msglist.children[0]);
        }

        element.querySelector('#msg').value = '';
    }

}