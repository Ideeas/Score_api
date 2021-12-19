export default abstract class Utils {
  abstract hasUnfilledField(body: { [field: string]: any }): boolean
}
