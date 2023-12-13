# Set permissions for *.sh
find Scripts -name '*.sh' -exec chmod +x {} +

# Makefile para criar um pull request para vários usuários

REPO_OWNER = "lukaspkrr"
REPO_NAME = "pokemon"
BASE_BRANCH = "main"
HEAD_BRANCH = "main"
TITLE = "Título do Pull Request"
DESCRIPTION = "Descrição do Pull Request"
TOKEN = "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"

pullrequest:
    @echo "Criando um pull request..."
    @read -p "Insira seu nome de usuário do GitHub: " USERNAME; \
    # read -p "Insira seu token de acesso pessoal do GitHub: " TOKEN; \
    git config --local credential.helper "" && \
    git config --local user.name "$$USERNAME" && \
    git config --local user.email "$$USERNAME@example.com" && \
    git checkout -b $(HEAD_BRANCH) && \
    echo "Fazendo alterações..." >> example.txt && \
    git add example.txt && \
    git commit -m "Adicionando alterações" && \
    git push origin $(HEAD_BRANCH) && \
    curl -X POST -H "Authorization: token $(BASE_BRANCH)" -d '{"title":$(TITLE),"body":$(DESCRIPTION),"head":$(HEAD_BRANCH),"base":$(BASE_BRANCH)}' https://api.github.com/repos/$(REPO_OWNER)/$(REPO_NAME)/pulls
