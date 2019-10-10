import { ADD_PROFILES, SELECT_PROFILES, UNSELECT_PROFILES } from '../constance';
import dataTest from '../test.json';

const addProfiles = (profiles) => ({ type: ADD_PROFILES, payload: profiles});

export const takeProfiles = () => {
    return dispatch => {
        dispatch(addProfiles(dataTest));
    }
}

const selectProfiles = (profiles) => ({ type: SELECT_PROFILES, payload: profiles});

export const selectedProfile = (profile) => {
    return dispatch => {
        dispatch(selectProfiles(profile));
    }
}

// const unSelectProfiles = (profiles) => ({ type: UNSELECT_PROFILES, payload: profiles});

// export selectedProfile = () => {
//     return dispatch => {
//         dispatch(selectProfiles(dataTest));
//     }
// }