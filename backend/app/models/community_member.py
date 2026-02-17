from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from datetime import datetime, timezone
from sqlalchemy.ext.declarative import declarative_base

# from app.db.session import Base

Base = declarative_base()  # this should be imported from your database session module.


class CommunityMember(Base):
    __tablename__ = "lp_together"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    phone = Column(String(10), nullable=False)
    message = Column(Text, nullable=True)
    consent = Column(Boolean, default=False, nullable=False)
    join_date = Column(
        DateTime, default=lambda: datetime.now(timezone.utc), nullable=False
    )

    # User friendly representation of the model
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    # For debugging and logging purposes
    def __repr__(self):
        return f"<CommunityMember {self.first_name} {self.last_name}>"
