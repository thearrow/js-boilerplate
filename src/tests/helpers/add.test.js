import add from '../../helpers/add'

describe('helpers/add', () => {
  it('should add two numbers', () => {
    add(2, 2).should.equal(4)
  })
})
