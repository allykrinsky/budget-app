from pydantic import BaseModel


class TransactionBase(BaseModel):

    date : str
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
