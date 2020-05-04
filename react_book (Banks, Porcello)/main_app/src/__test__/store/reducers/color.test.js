import deepFreeze from 'deep-freeze';

import { actions } from '../../../store/actions';
import { color } from '../../../store/reducers';


describe('color Reducer', () => {
    it('ADD COLOR success', () => {
        const state = {};
        const action = {
            type: actions.ADD_COLOR,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: new Date().toString()
        };
        
        deepFreeze(state);
        deepFreeze(action)

        expect(color(state, action))
            .toEqual({
                title: action.title,
                color: action.color,
                timestamp: action.timestamp
            })
    })
});