import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  accessibilityList = [
    {
      image: '../../../../../assets/images/computer.svg',
      imageDescription: 'Зображена піктограмма компn\'ютера',
      title: 'Тестуємо',
      text: 'Люди з інвалідністю перевіряють сайти та додатки на вебдоступність, поєднуючи автоматичне тестування з ручним.',
      readMoreText: 'Послуги тестування',
      readMoreLink: '/testing'
    },
    {
      image: '../../../../../assets/images/people.svg',
      imageDescription: 'Зображені троє людей за столом, що обговорюють якесь питання',
      title: 'Навчаємо',
      // tslint:disable-next-line:max-line-length
      text: 'Тренінги розраховані на QA інженерів, front-end & back-end розробників, контент-менеджерів, дизайнерів та усіх, хто зацікавлений у темі вебдоступності.',
      readMoreText: 'Переглянути програми',
      readMoreLink: '/study'
    },
    {
      image: '../../../../../assets/images/consultation.svg',
      imageDescription: 'Зображена піктограмма, на якій одна людина щось говорить на вухо іншій',
      title: 'Консультуємо',
      text: 'Допоможемо інтегрувати стандарти вебдоступності в повсякденну діяльність та корпоративну культуру.',
      readMoreText: '',
      readMoreLink: ''
    }
  ];

  media = [
    {
      image: '../../../../../assets/images/media_1.jpg',
      imageDescription: 'Зображена піктограмма компn\'ютера',
      title: 'IT-волонтери: як у Львові організували ІТ-курси для незрячих та популяризують вебдоступність',
      // tslint:disable-next-line:max-line-length
      text: 'Ми у виданні Dou.ua. Cпівзасновник Inclusive IT Роман Боренько відповідає на питання «Чи можуть незрячі люди навчитись програмувати та працювати в IT?»',
      readMoreLink: 'https://dou.ua/lenta/interviews/inclusive-it-in-lviv/'
    },
    {
      image: '../../../../../assets/images/media_2.jpg',
      imageDescription: 'Зображена піктограмма компn\'ютера',
      title: 'Портрети інклюзивного IT. Будь як Андрій',
      // tslint:disable-next-line:max-line-length
      text: 'Ми у виданні Na Chasi. Як зробити можливості IT-компаній та розробок інклюзивними, розповідає Роман Боренько — засновник спільноти Inclusive IT',
      readMoreLink: 'https://nachasi.com/2018/11/23/portrety-inklyuzyvnogo-it-1/'
    },
    {
      image: '../../../../../assets/images/media_3.png',
      imageDescription: 'Зображена піктограмма компn\'ютера',
      title: 'Досягнення та плани українського інклюзивного ІТ',
      text: 'Ми у виданні Na Chasi. Розповідаємо про послуги, що надає наше соціальне підприємство',
      readMoreLink: 'https://nachasi.com/2019/11/28/inclusive-it/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
