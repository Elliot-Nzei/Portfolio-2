# Portfolio-2 Makefile
.PHONY: push pull dep deploy runserver all clean new 

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

# Create a new project structure
new:
	@echo "Creating new project structure..."
	@mkdir -p backend
	@mkdir -p frontend
	@touch backend/app.py
	@touch backend/requirements.txt
	@echo "from flask import Flask" > backend/app.py
	@echo "app = Flask(__name__)" >> backend/app.py
	@echo "@app.route('/')" >> backend/app.py
	@echo "def home():" >> backend/app.py
	@echo "    return 'Hello, World!'" >> backend/app.py
	@echo "if __name__ == '__main__':" >> backend/app.py
	@echo "    app.run(debug=True)" >> backend/app.py
	@echo "Project structure created successfully."
# Run the Flask server
runserver:
	@echo "Running Flask server..."
	@cd backend && python app.py

# Alias for running the server
run: runserver
# Alias for deploying the server
deploy: runserver
# Alias for cleaning up
clean: clean
# Alias for creating a new project structure
new: new	
# Alias for installing dependencies
dep: dep