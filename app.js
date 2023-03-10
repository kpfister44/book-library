class Book {
  constructor(title, author, pages) {
    this._title = title
    this._author = author
    this._pages = pages
  }
  get title() {
    return this._title
  }
  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
  set changeTitle(name) {
    this._title = name
  }
  set changeAuthor(name) {
    this._author = name
  }
  set changePages(num) {
    return this._pages = num
  }
}

class Library {
  constructor() {
    this._myLibrary = []
  }

  get myLibrary() {
    return this._myLibrary
  }
  addBookToLibrary(bookObject) {
    this._myLibrary.push(bookObject)
  }

  displayBooks() {
    const body = document.querySelector("body")
    const bookCardsDiv = document.createElement("div")
    bookCardsDiv.setAttribute("class", "book-cards")
    for (let i = 0; i < this._myLibrary.length; i++) {
      const cardDiv = document.createElement("div")
      body.appendChild(bookCardsDiv)
      cardDiv.setAttribute("class", "card")
      cardDiv.setAttribute("id", `a${  i}`)
      bookCardsDiv.appendChild(cardDiv)
  
      const titleP = document.createElement("p")
      const authorP = document.createElement("p")
      const pagesP = document.createElement("p")
    
      const titlePText = document.createTextNode(this._myLibrary[i].title)
      titleP.appendChild(titlePText)
      cardDiv.appendChild(titleP)
      const authorPText = document.createTextNode(this._myLibrary[i].author)
      authorP.appendChild(authorPText)
      cardDiv.appendChild(authorP)
      const pagesPText = document.createTextNode(this._myLibrary[i].pages)
      pagesP.appendChild(pagesPText)
      cardDiv.appendChild(pagesP) 
      // add a button to remove the book from the myLibrary array and the book display
      const removeButton = document.createElement("button")
      removeButton.setAttribute("class", "remove-button")
      removeButton.setAttribute("id", i)
      removeButton.setAttribute("type", "submit")
      removeButton.setAttribute("value", "remove")
      removeButton.innerHTML = "Remove"
      cardDiv.appendChild(removeButton)
      // add a button to toggle the read statu of a book on the book display
      const readStatusButton = document.createElement("button")
      readStatusButton.setAttribute("id", `b${  i}`)
      if (this._myLibrary[i].read === false) {
        readStatusButton.setAttribute("class", "notread-button")
        readStatusButton.setAttribute("type", "notread")
        readStatusButton.setAttribute("value", "notread")
        readStatusButton.innerHTML = "Not Read"
      } else {
        readStatusButton.setAttribute("class", "read-button")
        readStatusButton.setAttribute("type", "read")
        readStatusButton.setAttribute("value", "read")
        readStatusButton.innerHTML = "Read"
      }
      cardDiv.appendChild(readStatusButton)
    }
    /* 
    check to see if the remove button on book display is pressed, if so, remove card 
    div that the remove button was pressed on and delte that book object from the 
    myLibrary array
    */
    const removeBookButtons = document.getElementsByClassName("remove-button");
    const removeButtonPressed = (e) => {
      if (this._myLibrary.length === 1) {
        this._myLibrary.shift()
      } else {
        this._myLibrary.splice(e.target.id, 1); 
      }
      const cardToRemove = document.querySelector(`#a${  e.target.id}`)
      cardToRemove.remove()
    };
    for (let i = 0; i < removeBookButtons.length; i++) {
      removeBookButtons[i].addEventListener("click", removeButtonPressed);
    }
    /*
    check to see if the read button on the book display is pressed, if so, change the
    the button display to unread and update the appropriate book object's read data 
    attribute
    */
    const readButton = document.getElementsByClassName("read-button")
    const notreadButton = document.getElementsByClassName("notread-button")
    const toggleReadStatus = (e) => {
      const backgroundColorClass = e.target.className
      if (backgroundColorClass === "read-button") {
        // change to not read
        e.target.className = "notread-button"
        e.target.innerHTML = "Not Read"
      } else {
        // change to read
        e.target.className = "read-button"
        e.target.innerHTML = "Read"
      }
    };
    for (let i = 0; i < readButton.length; i++) {
      readButton[i].addEventListener("click", toggleReadStatus);
    }
    for (let i = 0; i < notreadButton.length; i++) {
      notreadButton[i].addEventListener("click", toggleReadStatus);
    }
  }
  displayForm() {
    const button = document.querySelector("button")
    const formDiv = document.createElement("form");
    formDiv.setAttribute("class", "form");
    button.after(formDiv);
    const titlePForm = document.createElement("p");
    titlePForm.setAttribute("class", "form-title");
    const titlePText = document.createTextNode("Book Information");
    titlePForm.appendChild(titlePText);
    formDiv.appendChild(titlePForm);
    const inputContainerDiv = document.createElement("div");
    inputContainerDiv.setAttribute("class", "input-container");
    formDiv.appendChild(inputContainerDiv);
    // create author input and lable
    const lableAuthor = document.createElement("label");
    lableAuthor.setAttribute("for", "author");
    lableAuthor.setAttribute("class", "placeholder");
    const lableAText = document.createTextNode("Author");
    lableAuthor.appendChild(lableAText);
    inputContainerDiv.appendChild(lableAuthor);
    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("id", "author");
    inputAuthor.setAttribute("class", "input");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.setAttribute("placeholder", "Author");
    inputAuthor.setAttribute("required", "");
    inputAuthor.setAttribute("name", "author");
    inputContainerDiv.appendChild(inputAuthor);
    // create title input and lable
    const lableTitle = document.createElement("label");
    lableTitle.setAttribute("for", "title");
    lableTitle.setAttribute("class", "placeholder");
    const lableTText = document.createTextNode("Title");
    lableTitle.appendChild(lableTText);
    inputContainerDiv.appendChild(lableTitle);
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("id", "title");
    inputTitle.setAttribute("class", "input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("placeholder", "Title");
    inputTitle.setAttribute("required", "");
    inputTitle.setAttribute("name", "title");
    inputContainerDiv.appendChild(inputTitle);
    // create author input and lable
    const lablePages = document.createElement("label");
    lablePages.setAttribute("for", "Pages");
    lablePages.setAttribute("class", "placeholder");
    const lablePText = document.createTextNode("Pages");
    lablePages.appendChild(lablePText);
    inputContainerDiv.appendChild(lablePages);
    const inputPages = document.createElement("input");
    inputPages.setAttribute("id", "pages");
    inputPages.setAttribute("class", "input");
    inputPages.setAttribute("type", "text");
    inputPages.setAttribute("placeholder", "pages");
    inputPages.setAttribute("required", "");
    inputPages.setAttribute("name", "pages");
    inputContainerDiv.appendChild(inputPages);
    // create a checkbox for whether or not it has been read
    const checkboxDiv = document.createElement("div");
    checkboxDiv.setAttribute("class", "form-checkbox");
    inputContainerDiv.appendChild(checkboxDiv);
    const lableReadIt = document.createElement("label");
    lableReadIt.setAttribute("for", "read");
    const lableReadItText = document.createTextNode("Have you read it?");
    lableReadIt.appendChild(lableReadItText);
    checkboxDiv.appendChild(lableReadIt);
    const inputReadIt = document.createElement("input");
    inputReadIt.setAttribute("id", "read");
    inputReadIt.setAttribute("class", "input");
    inputReadIt.setAttribute("type", "checkbox");
    inputReadIt.setAttribute("name", "read");
    checkboxDiv.appendChild(inputReadIt);
    // create a submit button on the bottom of the form
    const submitButton = document.createElement("button");
    submitButton.setAttribute("class", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "submit");

    submitButton.innerHTML = "Submit";
    inputContainerDiv.appendChild(submitButton);
    this.getFormData()
  }
  toggleForm() {
    const myForm = document.querySelector("form");
    const displaySetting = myForm.style.display;
    if (displaySetting === "block") {
      // form is visible. hide it
      myForm.style.display = "none";
    } else {
      // form is hidden. show it
      myForm.style.display = "block";
    }
  }
  getFormData() {
    const button = document.querySelector("button")
    button.addEventListener("click", this.toggleForm);
    document.addEventListener("submit", (e)=> {
      e.preventDefault();
      const newBookForm = e.target;
      const newTitle = newBookForm.title.value;
      const newAuthor = newBookForm.author.value;
      const newPages = newBookForm.pages.value;
      const newReadStatus = newBookForm.read.checked;
      const newBook = new Book(newTitle, newAuthor, newPages);
      newBook.read = newReadStatus;
      this.addBookToLibrary(newBook);
      const cardsToRemove = document.getElementsByClassName("card");
        const cardsArray = Array.from(cardsToRemove);
        for (const card of cardsArray) {
          card.remove();
        }
      document.querySelector("form").reset()
      this.displayBooks();
      this.toggleForm()
    })
  }
  startingPage() {
    this.displayBooks();
    this.displayForm();
  }
}

bookOne = new Book("Hobbit", "JRR Tolkien", 290)
publicLibrary = new Library()
publicLibrary.addBookToLibrary(bookOne)
publicLibrary.startingPage()