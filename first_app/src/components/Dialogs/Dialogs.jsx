import stule from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={stule.dialogs} >
      <div className={stule.dialogsItem}>
        <div className={stule.dialog}>
          Seka
        </div>
        <div className={stule.dialog}>
          Timas
        </div>
        <div className={stule.dialog}>
          Mom
        </div>
        <div className={stule.dialog + ' ' + stule.active}>
          Dad
        </div>
      </div>
      <div className={stule.masseges}>
        <div className={stule.massege}>
          Hi
        </div>
        <div className={stule.massege}>
          What are you doing?
        </div>
        <div className={stule.massege}>
          Start working
        </div>
      </div>
    </div>
  )

}
export default Dialogs