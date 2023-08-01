import './ModalMenu.scss';

const ModalMenu = ({ setModalMenu }) => {
    return (
        <div className="modal">
            <div className="modal_header">
                <img src="" alt="" />
                <img src="" alt="" />
                <button onClick={() => setModalMenu(false)}>&times;</button>
            </div>

            <div className="modal_section">

            </div>

            <div className="modal_input">
                <input type="text" />
            </div>

            <div className="modal_road"></div>
        </div>
    )
}

export default ModalMenu;