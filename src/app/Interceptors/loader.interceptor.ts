import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "../Widgets/Services/Loader/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const loaderService = this.injector.get(LoaderService);
    loaderService.show();
    return next.handle(request).pipe(
      finalize(() => loaderService.hide())
    );
  }
}
