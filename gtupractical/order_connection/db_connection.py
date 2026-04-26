import pyodbc
import os
from dotenv import load_dotenv

load_dotenv()

class DatabaseConnection:
    _conn = None

    @staticmethod
    def get_connection():
        if DatabaseConnection._conn is None:
            conn_str = (
                f"DRIVER={{{os.getenv('DB_DRIVER')}}};"
                f"SERVER={os.getenv('DB_SERVER')};"
                f"DATABASE={os.getenv('DB_NAME')};"
                f"UID={os.getenv('DB_USER')};"
                f"PWD={os.getenv('DB_PASSWORD')};"
                "Encrypt=yes;"
                "TrustServerCertificate=yes;"
            )
            DatabaseConnection._conn = pyodbc.connect(conn_str)
        return DatabaseConnection._conn
