import React from 'react';
import './App.css';

const sessions = [
  {
    day: 'Mandag',
    details: [
{
"time": "08:15 - 09:00",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
},
{
"time": "09:00 - 09:45",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
},
{
"time": "09:55 - 10:40",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
},
{
"time": "10:40 - 11:25",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
},
{
"time": "12:10 - 12:55",
"classroom": "G18-1IM-A",
"subject": "Norsk",
"teacher": "Maria"
},
{
"time": "12:55 - 13:40",
"classroom": "G18-1IM-A",
"subject": "Norsk",
"teacher": "Maria"
},
{
"time": "13:50 - 14:35",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
},
{
"time": "14:35 - 15:20",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
}
]
  },
  {
    day: 'Tirsdag',
    details: [
{
"time": "08:15 - 09:00",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
},
{
"time": "09:00 - 09:45",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
},
{
"time": "09:55 - 10:40",
"classroom": "G18-2IMT",
"subject": "Brukerstøtte",
"teacher": "Endre"
},
{
"time": "10:40 - 11:25",
"classroom": "G18-2IMT",
"subject": "Brukerstøtte",
"teacher": "Endre"
},
{
"time": "12:10 - 12:55",
"classroom": "G18-1IM-A",
"subject": "Norsk",
"teacher": "Maria"
},
{
"time": "12:55 - 13:40",
"classroom": "G18-1IM-A",
"subject": "Norsk",
"teacher": "Maria"
},
{
"time": "13:50 - 14:35",
"classroom": "110A",
"subject": "Samfunnskunnskap",
"teacher": "Alvhilde"
}
],
  },
  {
    day: 'Onsdag',
    details: [
{
"time": "09:55 - 10:40",
"classroom": "G18-2IMT",
"subject": "YFF",
"teacher": "Haidar"
},
{
"time": "10:40 - 11:25",
"classroom": "G18-2IMT",
"subject": "YFF",
"teacher": "Haidar"
},
{
"time": "12:10 - 12:55",
"classroom": "G18-2IMT",
"subject": "YFF",
"teacher": "Haidar"
},
{
"time": "12:55 - 13:40",
"classroom": "G18-2IMT",
"subject": "YFF",
"teacher": "Haidar"
},
{
"time": "13:50 - 14:35",
"classroom": "G18-2IMT",
"subject": "YFF",
"teacher": "Haidar"
}
],
  },
  {
    day: 'Torsdag',
    details: [
{
"time": "09:55 - 10:40",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
},
{
"time": "10:40 - 11:25",
"classroom": "G18-2IMT",
"subject": "Utvikling",
"teacher": "Endre"
},
{
"time": "12:00 - 12:45",
"classroom": "G18-2IMT",
"subject": "Brukerstøtte",
"teacher": "Endre"
},
{
"time": "12:55 - 13:40",
"classroom": "Sal 3",
"subject": "Kroppsøving",
"teacher": "Ajdin"
},
{
"time": "13:50 - 14:35",
"classroom": "Sal 3",
"subject": "Kroppsøving",
"teacher": "Ajdin"
}
],
  },
  {
    day: 'Fredag',
    details: [
{
"time": "08:15 - 09:00",
"classroom": "110A",
"subject": "Samfunnskunnskap",
"teacher": "Alvhilde"
},
{
"time": "09:00 - 09:45",
"classroom": "110A",
"subject": "Samfunnskunnskap",
"teacher": "Alvhilde"
},
{
"time": "09:55 - 10:40",
"classroom": "G18-2IMT",
"subject": "Brukerstøtte",
"teacher": "Endre"
},
{
"time": "10:40 - 11:25",
"classroom": "G18-2IMT",
"subject": "Brukerstøtte",
"teacher": "Endre"
},
{
"time": "12:10 - 12:55",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
},
{
"time": "12:55 - 13:40",
"classroom": "G18-2IMT",
"subject": "Driftsstøtte",
"teacher": "Haidar"
}
],
  },
];

const parseTime = (timeStr) => {
  const [hour, minute] = timeStr.split(':').map(Number);
  return hour * 60 + minute;
};

const Session = ({ detail }) => (
  <div className="session">
    <div>{detail.time}</div>
    <div>{detail.classroom}</div>
    <div>{detail.subject}</div>
    <div>{detail.teacher}</div>
  </div>
);

const Day = ({ day, details }) => (
  <div className="day">
    <h2>{day}</h2>
    {details.map((detail, index) => {
      const nextDetail = details[index + 1];
      let breakTime = null;

      if (nextDetail) {
        const currentEndTime = parseTime(detail.time.split(' - ')[1]);
        const nextStartTime = parseTime(nextDetail.time.split(' - ')[0]);

        breakTime = nextStartTime - currentEndTime;
      }

      return (
        <div key={index}>
          <Session detail={detail} />
          {breakTime > 0 && <div className="break">{`Pause: ${breakTime} minutter`}</div>}
        </div>
      );
    })}
  </div>
);

const App = () => (
  <div>
    <h1 class="title">Timeplan</h1>
    <div className="timetable">
      {sessions.map((session, index) => (
        <Day key={index} day={session.day} details={session.details} />
      ))}
    </div>
  </div>
);

export default App;