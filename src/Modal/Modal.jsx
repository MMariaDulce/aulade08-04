const Modal = ({modal, setModal}) => {
    if(modal === true){
       return(
        <div>
            esse é o meu modal.
            <button onClick={()=> setModal(false)}>
            Fechar Modal
            </button>
        </div>
    ) 
    }else {
        return null
    }
}
    
export default Modal;