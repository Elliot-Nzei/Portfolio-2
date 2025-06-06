.PHONY: push
push:
	@git add .
	@git status
	@git commit -m "Update"
	@git push
# Display the current environment variables

.PHONY: pull
pull:
	@git pull
# Display the current environment variables