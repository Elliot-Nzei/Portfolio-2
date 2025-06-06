.PHONY: git
git:
	@git add .
	@git status
	@git commit -m "Update"
	@git push
# Display the current environment variables