class List{
    constructor(_element){
        this.listElements = _element;
        this.textList = []
    }
    static createListItem(text){
        const li = document.createElement("li")

        li.textContent = text;

        return li
    }
    update(){
        //delete 
        while (this.listElements.firstChild){
            this.listElements.removeChild(this.listElements.firstChild)
        }
        //fill
        for(const text of this.textList){
            this.listElements.appendChild(List.createListItem(text))
        } 
    }
    add(text){
        this.textList.push(text);
        this.update(); 
    } 
    remove(index){
        this.textList.splice(index, 1)
        this.update();
    }

}