import React from 'react'
import stule from './Dialogs.module.css'
import { DialogsItem, Massege } from './DialogsItems'



const Dialogs = (props) => {

  let newMassege = React.createRef()
  let sendNewMassege = () => {
    let massege = newMassege.current.value
    alert(massege)
  }

  return (
    <div className={stule.dialogPage}>
      <div className={stule.dialogs}>
        <DialogsItem date={props.dialogPage.dialogs} />
      </div>
      <div className={stule.masseges} >
        <Massege massege={props.dialogPage.masseges} />
        <div className={stule.writeMassege} >
          <textarea ref={newMassege} ></textarea>
          <button onClick={sendNewMassege}>send</button>
        </div>
      </div>
    </div>
  )

}
export default Dialogs