import { Component, OnInit } from '@angular/core';
import { Sub } from 'src/app/model/sub';
import { AuthService } from 'src/app/services/auth.service';
import { SubService } from '../../services/sub.service';
import { format, formatDistance, parseISO, parse, daysInWeek} from 'date-fns'

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent implements OnInit {
  subsList: Sub[] = [];

  id: string = '';
  name: string = '';
  price: number = 10;
  date: Date = parseISO(new Date().toISOString());
  login: string = '';
  dateNow: Date = new Date();

  constructor(private authServer: AuthService, private subServer: SubService) { }

  ngOnInit(): void {
  this.getAllSub();
  }

  subObj: Sub = {
    id: '',
    name: '',
    price: 10,
    date: parseISO(new Date().toISOString()),
    login: ''
  };


  getAllSub() {
    this.subServer.getAllSub().subscribe(res => {

      this.subsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching student data');
    })

  }

  resetForm() {
    this.id = '';
    this.name = '';
    this.price = 10;
    this.date = new Date();
    this.login = '';
  }

  addSub() {
    this.dateNow = parseISO(this.dateNow.toISOString()), 'dd-MM-yyyy';
    if (this.name == '') {
      alert('Name cannot be empty')
      return;
    }
    else if (!(this.date >= this.dateNow)) {
      alert('Invalid date')
      return;
    }

    this.subObj.id = '';
    this.subObj.name = this.name;
    this.subObj.price = this.price;
    this.subObj.date = this.date;
    this.subObj.login = this.authServer.getCurUser();
    
    this.subServer.addSub(this.subObj);
    this.resetForm();

  }

  deleteSub(sub: Sub) {
    if (window.confirm('Are you sure you want to delete ' + sub.name + ' ?')) {
      this.subServer.deleteSub(sub);
    }
  }
}
