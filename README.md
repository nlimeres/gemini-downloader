# gemini-downloader
A simple script to download Gemini chats. Usefull when you run on multiple accounts.


Simplest way to use it daily:

1. Save it as a bookmark in Google Chrome
2. When you are on Gemin, just press the button on the navbar and you will get your .txt file right on your Downloads folder

```js
javascript:(function(){let t="";document.querySelectorAll("user-message, model-message, [class*='message-content']").forEach(e=>{let n=e.innerText.trim();n&&(t+=n+"\n\n-------------------\n\n")}),t.trim()||(t=document.body.innerText);let e=new Blob([t],{type:"text/plain;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="Gemini_Chat_"+(new Date).toISOString().slice(0,10)+".txt",document.body.appendChild(n),n.click(),document.body.removeChild(n)})();

```