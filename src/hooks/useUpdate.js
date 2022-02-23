import {useContext} from 'react';
import { UpdateContext } from '../context/UpdateContext';

export default function useUpdate() {
    return useContext(UpdateContext);
}


