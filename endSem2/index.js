/*
    Data structure for a Note (Array of Objects)
    let data = [
        {
            _id: 1,
            title: "My First Note",
            content: "Lorem ipsum dolor sit, a..."
        },
         {
            _id: 2,
            title: "My second Note",
            content: "Lorem ipsum dolor sit, a..."
        },

    ]

*/

//Seed Data or initial data that is stored in the Database
let NOTES = [
  {
    _id: 1,
    title: "My first Note!",
    content: "Hello everyone this is my first Note!!!",
  },
];

const form = document.querySelector('form');
const titleInp = document.querySelector('#title');
const contentInp = document.querySelector('#note-text');
const submitBtn = document.querySelector('.btn-success');



//this function takes  array of notes(objects) as a parameter and then creates a final HTML code and then inserts it to the webpage
function createNotes(notes){
  let finalHTML = "";

  /*
  
    int arr[] = {1, 2, 3, 4, 5,6};
    for(auto i: arr){
        cout<<i<<endl;
        
    }
    
  */
    //let greeting = 'hello '+ name + ' good morning!'; => 'hello saumya good morning!'
  notes.forEach((note, idx) => {
    note._id = idx + 1;
    finalHTML += `
                        <div class="card mb-3">
                            <div class="card-header">
                                ${note._id}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${note.title}</h5>
                                <p class="card-text text-muted">${note.content}</p>
                                <a href="#" class="btn btn-warning">Edit</a>
                                <a href="#" class="btn btn-danger">Delete</a>
                            </div>
                        </div>
        `;
  });
  const notesList = document.querySelector(".fix-height");
  notesList.innerHTML = finalHTML;
  initListeners();
};


//handles the edit and new note form
const handleFormSubmit = e =>{
    e.preventDefault();
    let id = NOTES[NOTES.length-1]._id+1;
    let noteData = {
        _id: id,
        title: titleInp.value,
        content: contentInp.value
    }

    NOTES.push(noteData);
    createNotes(NOTES);
    localStorage.setItem('notes', JSON.stringify(NOTES));
    titleInp.value = '';
    contentInp.value = '';
    submitBtn.textContent = 'Add New Note';
}

//add submit event listener to the form
form.addEventListener("submit", handleFormSubmit);

//delete note 
const deleteNotes = (id) => {
  let res = NOTES.filter( note => note._id != id);
  NOTES = res;
  createNotes(NOTES);
  localStorage.setItem("notes", JSON.stringify(NOTES));
};

//edit the note data in the form on the left
const editNoteData = noteData =>{
    NOTES.forEach(note => {
        if(note._id === noteData.id){
            titleInp.value = noteData.title;
            contentInp.value = noteData.content;
        }
    });
    let res = NOTES.filter(note => note._id != noteData.id);
    NOTES = res;
    submitBtn.textContent = 'Update Note';
}


//initilize event listeners on the notes created, so that we can use delete and edit button on them
const initListeners = () => {
  let arr = document.querySelectorAll(".card");
  arr.forEach(item => {
    item.addEventListener('click', e => {
        
        if(e.target.textContent === 'Delete'){
            let id = parseInt(item.children[0].textContent);
            deleteNotes(id);
        }else if(e.target.textContent === 'Edit'){
            let id = parseInt(item.children[0].textContent);
            let title = item.children[1].children[0].textContent;
            let content = item.children[1].children[1].textContent;
            const noteData = {
                id,
                title,
                content
            };
            editNoteData(noteData);
        }
    });
  });
};


//Fetch the notes stored in the localStorage on DOMContentLoad(ie when the HTML file is done loading and parsing)
document.addEventListener("DOMContentLoaded", () => {
  //anonymus function: ---
  NOTES = JSON.parse(localStorage.getItem("notes") || "[]");
  createNotes(NOTES);
});


/*

    'notes' : '[
        '{
            '_id' : '1',
            'title' : 'hello',
            'content' : 'world'

        }'
    ]'

 */