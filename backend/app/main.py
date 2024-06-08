from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from . import models, database, schemas, crud

app = FastAPI()

# get db session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create the database and tables
@app.on_event("startup")
def on_startup():
    database.Base.metadata.create_all(bind=database.engine)

@app.post("/transactions/", response_model=schemas.Transaction)
def create_transaction(transaction: schemas.TransactionCreate, db: Session = Depends(get_db)):
    return crud.create_transaction(db=db, transaction=transaction)

@app.get("/transactions/{transaction_id}", response_model=schemas.Transaction)
def read_transaction(transaction_id : int, db : Session = Depends(get_db)):
    db_trans = crud.get_transcation(db, transaction_id=transaction_id)
    if db_trans is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_trans


@app.put("/transactions/{transaction_id}", response_model=schemas.Transaction)
def update_transaction(transaction_id : int, transaction : schemas.TransactionUpdate, db : Session = Depends(get_db)):
    return crud.update_transaction(
        db=db, 
        transaction_id=transaction_id,
        transaction=transaction
    )

@app.delete("/transactions/{transaction_id}")
def delete_transcation(transaction_id : int, db : Session = Depends(get_db)):
    return crud.delete_transaction(db=db, transaction_id=transaction_id)