import {
  ItemCreated as ItemCreatedEvent,
  ItemDeleted as ItemDeletedEvent,
  ItemUpdated as ItemUpdatedEvent
} from "../generated/CRUDContractGraph/CRUDContractGraph"
import { ItemCreated, ItemDeleted, ItemUpdated } from "../generated/schema"

export function handleItemCreated(event: ItemCreatedEvent): void {
  let entity = new ItemCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CRUDContractGraph_id = event.params.id
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemDeleted(event: ItemDeletedEvent): void {
  let entity = new ItemDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CRUDContractGraph_id = event.params.id
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemUpdated(event: ItemUpdatedEvent): void {
  let entity = new ItemUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.CRUDContractGraph_id = event.params.id
  entity.name = event.params.name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
