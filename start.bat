@echo off
setlocal enabledelayedexpansion
title Ultra V - Iniciador
chcp 65001 >nul

echo ============================================
echo   Ultra V - subindo back e front
echo ============================================
echo.

REM ---- Localiza um JDK 17+ caso o java do PATH seja antigo --------------
if not "%JAVA_HOME%"=="" goto :javaOk

for %%P in (
  "%ProgramFiles%\JetBrains\IntelliJ IDEA*\jbr"
  "%ProgramFiles%\Eclipse Adoptium\jdk-17*"
  "%ProgramFiles%\Eclipse Adoptium\jdk-21*"
  "%ProgramFiles%\Java\jdk-17*"
  "%ProgramFiles%\Java\jdk-21*"
  "%ProgramFiles%\Microsoft\jdk-17*"
  "%ProgramFiles%\Zulu\zulu-17"
) do (
  for /d %%D in (%%P) do (
    if exist "%%D\bin\java.exe" (
      set "JAVA_HOME=%%D"
      goto :javaOk
    )
  )
)

:javaOk
if not "%JAVA_HOME%"=="" (
  set "PATH=%JAVA_HOME%\bin;%PATH%"
  echo [OK] JAVA_HOME = %JAVA_HOME%
) else (
  echo [AVISO] JAVA_HOME nao definido. Usando o java do PATH.
)

REM ---- Sobe backend e frontend em janelas separadas ---------------------
echo.
echo Iniciando backend (porta 8080)...
start "Ultra V - Backend"  cmd /k "cd /d %~dp0backend && mvnw.cmd spring-boot:run"

echo Iniciando frontend (porta 3000)...
start "Ultra V - Frontend" cmd /k "cd /d %~dp0frontend && (if not exist node_modules npm install) && npm run dev"

echo.
echo ============================================
echo   Backend:  http://localhost:8080
echo   Frontend: http://localhost:3000
echo ============================================
echo.
echo Aguarde uns 30 segundos ate as duas janelas terminarem
echo de subir e abra http://localhost:3000 no navegador.
echo.
echo Para parar, feche as duas janelas que abriram.
echo.
pause
