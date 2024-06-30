from pydantic import BaseModel
from datetime import datetime


class TransactionBase(BaseModel):

    date : datetime
    item : str
    amount : float
    category : str
   

class TransactionCreate(TransactionBase):
    pass

class TransactionUpdate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int

    class Config:
        orm_mode = True

class CategorySum(BaseModel):
    category: str
    total: float
