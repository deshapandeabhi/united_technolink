<?php
require __DIR__ . '/session.php';

admin_session_start();

$_SESSION = [];
$params = session_get_cookie_params();
setcookie(
    session_name(),
    '',
    time() - 42000,
    $params['path'],
    $params['domain'],
    $params['secure'],
    $params['httponly']
);
session_destroy();

header('Content-Type: application/json');
echo json_encode(['ok' => true]);
