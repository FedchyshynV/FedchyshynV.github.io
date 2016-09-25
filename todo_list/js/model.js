define('model', [],
  () => class Model {
    constructor(data) {
      this.data = data;
    }
    addItem(item) {
      if (!item.length) {
        return;
      }
      this.data.push(item);
    }

    removeItem(item) {
      let index = this.data.indexOf(item);
      if (!~index) {
        return;
      }
      this.data.splice(index, 1);
    }
    renameItem(item, index) {
      this.data[index] = item;
      return self.data;
    }
  });