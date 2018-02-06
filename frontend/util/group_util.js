import { receiveGroup, receiveErrors } from '../actions/group_actions';

export const fetchGroups = () => (
    $.ajax({
        method: 'GET',
        url: '/api/groups',
    })
);

export const fetchGroup = id => (
    $.ajax({
        method: 'GET',
        url: `/api/groups/${id}`,
    })
);