@echo off
setlocal enabledelayedexpansion
title Ultra V
chcp 65001 >nul
cd /d %~dp0

echo ================================================
echo                  Ultra V
echo  Subindo backend + frontend numa janela so
echo ================================================
echo.

REM ---- Localiza um JDK 17+ se o java do PATH for antigo ou nao existir
where java >nul 2>&1
set "javaOk="
if not errorlevel 1 (
    for /f "tokens=2 delims==" %%v in ('java -fullversion 2^>^&1 ^| findstr /i "version"') do set "JAVA_FULL=%%v"
)

if not "%JAVA_HOME%"=="" goto :javaReady

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
            goto :javaReady
        )
    )
)

:javaReady
if not "%JAVA_HOME%"=="" (
    set "PATH=%JAVA_HOME%\bin;%PATH%"
    echo [OK] JAVA_HOME = %JAVA_HOME%
)

REM ---- Instala dependencias (1a vez apenas) ----------------------------
if not exist node_modules (
    echo.
    echo [1/2] Instalando dependencias da raiz e do frontend...
    call npm install --no-audit --no-fund
    if errorlevel 1 goto :fail
)

REM ---- Sobe back e front numa janela so com concurrently ---------------
echo.
echo [2/2] Subindo backend e frontend (Ctrl+C para parar tudo)...
echo.
echo ================================================
echo  Backend:  http://localhost:8080
echo  Frontend: http://localhost:3000
echo ================================================
echo.
call npm start

goto :end

:fail
echo.
echo [ERRO] Falha ao instalar dependencias. Verifique se voce tem
echo Node.js 18+ e JDK 17+ instalados.
pause
exit /b 1

:end
pause
