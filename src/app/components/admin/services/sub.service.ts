import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Sub } from 'src/app/model/sub';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private afs : AngularFirestore) { }


  // add 
  addSub(sub : Sub) {
    sub.id = this.afs.createId();
    return this.afs.collection('/Subs').add(sub);
  }

  // get all 
  getAllSub() {
    return this.afs.collection('/Subs').snapshotChanges();
  }

  // delete 
   deleteSub(sub : Sub) {
      this.afs.doc('/Subs/'+sub.id).delete();
   }

  // update 
  updateStudent(sub : Sub) {
    this.deleteSub(sub);
    this.addSub(sub);
  }
}