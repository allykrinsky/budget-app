from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from . import models, database, schemas, crud
from datetime import date
from fastapi.middleware.cors import CORSMiddleware
from typing import List

app = FastAPI()

# get db session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = [
    "http://localhost:3000",  # Replace with your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get("/transactions/", response_model=list[schemas.Transaction])
def read_all(db : Session = Depends(get_db), month : int = None):
    return crud.get_all_transactions(db, month)


@app.patch("/transactions/{transaction_id}", response_model=schemas.Transaction)
def update_transaction(transaction_id : int, transaction : schemas.TransactionUpdate, db : Session = Depends(get_db)):
    # check if exists + error
    return crud.update_transaction(db=db, transaction_id=transaction_id, transaction=transaction)

@app.delete("/transactions/{transaction_id}")
def delete_transcation(transaction_id : int, db : Session = Depends(get_db)):
    return crud.delete_transaction(db=db, transaction_id=transaction_id)

@app.get("/transaction/summary", response_model=List[schemas.CategorySum])
def get_data_summary(db : Session = Depends(get_db), month : int = None):
    return crud.get_summary(db=db, month=month)
    