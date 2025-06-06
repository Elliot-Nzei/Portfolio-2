# Portfolio-2 Makefile
.PHONY: push pull dep deploy runserver all clean

# Commit and push all changes
push:
	@git add .
	@git status
	@git commit -m "Update"
	@git push

# Pull the latest changes
pull:
	@git pull

# Install Python dependencies
dep:
	@echo "Installing backend dependencies..."
	@pip install -r backend/requirements.txt

# Start the Flask server
deploy:
	@echo "Starting backend server..."
	@cd backend && python app.py

# Install dependencies, push, and deploy
all: dep push deploy

# Clean .pyc and cache files
clean:
	@echo "Cleaning up cache and bytecode..."
	@find . -type f -name '*.pyc' -delete
	@find . -type d -name '__pycache__' -exec rm -r {} +
