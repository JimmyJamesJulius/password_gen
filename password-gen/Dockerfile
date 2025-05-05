# 1. Base image: slim Python
FROM python:3.10-slim

# 2. Set working directory
WORKDIR /usr/src/app

# 3. Install dependencies
COPY app/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy application code
COPY app/ ./

# 5. Expose port & default command
EXPOSE 5000
CMD ["python", "main.py"]

