from sqlalchemy.orm import Session
from . import models, schemas

def get_transcation(db : Session, transaction_id : int):
    return db.query(
            models.Transaction
        ).filter(
            models.Transaction.id == transaction_id
        ).first()

def create_transaction(db : Session, transcation : schemas.TransactionCreate):
    db_transaction = models.Transaction(**transcation.dict())
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

def update_transaction(db: Session, transaction_id: int, transaction: schemas.TransactionUpdate):
    db_transaction = db.query(models.Transaction).filter(models.Transaction.id == transaction_id).first()
    if db_transaction is None:
        return None
    for key, value in transaction.dict().transactions():
        setattr(db_transaction, key, value)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

def delete_transaction(db: Session, transaction_id: int):
    db_transaction = db.query(models.Transaction).filter(models.Transaction.id == transaction_id).first()
    if db_transaction is None:
        return None
    db.delete(db_transaction)
    db.commit()
    return db_transaction