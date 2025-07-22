import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const storageService = inject(StorageService)

  const token = storageService.getStorage('tokenPaciente')

  const cloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(cloneRequest);

};
