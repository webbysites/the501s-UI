import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  getTime
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { the501sDate } from '../models/the501sDate';
import { DatesService } from '../services/dates.service';
import { DatePipe } from '@angular/common';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-dates',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  myEvent: the501sDate;

  newEvent: any;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  myEvents: the501sDate[] = [];
  //   {
  //     title: 'the 501s play joey\s',
  //     date: new Date('1/20/2020'),
  //     start: '8:00 pm',
  //     end: '12:00 am',
  //     location: '2417 N St Mary\'s St, San Antonio, TX 78212',
  //     description: 'Come see the 501s, San Antonio\s 13th or 14th best classic country tribute band, play all your favorite country tunes!',
  //     img: '../../assets/img/homePageAssests/the-501s-3.jpg'
  //   }
  // ];

  events: CalendarEvent[] = [];
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true
    // // },
    // {
    //   start: addHours(startOfDay(new Date('1/20/2020')), 0),
    //   end: addHours(new Date('1/20/2020'), 4),
    //   title: 'the 501s play Joey\s',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  // ];

  activeDayIsOpen = true;

  constructor(
    private modal: NgbModal,
    private datesService: DatesService,
    public datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getDates();
    this.getModalData();
  }

  getInfo(event: Event) {
    console.log(event);
  }

  getDates() {
    this.datesService.getDates().subscribe(e => {
      e.forEach(res => {
        this.newEvent = {
          start: addHours(new Date(res.datetime), 0).getTime(),
          end: addHours(new Date(res.datetime), 4),
          title:  'the 501s @ ' +  res.venue.name,
          color: colors.blue,
          actions: this.actions
        }
        this.events.push(this.newEvent);
        this.refresh.next();
      });
    });
  }

  getModalData() {
    this.datesService.getDates().subscribe(e => {
      e.forEach(event => {

        this.myEvent = {
          title: 'the 501s @ ' + event.venue.name,
          date: event.datetime,
          start: new Date(event.datetime).getTime(),
          end: event.datetime,
          location: event.venue.name + ' ' + event.venue.city + ' ' + event.venue.region,
          description: event.description,
          img: ''
        };
        console.log(event.start);
        this.myEvents.push(this.myEvent);
        this.refresh.next();
      });
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
    this.events.forEach(res => {
      console.log(res.start);
    })
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}

