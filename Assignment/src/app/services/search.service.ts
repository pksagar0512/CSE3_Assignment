import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private query = '';

  setSearchQuery(query: string) {
    this.query = query;
    console.log('Search Query:', query);
  }

  getSearchQuery(): string {
    return this.query;
  }
}
