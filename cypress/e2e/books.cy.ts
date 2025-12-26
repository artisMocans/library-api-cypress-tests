import { BookApi } from '../api/BookApi';
import { Book } from '../support/types';


describe('Library API automation', () => {
  const newBook: Book = {
    name: 'TypeScript Handbook',
    author: 'Microsoft',
    year: '2024',
    available: 10
  };

  let bookId: string;

  before(() => {
    // Check health once
    cy.request('GET', '/health').its('status').should('eq', 200);
  });

  it('should manage the lifecycle...', () => {
    // Create new book
    BookApi.create(newBook).then((response) => {
      expect(response.status).to.eq(201);
      bookId = response.body._id;
    });

    //   Update book
    cy.then(() => {
      const updateData = { ...newBook, available: 0 };
      return BookApi.update(bookId, updateData).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.available).to.eq(0);
      });
    });

    // Delete and verify
    cy.then(() => BookApi.delete(bookId)).then((res) => {
      expect(res.status).to.eq(204);
    });
    cy.then(() => BookApi.getById(bookId)).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});