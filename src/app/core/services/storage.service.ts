import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    setStorage(item: string, content: any) {
      localStorage.setItem(item, JSON.stringify(content))
  }

  getStorage(item:string){
      const content = localStorage.getItem(item) as string
      return JSON.parse(content)
  }

  removerStorage(item:string){
      localStorage.removeItem(item)
  }

  clearStorage(){
      localStorage.clear()
  }
}
