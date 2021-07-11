import React from 'react';
import Lane from './Lane';

interface IBoardProps {
    extraLanes: number
}

const Board: React.FC<IBoardProps> = ({extraLanes}): JSX.Element => {
    // This can be replace with a read json or passed in from the App as a prop
    let boardInfo = {
        'todo': [
          {
            id: 1,
            title: 'Fuck this',
            description: 'A description'
          },
          {
            id: 2,
            title: 'Fuck this 2',
            description: 'A description 2'
          }
        ],
        'in progress': [
          {
            id: 1,
            title: 'Fuck asdasdas',
            description: 'A asadasd'
          },
          {
            id: 2,
            title: 'Fuck this 2',
            description: 'A description 2'
          }
        ],
        'done': [
          {
            id: 1,
            title: 'asdasdasd',
            description: 'asdasdasd'
          },
          {
            id: 2,
            title: 'Fuck this 2',
            description: 'A description 2'
          }
        ]
      }

    return (
        <div className="board">
            <Lane laneType="todo" laneData={boardInfo['todo']}></Lane>
            <Lane laneType="in progress" laneData={boardInfo['in progress']}></Lane>
            <Lane laneType="done" laneData={boardInfo['done']}></Lane>
            {
                Array.from(Array(extraLanes), (e, i) => {
                    return (
                        <Lane></Lane>
                    );
                })
            }
        </div>
    );
}

export default Board;