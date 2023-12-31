// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ItemCreated extends ethereum.Event {
  get params(): ItemCreated__Params {
    return new ItemCreated__Params(this);
  }
}

export class ItemCreated__Params {
  _event: ItemCreated;

  constructor(event: ItemCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class ItemDeleted extends ethereum.Event {
  get params(): ItemDeleted__Params {
    return new ItemDeleted__Params(this);
  }
}

export class ItemDeleted__Params {
  _event: ItemDeleted;

  constructor(event: ItemDeleted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class ItemUpdated extends ethereum.Event {
  get params(): ItemUpdated__Params {
    return new ItemUpdated__Params(this);
  }
}

export class ItemUpdated__Params {
  _event: ItemUpdated;

  constructor(event: ItemUpdated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class CRUDContractGraph__itemsResult {
  value0: BigInt;
  value1: string;

  constructor(value0: BigInt, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }
}

export class CRUDContractGraph extends ethereum.SmartContract {
  static bind(address: Address): CRUDContractGraph {
    return new CRUDContractGraph("CRUDContractGraph", address);
  }

  itemCount(): BigInt {
    let result = super.call("itemCount", "itemCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_itemCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("itemCount", "itemCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  items(param0: BigInt): CRUDContractGraph__itemsResult {
    let result = super.call("items", "items(uint256):(uint256,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new CRUDContractGraph__itemsResult(
      result[0].toBigInt(),
      result[1].toString()
    );
  }

  try_items(
    param0: BigInt
  ): ethereum.CallResult<CRUDContractGraph__itemsResult> {
    let result = super.tryCall("items", "items(uint256):(uint256,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CRUDContractGraph__itemsResult(
        value[0].toBigInt(),
        value[1].toString()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateItemCall extends ethereum.Call {
  get inputs(): CreateItemCall__Inputs {
    return new CreateItemCall__Inputs(this);
  }

  get outputs(): CreateItemCall__Outputs {
    return new CreateItemCall__Outputs(this);
  }
}

export class CreateItemCall__Inputs {
  _call: CreateItemCall;

  constructor(call: CreateItemCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateItemCall__Outputs {
  _call: CreateItemCall;

  constructor(call: CreateItemCall) {
    this._call = call;
  }
}

export class DeleteItemCall extends ethereum.Call {
  get inputs(): DeleteItemCall__Inputs {
    return new DeleteItemCall__Inputs(this);
  }

  get outputs(): DeleteItemCall__Outputs {
    return new DeleteItemCall__Outputs(this);
  }
}

export class DeleteItemCall__Inputs {
  _call: DeleteItemCall;

  constructor(call: DeleteItemCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteItemCall__Outputs {
  _call: DeleteItemCall;

  constructor(call: DeleteItemCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class UpdateItemCall extends ethereum.Call {
  get inputs(): UpdateItemCall__Inputs {
    return new UpdateItemCall__Inputs(this);
  }

  get outputs(): UpdateItemCall__Outputs {
    return new UpdateItemCall__Outputs(this);
  }
}

export class UpdateItemCall__Inputs {
  _call: UpdateItemCall;

  constructor(call: UpdateItemCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateItemCall__Outputs {
  _call: UpdateItemCall;

  constructor(call: UpdateItemCall) {
    this._call = call;
  }
}
