import Utils from '../Abstract'

class Functions implements Utils {
  hasUnfilledField(body: { [field: string]: any }): boolean {
    for (const field in body) {
      if (!body[field]) {
        return true
      }
    }
    return false
  }
}

export default new Functions()
