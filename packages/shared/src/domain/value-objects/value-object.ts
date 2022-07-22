import { deepFreeze } from "../util/object";

type HasToString = { toString(): string };

export abstract class ValueObject<Value extends HasToString> {
  protected readonly _value: Value;

  constructor(value: Value) {
    this._value = deepFreeze(value);
  }

  get value(): Value {
    return this._value;
  }

  toString = () => {
    if (typeof this.value !== "object" || this.value === null) {
      try {
        return (this.value as Value).toString();
      } catch (e) {
        return this.value + "";
      }
    }
    const valueStr = this.value.toString();
    return valueStr === "[object Object]"
      ? JSON.stringify(this.value)
      : valueStr;
  };
}

export default ValueObject;