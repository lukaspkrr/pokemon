help:
	@echo "Available commands:"
	@echo "  pullrequest    Create a new pull request"

pullrequest:
	@bash ./Scripts/pullrequest.sh

# pullrequest: ## Create a new PullRequest in Github web following template patterns
# 	@./Scripts/pullrequest.sh -d "$(d)"
