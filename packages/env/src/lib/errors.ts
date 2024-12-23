export class EnvValidationError extends Error {
  constructor(
    message: string,
    public errors: Array<{ key: string; message: string }>,
  ) {
    super(message);
    this.name = "EnvValidationError";
  }
}
