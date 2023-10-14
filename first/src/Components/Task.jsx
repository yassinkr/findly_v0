import React from 'react'
const Tasks = [
    {
      id: 1,
      title: 'Task 1',
      time: '10:00 AM',
      reminder: true
    },
    {
      id: 2,
      title: 'Task 2',
      time: '2:30 PM',
      reminder: false
    },
    {
      id: 3,
      title: 'Task 3',
      time: '4:45 PM',
      reminder: true
    },
    {
      id: 4,
      title: 'Task 4',
      time: '8:00 AM',
      reminder: false
    }
  ];
  
  

  const Task = ({ title, time }) => {
    const divStyle = {
      backgroundColor :'grey'
    };
  
    return (
        <div>
          {Tasks.map((task) => (
            <div key={task.id} style={divStyle}>
              <h3>{task.title}</h3>
              <p>{task.time}</p>
            </div>
          ))}
        </div>
      );
      
  };
  

export default Task