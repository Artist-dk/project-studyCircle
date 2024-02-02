import React from 'react'

export default function Tutorial() {
  return (
    <div className='mid'>
    <div className="box-1">
      <h1> Introduction</h1>
      <p>JavaScript is popular, powerfull and lightweight client-side scripting language. Also, It is object oriented and interpreted programming language. A script means set of instuctions that a computer can follow. And, interpreted language means, when scripts gose to run then interpreter decodes it staement wise.</p>
      <p>JavaScript can be make more respondig web pages by traping user events triggered such as button click and draging pointer over content of the web pages. It can be manipulate all HTML markups and CSS styles. It can be used to add text and attribute, or remove them. It can be used to give atractive animations in the background of the pages to improve atractive viwe of web page.</p>
      <p>JavaScript can find what you have entered in input whose id attribute has particular value and it can be check entered inputs are valid or not before the submition of forms.</p>
      <p>JavaScript is free to use, it dose not need to get expensive development tools. You can start it's development from notepad text editor and web-browser.</p>
    </div>
    <hr />
    <div className="box-1">
      <h1>Implimentation</h1>
      <p>There are two ways of implimentation of JavaScript in web pages. First way of implimantation of JavaScript is within the HTML file in a &#60;script&#62;  &#60;/script&#62; tag which tells to browser to find and load the JavaScript code from here. as follows :</p>
      <div className="sbox-1">
        <code>
          &#60;html&#62;<br />
          &#60;head&#62;<br />
          &#60;script&#62;<br />
          &nbsp;&nbsp;JavaScript code will be written here<br />
          &#60;/script&#62;<br />
          &#60;/head&#62;<br /><br />
          &#60;body&#62;<br />
          &#60;/body&#62;<br />
          &#60;/html&#62;
        </code>
      </div>
      <p></p>
      <p>Another way of implimatation of JavaScript code is give the attribute value which is path of JavaScript source code file in which JavaScript code is written with src attribute to the &#60;script&#62;  &#60;/script&#62; tag. The src attribute gives the path to the browser then it can find this file and load it from the given path. You can be link many files to single web page. You can link the source file of JavaScript code anywhere in HTML source code as follows :</p>
      <div className="sbox-1">
        <code>
          &#60;script src="script.js" type="text/javascript" language="javascript"&#62;&#60;/script&#62;
        </code>
      </div>
      <p>In the above example script.js is file name in which javascript code is written. and this file is stored in the same folder in which HTML source file is stored.</p>
      <p>If the JavaScript source code file is stored within the folder whose name javascript and this folder occurs in same folder in which HTML source file is stored. then you should be link javascript source code file as shown below :</p>
      <div className="sbox-1">
        <code>
          &#60;script src="javascript/script.js" type="text/javascript" language="javascript"&#62;&#60;/script&#62;
        </code>
      </div>
      <p>If the JavaScript source code file is stored in the folder outside of the folder in which HTML source code file is stored, then you should be link javascript source code file as shown below :</p>
      <div className="sbox-1">
        <code>
          &#60;script src="../script.js" type="text/javascript" language="javascript"&#62;&#60;/script&#62;
        </code>
      </div>		
      <p>Execution of scripts is depends on the placement of javascript code. If JavaScript is placed in the head of the HTML then it executs before the decoding of body of HTML. Let's see example on this as follows :</p>
      <div className="sbox-1"> 
        <code>
          &#60;html&#62;<br />
          &#60;head&#62;<br />
          &nbsp;&nbsp;&#60;title&#62;JS-TEST&#60;title&#62;<br />
          &#60;script&#62;<br />
          &nbsp;&nbsp;document.write('This contents belongs form the JavaScript code');<br />
          &#60;/script&#62;<br />
          &#60;/head&#62;<br /><br />
          &#60;body&#62;<br />
          &nbsp;&nbsp;&#60;p&#62;This content belongs from the body&#60;/p&#62;<br />
          &#60;/body&#62;<br />
          &#60;/html&#62;
        </code>
      </div>
      <p>If JavaScript code is placed after the body of HTML then it executs after the decoding of body of HTML, In this case you can see web page before the execution of javascript code.</p>
      <div className="sbox-1"> 
        <code>
          &#60;html&#62;<br />
          &#60;head&#62;<br />
          &nbsp;&nbsp;&#60;title&#62;JS-TEST&#60;title&#62;<br />
          
          &#60;/head&#62;<br /><br />
          &#60;body&#62;<br />
          &nbsp;&nbsp;&#60;p&#62;This content belongs from the body&#60;/p&#62;<br />
          &#60;/body&#62;<br />
          <br />
          &#60;script&#62;<br />
          &nbsp;&nbsp;document.write('This contents belongs form the JavaScript code');<br />
          &#60;/script&#62;<br />
          &#60;/html&#62;
        </code>
      </div>
    </div>
    <hr />
    
    <div className="box-1">
      console.assert()
    </div>
    <hr />
    
    <div className="box-1">
      console.log()
    </div>
    <hr />
    
    <div className="box-1">
      console.count()
    </div>
    <hr />
    
    <div className="box-1">
      console.countReset()
    </div>
    <hr />
    
    <div className="box-1">
      console.debug()
    </div>
    <hr />
    
    <div className="box-1">
      console.dir()
    </div>
    <hr />
    
    <div className="box-1">
      console.dirxml()
    </div>
    <hr />
    
    <div className="box-1">
      console.error()
    </div>
    <hr />
    
    <div className="box-1">
      console.warn()
    </div>
    <hr />
    
    <div className="box-1">
      console.clear()
    </div>
    <hr />
    
    <div className="box-1">
      console.time()
    </div>
    <hr />
    
    <div className="box-1">
      console.timeEnd()
    </div>
    <hr />
    
    <div className="box-1">
      console.table()
    </div>
    <hr />
    
    <div className="box-1">
      console.group()
    </div>
    <hr />
    
    <div className="box-1">
      console.groupEnd()
    </div>
    <hr />
    
    <div className="box-1">
      console.groupCollpsed()
    </div>
    <hr />
    
    <div className="box-1">
      console.info()
    </div>
    <hr />
    
    <div className="box-1">
      console.profile()
    </div>
    <hr />
    
    <div className="box-1">
      console.profileEnd()
    </div>
    <hr />
    
    <div className="box-1">
      console.timeLog()
    </div>
    <hr />
    
    <div className="box-1">
      console.timeStamp()
    </div>
    <hr />
    
    <div className="box-1">
      console.trace()
    </div>
    <hr />
    
    <div className="box-1">
      console.warn()
    </div>
    <hr />
    
    <div className="box-1">
      Window.console
    </div>
    <hr />
    
    <div className="box-1">
      WorkerGlobalScope.console
    </div>
    <hr />
    
    <div className="box-z pad-10">
      <h1>Window</h1>
    </div>
    <hr />
    <div className="box-1">
      <h2>prompt</h2>
      <p>When we need to get some input form user, then we can use promt. To give the message of to understand what we expects from user also he was able to give accurate feedback of our message.</p>
      <p>Let's see how can get the users details :</p>
      <div className="sbox-1">
        <code>
          var name, age;<br />
          <br />
          name = prompt('Enter name :');<br />
          age = prompt('Enter age :');<br />
          <br />
          document.write('Wellcome! ' + name + '&#60;br /&#62;Your age is ' + age + 'now.');<br />
        </code>
      </div>
      <p>The another useful example of prompt is given below.</p>
      <div className="sbox-1">
        <code>
          var name, age;<br />
          <br />
          name = prompt('Enter name :');<br />
          age = prompt('Enter age :');<br />
          <br />
          if(age &#62; 18) {<br />
          // document.write('Wellcome! ' + name + ' You are eligible to vote');<br />
          } <br />
          else {<br />
          // document.write('Wellcome! ' + name + ' You are not eligible to vote');<br />
          }
        </code>
      </div>
    </div>
    <hr />
    
    <div className="box-1">
      <h1>Property</h1>
      window.innerHeight
    </div>
    <hr />
    
    <div className="box-1">
      window.innerWidth
    </div>
    <hr />
    
    <div className="box-1">
      window.pageXOffset
    </div>
    <hr />
    
    <div className="box-1">
      window.pageYOffset
    </div>
    <hr />
    
    <div className="box-1">
      window.screenX
    </div>
    <hr />
    
    <div className="box-1">
      window.screenY
    </div>
    <hr />
    
    <div className="box-1">
      window.location
    </div>
    <hr />
    
    <div className="box-1">
      window.document
    </div>
    <hr />
    
    <div className="box-1">
      window.history
    </div>
    <hr />
    
    <div className="box-1">
      window.history.length
    </div>
    <hr />
    
    <div className="box-1">
      window.screen
    </div>
    <hr />
    
    <div className="box-1">
      window.screen.width
    </div>
    <hr />
    
    <div className="box-1">
      window.screen.height
    </div>
    <hr />
    
    <div className="box-1">
      <h1>Method</h1>
      window.alert()
    </div>
    <hr />
    
    <div className="box-1">
      window.open()
    </div>
    <hr />
    
    <div className="box-1">
      window.print()
    </div>
    <hr />
    
    
    <div className="box-1">
      document.getElementById()
    </div>
    <hr />
    
    <div className="box-1">
      document.getElementsByTagName()
    </div>
    <hr />
    
    <div className="box-1">
      document.getElementsByName()
    </div>
    <hr />
    
    <div className="box-1">
      document.getElementsByTagNameNS()
    </div>
    <hr />
    
    <div className="box-1">
      document.getElementsByClassName()
    </div>
    <hr />
    
    <div className="box-1">
      document.getSelection()
    </div>
    <hr />
    
    <div className="box-1">
      element.innerHTML
    </div>
    <hr />
    
    <div className="box-1">
      element.attribute
    </div>
    <hr />
    
    <div className="box-1">
      element.style.property
    </div>
    <hr />
    
    <div className="box-1">
      element.setAttribute(attribute, value)
    </div>
    <hr />
    
    <div className="box-1">
      document.createElement(element)
    </div>
    <hr />
    
    <div className="box-1">
      document.removeChild(element)
    </div>
    <hr />
    
    <div className="box-1">
      document.appendChild(element)
    </div>
    <hr />
    
    <div className="box-1">
      document.replaceChild(new, old)
    </div>
    <hr />
    
    <div className="box-1">
      {/* document.getElementById('id').onclick = function() {code}; */}
    </div>
    <hr />
    
    <div className="box-1">
      document.anchors
    </div>
    <hr />
    
    <div className="box-1">
      document.applets
    </div>
    <hr />
    
    <div className="box-1">
      document.baseURI
    </div>
    <hr />
    
    <div className="box-1">
      document.body
    </div>
    <hr />
    
    <div className="box-1">
      document.cookie
    </div>
    <hr />
    
    <div className="box-1">
      document.doctype
    </div>
    <hr />
    
    <div className="box-1">
      document.documentElement
    </div>
    <hr />
    
    <div className="box-1">
      document.documentMode
    </div>
    <hr />
    
    <div className="box-1">
      document.documentURI
    </div>
    <hr />
    
    <div className="box-1">
      document.domain
    </div>
    <hr />
    
    <div className="box-1">
      document.domConfig
    </div>
    <hr />
    
    <div className="box-1">
      document.embeds
    </div>
    <hr />
    
    <div className="box-1">
      document.forms
    </div>
    <hr />
    
    <div className="box-1">
      document.head
    </div>
    <hr />
    
    <div className="box-1">
      document.images
    </div>
    <hr />
    
    <div className="box-1">
      document.implementation
    </div>
    <hr />
    
    <div className="box-1">
      document.inputEncoding
    </div>
    <hr />
    
    <div className="box-1">
      document.lastModified
    </div>
    <hr />
    
    <div className="box-1">
      document.links
    </div>
    <hr />
    
    <div className="box-1">
      document.readyState
    </div>
    <hr />
    
    <div className="box-1">
      document.referrer
    </div>
    <hr />
    
    <div className="box-1">
      document.scripts
    </div>
    <hr />
    
    <div className="box-1">
      document.strictErrorChecking
    </div>
    <hr />
    
    <div className="box-1">
      document.title
    </div>
    <hr />
    
    <div className="box-1">
      document.URL
    </div>
    <hr />
    </div>
  )
}
