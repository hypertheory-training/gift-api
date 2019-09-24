import { Injectable } from '@nestjs/common';
import { FriendListItem, FriendPost } from './models';
import cuid = require('cuid');

@Injectable()
export class FriendsService {
    data: FriendListItem[] = [
        { id: '1', name: 'Sean' },
        { id: '2', name: 'Amy' },
        { id: '3', name: 'Jessika' },
        { id: '4', name: 'David' },
    ];

    getAll() {
        return this.data;
    }

    addOne(friend: FriendPost) {
        const id = cuid();
        const newFriend = { id, name: friend.name };
        this.data.push(newFriend);
        return newFriend;
    }
}
