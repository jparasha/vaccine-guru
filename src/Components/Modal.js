import './modal.css';
import Modal from 'react-modal';
import { isMobile } from '../utils';

const ModalComponent = ({ show, handleClose, modalData }) => {

    const { name, _vaccine, fee_type, district_name = '', sessions = [] } = modalData || {};
    console.log(modalData);
    const showHideClassName = show ? 'modal show display-block' : 'modal display-none';

    Modal.defaultStyles.overlay.zIndex = '99';
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(65, 63, 63, 0.75)';
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            maxWidth: isMobile ? '80vw' : '50vw',
            minHeight: isMobile ? '65vh' : '70vh',
            marginRight: '-50%',
            borderRadius: '12px',
            overflow: 'hidden',
            transform: 'translate(-50%, -50%)'
        }
    };

    return (
        <div style={{ zIndex: 1000 }}>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className={'modal__box'}>
                    <div className={'modal__header col'}>
                        <h3 className={'no-margin'}>{name}</h3>
                        <p>{district_name}</p>
                    </div>
                    <div className={'modal__body col flex-row-nowrap auto-overflow content-start'}>
                        {
                            sessions.map((item, idx) => {
                                return (
                                    <div className={'body__card'} key={`${name}__${idx}`}>
                                        <div className={'body__card-header width-100 border-bottom'}>
                                            <h4 className={'text-center'}>{item.date}</h4>
                                        </div>
                                        <div className={'body__card-body col width-100'}>
                                            <div className={'body__card-body-ul col content-start align-start width-100'}>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>vaccine :</span>
                                                    <span>{item.vaccine}</span>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>available capacity :</span>
                                                    <span>{item.available_capacity}</span>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>available dose 1 :</span>
                                                    <span>{item.available_capacity_dose1}</span>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>available dose 2 :</span>
                                                    <span>{item.available_capacity_dose2}</span>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>age limit :</span>
                                                    <span>{item.min_age_limit}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={'body__card-bottom col width-100 grow-1'}>
                                            <button className={`width-90 center__button ${(item.available_capacity) ? '' : 'un-available'}`} disabled={!item.available_capacity}>
                                                {item.available_capacity ? 'Book Now' : 'No Slots'}
                                            </button>

                                        </div>
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className={'modal__bottom col grow-1'}>
                        <button type="button" className={'align-self-right'} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </Modal>
        </div>
    );




    return (
        <div className={showHideClassName} tabIndex='-1'>
            <section className="modal-main">
                <div className={'modal__box'}>
                    <div className={'modal__header col width-100 border-bottom'}>
                        <h3 className={'no-margin'}>{name}</h3>
                        <p>{district_name}</p>
                    </div>
                    <div className={'modal__body col flex-row content-start'}>
                        {
                            sessions.map((item, idx) => {
                                return (
                                    <div className={'body__card'} key={`${name}__${idx}`}>
                                        {/* <div className={'sessions'} key={`${item.available_capacity}__${name}`}>
                                        available_capacity: 0
                                        available_capacity_dose1: 0
                                        available_capacity_dose2: 0
                                        date: "24-05-2021"
                                        min_age_limit: 45
                                        vaccine: "COVISHIELD"
                                    </div> */}
                                    </div>

                                );
                            })
                        }
                    </div>
                    <div className={'modal__bottom col width-100'}>
                        <button type="button" className={'align-self-right'} onClick={handleClose}>Close</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ModalComponent;
