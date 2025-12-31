export class SetFavorite {
  static readonly type = '[Favorite] Set';
  constructor(public id: number) {}
}

export class UnsetFavorite {
  static readonly type = '[Favorite] Unset';
  constructor(public id: number) {}
}
