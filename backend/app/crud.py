from sqlalchemy.orm import Session
from . import models, schemas
from datetime import date

def get_transcation(db : Session, transaction_id : int):
    return db.query(
            models.Transaction
        ).filter(
            models.Transaction.id == transaction_id
        ).first()

def get_all_transactions(db : Session):
    return db.query(models.Transaction).all()
 

def create_transaction(db : Session, transaction : schemas.TransactionCreate):
    db_transaction = models.Transaction(
        date=date.today(),
        item=transaction.item,
        amount=transaction.amount, 
        category=transaction.category)
    db.add(db_transaction)
    db.commit()
    db.refresh(db_transaction)
    return db_transaction

def update_transaction(db: Session, transaction_id: int, transaction: schemas.TransactionUpdate):
    db_transaction = get_transcation(db=db, transaction_id=transaction_id)
    if db_transaction is None:
        return None
    db_transaction.__dict__.update(transaction)
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