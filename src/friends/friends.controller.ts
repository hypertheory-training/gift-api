import { Controller, Get, Post, Body } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendPost } from './models';

@Controller('friends')
export class FriendsController {
    constructor(private service: FriendsService) { }

    @Get()
    getAllFriends() {
        return { friends: this.service.getAll() };
    }

    @Post()
    addOne(@Body() friend: FriendPost) {
        const response = this.service.addOne(friend);
        return response;
    }
}
