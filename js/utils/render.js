export const ui = {
    createElement(tag, className, textContent = "", attributes = {}){
        const element = document.createElement(tag)
        if(className){
            element.className = className;
        }
        if(textContent) {
            element.textContent = textContent;
        }
        for(const [key, value] of Object.entries(attributes)){
            element.setAttribute(key, value)
        }
        return element
    },
    clearContainer(container){
        container.innerHTML = "";
    }
}