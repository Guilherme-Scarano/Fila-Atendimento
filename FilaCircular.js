class FilaCircular {
  constructor(tamanho) {
      this.inicio = 0;
      this.fim = -1;
      this.qtd = 0;
      this.elementos = new Array(tamanho);
  }
  
  isFull() {
      return this.qtd === this.elementos.length;
  }

  enqueue(elemento) {
      if (!this.isFull()) {
          this.fim = (this.fim + 1) % this.elementos.length;
          this.elementos[this.fim] = elemento;
          this.qtd++;
          return true;
      }
      return false;
  }

  dequeue() {
      if (!this.isEmpty()) {
          const elementoRemovido = this.elementos[this.inicio];
          this.elementos[this.inicio] = undefined; // Removendo a referência ao elemento
          this.inicio = (this.inicio + 1) % this.elementos.length;
          this.qtd--;
          return elementoRemovido;
      }
      return undefined;
  }

  isEmpty() {
      return this.qtd === 0;
  }

  first() {
      return this.elementos[this.inicio];
  }

  last() {
      return this.elementos[this.fim];
  }

  [Symbol.iterator]() {
      let index = this.inicio;
      let cont = 0;
      const elementos = this.elementos;
      return {
          next: function () {
              if (index === this.elementos.length) index = 0;
              if (cont < this.qtd) {
                  cont++;
                  return { value: elementos[index++], done: false };
              } else {
                  return { done: true };
              }
          }.bind(this)
      };
  }

  toString() {
      let elementosFila = "";
      for (const elemento of this)
          elementosFila += elemento.toString() + "\n";
      return elementosFila;
  }
}
