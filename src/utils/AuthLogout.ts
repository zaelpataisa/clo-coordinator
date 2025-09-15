
import { ROUTES } from './routes';

export const AuthLogout = () => {
    localStorage.clear();
    window.location.href = ROUTES.INDEX;
};