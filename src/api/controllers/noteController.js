class NoteController{
  constructor(){
    this.inMemoryStorage =[
      {id:1, content:"Note 1 blah blah"},
      {id:2, content:"Note 2 blah blah"},
      {id:3, content:"Note 3 blah blah"},
      {id:4, content:"Note 4 blah blah"}

    ]
  }

  getAll(){
    return this.inMemoryStorage;
  }

  getById(id){
    let result = this.inMemoryStorage.filter(note => note.id===id);
    return result ? result[0] : null;

  }

}
module.exports = new NoteController;
