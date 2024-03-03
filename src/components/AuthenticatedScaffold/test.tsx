import { NavLink } from 'react-router-dom';
import { ROUTE_PATH } from '@/router/router.consts';
import '@mantine/core/styles/NavLink.css';

// FIXME: navbar styles
export const Test = () => <NavLink to={ROUTE_PATH.HOME}>Home</NavLink>;
