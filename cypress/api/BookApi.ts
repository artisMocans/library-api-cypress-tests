import { Book } from '../support/types';

export class BookApi {
  private static  readonly ENDPOINT = '/books';

  static getAll() {
    return cy.request('GET', this.ENDPOINT)
  }

  static getById(id: string) {
    return cy.request({
      method: 'GET',
      url: `${this.ENDPOINT}/${id}`,
      failOnStatusCode: false
    });
  }

  static create(book: Book) {
    return cy.request('POST', this.ENDPOINT, book);
  }

  static update(id: string, book: Book) {
    return cy.request('PUT', `${this.ENDPOINT}/${id}`, book)
  }

  static delete(id: string) {
    return cy.request('DELETE', `${this.ENDPOINT}/${id}`)
  }
}