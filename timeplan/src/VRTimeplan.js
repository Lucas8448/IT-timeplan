import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { Vector3 } from 'three';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
extend({ TextGeometry });

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
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
      <primitive object={new TextGeometry(day, { size: 0.2, height: 0.1 })} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

const VRButtonContainer = () => {
  const { gl } = useThree(); // Access the WebGL renderer

  useEffect(() => {
    document.body.appendChild(VRButton.createButton(gl));
  }, [gl]);

  return null;
};

const VRTimeplan = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <VRButtonContainer />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {sessions.map((session, index) => (
          <DayCube key={index} day={session.day} position={new Vector3(index * 2 - 5, 1, -5)} />
        ))}
      </Canvas>
    </div>
  );
};

export default VRTimeplan;
