# Set permissions for *.sh
find Scripts -name '*.sh' -exec chmod +x {} +

#!/bin/sh
source ./Scripts/menuselect.sh

base_branch="main"
description=""

while getopts 'b:d:' opt; do
    case $opt in
        b) base_branch="$OPTARG" ;;
        d) description="$OPTARG" ;;
        *) exit 1;
    esac
done

# Deletes the temporary file, if it exists here by an error
input="Scripts/Templates/prtemplate.txt"
output=".pullrequest"
rm -rf $output

echo "✨  ✨  Pull Request ✨  ✨ "
echo "\n"

# Which App?
echo "✨ Aplicativo: 📱"
options=("ANY" "PF" "PJ")
select_option "${options[@]}"
app="${options[$?]}"

#Feature Flags
read -p "✨ Qual sua feature flag para essa PR: "
feature_flags=$REPLY
echo "\n"
read -p "✨ Caso não exista(m) feature(s) flag(s), explique o motivo: "
no_flags=$REPLY
echo "\n"

# # Pull request type
echo "✨ Tipo do PR: "
options=("Added" "Changed" "Deprecated" "Removed" "Fixed" "Security")
select_option "${options[@]}"
type="${options[$?]}" 

# Jira Ticket
branch=$(git branch --show-current)
if [[ $branch =~ [A-Z]+-[0-9X]+ ]]; then # it seems there is a jira ticket in branch name
    ticket=$(echo $branch | grep -o '[A-Z]\+-[0-9X]\+')
else # ask user to input jira ticket
    read -p "Jira ticket: " 
    ticket=$REPLY
fi

# Description
if [[ -z $description ]]; then
    description=$(git show -s --format=%s)
fi

# Change type
echo "✨ Tipo da mudança(utilize a tecla espaço para selecionar):"
multiselect change_type "- Bug fix (Correção de um problema sem efeito colateral);- New feature (Adiciona uma nova funcionalidade sem efeito colateral no código);- Breaking change (Correção ou recurso que faria com que alguma funcionalidade existente não funcionasse como esperado);- Code refactor (Melhorias de código) "


# Squad
read -p "✨ Squad: "
squad=$REPLY

# Join title
title="$app - $type($squad): [$ticket] $description"
echo "\n$title\n"

# Checklist
echo "✨ Checklist:\n"
CHECKLIST=("- [ ] Arquitetura **\`VIP-C\`** (Componentes com suas devidas responsabilidades)"\
           "- [ ] **Testes** no \`Interactor\`, \`Presenter\` e outros objetos com lógica"\
           "- [ ] Utilizar **\`final class\`** sempre que possível"\
           "- [ ] Utilizar **\`Design System\`** sempre que possível"\
           "- [ ] **Retain cycle/memory leak**"\
           "- [ ] Nomes de variáveis, funções ou tipos **bem descritivos**"\
           "- [ ] Campo **'feature flag' na descrição do PR** ou explicação da ausência de uma"\
           "- [ ] **Lógica e ações finalizados**(não possuir: action vazia, init vazio, TODO)\n  - Caso esteja incompleto, precisa estar coberto por 'feature flag' e explicitá-la na descrição do PR"\            "- [ ] **Reutilização de objetos e funções** que já existente em outros módulos em vez de duplicá-los"\
           "- [ ] Objetos e funções **sem responsabilidades demais**"\
           "- [ ] **Controle de acesso**(\`private\` > \`internal\` > \`public\`)"\
           "- [ ] Toda String a ser exibida ao usuário no **Localizable.strings**"\
           "- [ ] Evitar uso de múltiplos **\`if else\`/\`guard\` encadeados**"\
           "- [ ] NÃO utilizar **\`force unwrap\`/\`fatalError\`**"
        )

formatted_checklist=""
for item in "${CHECKLIST[@]}"
do
    echo $item
    formatted_item=""
    
    options=("Sim" "Não")
    select_option "${options[@]}"
    current_response="${options[$?]}"

    while [[ $current_response != "Sim" && $current_response != "Não" ]]; do
        printf "\n"
        select_option "${options[@]}"
        current_response="${options[$?]}"
        printf "\n"
    done

    if [[ $current_response == "Sim" ]]; then
        echo ✅
        # `- []` to `- [x]`
        formatted_item+="- [x${item:4}"
        printf "\n"
    else
        echo ❌
        formatted_item+=$item
        printf "\n"
    fi


    formatted_checklist+="$formatted_item\n"
done

# read template and replace with information given above
while IFS= read -r line
do 
    case $line in
        \[commit_message\]) echo $description >> $output ;;
        \[change_type\]) ( IFS=$'\n'; echo "${change_type[*]}") >> $output ;;
        \[feature_flags\]) echo $feature_flags >> $output ;;
        \[no_flags\]) echo $no_flags >> $output ;;
        \[checklist_items\]) echo $formatted_checklist >> $output ;;
        *) echo "$line" >> $output ;;
    esac
done < "$input"

# Open pull request with gh CLI
gh pr create --title "$title" --base $base_branch --body-file $output --web

# remove temp output file
rm -rf $output
