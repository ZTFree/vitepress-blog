```react
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render('<div>hello</div>',{id:'x'})



const root = ReactDOM.createRoot(document.querySelector('#root'))
const btnNode = React.createElement('button', {key:1},'Button')
const pNode = React.createElement('p',{key:2},'pppp')
root.render(divNode)
```

