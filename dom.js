
// This function creates a new element of the specified type, adds text to it, and appends it to the parent element 
export const createElement = (type, text, parent) => {
    const el = document.createElement(type)
    const textNode = document.createTextNode(text)
    el.appendChild(textNode)
    parent.appendChild(el)
}