
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Snap
 * 
 */
export type Snap = $Result.DefaultSelection<Prisma.$SnapPayload>
/**
 * Model Story
 * 
 */
export type Story = $Result.DefaultSelection<Prisma.$StoryPayload>
/**
 * Model Spotlight
 * 
 */
export type Spotlight = $Result.DefaultSelection<Prisma.$SpotlightPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.snap`: Exposes CRUD operations for the **Snap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Snaps
    * const snaps = await prisma.snap.findMany()
    * ```
    */
  get snap(): Prisma.SnapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.story`: Exposes CRUD operations for the **Story** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stories
    * const stories = await prisma.story.findMany()
    * ```
    */
  get story(): Prisma.StoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spotlight`: Exposes CRUD operations for the **Spotlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spotlights
    * const spotlights = await prisma.spotlight.findMany()
    * ```
    */
  get spotlight(): Prisma.SpotlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Snap: 'Snap',
    Story: 'Story',
    Spotlight: 'Spotlight',
    Chat: 'Chat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "snap" | "story" | "spotlight" | "chat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Snap: {
        payload: Prisma.$SnapPayload<ExtArgs>
        fields: Prisma.SnapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SnapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SnapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          findFirst: {
            args: Prisma.SnapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SnapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          findMany: {
            args: Prisma.SnapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>[]
          }
          create: {
            args: Prisma.SnapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          createMany: {
            args: Prisma.SnapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SnapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>[]
          }
          delete: {
            args: Prisma.SnapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          update: {
            args: Prisma.SnapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          deleteMany: {
            args: Prisma.SnapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SnapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SnapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>[]
          }
          upsert: {
            args: Prisma.SnapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SnapPayload>
          }
          aggregate: {
            args: Prisma.SnapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSnap>
          }
          groupBy: {
            args: Prisma.SnapGroupByArgs<ExtArgs>
            result: $Utils.Optional<SnapGroupByOutputType>[]
          }
          count: {
            args: Prisma.SnapCountArgs<ExtArgs>
            result: $Utils.Optional<SnapCountAggregateOutputType> | number
          }
        }
      }
      Story: {
        payload: Prisma.$StoryPayload<ExtArgs>
        fields: Prisma.StoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findFirst: {
            args: Prisma.StoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          findMany: {
            args: Prisma.StoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          create: {
            args: Prisma.StoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          createMany: {
            args: Prisma.StoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          delete: {
            args: Prisma.StoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          update: {
            args: Prisma.StoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          deleteMany: {
            args: Prisma.StoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>[]
          }
          upsert: {
            args: Prisma.StoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPayload>
          }
          aggregate: {
            args: Prisma.StoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStory>
          }
          groupBy: {
            args: Prisma.StoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryCountArgs<ExtArgs>
            result: $Utils.Optional<StoryCountAggregateOutputType> | number
          }
        }
      }
      Spotlight: {
        payload: Prisma.$SpotlightPayload<ExtArgs>
        fields: Prisma.SpotlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          findFirst: {
            args: Prisma.SpotlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          findMany: {
            args: Prisma.SpotlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>[]
          }
          create: {
            args: Prisma.SpotlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          createMany: {
            args: Prisma.SpotlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpotlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>[]
          }
          delete: {
            args: Prisma.SpotlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          update: {
            args: Prisma.SpotlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          deleteMany: {
            args: Prisma.SpotlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpotlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpotlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>[]
          }
          upsert: {
            args: Prisma.SpotlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpotlightPayload>
          }
          aggregate: {
            args: Prisma.SpotlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpotlight>
          }
          groupBy: {
            args: Prisma.SpotlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpotlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotlightCountArgs<ExtArgs>
            result: $Utils.Optional<SpotlightCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    snap?: SnapOmit
    story?: StoryOmit
    spotlight?: SpotlightOmit
    chat?: ChatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    snapsSent: number
    snapsReceived: number
    stories: number
    spotlights: number
    chatsSent: number
    chatsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapsSent?: boolean | UserCountOutputTypeCountSnapsSentArgs
    snapsReceived?: boolean | UserCountOutputTypeCountSnapsReceivedArgs
    stories?: boolean | UserCountOutputTypeCountStoriesArgs
    spotlights?: boolean | UserCountOutputTypeCountSpotlightsArgs
    chatsSent?: boolean | UserCountOutputTypeCountChatsSentArgs
    chatsReceived?: boolean | UserCountOutputTypeCountChatsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnapsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSnapsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpotlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotlightWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    snapsSent?: boolean | User$snapsSentArgs<ExtArgs>
    snapsReceived?: boolean | User$snapsReceivedArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    spotlights?: boolean | User$spotlightsArgs<ExtArgs>
    chatsSent?: boolean | User$chatsSentArgs<ExtArgs>
    chatsReceived?: boolean | User$chatsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapsSent?: boolean | User$snapsSentArgs<ExtArgs>
    snapsReceived?: boolean | User$snapsReceivedArgs<ExtArgs>
    stories?: boolean | User$storiesArgs<ExtArgs>
    spotlights?: boolean | User$spotlightsArgs<ExtArgs>
    chatsSent?: boolean | User$chatsSentArgs<ExtArgs>
    chatsReceived?: boolean | User$chatsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      snapsSent: Prisma.$SnapPayload<ExtArgs>[]
      snapsReceived: Prisma.$SnapPayload<ExtArgs>[]
      stories: Prisma.$StoryPayload<ExtArgs>[]
      spotlights: Prisma.$SpotlightPayload<ExtArgs>[]
      chatsSent: Prisma.$ChatPayload<ExtArgs>[]
      chatsReceived: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    snapsSent<T extends User$snapsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$snapsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snapsReceived<T extends User$snapsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$snapsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stories<T extends User$storiesArgs<ExtArgs> = {}>(args?: Subset<T, User$storiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    spotlights<T extends User$spotlightsArgs<ExtArgs> = {}>(args?: Subset<T, User$spotlightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatsSent<T extends User$chatsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatsReceived<T extends User$chatsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.snapsSent
   */
  export type User$snapsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    where?: SnapWhereInput
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    cursor?: SnapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnapScalarFieldEnum | SnapScalarFieldEnum[]
  }

  /**
   * User.snapsReceived
   */
  export type User$snapsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    where?: SnapWhereInput
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    cursor?: SnapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SnapScalarFieldEnum | SnapScalarFieldEnum[]
  }

  /**
   * User.stories
   */
  export type User$storiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    cursor?: StoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * User.spotlights
   */
  export type User$spotlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    where?: SpotlightWhereInput
    orderBy?: SpotlightOrderByWithRelationInput | SpotlightOrderByWithRelationInput[]
    cursor?: SpotlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpotlightScalarFieldEnum | SpotlightScalarFieldEnum[]
  }

  /**
   * User.chatsSent
   */
  export type User$chatsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.chatsReceived
   */
  export type User$chatsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Snap
   */

  export type AggregateSnap = {
    _count: SnapCountAggregateOutputType | null
    _avg: SnapAvgAggregateOutputType | null
    _sum: SnapSumAggregateOutputType | null
    _min: SnapMinAggregateOutputType | null
    _max: SnapMaxAggregateOutputType | null
  }

  export type SnapAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type SnapSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type SnapMinAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    senderId: number | null
    receiverId: number | null
    createdAt: Date | null
  }

  export type SnapMaxAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    senderId: number | null
    receiverId: number | null
    createdAt: Date | null
  }

  export type SnapCountAggregateOutputType = {
    id: number
    mediaUrl: number
    senderId: number
    receiverId: number
    createdAt: number
    _all: number
  }


  export type SnapAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type SnapSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type SnapMinAggregateInputType = {
    id?: true
    mediaUrl?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type SnapMaxAggregateInputType = {
    id?: true
    mediaUrl?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
  }

  export type SnapCountAggregateInputType = {
    id?: true
    mediaUrl?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    _all?: true
  }

  export type SnapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snap to aggregate.
     */
    where?: SnapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snaps to fetch.
     */
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SnapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Snaps
    **/
    _count?: true | SnapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SnapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SnapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SnapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SnapMaxAggregateInputType
  }

  export type GetSnapAggregateType<T extends SnapAggregateArgs> = {
        [P in keyof T & keyof AggregateSnap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSnap[P]>
      : GetScalarType<T[P], AggregateSnap[P]>
  }




  export type SnapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SnapWhereInput
    orderBy?: SnapOrderByWithAggregationInput | SnapOrderByWithAggregationInput[]
    by: SnapScalarFieldEnum[] | SnapScalarFieldEnum
    having?: SnapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SnapCountAggregateInputType | true
    _avg?: SnapAvgAggregateInputType
    _sum?: SnapSumAggregateInputType
    _min?: SnapMinAggregateInputType
    _max?: SnapMaxAggregateInputType
  }

  export type SnapGroupByOutputType = {
    id: number
    mediaUrl: string
    senderId: number
    receiverId: number
    createdAt: Date
    _count: SnapCountAggregateOutputType | null
    _avg: SnapAvgAggregateOutputType | null
    _sum: SnapSumAggregateOutputType | null
    _min: SnapMinAggregateOutputType | null
    _max: SnapMaxAggregateOutputType | null
  }

  type GetSnapGroupByPayload<T extends SnapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SnapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SnapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SnapGroupByOutputType[P]>
            : GetScalarType<T[P], SnapGroupByOutputType[P]>
        }
      >
    >


  export type SnapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snap"]>

  export type SnapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snap"]>

  export type SnapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["snap"]>

  export type SnapSelectScalar = {
    id?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
  }

  export type SnapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediaUrl" | "senderId" | "receiverId" | "createdAt", ExtArgs["result"]["snap"]>
  export type SnapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SnapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SnapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SnapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Snap"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediaUrl: string
      senderId: number
      receiverId: number
      createdAt: Date
    }, ExtArgs["result"]["snap"]>
    composites: {}
  }

  type SnapGetPayload<S extends boolean | null | undefined | SnapDefaultArgs> = $Result.GetResult<Prisma.$SnapPayload, S>

  type SnapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SnapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SnapCountAggregateInputType | true
    }

  export interface SnapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Snap'], meta: { name: 'Snap' } }
    /**
     * Find zero or one Snap that matches the filter.
     * @param {SnapFindUniqueArgs} args - Arguments to find a Snap
     * @example
     * // Get one Snap
     * const snap = await prisma.snap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SnapFindUniqueArgs>(args: SelectSubset<T, SnapFindUniqueArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Snap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SnapFindUniqueOrThrowArgs} args - Arguments to find a Snap
     * @example
     * // Get one Snap
     * const snap = await prisma.snap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SnapFindUniqueOrThrowArgs>(args: SelectSubset<T, SnapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapFindFirstArgs} args - Arguments to find a Snap
     * @example
     * // Get one Snap
     * const snap = await prisma.snap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SnapFindFirstArgs>(args?: SelectSubset<T, SnapFindFirstArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Snap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapFindFirstOrThrowArgs} args - Arguments to find a Snap
     * @example
     * // Get one Snap
     * const snap = await prisma.snap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SnapFindFirstOrThrowArgs>(args?: SelectSubset<T, SnapFindFirstOrThrowArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Snaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Snaps
     * const snaps = await prisma.snap.findMany()
     * 
     * // Get first 10 Snaps
     * const snaps = await prisma.snap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const snapWithIdOnly = await prisma.snap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SnapFindManyArgs>(args?: SelectSubset<T, SnapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Snap.
     * @param {SnapCreateArgs} args - Arguments to create a Snap.
     * @example
     * // Create one Snap
     * const Snap = await prisma.snap.create({
     *   data: {
     *     // ... data to create a Snap
     *   }
     * })
     * 
     */
    create<T extends SnapCreateArgs>(args: SelectSubset<T, SnapCreateArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Snaps.
     * @param {SnapCreateManyArgs} args - Arguments to create many Snaps.
     * @example
     * // Create many Snaps
     * const snap = await prisma.snap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SnapCreateManyArgs>(args?: SelectSubset<T, SnapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Snaps and returns the data saved in the database.
     * @param {SnapCreateManyAndReturnArgs} args - Arguments to create many Snaps.
     * @example
     * // Create many Snaps
     * const snap = await prisma.snap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Snaps and only return the `id`
     * const snapWithIdOnly = await prisma.snap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SnapCreateManyAndReturnArgs>(args?: SelectSubset<T, SnapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Snap.
     * @param {SnapDeleteArgs} args - Arguments to delete one Snap.
     * @example
     * // Delete one Snap
     * const Snap = await prisma.snap.delete({
     *   where: {
     *     // ... filter to delete one Snap
     *   }
     * })
     * 
     */
    delete<T extends SnapDeleteArgs>(args: SelectSubset<T, SnapDeleteArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Snap.
     * @param {SnapUpdateArgs} args - Arguments to update one Snap.
     * @example
     * // Update one Snap
     * const snap = await prisma.snap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SnapUpdateArgs>(args: SelectSubset<T, SnapUpdateArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Snaps.
     * @param {SnapDeleteManyArgs} args - Arguments to filter Snaps to delete.
     * @example
     * // Delete a few Snaps
     * const { count } = await prisma.snap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SnapDeleteManyArgs>(args?: SelectSubset<T, SnapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Snaps
     * const snap = await prisma.snap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SnapUpdateManyArgs>(args: SelectSubset<T, SnapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Snaps and returns the data updated in the database.
     * @param {SnapUpdateManyAndReturnArgs} args - Arguments to update many Snaps.
     * @example
     * // Update many Snaps
     * const snap = await prisma.snap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Snaps and only return the `id`
     * const snapWithIdOnly = await prisma.snap.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SnapUpdateManyAndReturnArgs>(args: SelectSubset<T, SnapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Snap.
     * @param {SnapUpsertArgs} args - Arguments to update or create a Snap.
     * @example
     * // Update or create a Snap
     * const snap = await prisma.snap.upsert({
     *   create: {
     *     // ... data to create a Snap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Snap we want to update
     *   }
     * })
     */
    upsert<T extends SnapUpsertArgs>(args: SelectSubset<T, SnapUpsertArgs<ExtArgs>>): Prisma__SnapClient<$Result.GetResult<Prisma.$SnapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Snaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapCountArgs} args - Arguments to filter Snaps to count.
     * @example
     * // Count the number of Snaps
     * const count = await prisma.snap.count({
     *   where: {
     *     // ... the filter for the Snaps we want to count
     *   }
     * })
    **/
    count<T extends SnapCountArgs>(
      args?: Subset<T, SnapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SnapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Snap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SnapAggregateArgs>(args: Subset<T, SnapAggregateArgs>): Prisma.PrismaPromise<GetSnapAggregateType<T>>

    /**
     * Group by Snap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SnapGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SnapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SnapGroupByArgs['orderBy'] }
        : { orderBy?: SnapGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SnapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSnapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Snap model
   */
  readonly fields: SnapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Snap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SnapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Snap model
   */
  interface SnapFieldRefs {
    readonly id: FieldRef<"Snap", 'Int'>
    readonly mediaUrl: FieldRef<"Snap", 'String'>
    readonly senderId: FieldRef<"Snap", 'Int'>
    readonly receiverId: FieldRef<"Snap", 'Int'>
    readonly createdAt: FieldRef<"Snap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Snap findUnique
   */
  export type SnapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter, which Snap to fetch.
     */
    where: SnapWhereUniqueInput
  }

  /**
   * Snap findUniqueOrThrow
   */
  export type SnapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter, which Snap to fetch.
     */
    where: SnapWhereUniqueInput
  }

  /**
   * Snap findFirst
   */
  export type SnapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter, which Snap to fetch.
     */
    where?: SnapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snaps to fetch.
     */
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snaps.
     */
    cursor?: SnapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snaps.
     */
    distinct?: SnapScalarFieldEnum | SnapScalarFieldEnum[]
  }

  /**
   * Snap findFirstOrThrow
   */
  export type SnapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter, which Snap to fetch.
     */
    where?: SnapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snaps to fetch.
     */
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Snaps.
     */
    cursor?: SnapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Snaps.
     */
    distinct?: SnapScalarFieldEnum | SnapScalarFieldEnum[]
  }

  /**
   * Snap findMany
   */
  export type SnapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter, which Snaps to fetch.
     */
    where?: SnapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Snaps to fetch.
     */
    orderBy?: SnapOrderByWithRelationInput | SnapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Snaps.
     */
    cursor?: SnapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Snaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Snaps.
     */
    skip?: number
    distinct?: SnapScalarFieldEnum | SnapScalarFieldEnum[]
  }

  /**
   * Snap create
   */
  export type SnapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * The data needed to create a Snap.
     */
    data: XOR<SnapCreateInput, SnapUncheckedCreateInput>
  }

  /**
   * Snap createMany
   */
  export type SnapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Snaps.
     */
    data: SnapCreateManyInput | SnapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Snap createManyAndReturn
   */
  export type SnapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * The data used to create many Snaps.
     */
    data: SnapCreateManyInput | SnapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snap update
   */
  export type SnapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * The data needed to update a Snap.
     */
    data: XOR<SnapUpdateInput, SnapUncheckedUpdateInput>
    /**
     * Choose, which Snap to update.
     */
    where: SnapWhereUniqueInput
  }

  /**
   * Snap updateMany
   */
  export type SnapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Snaps.
     */
    data: XOR<SnapUpdateManyMutationInput, SnapUncheckedUpdateManyInput>
    /**
     * Filter which Snaps to update
     */
    where?: SnapWhereInput
    /**
     * Limit how many Snaps to update.
     */
    limit?: number
  }

  /**
   * Snap updateManyAndReturn
   */
  export type SnapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * The data used to update Snaps.
     */
    data: XOR<SnapUpdateManyMutationInput, SnapUncheckedUpdateManyInput>
    /**
     * Filter which Snaps to update
     */
    where?: SnapWhereInput
    /**
     * Limit how many Snaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Snap upsert
   */
  export type SnapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * The filter to search for the Snap to update in case it exists.
     */
    where: SnapWhereUniqueInput
    /**
     * In case the Snap found by the `where` argument doesn't exist, create a new Snap with this data.
     */
    create: XOR<SnapCreateInput, SnapUncheckedCreateInput>
    /**
     * In case the Snap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SnapUpdateInput, SnapUncheckedUpdateInput>
  }

  /**
   * Snap delete
   */
  export type SnapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
    /**
     * Filter which Snap to delete.
     */
    where: SnapWhereUniqueInput
  }

  /**
   * Snap deleteMany
   */
  export type SnapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Snaps to delete
     */
    where?: SnapWhereInput
    /**
     * Limit how many Snaps to delete.
     */
    limit?: number
  }

  /**
   * Snap without action
   */
  export type SnapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Snap
     */
    select?: SnapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Snap
     */
    omit?: SnapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SnapInclude<ExtArgs> | null
  }


  /**
   * Model Story
   */

  export type AggregateStory = {
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  export type StoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StorySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type StoryMinAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type StoryMaxAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type StoryCountAggregateOutputType = {
    id: number
    mediaUrl: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type StoryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StorySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StoryMinAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type StoryMaxAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type StoryCountAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type StoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Story to aggregate.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stories
    **/
    _count?: true | StoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryMaxAggregateInputType
  }

  export type GetStoryAggregateType<T extends StoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStory[P]>
      : GetScalarType<T[P], AggregateStory[P]>
  }




  export type StoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryWhereInput
    orderBy?: StoryOrderByWithAggregationInput | StoryOrderByWithAggregationInput[]
    by: StoryScalarFieldEnum[] | StoryScalarFieldEnum
    having?: StoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryCountAggregateInputType | true
    _avg?: StoryAvgAggregateInputType
    _sum?: StorySumAggregateInputType
    _min?: StoryMinAggregateInputType
    _max?: StoryMaxAggregateInputType
  }

  export type StoryGroupByOutputType = {
    id: number
    mediaUrl: string
    userId: number
    createdAt: Date
    expiresAt: Date
    _count: StoryCountAggregateOutputType | null
    _avg: StoryAvgAggregateOutputType | null
    _sum: StorySumAggregateOutputType | null
    _min: StoryMinAggregateOutputType | null
    _max: StoryMaxAggregateOutputType | null
  }

  type GetStoryGroupByPayload<T extends StoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryGroupByOutputType[P]>
            : GetScalarType<T[P], StoryGroupByOutputType[P]>
        }
      >
    >


  export type StorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["story"]>

  export type StorySelectScalar = {
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type StoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediaUrl" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["story"]>
  export type StoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Story"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediaUrl: string
      userId: number
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["story"]>
    composites: {}
  }

  type StoryGetPayload<S extends boolean | null | undefined | StoryDefaultArgs> = $Result.GetResult<Prisma.$StoryPayload, S>

  type StoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryCountAggregateInputType | true
    }

  export interface StoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Story'], meta: { name: 'Story' } }
    /**
     * Find zero or one Story that matches the filter.
     * @param {StoryFindUniqueArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryFindUniqueArgs>(args: SelectSubset<T, StoryFindUniqueArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Story that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryFindUniqueOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryFindFirstArgs>(args?: SelectSubset<T, StoryFindFirstArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Story that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindFirstOrThrowArgs} args - Arguments to find a Story
     * @example
     * // Get one Story
     * const story = await prisma.story.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stories
     * const stories = await prisma.story.findMany()
     * 
     * // Get first 10 Stories
     * const stories = await prisma.story.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyWithIdOnly = await prisma.story.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryFindManyArgs>(args?: SelectSubset<T, StoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Story.
     * @param {StoryCreateArgs} args - Arguments to create a Story.
     * @example
     * // Create one Story
     * const Story = await prisma.story.create({
     *   data: {
     *     // ... data to create a Story
     *   }
     * })
     * 
     */
    create<T extends StoryCreateArgs>(args: SelectSubset<T, StoryCreateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stories.
     * @param {StoryCreateManyArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryCreateManyArgs>(args?: SelectSubset<T, StoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stories and returns the data saved in the database.
     * @param {StoryCreateManyAndReturnArgs} args - Arguments to create many Stories.
     * @example
     * // Create many Stories
     * const story = await prisma.story.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Story.
     * @param {StoryDeleteArgs} args - Arguments to delete one Story.
     * @example
     * // Delete one Story
     * const Story = await prisma.story.delete({
     *   where: {
     *     // ... filter to delete one Story
     *   }
     * })
     * 
     */
    delete<T extends StoryDeleteArgs>(args: SelectSubset<T, StoryDeleteArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Story.
     * @param {StoryUpdateArgs} args - Arguments to update one Story.
     * @example
     * // Update one Story
     * const story = await prisma.story.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryUpdateArgs>(args: SelectSubset<T, StoryUpdateArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stories.
     * @param {StoryDeleteManyArgs} args - Arguments to filter Stories to delete.
     * @example
     * // Delete a few Stories
     * const { count } = await prisma.story.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryDeleteManyArgs>(args?: SelectSubset<T, StoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryUpdateManyArgs>(args: SelectSubset<T, StoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stories and returns the data updated in the database.
     * @param {StoryUpdateManyAndReturnArgs} args - Arguments to update many Stories.
     * @example
     * // Update many Stories
     * const story = await prisma.story.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stories and only return the `id`
     * const storyWithIdOnly = await prisma.story.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Story.
     * @param {StoryUpsertArgs} args - Arguments to update or create a Story.
     * @example
     * // Update or create a Story
     * const story = await prisma.story.upsert({
     *   create: {
     *     // ... data to create a Story
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Story we want to update
     *   }
     * })
     */
    upsert<T extends StoryUpsertArgs>(args: SelectSubset<T, StoryUpsertArgs<ExtArgs>>): Prisma__StoryClient<$Result.GetResult<Prisma.$StoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryCountArgs} args - Arguments to filter Stories to count.
     * @example
     * // Count the number of Stories
     * const count = await prisma.story.count({
     *   where: {
     *     // ... the filter for the Stories we want to count
     *   }
     * })
    **/
    count<T extends StoryCountArgs>(
      args?: Subset<T, StoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoryAggregateArgs>(args: Subset<T, StoryAggregateArgs>): Prisma.PrismaPromise<GetStoryAggregateType<T>>

    /**
     * Group by Story.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryGroupByArgs['orderBy'] }
        : { orderBy?: StoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Story model
   */
  readonly fields: StoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Story.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Story model
   */
  interface StoryFieldRefs {
    readonly id: FieldRef<"Story", 'Int'>
    readonly mediaUrl: FieldRef<"Story", 'String'>
    readonly userId: FieldRef<"Story", 'Int'>
    readonly createdAt: FieldRef<"Story", 'DateTime'>
    readonly expiresAt: FieldRef<"Story", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Story findUnique
   */
  export type StoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findUniqueOrThrow
   */
  export type StoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story findFirst
   */
  export type StoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findFirstOrThrow
   */
  export type StoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Story to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stories.
     */
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story findMany
   */
  export type StoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter, which Stories to fetch.
     */
    where?: StoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stories to fetch.
     */
    orderBy?: StoryOrderByWithRelationInput | StoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stories.
     */
    cursor?: StoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stories.
     */
    skip?: number
    distinct?: StoryScalarFieldEnum | StoryScalarFieldEnum[]
  }

  /**
   * Story create
   */
  export type StoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Story.
     */
    data: XOR<StoryCreateInput, StoryUncheckedCreateInput>
  }

  /**
   * Story createMany
   */
  export type StoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Story createManyAndReturn
   */
  export type StoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to create many Stories.
     */
    data: StoryCreateManyInput | StoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story update
   */
  export type StoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Story.
     */
    data: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
    /**
     * Choose, which Story to update.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story updateMany
   */
  export type StoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
  }

  /**
   * Story updateManyAndReturn
   */
  export type StoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * The data used to update Stories.
     */
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyInput>
    /**
     * Filter which Stories to update
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Story upsert
   */
  export type StoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Story to update in case it exists.
     */
    where: StoryWhereUniqueInput
    /**
     * In case the Story found by the `where` argument doesn't exist, create a new Story with this data.
     */
    create: XOR<StoryCreateInput, StoryUncheckedCreateInput>
    /**
     * In case the Story was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryUpdateInput, StoryUncheckedUpdateInput>
  }

  /**
   * Story delete
   */
  export type StoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
    /**
     * Filter which Story to delete.
     */
    where: StoryWhereUniqueInput
  }

  /**
   * Story deleteMany
   */
  export type StoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stories to delete
     */
    where?: StoryWhereInput
    /**
     * Limit how many Stories to delete.
     */
    limit?: number
  }

  /**
   * Story without action
   */
  export type StoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Story
     */
    select?: StorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Story
     */
    omit?: StoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryInclude<ExtArgs> | null
  }


  /**
   * Model Spotlight
   */

  export type AggregateSpotlight = {
    _count: SpotlightCountAggregateOutputType | null
    _avg: SpotlightAvgAggregateOutputType | null
    _sum: SpotlightSumAggregateOutputType | null
    _min: SpotlightMinAggregateOutputType | null
    _max: SpotlightMaxAggregateOutputType | null
  }

  export type SpotlightAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SpotlightSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SpotlightMinAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type SpotlightMaxAggregateOutputType = {
    id: number | null
    mediaUrl: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type SpotlightCountAggregateOutputType = {
    id: number
    mediaUrl: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SpotlightAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SpotlightSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SpotlightMinAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
  }

  export type SpotlightMaxAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
  }

  export type SpotlightCountAggregateInputType = {
    id?: true
    mediaUrl?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SpotlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spotlight to aggregate.
     */
    where?: SpotlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spotlights to fetch.
     */
    orderBy?: SpotlightOrderByWithRelationInput | SpotlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spotlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spotlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Spotlights
    **/
    _count?: true | SpotlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotlightMaxAggregateInputType
  }

  export type GetSpotlightAggregateType<T extends SpotlightAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotlight[P]>
      : GetScalarType<T[P], AggregateSpotlight[P]>
  }




  export type SpotlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotlightWhereInput
    orderBy?: SpotlightOrderByWithAggregationInput | SpotlightOrderByWithAggregationInput[]
    by: SpotlightScalarFieldEnum[] | SpotlightScalarFieldEnum
    having?: SpotlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotlightCountAggregateInputType | true
    _avg?: SpotlightAvgAggregateInputType
    _sum?: SpotlightSumAggregateInputType
    _min?: SpotlightMinAggregateInputType
    _max?: SpotlightMaxAggregateInputType
  }

  export type SpotlightGroupByOutputType = {
    id: number
    mediaUrl: string
    userId: number
    createdAt: Date
    _count: SpotlightCountAggregateOutputType | null
    _avg: SpotlightAvgAggregateOutputType | null
    _sum: SpotlightSumAggregateOutputType | null
    _min: SpotlightMinAggregateOutputType | null
    _max: SpotlightMaxAggregateOutputType | null
  }

  type GetSpotlightGroupByPayload<T extends SpotlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotlightGroupByOutputType[P]>
            : GetScalarType<T[P], SpotlightGroupByOutputType[P]>
        }
      >
    >


  export type SpotlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotlight"]>

  export type SpotlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotlight"]>

  export type SpotlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spotlight"]>

  export type SpotlightSelectScalar = {
    id?: boolean
    mediaUrl?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SpotlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediaUrl" | "userId" | "createdAt", ExtArgs["result"]["spotlight"]>
  export type SpotlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpotlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SpotlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SpotlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Spotlight"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediaUrl: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["spotlight"]>
    composites: {}
  }

  type SpotlightGetPayload<S extends boolean | null | undefined | SpotlightDefaultArgs> = $Result.GetResult<Prisma.$SpotlightPayload, S>

  type SpotlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpotlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpotlightCountAggregateInputType | true
    }

  export interface SpotlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Spotlight'], meta: { name: 'Spotlight' } }
    /**
     * Find zero or one Spotlight that matches the filter.
     * @param {SpotlightFindUniqueArgs} args - Arguments to find a Spotlight
     * @example
     * // Get one Spotlight
     * const spotlight = await prisma.spotlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpotlightFindUniqueArgs>(args: SelectSubset<T, SpotlightFindUniqueArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spotlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpotlightFindUniqueOrThrowArgs} args - Arguments to find a Spotlight
     * @example
     * // Get one Spotlight
     * const spotlight = await prisma.spotlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpotlightFindUniqueOrThrowArgs>(args: SelectSubset<T, SpotlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spotlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightFindFirstArgs} args - Arguments to find a Spotlight
     * @example
     * // Get one Spotlight
     * const spotlight = await prisma.spotlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpotlightFindFirstArgs>(args?: SelectSubset<T, SpotlightFindFirstArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spotlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightFindFirstOrThrowArgs} args - Arguments to find a Spotlight
     * @example
     * // Get one Spotlight
     * const spotlight = await prisma.spotlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpotlightFindFirstOrThrowArgs>(args?: SelectSubset<T, SpotlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spotlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spotlights
     * const spotlights = await prisma.spotlight.findMany()
     * 
     * // Get first 10 Spotlights
     * const spotlights = await prisma.spotlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotlightWithIdOnly = await prisma.spotlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpotlightFindManyArgs>(args?: SelectSubset<T, SpotlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spotlight.
     * @param {SpotlightCreateArgs} args - Arguments to create a Spotlight.
     * @example
     * // Create one Spotlight
     * const Spotlight = await prisma.spotlight.create({
     *   data: {
     *     // ... data to create a Spotlight
     *   }
     * })
     * 
     */
    create<T extends SpotlightCreateArgs>(args: SelectSubset<T, SpotlightCreateArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spotlights.
     * @param {SpotlightCreateManyArgs} args - Arguments to create many Spotlights.
     * @example
     * // Create many Spotlights
     * const spotlight = await prisma.spotlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpotlightCreateManyArgs>(args?: SelectSubset<T, SpotlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spotlights and returns the data saved in the database.
     * @param {SpotlightCreateManyAndReturnArgs} args - Arguments to create many Spotlights.
     * @example
     * // Create many Spotlights
     * const spotlight = await prisma.spotlight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spotlights and only return the `id`
     * const spotlightWithIdOnly = await prisma.spotlight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpotlightCreateManyAndReturnArgs>(args?: SelectSubset<T, SpotlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spotlight.
     * @param {SpotlightDeleteArgs} args - Arguments to delete one Spotlight.
     * @example
     * // Delete one Spotlight
     * const Spotlight = await prisma.spotlight.delete({
     *   where: {
     *     // ... filter to delete one Spotlight
     *   }
     * })
     * 
     */
    delete<T extends SpotlightDeleteArgs>(args: SelectSubset<T, SpotlightDeleteArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spotlight.
     * @param {SpotlightUpdateArgs} args - Arguments to update one Spotlight.
     * @example
     * // Update one Spotlight
     * const spotlight = await prisma.spotlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpotlightUpdateArgs>(args: SelectSubset<T, SpotlightUpdateArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spotlights.
     * @param {SpotlightDeleteManyArgs} args - Arguments to filter Spotlights to delete.
     * @example
     * // Delete a few Spotlights
     * const { count } = await prisma.spotlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpotlightDeleteManyArgs>(args?: SelectSubset<T, SpotlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spotlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spotlights
     * const spotlight = await prisma.spotlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpotlightUpdateManyArgs>(args: SelectSubset<T, SpotlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spotlights and returns the data updated in the database.
     * @param {SpotlightUpdateManyAndReturnArgs} args - Arguments to update many Spotlights.
     * @example
     * // Update many Spotlights
     * const spotlight = await prisma.spotlight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spotlights and only return the `id`
     * const spotlightWithIdOnly = await prisma.spotlight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpotlightUpdateManyAndReturnArgs>(args: SelectSubset<T, SpotlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spotlight.
     * @param {SpotlightUpsertArgs} args - Arguments to update or create a Spotlight.
     * @example
     * // Update or create a Spotlight
     * const spotlight = await prisma.spotlight.upsert({
     *   create: {
     *     // ... data to create a Spotlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spotlight we want to update
     *   }
     * })
     */
    upsert<T extends SpotlightUpsertArgs>(args: SelectSubset<T, SpotlightUpsertArgs<ExtArgs>>): Prisma__SpotlightClient<$Result.GetResult<Prisma.$SpotlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spotlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightCountArgs} args - Arguments to filter Spotlights to count.
     * @example
     * // Count the number of Spotlights
     * const count = await prisma.spotlight.count({
     *   where: {
     *     // ... the filter for the Spotlights we want to count
     *   }
     * })
    **/
    count<T extends SpotlightCountArgs>(
      args?: Subset<T, SpotlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spotlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpotlightAggregateArgs>(args: Subset<T, SpotlightAggregateArgs>): Prisma.PrismaPromise<GetSpotlightAggregateType<T>>

    /**
     * Group by Spotlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpotlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotlightGroupByArgs['orderBy'] }
        : { orderBy?: SpotlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpotlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Spotlight model
   */
  readonly fields: SpotlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Spotlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Spotlight model
   */
  interface SpotlightFieldRefs {
    readonly id: FieldRef<"Spotlight", 'Int'>
    readonly mediaUrl: FieldRef<"Spotlight", 'String'>
    readonly userId: FieldRef<"Spotlight", 'Int'>
    readonly createdAt: FieldRef<"Spotlight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Spotlight findUnique
   */
  export type SpotlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter, which Spotlight to fetch.
     */
    where: SpotlightWhereUniqueInput
  }

  /**
   * Spotlight findUniqueOrThrow
   */
  export type SpotlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter, which Spotlight to fetch.
     */
    where: SpotlightWhereUniqueInput
  }

  /**
   * Spotlight findFirst
   */
  export type SpotlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter, which Spotlight to fetch.
     */
    where?: SpotlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spotlights to fetch.
     */
    orderBy?: SpotlightOrderByWithRelationInput | SpotlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spotlights.
     */
    cursor?: SpotlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spotlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spotlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spotlights.
     */
    distinct?: SpotlightScalarFieldEnum | SpotlightScalarFieldEnum[]
  }

  /**
   * Spotlight findFirstOrThrow
   */
  export type SpotlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter, which Spotlight to fetch.
     */
    where?: SpotlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spotlights to fetch.
     */
    orderBy?: SpotlightOrderByWithRelationInput | SpotlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Spotlights.
     */
    cursor?: SpotlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spotlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spotlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Spotlights.
     */
    distinct?: SpotlightScalarFieldEnum | SpotlightScalarFieldEnum[]
  }

  /**
   * Spotlight findMany
   */
  export type SpotlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter, which Spotlights to fetch.
     */
    where?: SpotlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Spotlights to fetch.
     */
    orderBy?: SpotlightOrderByWithRelationInput | SpotlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Spotlights.
     */
    cursor?: SpotlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Spotlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Spotlights.
     */
    skip?: number
    distinct?: SpotlightScalarFieldEnum | SpotlightScalarFieldEnum[]
  }

  /**
   * Spotlight create
   */
  export type SpotlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Spotlight.
     */
    data: XOR<SpotlightCreateInput, SpotlightUncheckedCreateInput>
  }

  /**
   * Spotlight createMany
   */
  export type SpotlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Spotlights.
     */
    data: SpotlightCreateManyInput | SpotlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Spotlight createManyAndReturn
   */
  export type SpotlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * The data used to create many Spotlights.
     */
    data: SpotlightCreateManyInput | SpotlightCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Spotlight update
   */
  export type SpotlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Spotlight.
     */
    data: XOR<SpotlightUpdateInput, SpotlightUncheckedUpdateInput>
    /**
     * Choose, which Spotlight to update.
     */
    where: SpotlightWhereUniqueInput
  }

  /**
   * Spotlight updateMany
   */
  export type SpotlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Spotlights.
     */
    data: XOR<SpotlightUpdateManyMutationInput, SpotlightUncheckedUpdateManyInput>
    /**
     * Filter which Spotlights to update
     */
    where?: SpotlightWhereInput
    /**
     * Limit how many Spotlights to update.
     */
    limit?: number
  }

  /**
   * Spotlight updateManyAndReturn
   */
  export type SpotlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * The data used to update Spotlights.
     */
    data: XOR<SpotlightUpdateManyMutationInput, SpotlightUncheckedUpdateManyInput>
    /**
     * Filter which Spotlights to update
     */
    where?: SpotlightWhereInput
    /**
     * Limit how many Spotlights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Spotlight upsert
   */
  export type SpotlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Spotlight to update in case it exists.
     */
    where: SpotlightWhereUniqueInput
    /**
     * In case the Spotlight found by the `where` argument doesn't exist, create a new Spotlight with this data.
     */
    create: XOR<SpotlightCreateInput, SpotlightUncheckedCreateInput>
    /**
     * In case the Spotlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotlightUpdateInput, SpotlightUncheckedUpdateInput>
  }

  /**
   * Spotlight delete
   */
  export type SpotlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
    /**
     * Filter which Spotlight to delete.
     */
    where: SpotlightWhereUniqueInput
  }

  /**
   * Spotlight deleteMany
   */
  export type SpotlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Spotlights to delete
     */
    where?: SpotlightWhereInput
    /**
     * Limit how many Spotlights to delete.
     */
    limit?: number
  }

  /**
   * Spotlight without action
   */
  export type SpotlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Spotlight
     */
    select?: SpotlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Spotlight
     */
    omit?: SpotlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpotlightInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    message: string | null
    createdAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: number
    createdAt: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    message: string
    createdAt: Date
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "message" | "createdAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      message: string
      createdAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly senderId: FieldRef<"Chat", 'Int'>
    readonly receiverId: FieldRef<"Chat", 'Int'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SnapScalarFieldEnum: {
    id: 'id',
    mediaUrl: 'mediaUrl',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt'
  };

  export type SnapScalarFieldEnum = (typeof SnapScalarFieldEnum)[keyof typeof SnapScalarFieldEnum]


  export const StoryScalarFieldEnum: {
    id: 'id',
    mediaUrl: 'mediaUrl',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type StoryScalarFieldEnum = (typeof StoryScalarFieldEnum)[keyof typeof StoryScalarFieldEnum]


  export const SpotlightScalarFieldEnum: {
    id: 'id',
    mediaUrl: 'mediaUrl',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SpotlightScalarFieldEnum = (typeof SpotlightScalarFieldEnum)[keyof typeof SpotlightScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    snapsSent?: SnapListRelationFilter
    snapsReceived?: SnapListRelationFilter
    stories?: StoryListRelationFilter
    spotlights?: SpotlightListRelationFilter
    chatsSent?: ChatListRelationFilter
    chatsReceived?: ChatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    snapsSent?: SnapOrderByRelationAggregateInput
    snapsReceived?: SnapOrderByRelationAggregateInput
    stories?: StoryOrderByRelationAggregateInput
    spotlights?: SpotlightOrderByRelationAggregateInput
    chatsSent?: ChatOrderByRelationAggregateInput
    chatsReceived?: ChatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    snapsSent?: SnapListRelationFilter
    snapsReceived?: SnapListRelationFilter
    stories?: StoryListRelationFilter
    spotlights?: SpotlightListRelationFilter
    chatsSent?: ChatListRelationFilter
    chatsReceived?: ChatListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type SnapWhereInput = {
    AND?: SnapWhereInput | SnapWhereInput[]
    OR?: SnapWhereInput[]
    NOT?: SnapWhereInput | SnapWhereInput[]
    id?: IntFilter<"Snap"> | number
    mediaUrl?: StringFilter<"Snap"> | string
    senderId?: IntFilter<"Snap"> | number
    receiverId?: IntFilter<"Snap"> | number
    createdAt?: DateTimeFilter<"Snap"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SnapOrderByWithRelationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type SnapWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SnapWhereInput | SnapWhereInput[]
    OR?: SnapWhereInput[]
    NOT?: SnapWhereInput | SnapWhereInput[]
    mediaUrl?: StringFilter<"Snap"> | string
    senderId?: IntFilter<"Snap"> | number
    receiverId?: IntFilter<"Snap"> | number
    createdAt?: DateTimeFilter<"Snap"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SnapOrderByWithAggregationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    _count?: SnapCountOrderByAggregateInput
    _avg?: SnapAvgOrderByAggregateInput
    _max?: SnapMaxOrderByAggregateInput
    _min?: SnapMinOrderByAggregateInput
    _sum?: SnapSumOrderByAggregateInput
  }

  export type SnapScalarWhereWithAggregatesInput = {
    AND?: SnapScalarWhereWithAggregatesInput | SnapScalarWhereWithAggregatesInput[]
    OR?: SnapScalarWhereWithAggregatesInput[]
    NOT?: SnapScalarWhereWithAggregatesInput | SnapScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Snap"> | number
    mediaUrl?: StringWithAggregatesFilter<"Snap"> | string
    senderId?: IntWithAggregatesFilter<"Snap"> | number
    receiverId?: IntWithAggregatesFilter<"Snap"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Snap"> | Date | string
  }

  export type StoryWhereInput = {
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    id?: IntFilter<"Story"> | number
    mediaUrl?: StringFilter<"Story"> | string
    userId?: IntFilter<"Story"> | number
    createdAt?: DateTimeFilter<"Story"> | Date | string
    expiresAt?: DateTimeFilter<"Story"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StoryOrderByWithRelationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryWhereInput | StoryWhereInput[]
    OR?: StoryWhereInput[]
    NOT?: StoryWhereInput | StoryWhereInput[]
    mediaUrl?: StringFilter<"Story"> | string
    userId?: IntFilter<"Story"> | number
    createdAt?: DateTimeFilter<"Story"> | Date | string
    expiresAt?: DateTimeFilter<"Story"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StoryOrderByWithAggregationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: StoryCountOrderByAggregateInput
    _avg?: StoryAvgOrderByAggregateInput
    _max?: StoryMaxOrderByAggregateInput
    _min?: StoryMinOrderByAggregateInput
    _sum?: StorySumOrderByAggregateInput
  }

  export type StoryScalarWhereWithAggregatesInput = {
    AND?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    OR?: StoryScalarWhereWithAggregatesInput[]
    NOT?: StoryScalarWhereWithAggregatesInput | StoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Story"> | number
    mediaUrl?: StringWithAggregatesFilter<"Story"> | string
    userId?: IntWithAggregatesFilter<"Story"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Story"> | Date | string
  }

  export type SpotlightWhereInput = {
    AND?: SpotlightWhereInput | SpotlightWhereInput[]
    OR?: SpotlightWhereInput[]
    NOT?: SpotlightWhereInput | SpotlightWhereInput[]
    id?: IntFilter<"Spotlight"> | number
    mediaUrl?: StringFilter<"Spotlight"> | string
    userId?: IntFilter<"Spotlight"> | number
    createdAt?: DateTimeFilter<"Spotlight"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SpotlightOrderByWithRelationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SpotlightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpotlightWhereInput | SpotlightWhereInput[]
    OR?: SpotlightWhereInput[]
    NOT?: SpotlightWhereInput | SpotlightWhereInput[]
    mediaUrl?: StringFilter<"Spotlight"> | string
    userId?: IntFilter<"Spotlight"> | number
    createdAt?: DateTimeFilter<"Spotlight"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SpotlightOrderByWithAggregationInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SpotlightCountOrderByAggregateInput
    _avg?: SpotlightAvgOrderByAggregateInput
    _max?: SpotlightMaxOrderByAggregateInput
    _min?: SpotlightMinOrderByAggregateInput
    _sum?: SpotlightSumOrderByAggregateInput
  }

  export type SpotlightScalarWhereWithAggregatesInput = {
    AND?: SpotlightScalarWhereWithAggregatesInput | SpotlightScalarWhereWithAggregatesInput[]
    OR?: SpotlightScalarWhereWithAggregatesInput[]
    NOT?: SpotlightScalarWhereWithAggregatesInput | SpotlightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Spotlight"> | number
    mediaUrl?: StringWithAggregatesFilter<"Spotlight"> | string
    userId?: IntWithAggregatesFilter<"Spotlight"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Spotlight"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    senderId?: IntWithAggregatesFilter<"Chat"> | number
    receiverId?: IntWithAggregatesFilter<"Chat"> | number
    message?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    stories?: StoryCreateNestedManyWithoutUserInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type SnapCreateInput = {
    mediaUrl: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSnapsSentInput
    receiver: UserCreateNestedOneWithoutSnapsReceivedInput
  }

  export type SnapUncheckedCreateInput = {
    id?: number
    mediaUrl: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
  }

  export type SnapUpdateInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSnapsSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutSnapsReceivedNestedInput
  }

  export type SnapUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapCreateManyInput = {
    id?: number
    mediaUrl: string
    senderId: number
    receiverId: number
    createdAt?: Date | string
  }

  export type SnapUpdateManyMutationInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateInput = {
    mediaUrl: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutStoriesInput
  }

  export type StoryUncheckedCreateInput = {
    id?: number
    mediaUrl: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type StoryUpdateInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStoriesNestedInput
  }

  export type StoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryCreateManyInput = {
    id?: number
    mediaUrl: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type StoryUpdateManyMutationInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightCreateInput = {
    mediaUrl: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSpotlightsInput
  }

  export type SpotlightUncheckedCreateInput = {
    id?: number
    mediaUrl: string
    userId: number
    createdAt?: Date | string
  }

  export type SpotlightUpdateInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSpotlightsNestedInput
  }

  export type SpotlightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightCreateManyInput = {
    id?: number
    mediaUrl: string
    userId: number
    createdAt?: Date | string
  }

  export type SpotlightUpdateManyMutationInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    message: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutChatsSentInput
    receiver: UserCreateNestedOneWithoutChatsReceivedInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    createdAt?: Date | string
  }

  export type ChatUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutChatsSentNestedInput
    receiver?: UserUpdateOneRequiredWithoutChatsReceivedNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    message: string
    createdAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SnapListRelationFilter = {
    every?: SnapWhereInput
    some?: SnapWhereInput
    none?: SnapWhereInput
  }

  export type StoryListRelationFilter = {
    every?: StoryWhereInput
    some?: StoryWhereInput
    none?: StoryWhereInput
  }

  export type SpotlightListRelationFilter = {
    every?: SpotlightWhereInput
    some?: SpotlightWhereInput
    none?: SpotlightWhereInput
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type SnapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpotlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SnapCountOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type SnapMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapMinOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
  }

  export type SnapSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StoryCountOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StoryMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StoryMinOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SpotlightCountOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotlightAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SpotlightMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotlightMinOrderByAggregateInput = {
    id?: SortOrder
    mediaUrl?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SpotlightSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type SnapCreateNestedManyWithoutSenderInput = {
    create?: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput> | SnapCreateWithoutSenderInput[] | SnapUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutSenderInput | SnapCreateOrConnectWithoutSenderInput[]
    createMany?: SnapCreateManySenderInputEnvelope
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
  }

  export type SnapCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput> | SnapCreateWithoutReceiverInput[] | SnapUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutReceiverInput | SnapCreateOrConnectWithoutReceiverInput[]
    createMany?: SnapCreateManyReceiverInputEnvelope
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
  }

  export type StoryCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type SpotlightCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput> | SpotlightCreateWithoutUserInput[] | SpotlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotlightCreateOrConnectWithoutUserInput | SpotlightCreateOrConnectWithoutUserInput[]
    createMany?: SpotlightCreateManyUserInputEnvelope
    connect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type SnapUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput> | SnapCreateWithoutSenderInput[] | SnapUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutSenderInput | SnapCreateOrConnectWithoutSenderInput[]
    createMany?: SnapCreateManySenderInputEnvelope
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
  }

  export type SnapUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput> | SnapCreateWithoutReceiverInput[] | SnapUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutReceiverInput | SnapCreateOrConnectWithoutReceiverInput[]
    createMany?: SnapCreateManyReceiverInputEnvelope
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
  }

  export type StoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
  }

  export type SpotlightUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput> | SpotlightCreateWithoutUserInput[] | SpotlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotlightCreateOrConnectWithoutUserInput | SpotlightCreateOrConnectWithoutUserInput[]
    createMany?: SpotlightCreateManyUserInputEnvelope
    connect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SnapUpdateManyWithoutSenderNestedInput = {
    create?: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput> | SnapCreateWithoutSenderInput[] | SnapUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutSenderInput | SnapCreateOrConnectWithoutSenderInput[]
    upsert?: SnapUpsertWithWhereUniqueWithoutSenderInput | SnapUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: SnapCreateManySenderInputEnvelope
    set?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    disconnect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    delete?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    update?: SnapUpdateWithWhereUniqueWithoutSenderInput | SnapUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: SnapUpdateManyWithWhereWithoutSenderInput | SnapUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: SnapScalarWhereInput | SnapScalarWhereInput[]
  }

  export type SnapUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput> | SnapCreateWithoutReceiverInput[] | SnapUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutReceiverInput | SnapCreateOrConnectWithoutReceiverInput[]
    upsert?: SnapUpsertWithWhereUniqueWithoutReceiverInput | SnapUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SnapCreateManyReceiverInputEnvelope
    set?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    disconnect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    delete?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    update?: SnapUpdateWithWhereUniqueWithoutReceiverInput | SnapUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SnapUpdateManyWithWhereWithoutReceiverInput | SnapUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SnapScalarWhereInput | SnapScalarWhereInput[]
  }

  export type StoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutUserInput | StoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutUserInput | StoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutUserInput | StoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type SpotlightUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput> | SpotlightCreateWithoutUserInput[] | SpotlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotlightCreateOrConnectWithoutUserInput | SpotlightCreateOrConnectWithoutUserInput[]
    upsert?: SpotlightUpsertWithWhereUniqueWithoutUserInput | SpotlightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotlightCreateManyUserInputEnvelope
    set?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    disconnect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    delete?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    connect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    update?: SpotlightUpdateWithWhereUniqueWithoutUserInput | SpotlightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotlightUpdateManyWithWhereWithoutUserInput | SpotlightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotlightScalarWhereInput | SpotlightScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SnapUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput> | SnapCreateWithoutSenderInput[] | SnapUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutSenderInput | SnapCreateOrConnectWithoutSenderInput[]
    upsert?: SnapUpsertWithWhereUniqueWithoutSenderInput | SnapUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: SnapCreateManySenderInputEnvelope
    set?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    disconnect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    delete?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    update?: SnapUpdateWithWhereUniqueWithoutSenderInput | SnapUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: SnapUpdateManyWithWhereWithoutSenderInput | SnapUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: SnapScalarWhereInput | SnapScalarWhereInput[]
  }

  export type SnapUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput> | SnapCreateWithoutReceiverInput[] | SnapUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: SnapCreateOrConnectWithoutReceiverInput | SnapCreateOrConnectWithoutReceiverInput[]
    upsert?: SnapUpsertWithWhereUniqueWithoutReceiverInput | SnapUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: SnapCreateManyReceiverInputEnvelope
    set?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    disconnect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    delete?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    connect?: SnapWhereUniqueInput | SnapWhereUniqueInput[]
    update?: SnapUpdateWithWhereUniqueWithoutReceiverInput | SnapUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: SnapUpdateManyWithWhereWithoutReceiverInput | SnapUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: SnapScalarWhereInput | SnapScalarWhereInput[]
  }

  export type StoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput> | StoryCreateWithoutUserInput[] | StoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoryCreateOrConnectWithoutUserInput | StoryCreateOrConnectWithoutUserInput[]
    upsert?: StoryUpsertWithWhereUniqueWithoutUserInput | StoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoryCreateManyUserInputEnvelope
    set?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    disconnect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    delete?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    connect?: StoryWhereUniqueInput | StoryWhereUniqueInput[]
    update?: StoryUpdateWithWhereUniqueWithoutUserInput | StoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoryUpdateManyWithWhereWithoutUserInput | StoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoryScalarWhereInput | StoryScalarWhereInput[]
  }

  export type SpotlightUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput> | SpotlightCreateWithoutUserInput[] | SpotlightUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SpotlightCreateOrConnectWithoutUserInput | SpotlightCreateOrConnectWithoutUserInput[]
    upsert?: SpotlightUpsertWithWhereUniqueWithoutUserInput | SpotlightUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SpotlightCreateManyUserInputEnvelope
    set?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    disconnect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    delete?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    connect?: SpotlightWhereUniqueInput | SpotlightWhereUniqueInput[]
    update?: SpotlightUpdateWithWhereUniqueWithoutUserInput | SpotlightUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SpotlightUpdateManyWithWhereWithoutUserInput | SpotlightUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SpotlightScalarWhereInput | SpotlightScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput> | ChatCreateWithoutReceiverInput[] | ChatUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverInput | ChatCreateOrConnectWithoutReceiverInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverInput | ChatUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ChatCreateManyReceiverInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverInput | ChatUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverInput | ChatUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSnapsSentInput = {
    create?: XOR<UserCreateWithoutSnapsSentInput, UserUncheckedCreateWithoutSnapsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSnapsReceivedInput = {
    create?: XOR<UserCreateWithoutSnapsReceivedInput, UserUncheckedCreateWithoutSnapsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSnapsSentNestedInput = {
    create?: XOR<UserCreateWithoutSnapsSentInput, UserUncheckedCreateWithoutSnapsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapsSentInput
    upsert?: UserUpsertWithoutSnapsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnapsSentInput, UserUpdateWithoutSnapsSentInput>, UserUncheckedUpdateWithoutSnapsSentInput>
  }

  export type UserUpdateOneRequiredWithoutSnapsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutSnapsReceivedInput, UserUncheckedCreateWithoutSnapsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSnapsReceivedInput
    upsert?: UserUpsertWithoutSnapsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSnapsReceivedInput, UserUpdateWithoutSnapsReceivedInput>, UserUncheckedUpdateWithoutSnapsReceivedInput>
  }

  export type UserCreateNestedOneWithoutStoriesInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStoriesNestedInput = {
    create?: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoriesInput
    upsert?: UserUpsertWithoutStoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoriesInput, UserUpdateWithoutStoriesInput>, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserCreateNestedOneWithoutSpotlightsInput = {
    create?: XOR<UserCreateWithoutSpotlightsInput, UserUncheckedCreateWithoutSpotlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotlightsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSpotlightsNestedInput = {
    create?: XOR<UserCreateWithoutSpotlightsInput, UserUncheckedCreateWithoutSpotlightsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotlightsInput
    upsert?: UserUpsertWithoutSpotlightsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpotlightsInput, UserUpdateWithoutSpotlightsInput>, UserUncheckedUpdateWithoutSpotlightsInput>
  }

  export type UserCreateNestedOneWithoutChatsSentInput = {
    create?: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatsReceivedInput = {
    create?: XOR<UserCreateWithoutChatsReceivedInput, UserUncheckedCreateWithoutChatsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatsSentNestedInput = {
    create?: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsSentInput
    upsert?: UserUpsertWithoutChatsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsSentInput, UserUpdateWithoutChatsSentInput>, UserUncheckedUpdateWithoutChatsSentInput>
  }

  export type UserUpdateOneRequiredWithoutChatsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutChatsReceivedInput, UserUncheckedCreateWithoutChatsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsReceivedInput
    upsert?: UserUpsertWithoutChatsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsReceivedInput, UserUpdateWithoutChatsReceivedInput>, UserUncheckedUpdateWithoutChatsReceivedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SnapCreateWithoutSenderInput = {
    mediaUrl: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutSnapsReceivedInput
  }

  export type SnapUncheckedCreateWithoutSenderInput = {
    id?: number
    mediaUrl: string
    receiverId: number
    createdAt?: Date | string
  }

  export type SnapCreateOrConnectWithoutSenderInput = {
    where: SnapWhereUniqueInput
    create: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput>
  }

  export type SnapCreateManySenderInputEnvelope = {
    data: SnapCreateManySenderInput | SnapCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type SnapCreateWithoutReceiverInput = {
    mediaUrl: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSnapsSentInput
  }

  export type SnapUncheckedCreateWithoutReceiverInput = {
    id?: number
    mediaUrl: string
    senderId: number
    createdAt?: Date | string
  }

  export type SnapCreateOrConnectWithoutReceiverInput = {
    where: SnapWhereUniqueInput
    create: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput>
  }

  export type SnapCreateManyReceiverInputEnvelope = {
    data: SnapCreateManyReceiverInput | SnapCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type StoryCreateWithoutUserInput = {
    mediaUrl: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type StoryUncheckedCreateWithoutUserInput = {
    id?: number
    mediaUrl: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type StoryCreateOrConnectWithoutUserInput = {
    where: StoryWhereUniqueInput
    create: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput>
  }

  export type StoryCreateManyUserInputEnvelope = {
    data: StoryCreateManyUserInput | StoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SpotlightCreateWithoutUserInput = {
    mediaUrl: string
    createdAt?: Date | string
  }

  export type SpotlightUncheckedCreateWithoutUserInput = {
    id?: number
    mediaUrl: string
    createdAt?: Date | string
  }

  export type SpotlightCreateOrConnectWithoutUserInput = {
    where: SpotlightWhereUniqueInput
    create: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput>
  }

  export type SpotlightCreateManyUserInputEnvelope = {
    data: SpotlightCreateManyUserInput | SpotlightCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutSenderInput = {
    message: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutChatsReceivedInput
  }

  export type ChatUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    message: string
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutSenderInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatCreateManySenderInputEnvelope = {
    data: ChatCreateManySenderInput | ChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReceiverInput = {
    message: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutChatsSentInput
  }

  export type ChatUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    message: string
    createdAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatCreateManyReceiverInputEnvelope = {
    data: ChatCreateManyReceiverInput | ChatCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type SnapUpsertWithWhereUniqueWithoutSenderInput = {
    where: SnapWhereUniqueInput
    update: XOR<SnapUpdateWithoutSenderInput, SnapUncheckedUpdateWithoutSenderInput>
    create: XOR<SnapCreateWithoutSenderInput, SnapUncheckedCreateWithoutSenderInput>
  }

  export type SnapUpdateWithWhereUniqueWithoutSenderInput = {
    where: SnapWhereUniqueInput
    data: XOR<SnapUpdateWithoutSenderInput, SnapUncheckedUpdateWithoutSenderInput>
  }

  export type SnapUpdateManyWithWhereWithoutSenderInput = {
    where: SnapScalarWhereInput
    data: XOR<SnapUpdateManyMutationInput, SnapUncheckedUpdateManyWithoutSenderInput>
  }

  export type SnapScalarWhereInput = {
    AND?: SnapScalarWhereInput | SnapScalarWhereInput[]
    OR?: SnapScalarWhereInput[]
    NOT?: SnapScalarWhereInput | SnapScalarWhereInput[]
    id?: IntFilter<"Snap"> | number
    mediaUrl?: StringFilter<"Snap"> | string
    senderId?: IntFilter<"Snap"> | number
    receiverId?: IntFilter<"Snap"> | number
    createdAt?: DateTimeFilter<"Snap"> | Date | string
  }

  export type SnapUpsertWithWhereUniqueWithoutReceiverInput = {
    where: SnapWhereUniqueInput
    update: XOR<SnapUpdateWithoutReceiverInput, SnapUncheckedUpdateWithoutReceiverInput>
    create: XOR<SnapCreateWithoutReceiverInput, SnapUncheckedCreateWithoutReceiverInput>
  }

  export type SnapUpdateWithWhereUniqueWithoutReceiverInput = {
    where: SnapWhereUniqueInput
    data: XOR<SnapUpdateWithoutReceiverInput, SnapUncheckedUpdateWithoutReceiverInput>
  }

  export type SnapUpdateManyWithWhereWithoutReceiverInput = {
    where: SnapScalarWhereInput
    data: XOR<SnapUpdateManyMutationInput, SnapUncheckedUpdateManyWithoutReceiverInput>
  }

  export type StoryUpsertWithWhereUniqueWithoutUserInput = {
    where: StoryWhereUniqueInput
    update: XOR<StoryUpdateWithoutUserInput, StoryUncheckedUpdateWithoutUserInput>
    create: XOR<StoryCreateWithoutUserInput, StoryUncheckedCreateWithoutUserInput>
  }

  export type StoryUpdateWithWhereUniqueWithoutUserInput = {
    where: StoryWhereUniqueInput
    data: XOR<StoryUpdateWithoutUserInput, StoryUncheckedUpdateWithoutUserInput>
  }

  export type StoryUpdateManyWithWhereWithoutUserInput = {
    where: StoryScalarWhereInput
    data: XOR<StoryUpdateManyMutationInput, StoryUncheckedUpdateManyWithoutUserInput>
  }

  export type StoryScalarWhereInput = {
    AND?: StoryScalarWhereInput | StoryScalarWhereInput[]
    OR?: StoryScalarWhereInput[]
    NOT?: StoryScalarWhereInput | StoryScalarWhereInput[]
    id?: IntFilter<"Story"> | number
    mediaUrl?: StringFilter<"Story"> | string
    userId?: IntFilter<"Story"> | number
    createdAt?: DateTimeFilter<"Story"> | Date | string
    expiresAt?: DateTimeFilter<"Story"> | Date | string
  }

  export type SpotlightUpsertWithWhereUniqueWithoutUserInput = {
    where: SpotlightWhereUniqueInput
    update: XOR<SpotlightUpdateWithoutUserInput, SpotlightUncheckedUpdateWithoutUserInput>
    create: XOR<SpotlightCreateWithoutUserInput, SpotlightUncheckedCreateWithoutUserInput>
  }

  export type SpotlightUpdateWithWhereUniqueWithoutUserInput = {
    where: SpotlightWhereUniqueInput
    data: XOR<SpotlightUpdateWithoutUserInput, SpotlightUncheckedUpdateWithoutUserInput>
  }

  export type SpotlightUpdateManyWithWhereWithoutUserInput = {
    where: SpotlightScalarWhereInput
    data: XOR<SpotlightUpdateManyMutationInput, SpotlightUncheckedUpdateManyWithoutUserInput>
  }

  export type SpotlightScalarWhereInput = {
    AND?: SpotlightScalarWhereInput | SpotlightScalarWhereInput[]
    OR?: SpotlightScalarWhereInput[]
    NOT?: SpotlightScalarWhereInput | SpotlightScalarWhereInput[]
    id?: IntFilter<"Spotlight"> | number
    mediaUrl?: StringFilter<"Spotlight"> | string
    userId?: IntFilter<"Spotlight"> | number
    createdAt?: DateTimeFilter<"Spotlight"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: IntFilter<"Chat"> | number
    senderId?: IntFilter<"Chat"> | number
    receiverId?: IntFilter<"Chat"> | number
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
    create: XOR<ChatCreateWithoutReceiverInput, ChatUncheckedCreateWithoutReceiverInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverInput, ChatUncheckedUpdateWithoutReceiverInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutSnapsSentInput = {
    username: string
    email: string
    password: string
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    stories?: StoryCreateNestedManyWithoutUserInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSnapsSentInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSnapsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnapsSentInput, UserUncheckedCreateWithoutSnapsSentInput>
  }

  export type UserCreateWithoutSnapsReceivedInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    stories?: StoryCreateNestedManyWithoutUserInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSnapsReceivedInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSnapsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSnapsReceivedInput, UserUncheckedCreateWithoutSnapsReceivedInput>
  }

  export type UserUpsertWithoutSnapsSentInput = {
    update: XOR<UserUpdateWithoutSnapsSentInput, UserUncheckedUpdateWithoutSnapsSentInput>
    create: XOR<UserCreateWithoutSnapsSentInput, UserUncheckedCreateWithoutSnapsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnapsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnapsSentInput, UserUncheckedUpdateWithoutSnapsSentInput>
  }

  export type UserUpdateWithoutSnapsSentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSnapsSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutSnapsReceivedInput = {
    update: XOR<UserUpdateWithoutSnapsReceivedInput, UserUncheckedUpdateWithoutSnapsReceivedInput>
    create: XOR<UserCreateWithoutSnapsReceivedInput, UserUncheckedCreateWithoutSnapsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSnapsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSnapsReceivedInput, UserUncheckedUpdateWithoutSnapsReceivedInput>
  }

  export type UserUpdateWithoutSnapsReceivedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSnapsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutStoriesInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutStoriesInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutStoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
  }

  export type UserUpsertWithoutStoriesInput = {
    update: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
    create: XOR<UserCreateWithoutStoriesInput, UserUncheckedCreateWithoutStoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoriesInput, UserUncheckedUpdateWithoutStoriesInput>
  }

  export type UserUpdateWithoutStoriesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutStoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSpotlightsInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    stories?: StoryCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSpotlightsInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSpotlightsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpotlightsInput, UserUncheckedCreateWithoutSpotlightsInput>
  }

  export type UserUpsertWithoutSpotlightsInput = {
    update: XOR<UserUpdateWithoutSpotlightsInput, UserUncheckedUpdateWithoutSpotlightsInput>
    create: XOR<UserCreateWithoutSpotlightsInput, UserUncheckedCreateWithoutSpotlightsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpotlightsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpotlightsInput, UserUncheckedUpdateWithoutSpotlightsInput>
  }

  export type UserUpdateWithoutSpotlightsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSpotlightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutChatsSentInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    stories?: StoryCreateNestedManyWithoutUserInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsReceived?: ChatCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutChatsSentInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsReceived?: ChatUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutChatsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
  }

  export type UserCreateWithoutChatsReceivedInput = {
    username: string
    email: string
    password: string
    snapsSent?: SnapCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapCreateNestedManyWithoutReceiverInput
    stories?: StoryCreateNestedManyWithoutUserInput
    spotlights?: SpotlightCreateNestedManyWithoutUserInput
    chatsSent?: ChatCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutChatsReceivedInput = {
    id?: number
    username: string
    email: string
    password: string
    snapsSent?: SnapUncheckedCreateNestedManyWithoutSenderInput
    snapsReceived?: SnapUncheckedCreateNestedManyWithoutReceiverInput
    stories?: StoryUncheckedCreateNestedManyWithoutUserInput
    spotlights?: SpotlightUncheckedCreateNestedManyWithoutUserInput
    chatsSent?: ChatUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutChatsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsReceivedInput, UserUncheckedCreateWithoutChatsReceivedInput>
  }

  export type UserUpsertWithoutChatsSentInput = {
    update: XOR<UserUpdateWithoutChatsSentInput, UserUncheckedUpdateWithoutChatsSentInput>
    create: XOR<UserCreateWithoutChatsSentInput, UserUncheckedCreateWithoutChatsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsSentInput, UserUncheckedUpdateWithoutChatsSentInput>
  }

  export type UserUpdateWithoutChatsSentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsReceived?: ChatUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsReceived?: ChatUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutChatsReceivedInput = {
    update: XOR<UserUpdateWithoutChatsReceivedInput, UserUncheckedUpdateWithoutChatsReceivedInput>
    create: XOR<UserCreateWithoutChatsReceivedInput, UserUncheckedCreateWithoutChatsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsReceivedInput, UserUncheckedUpdateWithoutChatsReceivedInput>
  }

  export type UserUpdateWithoutChatsReceivedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUpdateManyWithoutReceiverNestedInput
    stories?: StoryUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    snapsSent?: SnapUncheckedUpdateManyWithoutSenderNestedInput
    snapsReceived?: SnapUncheckedUpdateManyWithoutReceiverNestedInput
    stories?: StoryUncheckedUpdateManyWithoutUserNestedInput
    spotlights?: SpotlightUncheckedUpdateManyWithoutUserNestedInput
    chatsSent?: ChatUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type SnapCreateManySenderInput = {
    id?: number
    mediaUrl: string
    receiverId: number
    createdAt?: Date | string
  }

  export type SnapCreateManyReceiverInput = {
    id?: number
    mediaUrl: string
    senderId: number
    createdAt?: Date | string
  }

  export type StoryCreateManyUserInput = {
    id?: number
    mediaUrl: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SpotlightCreateManyUserInput = {
    id?: number
    mediaUrl: string
    createdAt?: Date | string
  }

  export type ChatCreateManySenderInput = {
    id?: number
    receiverId: number
    message: string
    createdAt?: Date | string
  }

  export type ChatCreateManyReceiverInput = {
    id?: number
    senderId: number
    message: string
    createdAt?: Date | string
  }

  export type SnapUpdateWithoutSenderInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutSnapsReceivedNestedInput
  }

  export type SnapUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapUpdateWithoutReceiverInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSnapsSentNestedInput
  }

  export type SnapUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SnapUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    senderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUpdateWithoutUserInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightUpdateWithoutUserInput = {
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpotlightUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutSenderInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutChatsReceivedNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutReceiverInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutChatsSentNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}