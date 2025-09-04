<?php
include 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $cpf = $_POST['cpf'];
    $dataNascimento = $_POST['dataNascimento'];
    $endereco = $_POST['endereco'];
    $usuario = $_POST['usuario'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Hash da senha

    // Verifica se o usuário é maior de idade
    $dataAtual = date('Y-m-d');
    $idade = date_diff(date_create($dataNascimento), date_create($dataAtual))->y;

    if ($idade < 18) {
        echo "Cadastro permitido apenas para maiores de idade!";
    } else {
        // Insere no banco
        $sql = "INSERT INTO usuarios (nome, email, cpf, data_nascimento, endereco, usuario, senha) 
                VALUES ('$nome', '$email', '$cpf', '$dataNascimento', '$endereco', '$usuario', '$senha')";

        if ($conn->query($sql)) {
            header('Location: login.php'); // Redireciona para o login
            exit;
        } else {
            echo "Erro: " . $conn->error;
        }
    }
}
?>