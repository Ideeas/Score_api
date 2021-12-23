export default abstract class Utils {
  abstract hasUnfilledField(body: { [field: string]: any }): boolean
  abstract hashPassword(userPassword: string, saltRounds: number): Promise<string>
  abstract comparePassword(password: string, hashedPassword: string): Promise<boolean>
}
