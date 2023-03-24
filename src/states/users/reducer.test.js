/**
 * test scenario for register user
 *
 * - user Reducer function
 *  - should return the initial state when given by unknown action
 *  -should return the user with new user when given by RECEIVE_USERS action
 */
import usersReducer from './reducer';

describe('reducer thread tester', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the user with new user when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [
      {
        id: 'user-123',
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://generated-image-url.jpg',
      },
    ];
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });
});
