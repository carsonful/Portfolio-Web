
import { NavigateFunction } from 'react-router-dom';
import {ROUTES, EXTERNAL_LINKS} from './constants/defined';



export const handleClick = (navigate: NavigateFunction, path: string) => () => {


    if (path === ROUTES.GITHUB) {
        window.open(EXTERNAL_LINKS.GITHUB, "_blank");
        return;
    }
    else if (path === ROUTES.LINKEDIN) {
        window.open(EXTERNAL_LINKS.LINKEDIN, "_blank");
        return;
    }
    else if (path === ROUTES.RESUME) {
        window.open(EXTERNAL_LINKS.RESUME, "_blank");
        return;
    } else {

        // For internal routes, use navigate
        navigate(path);
        return;
    }

} 



