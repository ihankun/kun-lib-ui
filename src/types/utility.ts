export type Nullable<T> = T | null
export type Undefinable<T> = T | undefined
export type Untouchable<T> = Nullable<Undefinable<T>>