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

const getResponse = async URL => {
    try {
        return await axios.get(URL);
    } catch (error) {
        console.error(error, URL);
        return null;
    }
};

export const getUserZip = async (REACT_APP_IP_URL, REACT_APP_ZIP_URL, isProduction) => {
    if (!isProduction) {
        return null;
    }
    const userIPResponse = await getResponse(REACT_APP_IP_URL);
    if (userIPResponse) {
        const { data: { ip = '' } = {} } = userIPResponse;
        console.log('ip', ip);
        const ZIP_URL = REACT_APP_ZIP_URL.replace(/{ip}/g, (ip || ''));
        const userZIPResponse = await getResponse(ZIP_URL);
        if (userZIPResponse) {
            const { data: { postal = '' } = {} } = userIPResponse;
            return postal;
        } else {
            return null;
        }

    } else {
        return null;
    }
};

