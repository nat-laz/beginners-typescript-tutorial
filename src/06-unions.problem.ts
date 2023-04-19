// | - union type
type Role = "admin" | "user" | "super-admin";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role[];
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  //NOTE:  // @ts-expect-error comment tells TypeScript that we are expecting there to be an error on the next line.
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
