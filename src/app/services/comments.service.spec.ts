import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


import { CommentsService } from './comments.service';

describe('UsersService', () => {
    let service: CommentsService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule,
                HttpClientTestingModule]
        });
        service = TestBed.inject(CommentsService);
        //Mock data
        service.comments = [
            {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            }, {
                "postId": 3,
                "id": 11,
                "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
                "email": "Veronica_Goodwin@timmothy.net",
                "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
            }
        ];

        service.allComments = service.comments;

        service.postIds = Array.from(new Set(service.comments.map(item => item.postId)));

        service.activeSearch = {
            "postId": 1,
            "text": "id labore"
        };
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call `init` method', () => {
        const spy = spyOn(service, 'init').and.callThrough();
        expect(spy).not.toHaveBeenCalled();
        service.init();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(service.comments.length).toBe(2);
    });

    it('should call `searchHandler` method', () => {
        const spy = spyOn(service, 'searchHandler').and.callThrough();
        expect(spy).not.toHaveBeenCalled();
        service.searchHandler(service.activeSearch)
        expect(spy).toHaveBeenCalledTimes(1);
        expect(service.comments.length).toBe(1);
    });

    it('should call `resetHandler` method', () => {
        const spy = spyOn(service, 'resetHandler').and.callThrough();
        expect(spy).not.toHaveBeenCalled();
        service.resetHandler();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(service.comments.length).toBe(2);
    });
});
