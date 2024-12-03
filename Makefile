all: build run

build:
	javac -d bin Main.java
	javac -d bin aulas/Aula20.java
	javac -d bin libs/*.java

run:
	@java -cp bin Main

clear:
	rm bin/Main.class

git:
	@echo "=== Configuraçõe para Git ==="
	@bash -c ' read -p "Email: " EMAIL; git config --global user.email $$EMAIL '
	@bash -c ' read -p "Nome: "  NOME ; git config --global user.name  $$NOME  '