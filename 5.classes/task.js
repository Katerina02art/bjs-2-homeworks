class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        const book = this.books[i];
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    // оценка
    if (mark < 2 || mark > 5) {
      console.log(
        `Оценка ${mark} не может быть добавлена. Допустимый диапазон: 2-5`
      );
      return;
    }

    // Если предмета еще нет создаем пустой массив
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    // Добавляем оценку
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    // Проверяем предмет
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    // Считаем сумму оценок
    const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);

    // Возвращаем среднее значение
    return sum / this.marks[subject].length;
  }

  getAverage() {
    // Все предметы
    const subjects = Object.keys(this.marks);

    // Если нет предметов возвращаем 0
    if (subjects.length === 0) {
      return 0;
    }

    // Считаем сумму средних оценок по всем предметам
    const totalSum = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    // Возвращаем общее среднее
    return totalSum / subjects.length;
  }
}
