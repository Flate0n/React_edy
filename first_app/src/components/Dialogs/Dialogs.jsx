import stule from './Dialogs.module.css'
import { DialogsItem, Massege } from './DialogsItems'



const Dialogs = (props) => {



    return (
    <div className={stule.dialogPage}>
      <div className={stule.dialogs}>
      <DialogsItem date={props.dialogPage.dialogs} />
      </div>
      <div className={stule.masseges} >
      <Massege massege={props.dialogPage.masseges} />
      </div>
    </div>
  )

}
export default Dialogs