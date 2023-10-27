import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemCreated,
  ItemDeleted,
  ItemUpdated
} from "../generated/CRUDContractGraph/CRUDContractGraph"

export function createItemCreatedEvent(id: BigInt, name: string): ItemCreated {
  let itemCreatedEvent = changetype<ItemCreated>(newMockEvent())

  itemCreatedEvent.parameters = new Array()

  itemCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  itemCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return itemCreatedEvent
}

export function createItemDeletedEvent(id: BigInt, name: string): ItemDeleted {
  let itemDeletedEvent = changetype<ItemDeleted>(newMockEvent())

  itemDeletedEvent.parameters = new Array()

  itemDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  itemDeletedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return itemDeletedEvent
}

export function createItemUpdatedEvent(id: BigInt, name: string): ItemUpdated {
  let itemUpdatedEvent = changetype<ItemUpdated>(newMockEvent())

  itemUpdatedEvent.parameters = new Array()

  itemUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  itemUpdatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return itemUpdatedEvent
}
