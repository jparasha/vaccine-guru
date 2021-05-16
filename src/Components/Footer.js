import './footer.css';

const Footer = ({ constants = {} }) => {

    return (
        <footer className={'footer'}>
            <h5 className='footer__primary no-margin footer__text'>
                {constants.FOOTER_PRIMARY_TEXT}
                &nbsp;
                <a href='https://www.cowin.gov.in/home'>{constants.FOOTER_PRIMARY_TEXT_ANCHOR}</a>
            </h5>
            <h6 className='footer__secondary no-margin footer__text'>{constants.FOOTER_SECONDARY_TEXT}</h6>
        </footer>
    );
};

export default Footer;

