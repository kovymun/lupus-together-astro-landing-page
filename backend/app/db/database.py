from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
import logging

# Configure logger
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Important: Set up your own Neon PostgreSQL database and set DATABASE_URL in .env
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")

# Validate DATABASE_URL exists
if not SQLALCHEMY_DATABASE_URL:
    logger.error("DATABASE_URL not found in .env file")
    raise ValueError("DATABASE_URL environment variable is required")

logger.info("Initializing database connection...")

try:
    # Create database engine
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        pool_pre_ping=True,  # Verify connections before using them
        echo=False,  # Set to True to see all SQL queries in console
    )

    # Test the connection immediately
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    logger.info("Successfully connected to database")

except Exception as e:
    logger.error(f"Failed to connect to database: {str(e)}")
    raise

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for models
Base = declarative_base()


def get_db():
    """
    Dependency function for FastAPI routes
    Provides a database session and ensures it's closed after use
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
