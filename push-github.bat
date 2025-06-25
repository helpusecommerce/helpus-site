@echo off
cd /d "D:\Documents\OneDrive\Wagner\EUA\Empresa\helpus llc\Desenvolvimento\GitHub\helpus-site"
echo Adicionando arquivos modificados...
git add .
echo Criando commit...
git commit -m "Atualizacao automatica"
echo Enviando para o GitHub...
git push origin main
echo.
echo ✅ Codigo enviado com sucesso!
pause
