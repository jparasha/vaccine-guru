import './modal.css';
import Modal from 'react-modal';
import { isMobile } from '../utils';

const ModalComponent = ({ show, handleClose, modalData, handleRedirect }) => {

    const { name, state_name, district_name = '', from = '', _to = '', sessions = [] } = modalData || {};

    Modal.defaultStyles.overlay.zIndex = '99';
    Modal.defaultStyles.overlay.backgroundColor = 'rgba(65, 63, 63, 0.75)';
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            overflow: 'hidden',
            marginRight: '-50%',
            borderRadius: '12px',
            transform: 'translate(-50%, -50%)',
            minWidth: isMobile ? '80vw' : '50vw',
            maxWidth: isMobile ? '85vw' : '60vw',
            minHeight: isMobile ? '65vh' : '70vh'
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
                        <p>{`${district_name}, ${state_name}`}</p>
                        <button className={'transparent danger'} onClick={handleClose}>X</button>
                    </div>
                    <h3 className={'no-margin-top text-center'}>{name}</h3>
                    <div className={`modal__body col flex-row-nowrap auto-overflow ${(sessions.length > 1) ? 'content-start' : 'content-center'}`}>
                        {
                            sessions.map((item, idx) => {
                                return (
                                    <div className={'body__card'} key={`${name} __${idx}`}>
                                        <div className={'body__card-header width-100 border-bottom'}>
                                            <h4 className={'text-center no-margin-bottom'}>{item.date}</h4>
                                            <h6 className={'text-center no-margin-top'}>{`${item.vaccine} | ${from.substr(0, 2)}AM - 0${_to > 12 ? (_to - 12) : _to}PM`}</h6>
                                        </div>
                                        <div className={'body__card-body col width-100'}>
                                            <div className={'body__card-body-ul col content-start align-start width-100'}>
                                                <div className={'col content-center flex-row-nowrap width-90'}>
                                                    <h5 className={'no-margin-top'}>capacity available:</h5>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>first dose</span>
                                                    <span>{item.available_capacity_dose1} slots</span>
                                                </div>
                                                <div className={'col content-between flex-row-nowrap width-90'}>
                                                    <span>second dose</span>
                                                    <span>{item.available_capacity_dose2} slots</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'body__card-bottom col width-100 grow-1'}>
                                            <button onClick={e => (handleRedirect(e, item.available_capacity))}
                                                className={`width-90 center__button ${(item.available_capacity) ? '' : 'un-available'}`}
                                                disabled={!item.available_capacity}>
                                                {item.available_capacity ? 'Book Now' : 'No Slots'}
                                            </button>
                                        </div>
                                        <div className='card__age-limit'>
                                            <div>{`${item.min_age_limit}+`}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div >
                </div >
            </Modal >
        </div >
    );
};

export default ModalComponent;
