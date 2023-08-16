import React from 'react';
import OpenInputFeild from './components/task-input-feild';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='header'>
        <h2>TO-DO List App</h2>
      </div>
      <div className='container'>
        <div className='list-col'>
        <span className="openTitle title-open">Open</span>
        <div className='openListOuter list-area-outer'>
          <div className='openList list-area'>
            <OpenInputFeild />
            <div className='card-area'>
              <div className='card open-card'>
                <p>Text_of_list_card</p>
                <div className='btn-tools'>
                  <EditIcon />
                  <DoneIcon />
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <div className='list-col'>
        <span className="processTitle title-open">In-Process</span>
        <div className='processListOuter list-area-outer'>
          <div className='processList list-area'>
            <OpenInputFeild />
            <div className='card-area'>
              <div className='card process-card'>
                <p>Text_of_list_card</p>
                <div className='btn-tools'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
              <div className='card process-card'>
                <p>Text_of_list_card</p>
                <div className='btn-tools'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='list-col'>
        <span className="completeTitle title-open">Completed</span>
        <div className='completeListOuter list-area-outer'>
          <div className='completeList list-area'>
            <OpenInputFeild />
            <div className='card-area'>
              <div className='card complete-card'>
                <p>Text_of_list_card</p>
                <div className='btn-tools'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
