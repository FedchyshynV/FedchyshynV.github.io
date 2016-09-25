define('model', [],
  () => function Model(data) {
    this.data = data;
    this.addItem = (item) => {
      if (!item.length) {
        return;
      }
      this.data.push(item);
    };
    this.removeItem = (item) => {
      let index = this.data.indexOf(item);
      if (! ~index) {
        return;
      }
      this.data.splice(index, 1);
    };
    this.renameItem = (item, index) => {
      this.data[index] = item;
      return self.data;
    };
  });