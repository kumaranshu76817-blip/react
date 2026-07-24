import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


function myApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click to me vist google'
// }

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to vist google'
)

const anotherElement = (
    <a href="http://google.com" target='_blank'>vist element</a>
)

ReactDom.createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
