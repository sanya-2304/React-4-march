import React from 'react'
import ReactDOM from 'react-dom/client.js'
import App from './App.jsx'

function MyApp(){
    return(
            <div>
        <a href="https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4">
            youtube open karo
        </a></div>
    )
}
const ReactEle=React.createElement(
    'a', //specifies tag
    {href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4&t=1439s', target: '_blank'}, 'open jootoob' //for properties or setting attributes
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    {/* ReactEle */}
    {/* <MyApp/> */}
    <App />
   </>
)
