const { Dog, conn } = require('../../src/db.js');


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({
          name: 'Pug',
          height: '2',
          weightMin: 4,
          weightMax: 7,
          life_span: '5-9'
        });
      });
    });
  });
});
