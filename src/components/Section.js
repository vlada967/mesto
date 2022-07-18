class Section {
    constructor({items, renderer}, containerSelector) {
        //this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._container = document.querySelector(this._containerSelector);
    }

    renderAll(items) {
        items.forEach((item) => {
            this.addItem(item);
        })
    }

    addItem(item) {
        const newItem = this._renderer(item);
        this._container.prepend(newItem);
    }
}

export default Section;