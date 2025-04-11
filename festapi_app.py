from fastapi import FastAPI
import psycopg2
import json

app = FastAPI()

# PostgreSQL bağlantısı
conn = psycopg2.connect(
    dbname="optimizer",
    user="postgres",
    password="aycaucankale",
    host="localhost",
    port="5432",
   
)
conn.set_client_encoding('UTF8')  # ÖNEMLİ: Kodlamayı UTF8 olarak ayarla

@app.get("/flights")
def get_flights():
    cur = conn.cursor()
    cur.execute("SELECT * FROM optimizer.Flights")
    flights = cur.fetchall()
    cur.close()
    
    return [{"flight_id": f[0], "airline": f[1], "flight_number": f[2], "departure_airport": f[3], 
             "arrival_airport": f[4], "departure_time": f[5], "arrival_time": f[6], "price": f[7]} 
            for f in flights]

