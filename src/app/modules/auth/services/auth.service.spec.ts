import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Debe retornar un objeto y un token
  it('👌 Debe retornar un objeto con data y token', (done: DoneFn) => {

    //Arranque
    const user: any = mockUser.userOk;
    const mockResponse = {
      data: {},
      tokenSession: '123ASALIKNVX123123'
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    //Action
    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi);

        //Lo que esperamos
        expect(getProperties).toContain('data');
        expect(getProperties).toContain('tokenSession');
        done();
      }); 
  });

  //Debe retornar un objeto y un token
  it('👌 Test de suma 2 + 3', () => {

    const a = 2;
    const b = 3;

    const c = service.suma(a, b);

    expect(c).toEqual(5);
  });

});
