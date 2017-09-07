import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { TableSettings } from '../models/table-settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterContentInit {
  @ViewChild('name') name;
  @ViewChild('surname') surname;
  @ViewChild('id') id;
  @ViewChild('time') time;

  private columns: TableSettings[];

  public items = [               // данные для таблицы
    {
      nm: 'Кирилл',
      cont: 'Ивановский'
    },
    {
      nm: 'Соня',
      cont: 'Петрова',
      id: '1212'
    },
    {
      nm: 'Иван',
      cont: 'Пиструхин'
    },
    {
      nm: 'Антон',
      cont: 'Петров',
      time: 100
    },
    {
      nm: 'Пётр',
      cont: 'Иванов'
    },
  ];

  ngAfterContentInit() {

    this.columns = [
      {
        columnsHeader: 'Имя',     // header
        reference: this.name      // контент ячеек
      },
      {
        columnsHeader: 'Фамилия',
        reference: this.surname
      },
      {
        columnsHeader: 'Номер',
        reference: this.id
      },
      {
        columnsHeader: 'Вход',
        reference: this.time
      },
    ];

    console.log(this.columns);

  }

}
