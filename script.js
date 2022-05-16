
const prompt = require('prompt');
const model = require('./model.js')




const bookArray = [];


console.log('benvenuto in book manager!')


startMenu();




function startMenu() {
  console.log('sono disponibili tre opzioni');
  console.log('1) aggiungi un libro');
  console.log('2) lista libri');
  console.log('3) esci')


  prompt.start();


  const schema = {
    properties: {
      selection: {
        description: 'Seleziona una delle opzioni',
      }
    }
  };


  prompt.get(schema, startMenuManager);
}


function consoleBooks(bookArray) {
  for (const book of bookArray) {
      console.log(book.toString())
  }
}


function startMenuManager(err, result){
  if (result.selection === '1') {
    insertPublication();   
  } else if (result.selection === '2'){
    for (const book of bookArray) {
      console.log('Lista dei libri: ')
      consoleBooks(bookArray);
    }

  } else if (result.selection === '3') {
    console.log('Grazie e a Presto!')
    process.exit();
  } else {
    console.log('selezione non disponibile');
    startMenu();
  }
}


function insertBook() {


  // prompt.start();


  const schema = {
        properties: {
            title: {
                description: 'inserisici il titolo'
            },
            author: {
                description: 'inserisici l autore'
            },
            editor: {
                description: 'inserisici l editore'
            },
            type: {
                description: 'inserisici il genere'
            },
            price: {
                description: 'inserisici prezzo'
            },
            copies: {
                description: 'inserisici il numero di copie'
            },
            pageNumber: {
                description: 'inserisici il numero di pagine'
            },
            yop: {
                description: 'inserisici l anno di pubblicazione'
            },
            discount: {
                description: 'inserisici lo sconto'
            },
    }
  };


  prompt.get(schema, insertBookManger);
  
}



function insertBookManger(err, result){


  const book = new model.Book(result.title, result.author, result.editor, result.type, result.price,
     result.copies, result.pagesNumber, result.yop, result.discount);


  bookArray.push(book);


  startMenu();

console.log(bookArray)
}


function insertPublication() {

  console.log('Seleziona 1 per le riviste e 2 per i libri, 3 per uscire.');
  console.log('1)  Aggiungi una rivista');
  console.log('2)  Aggiungi un libro');
  console.log('3)  Esci');

  prompt.start();

  const schema = {
      properties: {
        selection: {
          description: 'Seleziona una delle opzioni',
        }
      }
    }
    prompt.get(schema, startInsertPubbliction);

  }


  function startInsertPubbliction() {
    if (result.selection === 1) {
      insertMagazine();
    } else if (result.selection === 2) {
      insertBook();
    } else {
      startMenu();
    }
  }


  const magazineArray = [];

  function insertMagazineManager(err, result) {
    const magazine = new model.Magazine(result.title, result.editor, result.periodicyty, result.realease, 
      result.type, result.price,result.copies, result.discount, result.releaseDate)
    magazineArray.push(magazine);
    startMenu();
}


function insertMagazine() {


  const schema = {
        properties: {
            title: {
                description: 'inserisici il titolo'
            },
            editor: {
                description: 'inserisici l editore'
            },
            periodicyty: {
                description: 'Ogni quanto esce? '
            },
            realease: {
                description: 'inserisici la data di rilascio del primo numero'
            },
            type: {
                description: 'inserisici il genere'
            },
            price: {
                description: 'inserisici il prezzo'
            },
            copies: {
                description: 'inserisici il numero di copie'
            },
            discount: {
              description: 'inserisci lo sconto'
            },
            releaseDate: {
              description: 'inserisici la data di rilascio'
    }
  }
  };
  prompt.get(schema, insertMagazineManager);
  
}
