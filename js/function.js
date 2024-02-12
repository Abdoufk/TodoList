//item
export function createItem(content){
    const div = document.createElement('div')
    const input = document.createElement('input')
    const span = document.createElement('span')
    const btn = document.createElement('button')
    
    div.classList.add('item')
    input.setAttribute('type','checkbox')
    span.innerText = content
    btn.innerText = 'supprimer'
    
    div.append(input,span,btn)
    
    return div
}