import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { Vector3 } from 'three';
import { Text } from '@react-three/drei';
import './VRTimeplan.css';

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
"time": "13:40 - 14:15",
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

const DayCube = ({ day, position }) => {
  return (
    <mesh position={position} castShadow scale={[1, 1, 0.1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'green'} />
      <Text position={[0, 0, 0.51]} fontSize={0.2}>
        {day}
      </Text>
      <SessionPanel day={day} position={[0, 0, -0.05]} />
    </mesh>
  );
};

const SessionDetail = ({ detail, position }) => (
  <group position={position}>
    <mesh position={[0, 0, 0]} scale={[0.99, 0.99, 0.1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
    <Text position={[0, 0.3, 0.1]} fontSize={0.1} color="black">{detail.time}</Text>
    <Text position={[0, 0.2, 0.1]} fontSize={0.1} color="black">{detail.classroom}</Text>
    <Text position={[0, 0.1, 0.1]} fontSize={0.1} color="black">{detail.subject}</Text>
    <Text position={[0, 0, 0.1]} fontSize={0.1} color="black">{detail.teacher}</Text>
  </group>
);

const SessionPanel = ({ day, position }) => {
  const { details } = sessions.find((session) => session.day === day);
  return (
    <>
      {details.map((detail, index) => (
        <SessionDetail
          key={index}
          detail={detail}
          position={[position[0], position[1] - index * 1.2, position[2]]}
        />
      ))}
    </>
  );
};

const VRButtonContainer = () => {
  const { gl } = useThree();
  useEffect(() => {
    document.body.appendChild(VRButton.createButton(gl));
  }, [gl]);

  return null;
};

const VRTimeplan = () => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <VRButtonContainer />
        <ambientLight />
        <directionalLight position={[1, 1, 1]} />
        {sessions.map((session, index) => (
          <DayCube key={index} day={session.day} position={new Vector3(index * 2 - 5, 1, -5)} />
        ))}
      </Canvas>
    </div>
  );
};

export default VRTimeplan;