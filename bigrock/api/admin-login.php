<?php
require __DIR__ . '/session.php';
require __DIR__ . '/config.php';

admin_session_start();
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$password = (string) ($input['password'] ?? '');

if (!hash_equals(ADMIN_PASSWORD, $password)) {
    http_response_code(401);
    echo json_encode(['error' => 'Incorrect password']);
    exit;
}

$_SESSION['admin'] = true;
echo json_encode(['ok' => true]);
