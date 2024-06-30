from sqlalchemy import Column, Integer, String, Double, DateTime
from .database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime, index=True)
    item = Column(String, index=True)
    amount = Column(Double, index=True)
    category = Column(String, index=True)


    
