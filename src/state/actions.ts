import { ModeOfUseEnum } from '../types/mode-of-use/ModeOfUseEnum'
import { Voting } from '../types/Voting'


export enum actionTypes {
    'SET_MODE_OF_USE' = 'mode',
    'SET_VOTING_NUMBER' = 'number',
    'SET_VOTING_DATA' = 'data'
}


export type Action = 
| {
    type: actionTypes.SET_MODE_OF_USE,
    data: ModeOfUseEnum | undefined
}
| {
    type: actionTypes.SET_VOTING_NUMBER,
    data: string | undefined
}
| {
    type: actionTypes.SET_VOTING_DATA,
    data: Voting | undefined
}

