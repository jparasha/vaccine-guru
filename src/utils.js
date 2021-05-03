import axios from './interceptor';

export const getFormattedDate = (date = new Date()) => {
    const year = date.getFullYear();
    const month = (1 + date.getMonth()).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return (day + '-' + month + '-' + year);
};

export const manageEvents = event => {
    event.preventDefault();
    event.stopPropagation();
};

export const getUserZip = (REACT_APP_IP_URL, REACT_APP_ZIP_URL, isProduction) => {
    axios.get(REACT_APP_IP_URL)
        .then(({ data = {} }) => {
            console.log('ip', data.ip);
            const ZIP_URL = REACT_APP_ZIP_URL.replace(/{ip}/g, (data.ip || ''));
            isProduction && axios.get(ZIP_URL)
                .then(({ data: zipData = {} }) => {
                    console.log(zipData);
                    const { postal = '' } = zipData || {};
                    console.log(postal, 'zip');
                    return postal;
                })
                .catch(err => {
                    console.log(err);
                    return null;
                });
        })
        .catch(err => {
            console.error('Problem fetching my IP', err);
            return null;
        });
};

