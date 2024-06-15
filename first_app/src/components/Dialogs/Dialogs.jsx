import stule from './Dialogs.module.css'
import {DialogsItem, Massege} from './DialogsItems'


const Dialogs = (props) => {

  let dialogElements = props.dateD.map(d => <DialogsItem name={d.name} id={d.id} />)

  let massegeElements = props.dateM.map(m => <Massege massege={m.massege} />)


  return (
    <div className={stule.dialogs} >

      <div className={stule.dialogsItem}>
        {dialogElements}
      </div>
      <div className={stule.masseges}>
        {massegeElements}
      </div>
    </div>
  )

}
export default Dialogs