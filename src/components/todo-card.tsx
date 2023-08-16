import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { CardProps, IconButton } from '@mui/material';

interface todoProps{
    setTextData:String;
}

const todoCard: React.FC<todoProps> = ({setTextData}) =>{

    return(
        <div className='card '>
                <p>{setTextData}</p>
                <div className='btn-tools'>
                  <IconButton>
                    <EditIcon />  
                  </IconButton>
                  <IconButton>
                    <DoneIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
    )
}
export default todoCard;