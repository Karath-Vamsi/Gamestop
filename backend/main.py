from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from typing import List

# Database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./accounts.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# FastAPI instance
app = FastAPI()

# CORS configuration (optional, remove if not needed)
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database model
class Account(Base):
    __tablename__ = "accounts"
    username = Column(String, unique=True, primary_key=True)
    password = Column(String)
    cart = Column(String)

Base.metadata.create_all( bind=engine)

#Pydantic model
class AccountBase( BaseModel):
    username: str
    password: str
    cart: str = ""

@app.get("/")
def display_db():
    db = SessionLocal()
    fullDB = db.query( Account).all()
    db.close()
    return fullDB

@app.get("/users")
def send_users_list():
    db = SessionLocal()
    users_list = [ usern[0] for usern in db.query( Account).with_entities( Account.username).all()] 
    db.close()
    return users_list

@app.get("/verify/")
def verify_password( usn: str, pwd: str):
    db = SessionLocal()
    # print([ pair[0] for pair in db.query( Account).with_entities( Account.password).filter( Account.username == usn).all()])
    verdict = any( pair[0] == pwd for pair in db.query( Account).with_entities( Account.password).filter( Account.username == usn).all())
    # print( verdict)
    db.close()
    return verdict

@app.post("/register/")
def register_new_user( account: AccountBase):
    db = SessionLocal()
    user = Account( **account.dict())
    db.add( user)
    db.commit()
    db.refresh( user)
    db.close()
    return user

@app.get("/addToCart/")
def add_cart( usn: str, toAdd: str):
    db = SessionLocal()
    userInfo = db.query( Account).filter( Account.username == usn).first()
    userInfo.cart = userInfo.cart + "," + toAdd
    db.commit()
    db.refresh( userInfo)
    db.close()
    # return new cart to update cart
    return [game for game in userInfo.cart.split(",") if game != ""]

@app.get("/clearCart/")
def clear_cart( usn: str):
    db = SessionLocal()
    userInfo = db.query( Account).filter( Account.username == usn).first()
    userInfo.cart = ""
    db.commit()
    db.refresh( userInfo)
    db.close()
    return None

@app.get("/cart/")
def get_cart( usn: str):
    db = SessionLocal()
    l =  [game for game in db.query( Account).with_entities( Account.cart).filter( Account.username == usn).first()[0].split(",") if game != ""]
    # print(l)
    db.close()
    return l
    # return { id+1:name for id,name in enumerate(l)}
    # return [{"index":idx+1, "name":name} for idx,name in enumerate( l)]

# @app.

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run( app, host="127.0.0.1", port="8000")